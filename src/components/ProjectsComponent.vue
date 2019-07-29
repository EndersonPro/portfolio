<template>
  <div class="projects">
    <div class="container">
      <ProjectComponent
        title="Gir Web"
        description="Es un proyecto realizado para la agencia JQAgencia. La web permite la gestión de recursos: Personal y equipos, programación de mantenimientos y notificaciones automática etc."
        :technologies="['PHP','Angular','Laravel', 'ngrx']"
      />
      <ProjectComponent
        title="Gir App"
        description="Es un proyecto realizado para la agencia JQAgencia. La aplicacion movil permite la gestión de recursos: Personal y equipos, programación de mantenimientos y notificaciones automática etc."
        :technologies="['ionic','ngrx','php','angular', 'laravel']"
        />
      <ProjectComponent
        title="titulo 3"
        description="breve descripcion que no debe ser muy larga para cada proyecto y asi ocupar buen espacio"
        :technologies="['react','LaRaVel']"
      />
      <ProjectComponent
        title="titulo 3"
        description="breve descripcion que no debe ser muy larga para cada proyecto y asi ocupar buen espacio"
        :technologies="['angular']"
      />
    </div>
  </div>
</template>
<script>
import ProjectComponent from "./ProjectComponent";

export default {
  name: "projects",
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

