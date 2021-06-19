<template>
  <div id="contact-container" class="my-5">
    <div class="contact-info">
      <b-img src="~/static/images/reservation.jpg" width="400" class="image" />
    </div>
    <form
      class="form"
      name="contact-form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <b-row>
        <b-form-datepicker id="example-datepicker" :placeholder="$t('reserve.select_date')" class="ml-4 mr-2 mb-2 p-2"></b-form-datepicker>
      </b-row>
      <b-row>
        <b-col>
          <input
            type="text"
            name="contact-name"
            id="contact-name"
            :placeholder="$t('reserve.name')"
          />
        </b-col>
        <b-col>
          <input
            type="number"
            name="guest-count"
            id="guest-count"
            :placeholder="$t('reserve.guests')"
            min="1"
            max="12"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <input
            type="email"
            name="email"
            id="email"
            :placeholder="$t('reserve.email')"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <input
            type="phone"
            name="phone"
            id="phone"
            :placeholder="$t('reserve.phone')"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <input
            type="text"
            name="message"
            id="message"
           :placeholder="$t('reserve.message')"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="flx-center">
          <input class="mt-3 px-3" type="submit" id="submit" :value="$t('reserve.submit')" />
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
import index from "../pages/index.vue";
export default {
  components: { index },
};
</script>

<style scoped>
form {
  background-color: var(--bg-secondary);
  padding: 1rem;
  border-radius: 0.25rem;
  width: 45%;
}

#example-datepicker {
  border: 0;
}

.row {
  margin-right: 0;
}

input:not(input[type="submit"]) {
  width: 100%;
  height: 50px;
  border: 0;
  border-bottom: 2px solid var(--gold);
  background-color: var(--bg);
  color: white;
  margin: 0.5rem;
  border-radius: 0.25rem;
  padding: 1rem;
}

input:not(input[type="submit"]):hover::placeholder {
  color: var(--gold);
  transition: 0.5s ease-in-out all;
}

input:not(input[type="submit"])::placeholder {
  color: white;
  transition: 0.5s ease-in-out all;
}

#submit {
  height: 50px;
  border: 2px solid var(--gold);
  background-color: var(--bg);
  border-radius: 5px;
  color: var(--text-color);
  margin: 0.5rem;
}

#contact-container {
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: top;
}

#message {
  height: 250px;
}

.image {
  border-radius: 0.5rem;
  border: 4px solid var(--gold);
}

.contact-info {
  width: 30%;
}

.info {
  color: var(--gold);
}

.info:link {
  color: var(--gold);
}

.info:visited {
  color: var(--gold);
}

.info:hover {
  color: var(--gold);
  text-decoration: none;
}

.info:active {
  color: var(--text-color);
}
</style>