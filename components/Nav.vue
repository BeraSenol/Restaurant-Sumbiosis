<template>
  <b-navbar class="navbar" fixed="top">
    <b-navbar-nav class="mr-auto">
      <b-nav-item class="margin-x-1rem">
        <nuxt-link :to="localePath('index')" class="nxt-link">
          {{ $t("nav.home") }}
        </nuxt-link>
      </b-nav-item>
      <b-nav-item class="margin-x-1rem">
        <nuxt-link :to="localePath('menu')" class="nxt-link">
          {{ $t("nav.menu") }}
        </nuxt-link>
      </b-nav-item>
      <b-nav-item class="margin-x-1rem">
        <nuxt-link :to="localePath('our_story')" class="nxt-link">
          {{ $t("nav.our_story") }}
        </nuxt-link>
      </b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav>
      <b-navbar-brand>
        <b-img height="40%" center src="~/static/images/logo-gold.png"></b-img>
      </b-navbar-brand>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item class="margin-x-1rem">
        <nuxt-link :to="localePath('blog')" class="nxt-link">
          {{ $t("nav.blog") }}
        </nuxt-link>
      </b-nav-item>
      <b-nav-item class="margin-x-1rem">
        <nuxt-link :to="localePath('contact')" class="nxt-link">
          {{ $t("nav.contact") }}
        </nuxt-link>
      </b-nav-item>
      <b-nav-item class="margin-x-1rem">
        <nuxt-link :to="localePath('reservation')" class="nxt-link">
          {{ $t("nav.reservation") }}
        </nuxt-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      colors: ["light", "dark"],
    };
  },
};
</script>

<style scoped>
a.nuxt-link-exact-active {
  position: relative;
}

a.nuxt-link-exact-active::before {
  opacity: 1;
  width: 100%;
  background: var(--gold);
  content: "";
  height: 0.15rem;
  position: absolute;
  bottom: -0.5rem;
  border-radius: var(--border-radius);
  transform: translateY(0rem);
}

.navbar {
  background-color: var(--bg);
  opacity: var(--opacity);
}


a {
  color: var(--gold);
  position: relative;
}

a:link {
  color: var(--gold);
}

a:visited {
  color: var(--gold);
}

a:hover {
  color: var(--gold);
  text-decoration: none;
}

a:active {
  color: var(--gold);
}

a.nxt-link:not(a.nuxt-link-exact-active)::before {
  opacity: 0;
  width: 100%;
  background: var(--gold);
  content: "";
  height: 0.15rem;
  position: absolute;
  bottom: -0.5rem;
  border-radius: var(--border-radius);
  transform: translateY(1rem);
}

a.nxt-link:not(a.nuxt-link-exact-active):hover::before {
  opacity: 1;
  width: 100%;
  background: var(--gold);
  content: "";
  height: 0.15rem;
  position: absolute;
  bottom: -0.5rem;
  border-radius: var(--border-radius);
  transition: all 0.5s ease-in-out;
  transform: translateY(0rem);
}
</style>