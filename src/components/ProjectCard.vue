<script setup>
import { Project } from '../models/Project.js';
import { projectsService } from '../services/ProjectsService.js';

// NOTE if you want access to prop values in your script, set defineProps to a variable
const props = defineProps({
  projectProp: { type: Project, required: true }
})

function setActiveProject() {
  // NOTE pulls the project object out of props
  projectsService.setActiveProject(props.projectProp)
}
</script>


<template>
  <div class="card">
    <img :src="projectProp.coverImg" class="card-img-top project-img" :alt="projectProp.title">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h5 class="card-title" :title="`Created on ${projectProp.createdAt.toLocaleString()}`">
            {{ projectProp.title }}
          </h5>
          <!-- TODO make this button open the modal -->
          <button @click="setActiveProject()" class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#projectModal">
            <i class="mdi mdi-magnify-plus-outline"></i>
          </button>
        </div>
        <RouterLink :to="{ name: 'Profile', params: { profileId: projectProp.creatorId } }"
          :title="`Go to ${projectProp.creator.name}'s profile page`">
          <img :src="projectProp.creator.picture" :alt="projectProp.creator.name" class="creator-img">
        </RouterLink>
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