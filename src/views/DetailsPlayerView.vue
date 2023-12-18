<template>
    <div class="d-flex align-items-center min-vh-50 mt-3">
      <div class="container mt-5 max-width">
        <div class="row">
          <div class="col-md-8 mx-auto"> 
            <div v-if="player" class="card mb-3">
              <div class="card-header">
                <h1>{{ player.name }}</h1>
              </div>
              <div class="card-body">
                <p class="card-text"><strong>Player nationality:   </strong>{{ player.nationality }}</p>
                <p class="card-text"><strong>Player position:   </strong>{{ player.position }}</p>
                <p class="card-text"><strong>Injury status:   </strong>{{ player.injury }}</p>
                <p class="card-text"><strong>Player age:   </strong>{{ player.age }}</p>
                <p class="card-text"><strong>Player number:   </strong>{{ player.number }}</p>
                <p class="card-text"><strong>Yellow cards:   </strong>{{ player.yellow }}</p>
                <p class="card-text"><strong>Red cards:   </strong>{{ player.red }}</p>
                <p class="card-text"><strong>Player goals:   </strong>{{ player.goals }}</p>
                <p class="card-text"><strong>Player assists:   </strong>{{ player.assists }}</p>
              </div>
              <div class="card-footer">
                <div class="btn-group" role="group" v-if="canEditPlayer()">
                  <button class="btn btn-danger" @click="confirmDeletePlayer">DELETE</button>
                  <router-link class="btn btn-secondary" :to="'/updateplayer/:id' + player.id"
                  >UPDATE</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import handleDeletePlayer from '../composables/playersJs/handleDeletePlayer.js'
  import handleGetPlayer from '../composables/playersJs/handleGetPlayer.js'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/user'
  
  
  export default {
    props: ['id'],
    setup(props) {
      const userStore = useUserStore();
      const userEmail = userStore.userEmail;
      
      const { player, load } = handleGetPlayer(props.id)
      load()
      const { deletePlayer } = handleDeletePlayer(props.id, useRouter())
      
      
      const confirmDeletePlayer = () => {
        if (window.confirm("Jeste li sigurni da želite izbrisati ovog igrača?")) {
          deletePlayer(); 
        }
      };
  
      const canEditPlayer = () => {
        return userEmail === 'mariogolemovic12@gmail.com';
      };
      
      
    
   
      return { player, deletePlayer, canEditPlayer, userStore,confirmDeletePlayer}
    }
  }
  </script>
  <style scoped>
  .btn {
    display: block !important;
  }
  
  .max-width {
    max-width: 65%;
    margin: 0 auto;
  }
  
  
  .card-header {
    background-color: rgb(40, 43, 49);
  }
  
  h1 {
    color: azure;
  }
  </style>
  