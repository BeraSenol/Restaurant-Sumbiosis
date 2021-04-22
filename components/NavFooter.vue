<template>
  <footer class="full-width">
    <b-container class="footer-container">
      <ul>
        <li class="margin-x-2rem">
          <b-img height="40%" center src="~/static/images/logo-gold.png" />
        </li>
      </ul>
      <ul>
        <li><h3>Sumbiosis</h3></li>
        <li><p>Home</p></li>
        <li><p>Menu</p></li>
        <li><p>Our Story</p></li>
      </ul>
      <ul>
        <li><h3>&nbsp;</h3></li>
        <li><p>Blog</p></li>
        <li><p>Contact</p></li>
        <li><p>Reservation</p></li>
      </ul>
      <ul>
        <li><h3 class="icon">Follow Us</h3></li>
        <li>
          <span>
            <p>
              <FacebookIcon class="icon" /><a href="https://www.facebook.com/">Facebook</a
              >
            </p>
          </span>
        </li>
        <li>
          <span>
            <p>
              <InstagramIcon class="icon" /><a href="https://www.instagram.com/"
                >Instagram
              </a>
            </p>
          </span>
        </li>
        <li>
          <span>
            <p>
              <TwitterIcon class="icon" /><a href="https://twitter.com/"
                >Twitter</a
              >
            </p>
          </span>
        </li>
      </ul>
    </b-container>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: var(--bg);
  height: 300px;
  border-top: 3px var(--gold) solid;
  padding-left: 10%;
  padding-right: 10%;
}
h3 {
  font-family: Cormorant-Garamond;
  font-style: italic;
  color: var(--gold);
  font-weight: 600;
}

ul {
  width: 100%;
}

ul:first-child {
  width: 10%;
}

li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

p {
  color: var(--text-color);
  font-family: DM Sans, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  line-height: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  transition: ease-in-out var(--transition-speed);
  cursor: pointer;
}

p:hover {
  color: var(--gold);
  transition: ease-in-out var(--transition-speed);
}

.footer-container {
  display: flex;
  justify-content: space-around;
  height: 150px;
  margin-top: 3rem;
}

.icon {
  position: relative;
  right: 0.75rem;
}

a {
  color: var(--text-color);
  transition: ease-in-out var(--transition-speed);
}

a:link {
  color: var(--text-color);
}

a:visited {
  color: var(--text-color);
}

a:hover {
  color: var(--gold);
  text-decoration: none;
  transition: ease-in-out var(--transition-speed);
}

a:active {
  color: var(--gold);
}
</style>