<template>
  <LandingSection
    source="reservation-landing.jpg"
    title="Reservations"
    subtitle="Carve your name in our journey"
  />
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