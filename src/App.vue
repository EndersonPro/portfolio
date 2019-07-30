<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <FirstComponent />
    <AboutMeComponent id="sobremi" />
    <ProjectsComponent id="trabajos" />

    <footer>
      <p>Enderson Vizcaino</p>
      <p>
        <a href="mailto:enjaviga@gmail.com">enjaviga@gmail.com</a>
      </p>
      <div>
        <li>
          <ul>
            <a href="https://github.com/EndersonPro" target="_blank">
              <font-awesome-icon :icon="['fab','github']" />
            </a>
          </ul>
          <ul>
            <a href="https://gitlab.com/EndersonPro" target="_blank">
              <font-awesome-icon :icon="['fab','gitlab']" />
            </a>
          </ul>
          <ul>
            <a href="https://twitter.com/Endersonj_" target="_blank">
              <font-awesome-icon :icon="['fab','twitter']" />
            </a>
          </ul>
        </li>
      </div>
    </footer>
  </div>
</template>
<script>
import FirstComponent from "@/components/FirstComponent";
import AboutMeComponent from "@/components/AboutMeComponent";
import ProjectsComponent from "@/components/ProjectsComponent";

export default {
  components: {
    FirstComponent,
    AboutMeComponent,
    ProjectsComponent
  }
};
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

footer {
  padding: 0.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0b0b0d;
  color: rgba(255, 255, 255, 0.8);

  p {
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
    }
    &:nth-child(1) {
      padding-left: 1.8em;
    }
  }

  li {
    display: flex;
    padding: {
      left: 1em;
    }
    // width: 30%;
    // background-color: red;
    // justify-content: space-between;
    ul {
      a {
        font-size: 25px;
        margin-right: 1em;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}

@media (max-width: 525px) {
  footer {
    justify-content: center;
    li,
    p:nth-child(2) {
      display: none;
    }
  }
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
