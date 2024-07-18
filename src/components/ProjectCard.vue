<script setup>
import { Project } from '../models/Project.js';

defineProps({
  projectProp: { type: Project, required: true }
})
</script>


<template>
  <div class="card">
    <img :src="projectProp.coverImg" class="card-img-top project-img" :alt="projectProp.title">
    <div class="card-body">
      <h5 class="card-title" :title="`Created on ${projectProp.createdAt.toLocaleString()}`">{{ projectProp.title }}
      </h5>
      <div class="d-flex justify-content-between align-items-center">
        <!-- TODO make this button open the modal -->
        <button class="btn btn-primary">
          <i class="mdi mdi-magnify-plus-outline"></i>
        </button>
        <img :src="projectProp.creator.picture" :alt="projectProp.creator.name" class="creator-img">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.project-img {
  height: 30vh;
  object-fit: cover;
  object-position: center;
}

.creator-img {
  height: 10vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>