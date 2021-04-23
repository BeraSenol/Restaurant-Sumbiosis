<template>
  <div>
    <b-carousel :interval="999999" controls indicators>
      <b-carousel-slide img-src="~/static/images/menu-belgium.jpg">
        <b-card-group deck>
          <MenuCard
            source="menu-belgium-stoofvlees.jpg"
            title="Stoofvlees Met Frieten"
            subtitle="Stoofvlees Met Frieten"
            ingredients="Runderstoofvlees, Bruin Bier, Ajuin, Appelstroop, Rode Wijn Azijn, Boter"
            aromas="Laurier, Tijm, Kruidnagel, Zout &amp; Peper"
            price="17.99"
          />
          <MenuCard
            source="menu-belgium-mussels.jpg"
            title="Mosselen met frieten"
            subtitle="Mosselen Met Frieten"
            ingredients="Mosselen, Ajuin, Wortel, Knoflook, Rode Peper, Crème Fraîche"
            aromas="Tijm, Peterselie, Zout &amp; Peper"
            price="23.99"
          />
          <MenuCard
            source="menu-belgium-chichon-au-gratin.jpg"
            title="Witloof Gratin"
            subtitle="Witloof Gratin"
            ingredients="Witloof, Ham, Aardappelen, Gruyère, Parmezaan, Boter, Bloem"
            aromas="Muskaatnoot, Peterselie zout &amp; peper"
            price="13.99"
          />
        </b-card-group>
      </b-carousel-slide>
      <b-carousel-slide img-src="~/static/images/menu-japan.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="~/static/images/menu-italy.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="~/static/images/menu-turkey.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="~/static/images/menu-france.jpg">
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
</style>