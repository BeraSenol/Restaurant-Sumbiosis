<template>
  <div class="our-story-container">
    <NewsLetter id="news" />
    <br />
    <br />
    <br />
    <br />
    <div class="welcome-container">
      <b-row>
        <b-col>
          <h3>Our Story</h3>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h1>Welcome to Sumbiosis</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="flx">
            <hr />
            <font-awesome-icon
              id="icon"
              class="margin-x-1rem margin-y-1rem"
              icon="utensils"
            />
            <hr />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="text-center">
            <span class="font-cormorant">
              <a class="wiki-ref" href="https://en.wikipedia.org/wiki/Symbiosis"
                >Symbiosis</a
              >
            </span>
            <span class="noun">noun</span>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h4 class="text-center mb-2 font-cormorant">
            symbíōsis | sym·​bi·​o·​sis
          </h4>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col cols="5">
          <p class="text-center">
            Seebreeze was the first restaurant to open in Egypt, the resturant
            was designed with the history in mind we have created a soft
            industrial dining room, combined with an open kitchen, coffee take
            out bar and alovely awesome on site coffee roastery.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="flx">
            <hr />
            <font-awesome-icon
              id="icon"
              class="margin-x-1rem margin-y-1rem"
              icon="map-marked-alt"
            />
            <hr />
          </div>
        </b-col>
      </b-row>
      <b-container>
        <b-row>
          <b-col class="text-r dm-sans">
            <p>
              <a class="info" href="https://goo.gl/maps/TftP3TcZPnHNjV8F6">
                Elfde-Liniestraat 24
              </a>
            </p>
            <p>
              <a class="info" href="https://goo.gl/maps/TftP3TcZPnHNjV8F6"
                >Hasselt 3500</a
              >
            </p>
          </b-col>
          <b-col class="dm-sans">
            <p><a class="info" href="tel:011775555">+32 11 77 55 55</a></p>
            <p>
              <a class="info" href="mailto:sumbiosis@contact.be">
                sumbiosis@contact.be
              </a>
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <b-btn class="gold-btn margin-y-2rem">
              <nuxt-link :to="localePath('contact')">
                {{ $t("btn.contact") }}!
              </nuxt-link>
            </b-btn>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: Cormorant-Garamond;
}

h3 {
  font-family: Great-Vibes;
  text-align: center;
  color: var(--gold);
  font-size: 2rem;
}

h4 {
  font-size: 1.25rem;
}

#icon {
  color: var(--gold);
  font-size: 1.25rem;
}

#news {
  border-radius: 2px;
  position: absolute;
  left: 15%;
  top: calc(-130px / 2);
}

.text-r {
  text-align: right;
}

.dm-sans {
  font-family: DM-Sans;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1rem;
}
.our-story-container {
  background-color: var(--bg-secondary);
  position: relative;
}

.font-cormorant {
  font-family: Cormorant-Garamond;
}

.flx {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-center {
  text-align: center;
}

.noun {
  font-family: Great-Vibes;
  color: var(--gold);
}

hr {
  width: 7.5rem;
  height: 1px;
  background: var(--gold);
}

.info {
  color: var(--text-color);
}

.info:link {
  color: var(--text-color);
}

.info:visited {
  color: var(--text-color);
}

.info:hover {
  color: var(--text-color);
  text-decoration: none;
}

.info:active {
  color: var(--text-color);
}

.wiki-ref {
  color: var(--text-color);
}

.wiki-ref:link {
  color: var(--text-color);
}

.wiki-ref:visited {
  color: var(--text-color);
}

.wiki-ref:hover {
  color: var(--text-color);
  text-decoration: none;
}

.wiki-ref:active {
  color: var(--text-color);
}
</style>