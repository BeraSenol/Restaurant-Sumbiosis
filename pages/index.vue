<template>
  <main>
    <LandingSectionIndex
      source="index.jpg"
      title="Sumbiosis"
      :subtitle="$t('landing.subtitle.home')"
    />
    <GoldenHorizontalRule />
    <OurStoryIndex />
    <GoldenHorizontalRule />
    <IndexSeperation
      :title="$t('seperation.home.menu_title')"
      :subtitle="$t('seperation.home.menu_subtitle')"
    />
    <GoldenHorizontalRule />
    <MenuCarousel />
    <GoldenHorizontalRule />
    <Services/>
    <GoldenHorizontalRule />

    <Chefs />
    <GoldenHorizontalRule />
    <Contact />
    
    <GoldenHorizontalRule/>
    <GoldenHorizontalRule />
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
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    };
  },
};
</script>

<style scoped>
</style>
