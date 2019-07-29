<template>
  <div class="card">
    <div class="imgBx" v-bind:style="styleImg">
      <img src="../assets/gir.jpg" alt />
    </div>
    <input type="checkbox" name id />
    <div class="toggle">+</div>
    <div class="content">
      <div class="text">
        <h3>{{ title | capitalize }}</h3>
        <p>{{ description | capitalize }}</p>
        <span class="technologies">
          <img
            :src="icon(technology)"
            :key="technology"
            v-for="technology in technologies"
            :alt="technology"
          />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { icons } from "../util/icons";
import gir from "../assets/gir.jpg";

export default {
  name: "ProjectComponent",
  data() {
    return {
      styleImg: {
        backgroundImage: gir
      }
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    technologies: {
      type: Array,
      required: true
    }
  },
  methods: {
    icon(name) {
      let iconName = name.toLowerCase();
      return icons[iconName];
    }
  },
  filters: {
    capitalize(value) {
      if (typeof value !== "string") return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
<style lang="scss" scoped>
@media (min-width: 724px) {
  .card {
    height: 27vh !important;
  }
}

.card {
  position: relative;
  width: 100%;
  height: 35vh;
  background: {
    color: white;
  }
  .imgBx {
    width: 100%;
    height: 100%;
    // height: auto;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }
    background: {
      //   image: url("../assets/gir.jpg");
      repeat: no-repeat;
      size: cover;
    }
  }

  @supports (object-fit: cover) {
    .imgBx img {
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  input,
  .toggle {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
    outline: none;
    z-index: 10;
  }
  input {
    opacity: 0;
  }
  .toggle {
    pointer-events: none;
    border-radius: 50%;
    background-color: #9c27b0;
    transition: 0.5s;
    text-align: center;
    line-height: 40px;
    font-size: 36px;
    color: white;
    box-shadow: 0 0 0 0px #9c27b0;
  }
  .content {
    opacity: 0;
    padding: 1em;
    transition: 0.7s;
    height: 100%;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    .text {
      //   position: relative;
      h3 {
        color: white;
        margin-bottom: 0.5em;
      }
      p {
        // width: 100px;
        // width: 100%;
        // max-width: 100%;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
      }
      .technologies {
        position: absolute;
        bottom: 20px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font: {
          style: italic;
          size: 12px;
        }
        img {
          // width: 25px;
          height: 20px;
          margin-right: 0.5em;
          // background-color: red;
        }
        // left: 20px;
      }
    }
  }
  input:checked ~ .toggle {
    z-index: 10;
    box-shadow: 0 0 0 10px rgba(156, 39, 176, 0.5);
    transform: rotate(225deg);
  }
  input:checked ~ .content {
    opacity: 1;
    background-color: #2c3e50;
    transition: 0.7s;
    p {
      color: white;
    }

    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

