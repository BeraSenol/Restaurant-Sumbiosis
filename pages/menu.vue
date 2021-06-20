<template>
  <div>
    <LandingSection
      source="menu.jpg"
      :title="$t('landing.title.menu')"
      :subtitle="$t('landing.subtitle.menu')"
    />
    <GoldenHorizontalRule/>
    <IndexSeperation
      :title="$t('seperation.home.menu_title')"
      :subtitle="$t('seperation.home.menu_subtitle')"
    />
    <GoldenHorizontalRule/>
    <MenuCarouselLarge />
    <GoldenHorizontalRule/>
    <Chefs/>
    <GoldenHorizontalRule/>
    <Drinks/>
    <GoldenHorizontalRule/>
    <GoldenHorizontalRule/>

  </div>
</template>

<script>
import Chefs from '../components/Chefs.vue';
export default {
  components: { Chefs },
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