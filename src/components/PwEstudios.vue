<template>
  <div class="study" id="study">
    <h3 class="element__studies" id="studies">Estudios</h3>
    <section id="Estudios" class="element__studies__articles">
      <article class="studies__articles__first" id="studies__articles__first">
        <a href="https://www.fi.upm.es/?id=gradoingenieriainformatica" target="_blank">
          <img
            src="https://buscatuempleopublico.es/jsjobsdata/data/employer/comp_1119/logo/upm.png"
            width="130"
            height="100"
            alt="Logo UPM"
          />
        </a>
        <h4>Grado en Ingeniería Informática</h4>
        <h5>Universidad Politécnica de Madrid</h5>
        <h6>2018-2022</h6>
      </article>
    </section>
  </div>
</template>
<style scoped>
.element__studies__articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.studies__articles__first {
  background: #3d3d40;
  border-color: #5f5f5f;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;

  margin: 20px;
  transform: scale(0, 0);

  padding: 5px;
}

.element__studies {
  background: #969393;
  border-color: #606064;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px 20px 20px 0px;

  position: relative;
  left: -50vw;
  max-width: 130px;
  width: 100%;
}
</style>