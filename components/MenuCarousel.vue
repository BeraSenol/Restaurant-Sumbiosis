<template>
  <div>
    <b-carousel :interval="99999" controls indicators>
      <b-carousel-slide
        img-src="~/static/images/menu-carousel/index-belgium.jpg"
      >
        <div class="title-container">
          <h1>{{ $t("countries.belgium") }}</h1>
          <b-card-group deck>
            <MenuCard
              source="belgium-stoofvlees.jpg"
              :title="$t('menu_carousel.belgium.title1')"
              subtitle="Stoofvlees met Frieten"
              ingredients="Runderstoofvlees, Bruin Bier, Ajuin, Appelstroop, Rode Wijn Azijn, Boter"
              aromas="Laurier, Tijm, Kruidnagel, Zout &amp; Peper"
              price="15.99"
            />
            <MenuCard
              source="belgium-mussels.jpg"
              :title="$t('menu_carousel.belgium.title2')"
              subtitle="Mosselen met Frieten"
              ingredients="Mosselen, Ajuin, Wortel, Knoflook, Rode Peper, Crème Fraîche"
              aromas="Tijm, Peterselie, Zout &amp; Peper"
              price="20.99"
            />
            <MenuCard
              source="belgium-chichon-au-gratin.jpg"
              :title="$t('menu_carousel.belgium.title3')"
              subtitle="Witloof Gratin"
              ingredients="Witloof, Ham, Aardappelen, Gruyère, Parmezaan, Boter, Bloem"
              aromas="Muskaatnoot, Peterselie Zout &amp; Peper"
              price="11.49"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img-src="~/static/images/menu-carousel/index-japan.jpg">
        <div class="title-container">
          <h1>{{ $t("countries.japan") }}</h1>

          <b-card-group deck>
            <MenuCard
              source="japan-ramen.jpg"
              :title="$t('menu_carousel.japan.title1')"
              subtitle="醤油ラーメン (Shōyu Rāmen)"
              ingredients="Varkensbuik, Ei, Ramen, Ajuin, Knoflook, Gember, Sake, Mirin"
              aromas="Bruine Suiker, Sojasaus, Groene Appel, Zout &amp; Peper"
              price="18.99"
            />
            <MenuCard
              source="japan-sushi.jpg"
              :title="$t('menu_carousel.japan.title2')"
              subtitle="サーモン寿司 (Sāmon Sushi)"
              ingredients="Zalm, Sushi Rijst, Rijst Wijn, Rijst Azijn, Nori"
              aromas="Sojasaus, Wasabi, Zout &amp; Peper"
              price="15.99"
            />
            <MenuCard
              source="japan-yakitori.jpg"
              :title="$t('menu_carousel.japan.title3')"
              subtitle="焼き鳥 (Yakitori)"
              ingredients="Kippenvleugels, Ajuin"
              aromas="Bruine Suiker, Sojasaus, Sake, Mirin, Zout &amp; Peper"
              price="13.99"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img-src="~/static/images/menu-carousel/index-italy.jpg">
        <div class="title-container">
          <h1>{{ $t("countries.italy") }}</h1>
          <b-card-group deck>
            <MenuCard
              source="italy-mushroom-risotto.jpg"
              :title="$t('menu_carousel.italy.title1')"
              subtitle="Risotto ai Funghi"
              ingredients="Arborio Rice, Champignon, Shallots, Parmesan Cheese, Beef Stock"
              aromas="Knoflook, Rosemarijn, Witte Wijn, Zout &amp; Peper"
              price="18.99"
            />
            <MenuCard
              source="italy-gnocchi-alla-sorrentina.jpg"
              :title="$t('menu_carousel.italy.title2')"
              subtitle="Gnocchi alla Sorrentina"
              ingredients="Gnocchi, Tomatoes, Mozzarella"
              aromas="garlic, red pepper, basil"
              price="11.99"
            />
            <MenuCard
              source="italy-spagetti-carbonara.jpg"
              :title="$t('menu_carousel.italy.title3')"
              subtitle="Spagetti alla Carbonara"
              ingredients="spagetti, pancetta, pecorino cheese, parmesan, eggs, "
              aromas="garlic, parsley, Zout &amp; Peper"
              price="13.99"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        img-src="~/static/images/menu-carousel/index-turkey.jpg"
      >
        <div class="title-container">
          <h1>{{ $t("countries.turkey") }}</h1>
          <b-card-group deck>
            <MenuCard
              source="turkey-kofte.jpg"
              :title="$t('menu_carousel.turkey.title1')"
              subtitle="Köfte"
              ingredients="Ground Lamb, Ground Beef, Onion"
              aromas="Peterselie, Munt, Sumak, Komijn, Oregano, Paprika, Zout &amp; Peper"
              price="19.99"
            />
            <MenuCard
              source="turkey-manti.jpg"
              :title="$t('menu_carousel.turkey.title2')"
              subtitle="Mercigmek Mantı"
              ingredients="Pasta, Red Lentils, Onion, Yogurt"
              aromas="Peterselie, Sumak, Knoflook, Munt, Limoen, Rode Peper, Zout &amp; Peper"
              price="15.99"
            />
            <MenuCard
              source="turkey-dolma.jpg"
              :title="$t('menu_carousel.turkey.title3')"
              subtitle="Dolma"
              ingredients="White Rice, Grape Leaves, Ground Beef, Tomato Sauce"
              aromas="Peterselie, Komijn, Munt, Zout &amp; Peper"
              price="13.99"
            />
          </b-card-group>
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        img-src="~/static/images/menu-carousel/index-france.jpg"
      >
        <div class="title-container">
          <h1>{{ $t("countries.france") }}</h1>
          <b-card-group deck>
            <MenuCard
              source="france-coq-au-vin.jpeg"
              :title="$t('menu_carousel.france.title1')"
              subtitle="Coq-au-Vin"
              ingredients="Rooster, Red Wine, Mushrooms, Onion, Chicken Stock"
              aromas="Tijm, Zout &amp; Peper"
              price="19.99"
            />
            <MenuCard
              source="france-ratatouille.jpg"
              :title="$t('menu_carousel.france.title2')"
              subtitle="Ratatouille"
              ingredients="Ajuin, Wortel, Selder, Paprika, Tomaten, Aubergine, Pompoen, Courgette"
              aromas="Knoflook, Basilicum, Tijm, Zout &amp; Peper"
              price="15.99"
            />
            <MenuCard
              source="france-quiche-ham.jpg"
              :title="$t('menu_carousel.france.title3')"
              subtitle="Quiche Lorraine"
              ingredients="Ham, Gruyère, Cream, Eggs"
              aromas="Nootmuskaat, Zout &amp; Peper"
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
  flex-wrap: nowrap;
  width: 100%;
}

.title-container {
  display: flex;
  flex-direction: column;
}

h1 {
  margin-bottom: 0.75rem;
  font-family: Great-Vibes;
  font-size: 3rem;
  color: var(--gold);
  text-shadow: 2px 1px var(--text-shadow);
}
</style>