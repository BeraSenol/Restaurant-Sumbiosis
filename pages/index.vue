<template>
  <main>
    <LandingSection source="index-landing.jpg" title="Sumbiosis" subtitle="The art of living together"/>
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
