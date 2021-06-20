
  
<template>
  <div>
    <LandingSection
      source="blog.jpg"
      :title="$t('landing.title.blog')"
      :subtitle="$t('landing.subtitle.blog')"
    />
    <div>
      <h2>{{ post.title }}</h2>
      <nuxt-content :document="post" />
    </div>
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
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>

<style>
</style>