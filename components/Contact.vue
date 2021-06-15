<template>
  <b-container fluid id="contact-container" class="my-5">
    <div class="contact-info">
      <ul>
        <li>
          <h3 class="mb-5 mt-2">Contact Information</h3>
        </li>
        <li>
          <p class="mb-5">
            Address:
            <a class="info" href="https://goo.gl/maps/TftP3TcZPnHNjV8F6">
              Elfde-Liniestraat 24, Hasselt 3500
            </a>
          </p>
        </li>
        <li>
          <p class="mb-5">
            Phone: <a class="info" href="tel:011775555">+32 11 77 55 55</a>
          </p>
        </li>
        <li>
          <p class="mb-5">
            Email:
            <a class="info" href="mailto:sumbiosis@contact.be">
              sumbiosis@contact.be
            </a>
          </p>
        </li>
      </ul>
    </div>
    <form class="form" name="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact-form" >
        <b-row>
            <b-col>
                <input type="text" name="name" id="name" placeholder=" Your Name">
            </b-col>
            <b-col>
                <input type="text" name="email" id="email" placeholder=" Your Email">
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <input type="text" name="subject" id="subject" placeholder=" Subject">
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <input type="text" name="message" id="message" placeholder=" Message">
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <input class="mt-3 px-3" type="submit" id="submit" value="Submit">
            </b-col>
        </b-row>
    </form>
  </b-container>
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