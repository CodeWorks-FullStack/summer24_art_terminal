import { AppState } from "../AppState.js"
import { Project } from "../models/Project.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProjectsService {
  async getProjectsByProfileId(profileId) {
    AppState.profileProjects = []

    const response = await api.get(`api/projects?creatorId=${profileId}`)
    logger.log('GOT PROJECTS BY PROFILE ID🕴️🖼️🖼️🖼️', response.data)
    const projects = response.data.map(projectPOJO => new Project(projectPOJO))
    AppState.profileProjects = projects
  }
  async getProjects() {
    const response = await api.get('api/projects')
    logger.log('GOT PROJECTS 🖼️🎨🎭', response.data)
    const projects = response.data.map(projectPOJO => new Project(projectPOJO))
    AppState.projects = projects
  }

}

export const projectsService = new ProjectsService()