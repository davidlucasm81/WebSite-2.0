<template>
  <header>
    <a href="#header">
      <img src="https://i.ibb.co/WGBRrRd/flecha-Arriba.png" class="button__up" />
    </a>
    <section id="header" class="header">
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/647/149/non_2x/vector-map-pointer-wrench-icon.jpg"
        class="image__logo"
        alt="icon"
        width="110"
        h="110"
      />
      <a href="#Portafolio">Portfolio</a>
      <a href="#techDiv">Tecnologías</a>
      <a href="#study">Estudios</a>
      <a href="#cursos">Cursos</a>
      <span>
        <a href="#footer">Contacto</a>
      </span>
    </section>
    <section class="header__info">
      <h1>
        <strong>David Lucas Mora</strong>
      </h1>
      <h1>
        Estudiante de
        <strong>Ingeniería Informática</strong>
      </h1>
      <h2>"Aprendiendo cada día"</h2>
    </section>
  </header>
</template>

<style scoped>
@keyframes arriba {
  0% {
    top: -100vh;
  }
  100% {
    top: 0;
  }
}
@keyframes derecha {
  0% {
    right: -100vw;
  }
  100% {
    right: 0;
  }
}
@keyframes abajo {
  0% {
    bottom: -100vh;
  }
  100% {
    bottom: 15px;
  }
}

.button__up {
  width: 13vw;
  height: 13vw;
  position: absolute;
  bottom: 15px;
  left: 15px;
  position: fixed;
  visibility: hidden;
}
.header,
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.header {
  position: relative;
  animation-name: arriba;
  animation-duration: 1.75s;
  animation-fill-mode: forwards;

  max-width: 90vw;
  width: 100%;
  margin: 10px;
  padding: 20px;
  word-spacing: 150px;
  font-size: 50px;
}
.header__info {
  position: relative;
  animation-name: derecha;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  max-width: 670px;
  width: 100%;
  padding: 5px;
  margin: 5px;
  margin-top: -11px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.header,
.header__info {
  background: #231f20;
  border-color: #414141;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
}
.header a {
  border-width: 1px;
  border-radius: 10px;
  border-color: #3d3d40;
  border-style: solid;
  padding: 3px;
  margin: 5px;
  margin-top: 10px;
}
.header span {
  margin: 5px;
  margin-top: 10px;
}
@media screen and (max-width: 767px) {
  .button__up {
    visibility: visible;
    z-index: 1;
    animation-name: abajo;
    animation-duration: 6s;
  }
  .image__logo {
    padding-bottom: 0px;
    padding-top: 10px;
  }
}
@media screen and (max-width: 767px) {
  .image__logo {
    padding-bottom: 10px;
  }
  .header {
    width: 90vw;
    height: auto;
    display: block;
    padding: 0px;
  }
  .header__info {
    max-width: 80vw;
  }
  .header a {
    margin: 0px;
    margin-left: -1px;
    margin-right: -1px;
    border-width: 0.5px;
    height: auto;
    display: block;
    text-align: center;
    padding: 0;
    border-radius: 0px;
  }
  .header span {
    margin: 0px;
  }
  .header span a {
    border: none;
  }
}
@media screen and (max-width: 311px) {
  a,
  h1,
  h2 {
    font-size: 40px;
  }
}
</style>