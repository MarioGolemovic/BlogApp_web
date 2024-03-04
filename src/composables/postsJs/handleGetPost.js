import { ref } from 'vue'

const handleGetPost = (id) => {
  const post = ref(null)
  const load = async () => {
    let data = await fetch('http://localhost:5000/post?id=' + id)
    let postdata = await data.json()
    post.value = postdata
  }
  return { post, load }
}
export default handleGetPost
