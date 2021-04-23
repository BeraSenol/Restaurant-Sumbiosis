<template>
  <LandingSection
    source="contact-landing.jpg"
    title="Contact Us"
    subtitle="Criticism is just spicy feedback"
  />
</template>

<script>
export default {
  data() {
    return {
      title: "Contact",
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