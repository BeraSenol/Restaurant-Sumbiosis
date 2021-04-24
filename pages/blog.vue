<template>
  <LandingSection
    source="blog.jpg"
    :title="$t('landing.title.blog')"
    :subtitle="$t('landing.subtitle.blog')"
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