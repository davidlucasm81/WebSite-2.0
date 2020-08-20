<template>
  <footer class="footer" id="footer">
    <section class="RRSS">
      <a href="mailto:davidlucasmora81@gmail.com" target="_blank">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/1024px-Gmail_Icon.svg.png"
          class="imMAIL"
          width="130"
          height="100"
          alt="Mail"
        />
      </a>
      <a href="https://twitter.com/davidlucasm81" target="_blank">
        <img
          src="https://image.flaticon.com/icons/svg/60/60580.svg"
          class="imRRSS"
          width="100"
          height="100"
          alt="Twitter"
        />
      </a>
      <a href="https://www.linkedin.com/in/david-lucas-b04a91188/" target="_blank">
        <img
          src="https://image.flaticon.com/icons/png/512/61/61109.png"
          class="imRRSS"
          width="100"
          height="100"
          alt="LinkedIn"
        />
      </a>
      <a href="https://github.com/davidlucasm81" target="_blank">
        <img
          src="https://image.flaticon.com/icons/png/512/38/38401.png"
          class="imRRSS"
          width="100"
          height="100"
          alt="GitHub"
        />
      </a>
    </section>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border-color: #5f5f5f;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  background: #837e7f;
  text-align: left;
  vertical-align: central;
}
.RRSS img {
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
@media screen and (max-width: 545px) {
  .imMAIL {
    width: 85px;
    height: 65px;
  }
  .imRRSS {
    width: 65px;
    height: 65px;
  }
}
@media screen and (max-width: 384px) {
  .RRSS img {
    max-width: 15vw;
    max-height: 15vw;
  }
}
</style>
