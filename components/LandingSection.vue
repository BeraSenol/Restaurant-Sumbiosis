<template>
  <div class="image-container">
    <b-img fluid :src="require(`~/static/images/landing-section/${source}`)" />
    <div class="text-container dark-radial-overlay full-width">
      <h1>{{title}}</h1>
      <!-- <hr/> -->
      <h5>{{subtitle}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["source", "title", "subtitle"],
};
</script>

<style scoped>
h1 {
  font-size: 8rem;
  line-height: 1;
  font-family: Great-Vibes;
  color: var(--gold);
}

h5 {
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 1;
  color: white;
}

.image-container {
  position: relative;
  text-align: center;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>