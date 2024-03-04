import { ref } from 'vue'

const handleGetPosts = () => {
  const posts = ref([])
  let postss
  const load = async () => {
    let data = await fetch('http://localhost:5000/post/posts')
    posts.value = await data.json()
    postss = JSON.parse(JSON.stringify(posts.value))
    return postss
  }
  return { posts, load, postss }
}
export default handleGetPosts
