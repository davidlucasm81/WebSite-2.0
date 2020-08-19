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