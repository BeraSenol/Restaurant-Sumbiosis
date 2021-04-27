<template>
  <div class="image-container">
    <b-img fluid :src="require(`~/static/images/landing-section/${source}`)" />

    <div class="text-container dark-radial-overlay full-width">
      <h1>{{ title }}</h1>
      <!-- <hr/> -->

      <h5>{{ subtitle }}</h5>
      <div class="flx">
        <hr />
        <font-awesome-icon
          id="icon"
          class="margin-x-1rem margin-y-1rem"
          :icon="['far', 'clock']"
        />
        <hr />
      </div>
      <b-container id="opening-time">
        <b-row>
          <b-col class="text-center"
            ><p>{{ $t("landing.opening_hours.mon_fry") }}:</p></b-col
          >
          <b-col class="text-center"><p>08:00 - 22:00</p></b-col>
        </b-row>
        <b-row>
          <b-col class="text-center"
            ><p>{{ $t("landing.opening_hours.weekends") }}:</p></b-col
          >
          <b-col class="text-center"><p>12:00 - 02:00</p></b-col>
        </b-row>
        
        <b-row class="margin-y-1rem">
          <b-col>
            <b-btn class="gold-btn"
              ><nuxt-link :to="localePath('reservation')">{{
                $t("btn.reservate")
              }}</nuxt-link></b-btn
            >
          </b-col>
        </b-row>
      </b-container>
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

p {
  color: white;
}

hr {
  width: 7.5rem;
  height: 1px;
  background: var(--gold);
}

#icon {
  color: var(--gold);
  font-size: 1.375rem;
}

#opening-time {
  width: 350px;
}

.flx {
  display: flex;
  align-items: center;
}

.text-center {
  text-align: center;
  letter-spacing: 1px;
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