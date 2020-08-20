<template>
  <h3 class="element__portafolio" id="Portafolio">Portfolio</h3>
  <section class="element__portafolio__articles">
    <article class="articles__small">
      <h4>David Lucas Web 2.0</h4>
      <h5>
        ¡Esta misma Página Web! Es la versión 2.0 de la primera web. Esta
        versión está hecha usando la tecnología Vue.js. Además, incorpora
        mejoras con respecto a la UX y legibilidad de código.
      </h5>
      <h6>Vue.js</h6>
      <p>
        <strong>Fecha</strong> 19/08/2020
      </p>
      <img
        src="https://es.vuejs.org/images/logo.png"
        class="image__small"
        alt="Imagen Web"
        width="300"
        height="300"
      />
      <p>
        <strong>
          Puedes ver el código fuente
          <a
            href="https://github.com/davidlucasm81/WebSite-2.0"
            target="_blank"
          >aqui</a>
        </strong>
      </p>
    </article>
    <article class="articles__small">
      <h4>David Lucas Web</h4>
      <h5>
        ¡Primera versión de la Web! Donde puedes ver mi portfolio, mis estudios
        y cursos tomados, así como las tecnologías en las que estoy interesado.
      </h5>
      <h6>HTML, CSS y JavaScript</h6>
      <p>
        <strong>Fecha</strong> 06/08/2020
      </p>
      <img
        src="https://i.ibb.co/H4ycRmR/Pagina-Web.jpg"
        class="image__small"
        alt="Imagen Web"
        width="400"
        height="488"
      />
      <p>
        <strong>
          Puedes ver el código fuente
          <a
            href="https://github.com/davidlucasm81/WebSite"
            target="_blank"
          >aqui</a>
        </strong>
      </p>
    </article>
    <article class="articles__long">
      <h4>MySqlGest</h4>
      <h5>
        Un gestor de MySql donde puedes tanto realizar las consultas que desees,
        como actualizar la propia base de datos. Incorpora opciones como
        consultar el nombre de las tablas de la Base de datos, sus atributos y
        consultas pasadas.
      </h5>
      <h6>Java</h6>
      <p>
        <strong>Fecha</strong> 04/08/2020
      </p>
      <img
        src="https://i.ibb.co/CJtzFDb/SQL1.jpg"
        class="image__small"
        alt="Primera Imagen MySqlGest"
      />
      <img
        src="https://i.ibb.co/C2M49tQ/SQL2.jpg"
        class="image__long"
        width="560"
        height="450"
        alt="Segunda Imagen MySqlGest"
      />
      <p>
        <strong>
          Puedes verlo
          <a href="https://github.com/davidlucasm81/MySqlGest" target="_blank">aqui</a>
        </strong>
      </p>
    </article>
  </section>
</template>

<style scoped>
@keyframes derecha {
  0% {
    right: -100vw;
  }
  100% {
    right: 0;
  }
}
@keyframes izquierda {
  0% {
    left: -100vw;
  }
  100% {
    left: 0;
  }
}
@keyframes girarDerecha {
  from {
    transform: rotate(0deg) scale(0, 0);
  }
  to {
    transform: rotate(360deg) scale(1, 1);
  }
}
@keyframes girarIzquierda {
  from {
    transform: rotate(360deg) scale(0, 0);
  }

  to {
    transform: rotate(0deg) scale(1, 1);
  }
}
.element__portafolio__articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.element__portafolio {
  background: #969393;
  border-color: #606064;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px 20px 20px 0px;

  margin: 5px;
  max-width: 140px;
  width: 100%;

  position: relative;
  animation-name: izquierda;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
}

.articles__long,
.articles__small {
  background: #3d3d40;
  border-color: #5f5f5f;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
}
.articles__small {
  max-width: 33vw;
  width: 100%;
  border-width: 1px;
  margin: 20px;
  padding: 10px;
  animation-name: girarDerecha, derecha;
  animation-duration: 4s;
}
.articles__long {
  max-width: 50vw;
  width: 100%;
  border-width: 1px;
  margin: 20px;
  padding: 10px;
  animation-name: girarIzquierda, izquierda;
  animation-duration: 4s;
}
.image__small {
  max-width: 23vw;
  max-height: 27vw;
}

.image__long {
  max-width: 33vw;
  max-height: 27vw;
}

.image__small,
.image__long {
  background: #3d3d40;
  border-color: #5f5f5f;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
}

@media screen and (max-width: 1024px) {
  .articles__long,
  .articles__small {
    max-width: 90vw;
    width: 100%;
  }
  .image__small,
  .image__long {
    max-width: 75vw;
    max-height: 75vw;
  }
}
</style>