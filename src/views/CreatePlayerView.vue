<template>
    <div class="register-photo mt-0">
      <div class="form-container border border-dark mt-0">
        <div class="image-holder"></div>
        <form method="post" @submit.prevent="addplayer">
          <h1 class="text-center" style="margin-bottom: 10px;"><strong>Kreiraj </strong>igrača!</h1>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="name"
              placeholder="IME"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="nationality"
              placeholder="NACIONALNOST"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="position"
              placeholder="POZICIJA"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="injury"
              placeholder="OZLJEDA"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="age"
              placeholder="GODINE"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="number"
              placeholder="BROJ"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="yellow"
              placeholder="ŽUTI KARTONI"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="red"
              placeholder="CRVENI KARTONI"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="goals"
              placeholder="GOLOVI"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="assists"
              placeholder="ASISTENCIJE"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <button class="btn btn-secondary btn-block" type="submit">Dodaj igrača!</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import handleAddPlayer from '../composables/playersJs/handleAddPlayer.js'
  import { useUserStore } from '@/stores/user.js'
  
  const name = ref('')
  const nationality = ref('')
  const position = ref('')
  const injury = ref('')
  const age = ref('')
  const number = ref('')
  const yellow = ref('')
  const red = ref('')
  const goals = ref('')
  const assists = ref('')
  const userStore = useUserStore()
  let user = userStore.user.userId
  const router = useRouter()
  const addplayer = handleAddPlayer(router, name,nationality,position,injury, age,number,yellow,red,goals,assists, user)
  </script>
  
  <style scoped>
  .register-photo {
  padding: 1px;
  
}

.register-photo .image-holder {
  display: table-cell;
  width: auto;
  background: url(../components/assets/vini.jpg);
  background-size: cover;
}

.register-photo .form-container {
  display: table;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  
}
.form-container {
  border: 4px solid black !important; /* Promijenite debljinu granice na 4px */
}

.register-photo form {
  display: table-cell;
  width: 400px;
  background-color: lightgray;
  padding: 38px 30px; /* Smanjen padding sa 40px na 20px */
  color: #505e6c;
  margin-top: 0; /* Uklonjen gornji margin */
  margin-bottom: 10px; /* Smanjen donji margin sa 30px na 10px */
}

@media (max-width: 991px) {
  .register-photo form {
    padding: 20px;
  }
}

.register-photo form h2 {
  font-size: 40px; /* Smanjen font-size sa 50px na 40px */
  line-height: 1;
  margin-bottom: 20px; /* Smanjen razmak sa 30px na 20px */
}

.register-photo form h1 {
  font-size: 32px; /* Smanjen font-size sa 40px na 32px */
  line-height: 1;
  margin-bottom: 20px; /* Smanjen razmak sa 30px na 20px */
  color: rgb(0, 5, 2);
}

.one {
  text-decoration: none;
  color: black;
}
  </style>
  