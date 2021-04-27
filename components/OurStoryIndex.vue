<template>
  <div class="our-story-container full-width">
    <NewsLetter id="news" />
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
  margin-top: 100px;
  font-family: Great-Vibes;
  text-align: center;
  color: var(--gold);
}

#icon {
  color: var(--gold);
  font-size: 1.25rem;
}

#news {
  border-radius: 2px;
  position: absolute;
  left: 15%;
  top: calc(-150px / 2);
}

.our-story-container {
  background-color: var(--bg-secondary);
  position: relative;
}

.flx {
  display: flex;
  align-items: center;
  justify-content: center;
}

hr {
  width: 7.5rem;
  height: 1px;
  background: var(--gold);
}
</style>