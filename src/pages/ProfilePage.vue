<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';

const profile = computed(() => AppState.profile)

const profileCoverImg = computed(() => `url(${profile.value?.coverImg})`)

const route = useRoute()

onMounted(() => {
  const profileId = route.params.profileId // gets our parameter out of the URL
  getProfileById(profileId) // pass down the id from the URL as an argument
})

async function getProfileById(profileId) {
  try {
    await profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.error(error)
  }
}
</script>


<template>
  <!-- NOTE if there is a profile in the appstate, render the HTML for it -->
  <!-- NOTE because this property is null on page load, we have to do this check -->
  <div v-if="profile" class="container">
    <section class="row">
      <div class="col-12">
        <div class="text-center cover-img">
          <img :src="profile.picture" :alt="profile.name" class="profile-img">
          <h1>{{ profile.name }}</h1>
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.profile-img {
  height: 35.6vh;
}

.cover-img {
  height: 60vh;
  background-image: v-bind(profileCoverImg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>