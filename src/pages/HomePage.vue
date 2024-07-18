<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { projectsService } from '../services/ProjectsService.js';
import { AppState } from '../AppState.js';
import ProjectCard from '../components/ProjectCard.vue';

const projects = computed(() => AppState.projects)

onMounted(() => { getProjects() })

async function getProjects() {
  try {
    await projectsService.getProjects()
  } catch (error) {
    Pop.error(error)
  }
}


</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Projects</h1>
      </div>
    </section>
    <section class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4">
        <ProjectCard :projectProp="project" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
