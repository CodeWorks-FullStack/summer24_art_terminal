<script setup>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';

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
  <h1>Profile Page</h1>
</template>


<style lang="scss" scoped></style>