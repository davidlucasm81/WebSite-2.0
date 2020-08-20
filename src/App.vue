<template>
  <main>
    <pw-header />
    <pw-portfolio />
    <pw-tech />
    <pw-estudios />
    <pw-cursos />
    <pw-footer />
  </main>
</template>
<script>
import PwHeader from "@/components/PwHeader";
import PwPortfolio from "@/components/PwPortfolio";
import PwTech from "@/components/PwTech";
import PwEstudios from "@/components/PwEstudios";
import PwCursos from "@/components/PwCursos";
import PwFooter from "@/components/PwFooter";
export default {
  name: "App",
  components: {
    PwHeader,
    PwPortfolio,
    PwTech,
    PwEstudios,
    PwCursos,
    PwFooter
  }
};
</script>

<style>
body {
  font-family: "Oswald", sans-serif;
  background: #1e1e1e;
  font-weight: 400;
  color: #b6b6b6;
  letter-spacing: -0.1px;
  margin: 10px;
  text-align: center;
}
a {
  color: #eeecec;
  letter-spacing: 0.5px;
  text-decoration: none;
}

h1 strong {
  color: #ffffff;
}

h1 {
  font-size: 40px;
  margin-bottom: 0px;
  margin-top: 0px;
}

h2 {
  color: #e5e5e5;
  font-weight: 400;
  font-size: 35px;
  font-style: italic;
  margin-bottom: 0px;
  margin-top: 0px;
}

h3 {
  color: #f1f1f1;
  font-weight: 400;
  font-size: 40px;
  margin: 0px;
}

h4 {
  color: #ffffff;
  font-weight: 400;
  font-size: 35px;
  margin-bottom: 0px;
  margin-top: 0px;
}

h5 {
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 0px;
  margin-top: 0px;
  color: #dcdcdc;
}

h6 {
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 0px;
  margin-top: 0px;
}

p {
  margin: 4px;
}
</style>
