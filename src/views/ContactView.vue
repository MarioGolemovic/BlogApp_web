<template>
    <div class="contact-container">
      <div class="row">
  
        <!-- Povećajte veličinu kolone za sliku -->
        <div class="col-md-5"> 
          <img src="../components/assets/dzg.jpeg" alt="slika" class="img-fluid img-thumbnail custom-image">
        </div>
  
        <!-- Tekst o vama i kontakt informacije na desnoj strani -->
        <div class="col-md-7"> <!-- Smanjite veličinu kolone za tekst -->
          <div class="about-me">
            <h2>About me!</h2>
           <strong> <p>Hello! I'm an avid Dinamo Zagreb fan, deeply passionate about football. I've attended numerous matches in both the Croatian First Football League (HNL) and various European competitions. The electric atmosphere, victories, and even defeats have only strengthened my dedication to supporting Dinamo. Being a fan is more than a hobby; it's a way of life that brings joy, camaraderie, and a shared love for the beautiful game. Dinamo Zagreb is not just a team; it's a part of who I am. Forever proud to cheer them on!</p></strong>
          </div>
  
          <!-- Lista kontaktnih informacija -->
          <div class="contact-info">
            <h2>Contact:</h2>
            <ul>
              <strong>
              <li>Name: Mario Golemović</li>
              <li>Email: mariogolemovic12@gmail.com</li>
              <li>Phone: +385 99 422 0001</li>
              <li>Address: sv.Antuna Padovanskog, Selna 99a</li>   
            </strong>         
            </ul>
          </div>
   
          <!-- Dodajte društvene ikone -->
          <div class="social-media">
            <h2>Follow me:</h2>
            <ul>
              <li><a href="https://www.instagram.com/m.golemovic/" target="_blank"><i class="fab fa-instagram"></i></a></li>
              <li><a href="https://www.facebook.com/mario.golemovic.7" target="_blank"><i class="fab fa-facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>

   h2 {
    color: rgb(210, 222, 233);
   }
    /* Stilizacija može biti prilagođena prema potrebi */
    .contact-container {
      padding: 60px;
    }
  
    .about-me {
      margin-bottom: 10px;
    }
  
    .contact-info {
      margin-top: 20px;
    }
  
    .social-media {
      margin-top: 20px;
    }
  
    /* Dodajte okvir slici i postavite maksimalne dimenzije */
    .img-thumbnail {
      border: 1px solid #0f0e0e; /* Dodajte okvir oko slike */
      border-radius: 4px; /* Dodajte blagi radijus zaobljenja */
      padding: 5px; /* Dodajte malo prostora oko slike */
    }
  
    .custom-image {
      width: 100%; /* Postavite širinu slike na 100% roditeljskog kontejnera */
      max-width: 100%; /* Postavite maksimalnu širinu slike na 300px (prilagodite prema potrebi) */
      height: auto; /* Automatski prilagodite visinu kako biste očuvali omjer slike */
      margin-right: 5%; /* Povećajte margine s desne strane slike */
    }
  
    .social-media ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }
  
    .social-media i {
      font-size: 30px;
      color: #0f0e0e;
    }
  </style>
  