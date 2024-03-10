<template>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h1 class="text-center">Galácticos</h1>
            </div>
            <div class="card-body">
              <div v-if="players.length">
                <PlayerList :players="players" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PlayerList from '../components/PlayerList.vue'
  import handleGetPlayers from '../composables/playersJs/handleGetPlayers.js'
  import { usePlayersStore } from '@/stores/players.js'
  export default {
    name: 'Players',
    components: { PlayerList },
    setup() {
      const { players, load } = handleGetPlayers()
      const getPlayers = async () => {
        const playerss = await load()
        return playerss
      }
      getPlayers().then(function (result) {
        const notesStore = usePlayersStore()
        notesStore.notes = result
      })
      return { players }
    }
  }
  </script>
  
  <style >
  
  body {
    background-color: #dfb93c;
  }
  
  
  .card-header {
    background-color: rgb(36, 41, 49);
  }
  
  .text-center {
    color: azure;
    font-family: 'Times New Roman', Times, serif;
  }
  </style>
  