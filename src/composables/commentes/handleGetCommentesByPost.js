import { ref } from 'vue'

const handleGetCommentesByPost = (postID) => {
  const commentes = ref([])
  const load_commentes = async () => {
    let data = await fetch('http://localhost:5000/commente/?id=' + postID)
    const postData = await data.json()
    commentes.value = postData.commentes
  }
  return { commentes, load_commentes } 
}
export default handleGetCommentesByPost
