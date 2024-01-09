<template>
    <div class="register-photo">
      <div class="form-container border border-dark">
        <div class="image-holder"></div>
        <form method="post" @submit.prevent="updateplayer">
          <h1 class="text-center" style="margin-bottom: 10px;"><strong>Update </strong>a player!</h1>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="name"
              placeholder="Name"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="nationality"
              placeholder="Nationality"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="position"
              placeholder="Position"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="injury"
              placeholder="Injury"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="age"
              placeholder="Age"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="number"
              placeholder="Number"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="yellow"
              placeholder="Yellow"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="red"
              placeholder="Red"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="goals"
              placeholder="Goals"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-2"
              type="text"
              v-model="assists"
              placeholder="Assists"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <button class="btn btn-secondary btn-block" type="submit">Update player</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import handleUpdatePlayer from '../composables/playersJs/handleUpdatePlayer.js'

  
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
  const router = useRouter()
  const playerID = router.currentRoute.value.params.id.substring(3)
  const updateplayer = handleUpdatePlayer(router, name,nationality,position,injury, age,number,yellow,red,goals,assists, playerID)
  </script>
  
  <style scoped>
  .register-photo {
  padding: 15px;
  
}

.register-photo .image-holder {
  display: table-cell;
  width: auto;
  background: url(../components/assets/modric.jpg);
  background-size: cover;
}

.register-photo .form-container {
  display: table;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  
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
  color: rgb(11, 11, 71);
}

.one {
  text-decoration: none;
  color: black;
}
  </style>
  