<template>
  <div class="news-container">
    <div class="text-container full-width">
      <h2>Subscribe To Our Newsletter</h2>
      <p>Keep your newsletter consistent by cooking up recurring topics, updated with new info in each.</p>
    </div>
    <div class="mail-container full-width">
      <b-input-group id="input-group">
        <template #prepend>
          <b-input-group-text class="bg">
            <font-awesome-icon id="icon" :icon="['far', 'envelope']"></font-awesome-icon>
          </b-input-group-text>
        </template>
        <b-form-input id="mail-input" class="bg" placeholder="Your Email Address"></b-form-input>

        <template #append>
          <b-btn class="gold-btn"> Subscribe </b-btn>
        </template>
      </b-input-group>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
    font-family: Cormorant-Garamond;
    font-weight: lighter;
}

#icon {
    color: var(--gold);
    font-size: 1.2rem;
}

.bg {
    background-color: var(--bg);
    border-color: var(--gold);
}

.mail-input {
    color: var(--gold);
}

.news-container {
  display: flex;
  height: 140px;
  width: 70%;
  background-color: var(--bg);
  border: 3px solid var(--gold);
}

.full-width {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>