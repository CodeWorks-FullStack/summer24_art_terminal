<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import { projectsService } from '../services/ProjectsService.js';

const profile = computed(() => AppState.profile)

const profileCoverImg = computed(() => `url(${profile.value?.coverImg})`)

const route = useRoute()

onMounted(() => {
  const profileId = route.params.profileId // gets our parameter out of the URL
  getProfileById(profileId) // pass down the id from the URL as an argument
  getProjectsByProfileId(profileId)
})

async function getProfileById(profileId) {
  try {
    await profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.error(error)
  }
}

async function getProjectsByProfileId(profileId) {
  try {
    await projectsService.getProjectsByProfileId(profileId)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <!-- NOTE if there is a profile in the appstate, render the HTML for it -->
  <!-- NOTE because this property is null on page load, we have to do this check -->
  <div v-if="profile" class="container">
    <section class="row">
      <div class="col-12 my-3">
        <div class="text-center cover-img">
          <div>
            <img :src="profile.picture" :alt="profile.name" class="profile-img">
            <!-- NOTE only apply the font class if the profile has graduated -->
            <h1 :class="{ 'playwrite-fr-trad-art-school-grad': profile.graduated }">
              {{ profile.name }}
              <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">
                <i class="mdi mdi-linkedin"></i>
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div class="col-12">
        <p>{{ profile.bio }}</p>
      </div>
    </section>
  </div>
  <div v-else class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Loading.... <i class="mdi mdi-loading mdi-spin"></i></h1>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+FR+Trad:wght@100..400&display=swap');

h1 {
  text-shadow: 1px 1px black;
}

.profile-img {
  height: 30vh;
}

.cover-img {
  height: 60vh;
  background-image: v-bind(profileCoverImg);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 400

.playwrite-fr-trad-art-school-grad {
  font-family: "Playwrite FR Trad", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>