<template>
  <b-container id="chefs-container" class="px-5" fluid>
    <b-row class="text-center py-5">
      <b-col cols="12">
        <h1 id="title">{{ $t("services.meet_the_chefs") }}</h1>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="3">
        <b-img height="325px" class="img" src="~/static/images/chefs/chef-1.webp"></b-img>
        <h5 class="pl-4 pt-3 pb-2">John Smooth</h5>
        <h6 class="pl-4">{{ $t("services.owner") }}</h6>
      </b-col>
      <b-col cols="3">
        <b-img height="325px" class="img" src="~/static/images/chefs/chef-2.webp"></b-img>
        <h5 class="pl-4 pt-3 pb-2">Rebeca Welson</h5>
        <h6 class="pl-4">{{ $t("services.head_chef") }}</h6>
      </b-col>
      <b-col cols="3">
        <b-img height="325px" class="img" src="~/static/images/chefs/chef-3.webp"></b-img>
        <h5 class="pl-4 pt-3 pb-2">Kharl Branyt</h5>
        <h6 class="pl-4">Sous-Chef</h6>
      </b-col>
      <b-col cols="3">
        <b-img height="325px" class="img" src="~/static/images/chefs/chef-4.webp"></b-img>
        <h5 class="pl-4 pt-3 pb-2">Luke Simon</h5>
        <h6 class="pl-4">Chef</h6>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-btn class="gold-btn my-5">
          <nuxt-link :to="localePath('contact')">
            {{ $t("btn.contact") }}!
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
#chefs-container {
  background-color: var(--bg-secondary);
}

#title {
  font-family: Great-Vibes;
  color: var(--gold);
  font-size: 4rem;
}

.img {
    border-radius: 0.5rem;
}

h5, h6 {
    text-align: left;
    font-family: DIN;
}

h6 {
    font-weight: lighter;
    color: var(--gold);
}
</style>