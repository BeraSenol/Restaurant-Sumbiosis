<template>
      <LandingSection source="menu.jpg" title="The Menu" :subtitle="$t('landing.subtitle.menu')"/>
</template>

<script>
export default {
  data() {
    return {
      title: "Menu",
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