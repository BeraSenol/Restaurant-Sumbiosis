<template>
  <LandingSection
    source="our-story.jpg"
    :title="$t('landing.title.our_story')"

    :subtitle="$t('landing.subtitle.our_story')"
  />
</template>

<script>
export default {
  data() {
    return {
      title: "Our Story",
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