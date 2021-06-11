<template>
  <b-card id="card" :img-src="require(`~/static/images/menu-items/${source}`)">
    <b-card-title id="title"> {{ title }} </b-card-title>
    <b-card-sub-title>
      <h6 id="subtitle">{{ subtitle }}</h6>
    </b-card-sub-title>
    <b-card-text id="ingredients">
      <p><span>{{ $t("menu_card.ingredients") }}: </span>{{ ingredients }}.</p>
    </b-card-text>
    <b-card-text id="aromas">
      <p><span>{{ $t("menu_card.aromas") }}: </span>{{ aromas }},  {{$t("ingredient.salt")}} &amp; {{$t("ingredient.pepper")}}.</p>
    </b-card-text>
    <template id="footer" #footer>
      <p>
        <span>{{ $t("menu_card.price") }}:</span>
      </p>
      <p>
        <span>&euro;{{ price }} </span>
      </p>
    </template>
  </b-card>
</template>

<script>
export default {
  props: ["source", "title", "subtitle", "ingredients", "aromas", "price"],
};
</script>

<style scoped>
#card {
  max-height: 500px;
}

#title {
  padding-top: 0.75rem;
  text-align: left;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-top: 0;
}

#subtitle {
  text-align: left;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  font-weight: lighter;
  font-style: italic;
  font-size: 1rem;
  padding-bottom: 1rem;
  color: var(--gold);
}

#ingredients {
  padding-bottom: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: left;
}

#aromas {
  padding-bottom: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  text-align: left;
}
.card-footer {
  border-top: 2px solid var(--gold);
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
}
#img {
  margin: 2rem;
}

.card-body {
  padding: 0;
}

span {
  font-style: italic;
  font-weight: lighter;
  color: var(--gold);
}
</style>