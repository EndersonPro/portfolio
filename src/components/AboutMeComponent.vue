<template>
  <div class="about-me">
    <div class="description">
      <p>Soy un desarrollador web y de aplicaciones moviles autodidacta de 21 años, vivo en Ciénaga, Magdalena Colombia.</p>
      <br />
      <p>He trabajado con algunas agencias y algunas personas a lo largo de este tiempo que me he desempeñado como Freelancer.</p>
      <br />
      <p>Mi pasión es el desarrollo de aplicaciones web, mis habilidades principales son, Javascript, PHP, HTML y CSS.</p>
      <br />
      <p>¿Quiere saber más? escríbeme</p>
      <a href="mailto:enjaviga@gmail.com">enjaviga@gmail.com</a>
      <br />
      <p>Sigueme en:</p>
      <li>
        <ul>
          <a href="#">
            <font-awesome-icon :icon="['fab','github']" />
          </a>
        </ul>
        <ul>
          <a href="#">
            <font-awesome-icon :icon="['fab','gitlab']" />
          </a>
        </ul>
        <ul>
          <a href="#">
              <font-awesome-icon :icon="['fab','twitter']" />
          </a>
        </ul>
      </li>
    </div>
    <div class="profile">
      <img src="@/assets/profile2.png" alt="Enderson Vizcaino" />
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutMeComponent"
};
</script>


<style lang="scss" scoped>
.about-me {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 2em 0 2em 0;
  img {
    max-width: 100%;
    border-radius: 10px;
  }
  .description {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    p {
      text-align: start;
      font-size: 16px;
    }
    a {
      //   text-decoration: none;
      color: #2c3e50;
      text-align: start;
    }
    li{
        display: flex;
        padding: 1em;
        // width: 30%;
        // background-color: red;
        // justify-content: space-between;
        ul{
            a{
                font-size: 25px;
                margin-right: 1em;
                color: rgba(44, 62, 80,.8);
            }
        }
    }
  }
  .profile {
    width: 50%;
    margin-bottom: 20px;
    //   max-width: 40%;
  }
}

@media (min-width: 564px) {
  .about-me {
    margin: 0 auto;
    display: flex;
    flex-direction: row !important;
    .description {
      display: flex;
      width: 70%;
      padding-right: 20%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
}
</style>
