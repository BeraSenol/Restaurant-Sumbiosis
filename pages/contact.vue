<template>
  <div>
    <LandingSection
      source="contact.jpg"
      :title="$t('landing.title.contact')"
      :subtitle="$t('landing.subtitle.contact')"
    />
    <GoldenHorizontalRule/>
    <Contact />
    <GoldenHorizontalRule/>
    <GoldenHorizontalRule/>

  </div>
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