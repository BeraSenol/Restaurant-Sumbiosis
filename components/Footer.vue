<template>
  <footer>
    <ul>
      <li
        v-for="color in colors"
        :key="color"
        @click="$colorMode.preference = color"
      >
        {{ color }}
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>