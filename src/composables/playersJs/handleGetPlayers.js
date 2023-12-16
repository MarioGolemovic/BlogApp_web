import { ref } from 'vue'

const handleGetPlayers = () => {
  const players = ref([])
  let playerss
  const load = async () => {
    let data = await fetch('http://localhost:5000/player/players')
    players.value = await data.json()
    playerss = JSON.parse(JSON.stringify(players.value))
    return playerss
  }
  return { players, load, playerss }
}
export default handleGetPlayers
