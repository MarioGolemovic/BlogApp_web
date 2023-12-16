<template>
    <div class="register-photo mt-0">
      <div class="form-container border border-dark mt-0">
        <div class="image-holder"></div>
        <form method="post" @submit.prevent="addplayer">
          <h1 class="text-center"><strong>Create </strong>a player!</h1>
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
            <button class="btn btn-secondary btn-block" type="submit">Add player</button>
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
  const addplayer = handleAddPlayer(router, name,position,injury, age,number,yellow,red,goals,assists, user)
  </script>
  
  <style scoped>
  .register-photo {
    padding: 30px;
  }
  
  .register-photo .image-holder {
    display: table-cell;
    width: auto;
    background: url(../components/assets/PXL_141017_18367757-e1675808829780.jpg);
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
    padding: 40px 30px;
    color: #505e6c;
  }
  
  @media (max-width: 991px) {
    .register-photo form {
      padding: 20px;
    }
  }
  
  .register-photo form h2 {
    font-size: 50px;
    line-height: 1;
    margin-bottom: 30px;
  }
  
  .register-photo form h1 {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 30px;
    color: rgb(11, 11, 71);
  }
  
  .one {
    text-decoration: none;
    color: black;
  }
  </style>
  