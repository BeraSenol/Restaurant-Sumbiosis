<template>
  <LandingSection
    source="reservation.jpg"
    title="Reservations"
    :subtitle="$t('landing.subtitle.reservation')"
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