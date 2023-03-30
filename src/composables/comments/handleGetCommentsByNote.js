import { ref } from 'vue'

const handleGetCommentsByNote = (noteID) => {
  const comments = ref([])
  const load_comments = async () => {
    let data = await fetch('http://localhost:5000/comment/?id=' + noteID)
    const noteData = await data.json()
    comments.value = noteData.comments
  }
  return { comments, load_comments }
}
export default handleGetCommentsByNote
