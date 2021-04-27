<template>
  <main>
    <LandingSectionIndex source="index.jpg" title="Sumbiosis" :subtitle="$t('landing.subtitle.home')"/>
    <GoldenHorizontalRule/>
    <IndexSeperation :title="$t('seperation.home.menu')"/>
    <GoldenHorizontalRule/>
    <MenuCarousel/>
    <GoldenHorizontalRule/>
    <IndexSeperation :title="$t('seperation.home.menu')"/>

  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Sumbiosis",
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
