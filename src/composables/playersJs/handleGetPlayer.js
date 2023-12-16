import { ref } from 'vue'

const handleGetPlayer = (id) => {
  const player = ref(null)
  const load = async () => {
    let data = await fetch('http://localhost:5000/player?id=' + id)
    let playerdata = await data.json()
    player.value = playerdata
  }
  return { player, load }
}
export default handleGetPlayer
