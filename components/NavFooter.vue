<template>
  <footer>
    <NewsLetter id="news"/>
    <b-container fluid class="footer-container">
      
      <ul>
        <li><h3>Sumbiosis</h3></li>
        <li>
          <nuxt-link :to="localePath('index')">
            <p>{{ $t("nav.home") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('menu')">
            <p>{{ $t("nav.menu") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('our_story')">
            <p>{{ $t("nav.our_story") }}</p>
          </nuxt-link>
        </li>
      </ul>
      <ul>
        <li>
          <b-img height="40%" src="~/static/images/logo-gold.png" />
        </li>
        <li>
          <nuxt-link :to="localePath('blog')">
            <p>{{ $t("nav.blog") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('contact')">
            <p>{{ $t("nav.contact") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('reservation')">
            <p>{{ $t("nav.reservation") }}</p>
          </nuxt-link>
        </li>
      </ul>
      <ul>
        <li>
          <h3>{{ $t("nav.follow_us") }}</h3>
        </li>
        <li>
          <span>
            <p>
              <a href="https://www.facebook.com/">
                <FacebookIcon class="icon" />
                Facebook
              </a>
            </p>
          </span>
        </li>
        <li>
          <span>
            <p>
              <a href="https://www.instagram.com/">
                <InstagramIcon class="icon" /> Instagram
              </a>
            </p>
          </span>
        </li>
        <li>
          <span>
            <p>
              <a href="https://twitter.com/">
                <TwitterIcon class="icon" />
                Twitter
              </a>
            </p>
          </span>
        </li>
      </ul>
    </b-container>
    <b-container fluid class="subfooter pb-3">
      <b-row>
        <b-col class="flx-center">
          <nuxt-link :to="switchLocalePath('nl')" class="lang">
            NL&nbsp;
          </nuxt-link>
          <span>/</span>
          <nuxt-link :to="switchLocalePath('en')" class="lang">
            &nbsp;EN
          </nuxt-link>
        </b-col>
        <b-col class="flx-center" cols="4">
          <a href="#" class="m-r">Disclaimer</a>
          <a href="#" class="dot m-r">Privacy</a>
          <a href="#" class="dot">Cookies</a>
        </b-col>
        <b-col class="flx-center">
          <div>
            <ul class="colorMode">
              <li
                v-for="color of colors"
                :key="color"
                @click="$colorMode.preference = color"
                class="color-mode"
              >
                <component :is="`icon-${color}`" :class="getClasses(color)" />
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
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
footer {
  background-color: var(--bg);
  height: 300px;
  border-top: 3px var(--gold) solid;
  position: relative;
}
h3 {
  font-family: Cormorant-Garamond;
  font-style: italic;
  color: var(--gold);
  font-weight: 600;
}

ul {
  width: 100%;
  text-align: center;
}



li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

p:not(.lang) {
  color: var(--text-color);
  font-family: DM Sans, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  line-height: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  width: 100%;
  cursor: pointer;
  transition: var(--transition-color);
}

p:hover {
  color: var(--gold);
  transition: var(--transition-color);

}

#news {
  position: absolute;
  left: 20%;
  top: -80px;
}

.colorMode {
  display: flex;
  margin: 0;
}

.color-mode {
  margin: 0;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: var(--transition-color);
}

.color-mode:hover {
  color: var(--gold);
  transition: var(--transition-color);
}

.footer-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  max-width: 100%;
}
.m-r {
  margin-right: 0.75rem;
}

.dot::before {
  background: var(--gold);
  display: inline-block;
  content: "";
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  vertical-align: middle;
  margin-top: -0.125rem;
}


.icon {
  padding-bottom: 0.125rem;
}

.icon:hover {
  transition: color 0.3s ease-in-out;
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