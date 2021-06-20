<template>
  <b-container id="service-container" fluid>
    <b-row class="text-center my-5">
      <b-col cols="12">
        <h1 id="title">{{ $t("services.services") }}</h1>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="4">
        <font-awesome-icon icon="birthday-cake" class="icon" />
        <h2 class="my-4">{{ $t("services.birthday") }}</h2>
        <p class="px-5">
          {{ $t("services.birthday_body") }}
        </p>
      </b-col>
      <b-col cols="4">
        <font-awesome-icon icon="handshake" class="icon" />
        <h2 class="my-4">{{ $t("services.business") }}</h2>
        <p class="px-5">
          {{ $t("services.business_body") }}
        </p>
      </b-col>
      <b-col cols="4">
        <font-awesome-icon icon="heart" class="icon" />
        <h2 class="my-4">{{ $t("services.wedding") }}</h2>
        <p class="px-5">
          {{ $t("services.wedding_body") }}
        </p>
      </b-col>
    </b-row>
    <b-row class="my-5 text-center">
      <b-col>
        <b-btn class="gold-btn">
          <nuxt-link :to="localePath('reservation')">
            {{ $t("btn.reservate") }}!
          </nuxt-link>
        </b-btn>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
#title {
  font-family: Great-Vibes;
  color: var(--gold);
}

#service-container {
  justify-content: center;
}

.icon {
  font-size: 4rem;
  color: var(--gold);
}

h1 {
  font-size: 4rem;
}

h2 {
  font-family: Cormorant-Garamond;
}
</style>