<template>
  <b-container class="full-width">
    <b-row>
      <b-col class="flx-center">
        <h2>{{ title }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="flx-center">
        <h1>{{ subtitle }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="flx-center">
          <hr />
          <font-awesome-icon
            id="icon"
            class="margin-x-1rem margin-y-1rem"
            icon="globe-europe"
          />
          <hr />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="flx-center mb-3">
          <nuxt-link :to="localePath('blog')">Check out</nuxt-link>&nbsp;more
          special recipes or special dishes on our blog.
        </p>
      </b-col>
    </b-row>
    <b-row>
        <b-col>
            <br>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style scoped>
hr {
  width: 7.5rem;
  height: 1px;
  background: var(--gold);
}

div {
  background-color: var(--bg);
}

h1 {
  font-family: Cormorant-Garamond;
}

h2 {
  font-family: Great-Vibes;
  color: var(--gold);
  font-size: 2rem;
  margin-top: 2rem;
}

#icon {
  color: var(--gold);
  font-size: 1.25rem;
}

a {
  color: var(--gold);
  text-decoration: underline;
}

a:link {
  color: var(--gold);
}

a:visited {
  color: var(--gold);
}

a:hover {
  color: var(--gold);
}

a:active {
  color: var(--gold);
}
</style>