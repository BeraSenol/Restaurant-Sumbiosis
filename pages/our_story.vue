<template>
  <div>
    <LandingSection
      source="our-story.jpg"
      :title="$t('landing.title.our_story')"
      :subtitle="$t('landing.subtitle.our_story')"
    />
    <GoldenHorizontalRule />

    <OurStoryIndex />
    <GoldenHorizontalRule />
    <Services />
    <GoldenHorizontalRule />
    <Chefs />
    <GoldenHorizontalRule />
    <GoldenHorizontalRule />
  </div>
</template>

<script>
import Services from "../components/Services.vue";
export default {
  components: { Services },
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