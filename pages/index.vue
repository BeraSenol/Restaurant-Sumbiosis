<template>
  <main>
    <LandingSectionIndex source="index.jpg" title="Sumbiosis" :subtitle="$t('landing.subtitle.home')"/>
    <GoldenHorizontalRule/>
    <OurStoryIndex/>
    <GoldenHorizontalRule/>
    <MenuCarousel/>
    <GoldenHorizontalRule/>

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
