<template>
  <main>
    <LandingSection source="index.jpg" title="Sumbiosis" :subtitle="$t('landing.subtitle.home')"/>
    <GoldenHorizontalRule/>
    <IndexSeperation title="Menu Highlights"/>
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
