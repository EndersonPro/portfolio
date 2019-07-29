<template>
    <div class="main-view">
      <div class="container">
        <div class="nav">
          <li>
            <ul>
              <a href="#">Sobre mi</a>
            </ul>
            <ul>
              <a href="#">Trabajos</a>
            </ul>
            <ul>
              <a href="#">Contactame</a>
            </ul>
          </li>
        </div>
        <div class="greeting">
          <code>
            <span>&lt;head&gt;</span>Hey,todo bien?<span>&lt;/head&gt;</span></code>
          <p>Yo soy Enderson,</p>
          <p>un desarrollador web</p>
          <div class="buttons">
            <a href="#">Contactame</a>
            <a href="#">Sobre Mi</a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'FirstComponent'
}
</script>


<style lang="scss" scoped>
$padding: 0.9em;
$heightMain: 80vh;
$complementaryColor:#4d699e;
$otherColor: #8a2e2e;

.main-view {
  display: flex;
  height: $heightMain;
  justify-content: center;
  background: {
    // color: #699e4d;
    repeat: no-repeat;
    size: cover;
    // background-blend-mode: ce
    // attachment: fixed;
    image: url(".././assets/bg.png");
  }
  &:after {
    content: "";
    width: 100%;
    position: absolute;
    background-color: rgba(105, 158, 77, 0.9);
    height: $heightMain;
    z-index: 1;
  }
  .container {
    z-index: 2;
    width: 80%;
    margin-top: .5em;
    height: $heightMain;
    // max-height: 100vh;
    box-sizing: border-box;
    .nav {
      // display: flex;
      display: none;
      // visibility: hidden;
      justify-content: flex-end;
      li {
        list-style-type: none;
        display: flex;
        ul {
          padding: $padding;
          a {
            text-decoration: none;
            color: white;
          }
          &:nth-child(3){
            border: 2px solid white;
            border-radius: 7px;
          }
        }
      }
    }
    .greeting {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      code {
        font-size: 1.5em;
        color: white;
        font-weight: 600;
        span {
          color: $complementaryColor;
        }
      }
      p {
        color: white;
        font-size: 3em;
        font-weight: 600;
        text-transform: capitalize;
      }
      background: {
        // color: red;
      }

      .buttons{
        display: flex;
        margin-top: 2em;
        // background-color: red;
        justify-content: space-between;
        width: 20em;
        text-align: center;
        a{
          padding: $padding $padding;
          // height: ;
          margin: 0;
          width: 9em;
          text-decoration: none;
          color: white;
          &:nth-child(1){
            // border: 1px solid red;
            border-radius: 7px;
            background-color: $complementaryColor;
            // margin-right: 1.5em;
          }
          &:nth-child(2){
            // margin-left: 1.5em;
            border: 2px solid white;
            border-radius: 7px;
          }
        }

      }
      // margin:  0;
      height: 90%;
    }
  }
}

@media (min-width: 420px) {
  .nav{
    // visibility: initial;
      display: flex !important;
  }
}
</style>

