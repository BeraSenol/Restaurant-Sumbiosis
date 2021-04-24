<template>
  <div class="flx-center">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
    props: [
        "title"
    ]
}
</script>

<style scoped>
div {
    width: 100%;
    background-color: var(--bg);
    height: 200px;
}

h1 {
    font-family: Great-Vibes;
    color: var(--gold);
    font-size: 4rem;
}
</style>