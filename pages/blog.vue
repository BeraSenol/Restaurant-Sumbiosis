<template>
  <LandingSection
    source="blog-landing.jpg"
    title="The Blog"
    subtitle="Variation is the spice of life"
  />
</template>

<script>
export default {
  data() {
    return {
      title: "Blog",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style>
</style>