<template>
  <b-container fluid class="our-story-container">
    <b-container class="welcome-container">
      <b-row>
        <b-col>
          <h3 class="mt-3">Our Story</h3>
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
            <span class="font-cormorant" title="Definition:"> Symbiosis </span>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h4 class="text-center mb-3 font-cormorant">
            symbíōsis | sym·​bi·​o·​sis
          </h4>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col cols="8">
          <p class="text-center my-1">
            {{ $t("our_story.body") }}
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
            <b-btn class="gold-btn my-4">
              <nuxt-link :to="localePath('contact')">
                {{ $t("btn.contact") }}!
              </nuxt-link>
            </b-btn>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container class="image-container">
      <b-img
        fluid
        width="350px"
        thumbnail
        id="img-upper"
        src="~/static/images/welcome-upper.jpg"
      ></b-img>
      <b-img
        fluid
        width="350px"
        thumbnail
        id="img-lower"
        src="~/static/images/welcome-lower.jpg"
      ></b-img>
    </b-container>
  </b-container>
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

#img-upper {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

#img-lower {
  position: absolute;
  bottom: 0;
  left: 0;
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
  min-height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-container {
  border: 4px solid var(--gold);
  padding: 1rem;
  margin-left: 4rem;
  margin-right: 2rem;
  background-color: var(--bg);
  border-radius: 5px;
  height: 600px;
  box-shadow: var(--card-shadow);
}

.image-container {
  position: relative;

  height: 600px;
  margin-right: 4rem;
  margin-left: 2rem;
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