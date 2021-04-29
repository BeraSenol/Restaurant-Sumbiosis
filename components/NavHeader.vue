<template>
  <b-navbar class="navbar" fixed="top">
    <b-navbar-nav>
      <!-- <b-nav-item>
        <div class="flx-center">
          <div @click="$colorMode.preference = 'light'"  class="color-mode">
            <component :is="`icn-${'light'}`" :class="getClasses('light')" v-if="$colorMode.value = 'dark'"/>
          </div>
          <div @click="$colorMode.preference = 'dark'" v-if="$colorMode.value = 'light'" class="color-mode">
            <component :is="`icn-${'dark'}`" :class="getClasses('dark')" />
          </div>
        </div>
      </b-nav-item> -->
      <b-nav-item-dropdown id="color-dropdown" :text="$t('nav.color')" left>
        <b-dropdown-item @click="$colorMode.preference = 'dark'">
          {{ $t("nav.dark") }}
        </b-dropdown-item>
        <b-dropdown-item @click="$colorMode.preference = 'light'">
          {{ $t("nav.light") }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <b-navbar-nav class="mr-auto ml-auto nav-width">
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

    <b-navbar-nav class="mr-auto ml-auto">
      <b-navbar-brand>
        <b-img
          height="45px"
          width="45px"
          center
          src="~/static/images/logo-gold.png"
          class="logo"
        >
        </b-img>
      </b-navbar-brand>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto mr-auto nav-width">
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

    <b-navbar-nav>
      <b-nav-item-dropdown id="lang-dropdown" :text="$t('nav.lang')" right>
        <b-dropdown-item>
          <nuxt-link class="lang-item" :to="switchLocalePath('en')">
            {{ $t("nav.english") }}
          </nuxt-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <nuxt-link class="lang-item" :to="switchLocalePath('nl')">
            {{ $t("nav.dutch") }}
          </nuxt-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
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
  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      };
    },
  },
};
</script>

<style scoped>
a.nuxt-link-exact-active {
  position: relative;
}

a.nuxt-link-exact-active:not(.lang-item)::before {
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

#color-dropdown {
  background-color: var(--bg);
  color: var(--gold);
  font-size: 1.1rem;
  width: 125px;
}

#lang-dropdown {
  background-color: var(--bg);
  color: var(--gold);
  font-size: 1.1rem;
  width: 125px;
  text-align: right;
}

.navbar {
  background-color: var(--bg);
  opacity: var(--opacity);
  border-bottom: 3px var(--gold) solid;
}

.nav-width {
  width: 350px;
}

.colorMode {
  display: flex;
  justify-content: center;
  align-items: center;
}

.color-mode {
  margin: 0;
  color: var(--gold);
  margin-right: 0.5rem;
  transition: ease-in-out var(--transition-speed);
  cursor: pointer;
}

.color-mode:hover {
  color: var(--gold);
  transition: ease-in-out var(--transition-speed);
}

a:not(.lang-item) {
  color: var(--gold);
  position: relative;
  font-size: 1.1rem;
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
  transition: all var(--transition-speed) ease-in-out;
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
  transition: all var(--transition-speed) ease-in-out;
  transform: translateY(0rem);
}
</style>