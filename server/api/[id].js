import data from "../../data.json"
export default defineEventHandler((event) => {
  return {
    api: data.projects.event.context.params.id
  }
})
