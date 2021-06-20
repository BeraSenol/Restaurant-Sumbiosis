<template>
  <div>
    <b-carousel :interval="10000" controls indicators background="var(--bg)">
      <b-carousel-slide
        img-src="~/static/images/menu-carousel-large/belgium.jpg"
      >
        <div class="title-container">
          <h1>{{ $t("countries.belgium") }}</h1>
          <b-card-group columns>
            <MenuCardSmall
              source="belgium-stoofvlees.jpg"
              :title="$t('menu_carousel.belgium.title1')"
              subtitle="Stoofvlees met Frieten"
              :ingredients="
                $t('ingredient.beef_stew') +
                ', ' +
                $t('ingredient.brown_beer') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.apple_syrup') +
                ', ' +
                $t('ingredient.red_wine_vinegar')
              "
              :aromas="
                $t('ingredient.bay_leaves') +
                ', ' +
                $t('ingredient.thyme') +
                ', ' +
                $t('ingredient.ground_cloves')
              "
              price="15.99"
            />
            <MenuCardSmall
              source="belgium-stoofvlees.jpg"
              :title="$t('menu_carousel.belgium.title1')"
              subtitle="Stoofvlees met Frieten"
              :ingredients="
                $t('ingredient.beef_stew') +
                ', ' +
                $t('ingredient.brown_beer') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.apple_syrup') +
                ', ' +
                $t('ingredient.red_wine_vinegar')
              "
              :aromas="
                $t('ingredient.bay_leaves') +
                ', ' +
                $t('ingredient.thyme') +
                ', ' +
                $t('ingredient.ground_cloves')
              "
              price="15.99"
            />
            <MenuCardSmall
              source="belgium-mussels.jpg"
              :title="$t('menu_carousel.belgium.title2')"
              subtitle="Mosselen met Frieten"
              :ingredients="
                $t('ingredient.mussels') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.carrot') +
                ', ' +
                $t('ingredient.red_pepper') +
                ', ' +
                $t('ingredient.craime_fraiche')
              "
              :aromas="$t('ingredient.thyme') + ', ' + $t('ingredient.parsley')"
              price="20.99"
            />
            <MenuCardSmall
              source="belgium-mussels.jpg"
              :title="$t('menu_carousel.belgium.title2')"
              subtitle="Mosselen met Frieten"
              :ingredients="
                $t('ingredient.mussels') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.carrot') +
                ', ' +
                $t('ingredient.red_pepper') +
                ', ' +
                $t('ingredient.craime_fraiche')
              "
              :aromas="$t('ingredient.thyme') + ', ' + $t('ingredient.parsley')"
              price="20.99"
            />
            <MenuCardSmall
              source="belgium-chichon-au-gratin.jpg"
              :title="$t('menu_carousel.belgium.title3')"
              subtitle="Witloof Gratin"
              :ingredients="
                $t('ingredient.chicory') +
                ', ' +
                $t('ingredient.ham') +
                ', ' +
                $t('ingredient.potatoes') +
                ', ' +
                $t('ingredient.gruyere') +
                ', ' +
                $t('ingredient.parmesan')
              "
              :aromas="
                $t('ingredient.nutmeg') + ', ' + $t('ingredient.parsley')
              "
              price="11.49"
            />
            <MenuCardSmall
              source="belgium-chichon-au-gratin.jpg"
              :title="$t('menu_carousel.belgium.title3')"
              subtitle="Witloof Gratin"
              :ingredients="
                $t('ingredient.chicory') +
                ', ' +
                $t('ingredient.ham') +
                ', ' +
                $t('ingredient.potatoes') +
                ', ' +
                $t('ingredient.gruyere') +
                ', ' +
                $t('ingredient.parmesan')
              "
              :aromas="
                $t('ingredient.nutmeg') + ', ' + $t('ingredient.parsley')
              "
              price="11.49"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img-src="~/static/images/menu-carousel-large/japan.jpg">
        <div class="title-container">
          <h1>{{ $t("countries.japan") }}</h1>
          <b-card-group columns>
            <MenuCardSmall
              source="japan-ramen.jpg"
              :title="$t('menu_carousel.japan.title1')"
              subtitle="醤油ラーメン (Shōyu Rāmen)"
              :ingredients="
                $t('ingredient.pork_belly') +
                ', ' +
                $t('ingredient.soy_sauce') +
                ', ' +
                $t('ingredient.egg') +
                ', ' +
                $t('ingredient.ramen') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.sake') +
                ', ' +
                $t('ingredient.mirin')
              "
              :aromas="
                $t('ingredient.brown_sugar') +
                ', ' +
                $t('ingredient.green_apple')
              "
              price="18.99"
            />
            <MenuCardSmall
              source="japan-ramen.jpg"
              :title="$t('menu_carousel.japan.title1')"
              subtitle="醤油ラーメン (Shōyu Rāmen)"
              :ingredients="
                $t('ingredient.pork_belly') +
                ', ' +
                $t('ingredient.soy_sauce') +
                ', ' +
                $t('ingredient.egg') +
                ', ' +
                $t('ingredient.ramen') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.sake') +
                ', ' +
                $t('ingredient.mirin')
              "
              :aromas="
                $t('ingredient.brown_sugar') +
                ', ' +
                $t('ingredient.green_apple')
              "
              price="18.99"
            />
            <MenuCardSmall
              source="japan-sushi.jpg"
              :title="$t('menu_carousel.japan.title2')"
              subtitle="サーモン寿司 (Sāmon Sushi)"
              :ingredients="
                $t('ingredient.salmon') +
                ', ' +
                $t('ingredient.sushi_rice') +
                ', ' +
                $t('ingredient.rice_wine') +
                ', ' +
                $t('ingredient.rice_vinegar') +
                ', ' +
                $t('ingredient.nori')
              "
              :aromas="
                $t('ingredient.soy_sauce') + ', ' + $t('ingredient.wasabi')
              "
              price="15.99"
            />
            <MenuCardSmall
              source="japan-sushi.jpg"
              :title="$t('menu_carousel.japan.title2')"
              subtitle="サーモン寿司 (Sāmon Sushi)"
              :ingredients="
                $t('ingredient.salmon') +
                ', ' +
                $t('ingredient.sushi_rice') +
                ', ' +
                $t('ingredient.rice_wine') +
                ', ' +
                $t('ingredient.rice_vinegar') +
                ', ' +
                $t('ingredient.nori')
              "
              :aromas="
                $t('ingredient.soy_sauce') + ', ' + $t('ingredient.wasabi')
              "
              price="15.99"
            />
            <MenuCardSmall
              source="japan-yakitori.jpg"
              :title="$t('menu_carousel.japan.title3')"
              subtitle="焼き鳥 (Yakitori)"
              :ingredients="
                $t('ingredient.chicken_wings') + ', ' + $t('ingredient.onion')
              "
              :aromas="
                $t('ingredient.brown_sugar') +
                ', ' +
                $t('ingredient.soy_sauce') +
                ', ' +
                $t('ingredient.sake') +
                ', ' +
                $t('ingredient.mirin')
              "
              price="13.99"
            />
            <MenuCardSmall
              source="japan-yakitori.jpg"
              :title="$t('menu_carousel.japan.title3')"
              subtitle="焼き鳥 (Yakitori)"
              :ingredients="
                $t('ingredient.chicken_wings') + ', ' + $t('ingredient.onion')
              "
              :aromas="
                $t('ingredient.brown_sugar') +
                ', ' +
                $t('ingredient.soy_sauce') +
                ', ' +
                $t('ingredient.sake') +
                ', ' +
                $t('ingredient.mirin')
              "
              price="13.99"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img-src="~/static/images/menu-carousel-large/italy.jpg">
        <div class="title-container">
          <h1>{{ $t("countries.italy") }}</h1>
          <b-card-group columns>
            <MenuCardSmall
              source="italy-mushroom-risotto.jpg"
              :title="$t('menu_carousel.italy.title1')"
              subtitle="Risotto ai Funghi"
              :ingredients="
                $t('ingredient.arborio_rice') +
                ', ' +
                $t('ingredient.mushroom') +
                ', ' +
                $t('ingredient.shallots') +
                ', ' +
                $t('ingredient.parmesan') +
                ', ' +
                $t('ingredient.beef_stock')
              "
              :aromas="
                $t('ingredient.garlic') +
                ', ' +
                $t('ingredient.rosemary') +
                ', ' +
                $t('ingredient.white_wine')
              "
              price="18.99"
            />
            <MenuCardSmall
              source="italy-mushroom-risotto.jpg"
              :title="$t('menu_carousel.italy.title1')"
              subtitle="Risotto ai Funghi"
              :ingredients="
                $t('ingredient.arborio_rice') +
                ', ' +
                $t('ingredient.mushroom') +
                ', ' +
                $t('ingredient.shallots') +
                ', ' +
                $t('ingredient.parmesan') +
                ', ' +
                $t('ingredient.beef_stock')
              "
              :aromas="
                $t('ingredient.garlic') +
                ', ' +
                $t('ingredient.rosemary') +
                ', ' +
                $t('ingredient.white_wine')
              "
              price="18.99"
            />
            <MenuCardSmall
              source="italy-gnocchi-alla-sorrentina.jpg"
              :title="$t('menu_carousel.italy.title2')"
              subtitle="Gnocchi alla Sorrentina"
              :ingredients="
                $t('ingredient.gnocchi') +
                ', ' +
                $t('ingredient.tomato') +
                ', ' +
                $t('ingredient.mozzarella')
              "
              :aromas="
                $t('ingredient.garlic') +
                ', ' +
                $t('ingredient.red_pepper') +
                ', ' +
                $t('ingredient.basil')
              "
              price="11.99"
            />
            <MenuCardSmall
              source="italy-gnocchi-alla-sorrentina.jpg"
              :title="$t('menu_carousel.italy.title2')"
              subtitle="Gnocchi alla Sorrentina"
              :ingredients="
                $t('ingredient.gnocchi') +
                ', ' +
                $t('ingredient.tomato') +
                ', ' +
                $t('ingredient.mozzarella')
              "
              :aromas="
                $t('ingredient.garlic') +
                ', ' +
                $t('ingredient.red_pepper') +
                ', ' +
                $t('ingredient.basil')
              "
              price="11.99"
            />
            <MenuCardSmall
              source="italy-spagetti-carbonara.jpg"
              :title="$t('menu_carousel.italy.title3')"
              subtitle="Spagetti alla Carbonara"
              :ingredients="
                $t('ingredient.spagetti') +
                ', ' +
                $t('ingredient.pancetta') +
                ', ' +
                $t('ingredient.pecorino_cheese') +
                ', ' +
                $t('ingredient.parmesan') +
                ', ' +
                $t('ingredient.egg')
              "
              :aromas="
                $t('ingredient.garlic') + ', ' + $t('ingredient.parsley')
              "
              price="13.99"
            />
            <MenuCardSmall
              source="italy-spagetti-carbonara.jpg"
              :title="$t('menu_carousel.italy.title3')"
              subtitle="Spagetti alla Carbonara"
              :ingredients="
                $t('ingredient.spagetti') +
                ', ' +
                $t('ingredient.pancetta') +
                ', ' +
                $t('ingredient.pecorino_cheese') +
                ', ' +
                $t('ingredient.parmesan') +
                ', ' +
                $t('ingredient.egg')
              "
              :aromas="
                $t('ingredient.garlic') + ', ' + $t('ingredient.parsley')
              "
              price="13.99"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        img-src="~/static/images/menu-carousel-large/turkey.jpg"
      >
        <div class="title-container">
          <h1>{{ $t("countries.turkey") }}</h1>
          <b-card-group columns>
            <MenuCardSmall
              source="turkey-kofte.jpg"
              :title="$t('menu_carousel.turkey.title1')"
              subtitle="Köfte"
              :ingredients="
                $t('ingredient.ground_lamb') +
                ', ' +
                $t('ingredient.ground_lamb') +
                ', ' +
                $t('ingredient.onion')
              "
              :aromas="
                $t('ingredient.parsley') +
                ', ' +
                $t('ingredient.mint') +
                ', ' +
                $t('ingredient.sumac') +
                ', ' +
                $t('ingredient.cumin') +
                ', ' +
                $t('ingredient.oregano') +
                ', ' +
                $t('ingredient.paprika')
              "
              price="19.99"
            />
            <MenuCardSmall
              source="turkey-kofte.jpg"
              :title="$t('menu_carousel.turkey.title1')"
              subtitle="Köfte"
              :ingredients="
                $t('ingredient.ground_lamb') +
                ', ' +
                $t('ingredient.ground_lamb') +
                ', ' +
                $t('ingredient.onion')
              "
              :aromas="
                $t('ingredient.parsley') +
                ', ' +
                $t('ingredient.mint') +
                ', ' +
                $t('ingredient.sumac') +
                ', ' +
                $t('ingredient.cumin') +
                ', ' +
                $t('ingredient.oregano') +
                ', ' +
                $t('ingredient.paprika')
              "
              price="19.99"
            />
            <MenuCardSmall
              source="turkey-manti.jpg"
              :title="$t('menu_carousel.turkey.title2')"
              subtitle="Mercigmek Mantı"
              :ingredients="
                $t('ingredient.pasta') +
                ', ' +
                $t('ingredient.red_lentils') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.yogurt')
              "
              :aromas="
                $t('ingredient.parsley') +
                ', ' +
                $t('ingredient.sumac') +
                ', ' +
                $t('ingredient.garlic') +
                ', ' +
                $t('ingredient.mint') +
                ', ' +
                $t('ingredient.lime') +
                ', ' +
                $t('ingredient.red_pepper_flakes')
              "
              price="15.99"
            />
            <MenuCardSmall
              source="turkey-manti.jpg"
              :title="$t('menu_carousel.turkey.title2')"
              subtitle="Mercigmek Mantı"
              :ingredients="
                $t('ingredient.pasta') +
                ', ' +
                $t('ingredient.red_lentils') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.yogurt')
              "
              :aromas="
                $t('ingredient.parsley') +
                ', ' +
                $t('ingredient.sumac') +
                ', ' +
                $t('ingredient.garlic') +
                ', ' +
                $t('ingredient.mint') +
                ', ' +
                $t('ingredient.lime') +
                ', ' +
                $t('ingredient.red_pepper_flakes')
              "
              price="15.99"
            />
            <MenuCardSmall
              source="turkey-dolma.jpg"
              :title="$t('menu_carousel.turkey.title3')"
              subtitle="Dolma"
              :ingredients="
                $t('ingredient.white_rice') +
                ', ' +
                $t('ingredient.grape_leaves') +
                ', ' +
                $t('ingredient.ground_beef') +
                ', ' +
                $t('ingredient.tomato_sauce')
              "
              :aromas="
                $t('ingredient.parsley') +
                ', ' +
                $t('ingredient.cumin') +
                ', ' +
                $t('ingredient.mint')
              "
              price="13.99"
            />
            <MenuCardSmall
              source="turkey-dolma.jpg"
              :title="$t('menu_carousel.turkey.title3')"
              subtitle="Dolma"
              :ingredients="
                $t('ingredient.white_rice') +
                ', ' +
                $t('ingredient.grape_leaves') +
                ', ' +
                $t('ingredient.ground_beef') +
                ', ' +
                $t('ingredient.tomato_sauce')
              "
              :aromas="
                $t('ingredient.parsley') +
                ', ' +
                $t('ingredient.cumin') +
                ', ' +
                $t('ingredient.mint')
              "
              price="13.99"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        img-src="~/static/images/menu-carousel-large/france.jpg"
      >
        <div class="title-container">
          <h1>{{ $t("countries.france") }}</h1>
          <b-card-group columns>
            <MenuCardSmall
              source="france-coq-au-vin.jpeg"
              :title="$t('menu_carousel.france.title1')"
              subtitle="Coq-au-Vin"
              :ingredients="
                $t('ingredient.rooster') +
                ', ' +
                $t('ingredient.red_wine') +
                ', ' +
                $t('ingredient.mushroom') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.chicken_stock')
              "
              :aromas="$t('ingredient.thyme')"
              price="19.99"
            />
            <MenuCardSmall
              source="france-coq-au-vin.jpeg"
              :title="$t('menu_carousel.france.title1')"
              subtitle="Coq-au-Vin"
              :ingredients="
                $t('ingredient.rooster') +
                ', ' +
                $t('ingredient.red_wine') +
                ', ' +
                $t('ingredient.mushroom') +
                ', ' +
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.chicken_stock')
              "
              :aromas="$t('ingredient.thyme')"
              price="19.99"
            />
            <MenuCardSmall
              source="france-ratatouille.jpg"
              :title="$t('menu_carousel.france.title2')"
              subtitle="Ratatouille"
              :ingredients="
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.carrot') +
                ', ' +
                $t('ingredient.celery') +
                ', ' +
                $t('ingredient.paprika') +
                ', ' +
                $t('ingredient.tomato') +
                ', ' +
                $t('ingredient.eggplant') +
                ', ' +
                $t('ingredient.zucchini')
              "
              :aromas="
                $t('ingredient.garlic') +
                ', ' +
                $t('ingredient.basil') +
                ', ' +
                $t('ingredient.thyme') +
                ', ' +
                $t('ingredient.oregano')
              "
              price="15.99"
            />
            <MenuCardSmall
              source="france-ratatouille.jpg"
              :title="$t('menu_carousel.france.title2')"
              subtitle="Ratatouille"
              :ingredients="
                $t('ingredient.onion') +
                ', ' +
                $t('ingredient.carrot') +
                ', ' +
                $t('ingredient.celery') +
                ', ' +
                $t('ingredient.paprika') +
                ', ' +
                $t('ingredient.tomato') +
                ', ' +
                $t('ingredient.eggplant') +
                ', ' +
                $t('ingredient.zucchini')
              "
              :aromas="
                $t('ingredient.garlic') +
                ', ' +
                $t('ingredient.basil') +
                ', ' +
                $t('ingredient.thyme') +
                ', ' +
                $t('ingredient.oregano')
              "
              price="15.99"
            />
            <MenuCardSmall
              source="france-quiche-ham.jpg"
              :title="$t('menu_carousel.france.title3')"
              subtitle="Quiche Lorraine"
              :ingredients="
                $t('ingredient.ham') +
                ', ' +
                $t('ingredient.gruyere') +
                ', ' +
                $t('ingredient.cream') +
                ', ' +
                $t('ingredient.egg')
              "
              :aromas="$t('ingredient.nutmeg')"
              price="13.99"
            />
            <MenuCardSmall
              source="france-quiche-ham.jpg"
              :title="$t('menu_carousel.france.title3')"
              subtitle="Quiche Lorraine"
              :ingredients="
                $t('ingredient.ham') +
                ', ' +
                $t('ingredient.gruyere') +
                ', ' +
                $t('ingredient.cream') +
                ', ' +
                $t('ingredient.egg')
              "
              :aromas="$t('ingredient.nutmeg')"
              price="13.99"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-group {
  display: flex;
  width: 100%;
}

.title-container {
  display: flex;
  flex-direction: column;
}

h1 {
  margin-bottom: 1.5rem;
  font-family: Great-Vibes;
  font-size: 4rem;
  color: var(--gold);
  text-shadow: 2px 1px var(--text-shadow);
}
</style>