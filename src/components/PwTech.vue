<template>
  <div class="techDiv" id="techDiv">
    <h3 id="tech" class="element__tech">Tecnologías</h3>
    <article class="tech__images" id="tech__images">
      <img
        src="https://cdn1.iconfinder.com/data/icons/system-black-circles/512/java-512.png"
        alt="Java"
      />
      <img src="https://image.flaticon.com/icons/svg/28/28826.svg" alt="SQL" />
      <img src="https://img.icons8.com/all/500/python.png" alt="Python" />
      <img
        src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png"
        alt="JavaScript"
      />
      <img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt="Git" />
      <img src="https://dsirtech.com/wp-content/uploads/2019/06/C-Language-icon.png" alt="C" />
      <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.svg" alt="HTML5" />
      <img src="https://icon-library.com/images/css-icon-png/css-icon-png-25.jpg" alt="CSS" />
      <img src="https://icon-library.com/images/node-js-icon/node-js-icon-2.jpg" alt="NodeJS" />
      <img
        src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-3/512/367_Vuejs-512.png"
        alt="VueJS"
      />
    </article>
  </div>
</template>
<style scoped>
.element__tech {
  position: relative;
  left: -50vw;
  margin: 0px;
  max-width: 180px;
  width: 100%;

  background: #969393;
  border-color: #606064;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px 20px 20px 0px;
}
.tech__images img {
  max-width: 150px;
  max-height: 150px;
  width: 100%;
  height: 100%;
  margin: 2px;
}
.tech__images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background: #9d9d9d;
  border-color: #dedede;
  box-sizing: border-box;
  border-width: 2px;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  transform: scale(0, 0);
}
@media screen and (max-width: 768px) {
  .tech__images img {
    max-width: 25vw;
    max-height: 25vw;
    width: 100%;
    height: 100%;
  }
}
</style>