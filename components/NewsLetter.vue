<template>
  <div class="news-container">
    <div class="text-container full-width">
      <h2>{{ $t("news_letter.subscribe") }}.</h2>
      <p>{{ $t("news_letter.body") }}</p>
    </div>
    <div class="mail-container full-width">
      <form
        name="subscription-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="subscription-form" />
        <b-input-group id="input-group">
          <template #prepend>
            <b-input-group-text class="bg">
              <font-awesome-icon id="icon" :icon="['far', 'envelope']">
              </font-awesome-icon>
            </b-input-group-text>
          </template>
          <b-form-input
            id="mail-input"
            class="bg"
            :placeholder="$t('news_letter.email')"
          >
          </b-form-input>

          <template #append>
            <b-btn class="gold-btn"> {{ $t("news_letter.btn") }} </b-btn>
          </template>
        </b-input-group>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-family: DM-Sans;
  margin-bottom: 0.25rem;
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
  height: 120px;
  width: 70%;
  background-color: var(--bg);
  border: 3px solid var(--gold);
  border-radius: 5px;
}

.full-width {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>