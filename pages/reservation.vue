<template>
  <div>
    <LandingSection
      source="reservation.jpg"
      :title="$t('landing.title.reservation')"
      :subtitle="$t('landing.subtitle.reservation')"
    />
    <GoldenHorizontalRule/>
    <Reserve />
    <GoldenHorizontalRule/>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Reservation",
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