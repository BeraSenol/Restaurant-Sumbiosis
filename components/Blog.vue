<template>
  <b-container id="blog-container" fluid>
    <div>
      <div v-for="post of posts" :key="post.slug">
        <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};
</script>

<style scoped>
#blog-container {
  min-height: 100px;
}
</style>