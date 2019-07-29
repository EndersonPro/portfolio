<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <FirstComponent/>
    <AboutMeComponent id="sobremi"/>
    <ProjectsComponent id="trabajos"/>

    <footer>
        <p>
          Enderson Vizcaino
        </p>
    </footer>
  </div>
</template>
<script>
 import FirstComponent from '@/components/FirstComponent'
 import AboutMeComponent from '@/components/AboutMeComponent'
 import ProjectsComponent from '@/components/ProjectsComponent'



export default {
  components:{
    FirstComponent,
    AboutMeComponent,
    ProjectsComponent
  }
}
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
/**
  Colores Principal para toda la app
  #699e4d
  #558446
  #3c5a33
  #42453b
*/

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

footer{
  padding: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#0B0B0D;
  color: rgba(255,255,255,.8);
}




#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 397px;
  color: #2c3e50;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
