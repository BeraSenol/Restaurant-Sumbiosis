<template>
  <p>{{ title }}</p>
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