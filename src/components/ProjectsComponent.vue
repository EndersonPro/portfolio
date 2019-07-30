<template>
  <div class="projects">
    <div class="container">
      <ProjectComponent
        :key="i"
        v-for="(project, i) in projects"
        :title="project.title"
        :url="project.url"
        :imagen="project.imagen != null ? require(`../assets/${project.imagen}`) : null"
        :description="project.description"
        :technologies="project.technologies"
      />
    </div>
  </div>
</template>
<script>
import ProjectComponent from "./ProjectComponent";
import projectsJson from "../util/projects.json";

export default {
  name: "projects",
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    this.projects = projectsJson;
  },
  components: {
    ProjectComponent
  }
};
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   height: 100vh;
  background-color: #699e4d;
  .container {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: {
      top: 3em;
      bottom: 3em;
    }
    //   margin: 0 auto;
    // background-color: red;
    // height: 50vh;
    div {
      margin: {
        bottom: 1em;
      }
    }
  }
}

@media (min-width: 950px) {
  .projects {
    // justify-content: space-between;
    // flex-direction: row !important;
    // align-items: flex-start;
    .container {
      flex-direction: row;
      justify-content: space-between;
      div {
        max-width: 49.1%;
      }
    }
  }
}
</style>

