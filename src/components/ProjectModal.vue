<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

const project = computed(() => AppState.activeProject)
</script>


<template>
  <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div v-if="project" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="projectModalLabel">{{ project.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div v-for="img in project.projectImgs" :key="img" class="col-12">
                <img :src="img" alt="" class="img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>