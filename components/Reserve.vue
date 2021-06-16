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
        <b-col>
          <input
            type="text"
            name="event-type"
            id="event-type"
            placeholder="Event Type"
          />
        </b-col>
        <b-col>
          <input
            type="text"
            name="event-date"
            id="event-date"
            placeholder="Event Date"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder=" Subject"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <input
            type="text"
            name="message"
            id="message"
            placeholder=" Message"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <input class="mt-3 px-3" type="submit" id="submit" value="Submit" />
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input:not(input[type="submit"]) {
  width: 100%;
  height: 50px;
  border: 0;
  border-bottom: 2px solid var(--gold);
  background-color: var(--bg);
  color: white;
}
#submit {
  height: 50px;
  border: 2px solid var(--gold);
  background-color: var(--bg);
  border-radius: 5px;
  color: var(--gold);
}

#contact-container {
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: top;
}

#message {
  height: 300px;
}

.image {
  border-radius: 0.5rem;
  border: 4px solid var(--gold);
}

.contact-info {
  width: 30%;
}

.form {
  width: 45%;
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