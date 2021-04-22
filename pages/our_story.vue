<template>
  <p>{{ title }}</p>
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