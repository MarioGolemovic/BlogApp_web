import { ref } from 'vue'

const handleGetNotes = () => {
  const notes = ref([])
  let notess
  const load = async () => {
    let data = await fetch('http://localhost:5000/note/notes')
    notes.value = await data.json()
    notess = JSON.parse(JSON.stringify(notes.value))
    return notess
  }
  return { notes, load, notess }
}
export default handleGetNotes
