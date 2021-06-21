
  
<template>
  <div>
    <LandingSection
      source="blog.jpg"
      :title="$t('landing.title.blog')"
      :subtitle="$t('landing.subtitle.blog')"
    />
    <GoldenHorizontalRule />
    <b-container id="blog-container">
      <b-row class="py-4 text-center">
        <b-col cols="4" v-for="post of posts" :key="post.slug">
          <NuxtLink :to="post.slug">{{ post.title }} abc</NuxtLink>
        </b-col>
      </b-row>
    </b-container>
    <GoldenHorizontalRule />
    <GoldenHorizontalRule />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Blog",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
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

a {
  color: var(--text-color);
  transition: var(--transition-color);
}

a:link {
  color: var(--text-color);
}

a:visited {
  color: var(--text-color);
}

a:hover {
  color: var(--gold);
  text-decoration: none;
  transition: var(--transition-color);
}

a:active {
  color: var(--gold);
}
</style>