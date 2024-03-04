<template>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h3 class="text-center">ZAJEDNO ZA DINAMO!</h3>
            </div>
            <div class="card-body">
              <div v-if="posts.length">
                <PostList :posts="posts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PostList from '../components/PostList.vue'
  import handleGetPosts from '../composables/postsJs/handleGetPosts.js'
  import { usePostsStore } from '@/stores/posts.js'
  export default {
    name: 'HomePost',
    components: { PostList },
    setup() {
      const { posts, load } = handleGetPosts()
      const getPosts = async () => {
        const postss = await load()
        return postss
      }
      getPosts().then(function (result) {
        const postsStore = usePostsStore()
        postsStore.posts = result
      })
      return { posts }
    }
  }
  </script>
  
  <style>
  
  .card-header {
    background-color: rgb(36, 41, 49);
  }
  
  .text-center {
    color: azure;
    font-family: 'Times New Roman', Times, serif;
  }
  </style>
  