export class Project {
  constructor(data) {
    this.id = data.id || data._id
    this.title = data.title
    this.coverImg = data.coverImg
    this.creatorId = data.creatorId
    this.projectImgs = data.projectImgs
    this.creator = data.creator
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}
