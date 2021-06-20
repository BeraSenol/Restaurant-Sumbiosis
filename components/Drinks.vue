<template>
  <b-container fluid>
    <b-row>
      <b-col class="text-center py-2">
        <h1> {{$t("drinks.beverage")}} </h1>
      </b-col>
    </b-row>
    <b-row class="mt-1">
      <b-col cols="5">
        <h2>{{$t("drinks.coffee")}}</h2>
        <p>
          <font-awesome-icon icon="coffee" class="ml-3 mr-4 icon" />Espresso
        </p>
        <p>
          <font-awesome-icon icon="coffee" class="ml-3 mr-4 icon" />Cappuccino
        </p>
        <p><font-awesome-icon icon="coffee" class="ml-3 mr-4 icon" />Latte</p>
        <p><font-awesome-icon icon="coffee" class="ml-3 mr-4 icon" />{{$t("drinks.mocha")}}</p>
      </b-col>
      <b-col cols="1">
        <h2>&nbsp;</h2>
        <p>€2.50</p>
        <p>€3.50</p>
        <p>€4.00</p>
        <p>€4.25</p>
      </b-col>
      <b-col cols="5">
        <h2>{{$t("drinks.hot_drinks")}}</h2>
        <p>
          <font-awesome-icon icon="mug-hot" class="ml-3 mr-4 icon" />{{$t("drinks.hot_chocolate")}}
        </p>
        <p>
          <font-awesome-icon icon="mug-hot" class="ml-3 mr-4 icon" />{{$t("drinks.chai_tea")}}
        </p>
        <p>
          <font-awesome-icon icon="mug-hot" class="ml-3 mr-4 icon" />{{$t("drinks.black_tea")}}
        </p>
        <p>
          <font-awesome-icon icon="mug-hot" class="ml-3 mr-4 icon" />{{$t("drinks.green_tea")}}
        </p>
        <p>
          <font-awesome-icon icon="mug-hot" class="ml-3 mr-4 icon" />{{$t("drinks.oolong_tea")}}
        </p>
      </b-col>
      <b-col cols="1">
        <h2>&nbsp;</h2>
        <p>€3.50</p>
        <p>€2.00</p>
        <p>€3.00</p>
        <p>€4.00</p>
        <p>€4.75</p>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col cols="5">
        <h2>{{$t("drinks.beers")}}</h2>
        <p><font-awesome-icon icon="beer" class="ml-3 mr-4 icon" />Jupiler</p>
        <p><font-awesome-icon icon="beer" class="ml-3 mr-4 icon" />Cristal</p>
        <p><font-awesome-icon icon="beer" class="ml-3 mr-4 icon" />Duvel</p>
        <p>
          <font-awesome-icon icon="beer" class="ml-3 mr-4 icon" />Desperados
        </p>
        <p>
          <font-awesome-icon icon="beer" class="ml-3 mr-4 icon" />La Trappe
          Trippel
        </p>
      </b-col>
      <b-col cols="1">
        <h2>&nbsp;</h2>
        <p>€2.20</p>
        <p>€2.30</p>
        <p>€4.20</p>
        <p>€4.00</p>
        <p>€4.75</p>
      </b-col>
      <b-col cols="5">
        <h2>Cocktails</h2>
        <p>
          <font-awesome-icon icon="cocktail" class="ml-3 mr-4 icon" />Mojito
        </p>
        <p>
          <font-awesome-icon icon="cocktail" class="ml-3 mr-4 icon" />Bloody
          Mary
        </p>
        <p>
          <font-awesome-icon icon="cocktail" class="ml-3 mr-4 icon" />Long
          Island Iced Tea
        </p>
      </b-col>
      <b-col cols="1">
        <h2>&nbsp;</h2>
        <p>€8.50</p>
        <p>€9.50</p>
        <p>€12.00</p>
      </b-col>
    </b-row>
    <b-row class="my-4 mb-5">
      <b-col cols="5">
        <h2>{{$t("drinks.wine")}}</h2>
        <p>
          <font-awesome-icon icon="wine-glass" class="ml-3 mr-4 icon" />{{$t("drinks.white_wine")}}
        </p>
        <p>
          <font-awesome-icon icon="wine-glass" class="ml-3 mr-4 icon" />{{$t("drinks.rose_wine")}}
        </p>
        <p>
          <font-awesome-icon icon="wine-glass" class="ml-3 mr-4 icon" />{{$t("drinks.red_wine")}}
        </p>
        
      </b-col>
      <b-col cols="1">
        <h2>&nbsp;</h2>
        <p>€5.00</p>
        <p>€5.50</p>
        <p>€5.75</p>
      </b-col>
      <b-col cols="5">
        <h2>{{$t("drinks.strong_liqueur")}}</h2>
        <p>
          <font-awesome-icon
            icon="glass-whiskey"
            class="ml-3 mr-4 icon"
          />Jenever
        </p>
        <p>
          <font-awesome-icon icon="glass-whiskey" class="ml-3 mr-4 icon" />Vodka
        </p>
        <p>
          <font-awesome-icon icon="glass-whiskey" class="ml-3 mr-4 icon" />Rum
        </p>
        <p>
          <font-awesome-icon
            icon="glass-whiskey"
            class="ml-3 mr-4 icon"
          />Whiskey
        </p>
      </b-col>
      <b-col cols="1">
        <h2>&nbsp;</h2>
        <p>€4.50</p>
        <p>€7.50</p>
        <p>€8.00</p>
        <p>€11.00</p>
      </b-col>
    </b-row>
    <b-row class="text-center mb-5">
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
h2 {
  font-family: DIN;
  color: var(--gold);
  padding: 1.5rem;
  padding-bottom: 0;
}

h1 {
  font-family: Great-Vibes;
  color: var(--gold);
  font-size: 4rem;
  padding: 1.5rem;
  padding-bottom: 0;
}
.icon {
  font-size: 1rem;
  color: var(--gold);
  margin-right: 1rem;
}

p {
  font-size: 1.25rem;
  font-weight: lighter;
  margin: 0.5rem;
  font-family: DIN;
  letter-spacing: 1px;
}
</style>