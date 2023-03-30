import { ref } from 'vue'

const handleGetNote = (id) => {
  const note = ref(null)
  const load = async () => {
    let data = await fetch('http://localhost:5000/note?id=' + id)
    let notedata = await data.json()
    note.value = notedata
  }
  return { note, load }
}
export default handleGetNote
