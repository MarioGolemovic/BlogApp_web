<template>
  <div class="contact-container">
    <div class="row">
      <div class="col-md-5">
        <img
          src="../components/assets/dresovi.jpeg"
          alt="slika"
          class="img-fluid img-thumbnail custom-image"
        />
      </div>
      <div class="col-md-7">
        <div class="about-me">
          <h2>O meni!</h2>
          <strong>
            <p>
              Kao strastveni navijač Real Madrida, osjećam duboku povezanost s klubom. Od najranijih
              trenutaka života, Real Madrid je bio neizostavan dio moje svakodnevice.Biti navijač
              Real Madrida za mene je više od strasti; to je način života, dokazajući trajnu moć
              sporta da nas ujedini, nadahne i podigne. Ponosan sam što stojim uz Real Madrid,
              navijajući s punim srcem, svjestan da smo svakom pobjedom, svakim golom i svakim
              trenutkom sjaja dio nečega zaista posebnog. Hala Madrid!
            </p>
          </strong>
        </div>
        <div class="contact-info">
          <h2>Kontakt:</h2>
          <ul>
            <li><strong>Ime:</strong> Mario Golemović</li>
            <li><strong>Email:</strong> mariogolemovic12@gmail.com</li>
            <li><strong>Telefon:</strong> +385 99 422 0001</li>
            <li><strong>Adresa:</strong> sv.Antuna Padovanskog, Selna 99a</li>
          </ul>
        </div>
        <div class="social-media">
          <h2>Zaprati me!:</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/m.golemovic/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/mario.golemovic.7" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h2 {
  color: rgb(51, 40, 2);
}

.contact-container {
  padding: 20px;
  
}

.about-me {
  margin-bottom: 20px; /* Povećajte udaljenost između naslova i teksta ovdje */
}

.contact-info ul,
.social-media ul {
  padding-left: 0; /* Uklonite unutarnji padding za <ul> */
  list-style: none; /* Uklonite stilizirane točke */
}

.contact-info li,
.social-media li {
  margin-bottom: 10px; /* Povećajte udaljenost između pojedinih stavki */
}

.img-thumbnail {
  border: 1px solid #0f0e0e;
  border-radius: 4px;
  padding: 5px;
}

.custom-image {
  width: 100%; /* Promijenite širinu slike */
  height: 73%;
}

.social-media i {
  font-size: 30px;
  color: #0f0e0e;
}
</style>
