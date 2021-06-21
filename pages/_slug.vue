<template>
  <div>
    <LandingSection
      source="blog.jpg"
      :subtitle="post.title"
    />
    <GoldenHorizontalRule />

    <b-row>
      <b-col class="text-center pt-5 pb-1">
        <h2>{{ post.title }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img width="500" center class="m-4 img" :src="post.image"></b-img>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12">
        <nuxt-content class="px-5 py-3" :document="post" />
      </b-col>
    </b-row>
    <GoldenHorizontalRule />
    <GoldenHorizontalRule />
  </div>
</template>

<script>
export default {
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

<style scoped>
.img {
  border-radius: 0.5rem;
  border: 2px solid var(--gold);
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