import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Project.js').Project[]} */
  projects: [],
  /** @type {import('./models/Profile.js').Profile} */
  profile: null,
  /** @type {import('./models/Project.js').Project[]} */
  profileProjects: [],
  /** @type {import('./models/Project.js').Project} */
  activeProject: null
})