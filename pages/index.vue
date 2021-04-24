<template>
  <main>
    <LandingSection source="index.jpg" title="Sumbiosis" :subtitle="$t('landing.subtitle.home')"/>
    <GoldenHorizontalRule/>
    <IndexSeperation :title="$t('seperation.home.menu')"/>
    <GoldenHorizontalRule/>

    <MenuCarousel/>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Home - Sumbiosis",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style scoped>

</style>
