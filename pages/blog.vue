
  
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
          <div class="blog-card">
            <NuxtLink :to="post.slug">
              <b-img width="300" class="mt-3 img" :src="post.image"></b-img>
              <p class="mb-0 description text-left">
                {{ post.description }}
              </p>
              <p class="pl-4 text-left">{{ post.title }}</p>
            </NuxtLink>
          </div>
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

p {
  font-size: 1.25rem;
}

.description {
  font-size: 1rem;
  color: var(--gold);
  position: absolute;
  padding: 0.5rem;
  top: 7.5%;
  left: 11%;
  border-radius: 0.25rem;
  background-color: var(--bg-secondary);
}

.img {
  position: relative;
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