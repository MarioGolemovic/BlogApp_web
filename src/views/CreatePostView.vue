<template>
    <div class="register-photo">
      <div class="form-container border border-dark">
        <div class="image-holder"></div>
        <form method="post" @submit.prevent="addpost">
          <h1 class="text-center"><strong>Create </strong>a post!</h1>
          <div class="form-group">
            <input
              class="form-control mb-3"
              type="text"
              v-model="title"
              placeholder="Title"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control mb-3"
              type="text"
              v-model="description"
              placeholder="Description"
              rows="8"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-secondary btn-block" type="submit">Add post</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import handleAddPost from '../composables/postsJs/handleAddPost.js'
  import { useUserStore } from '@/stores/user.js'
  
  const title = ref('')
  const description = ref('')
  const userStore = useUserStore()
  let user = userStore.user.userId
  const router = useRouter()
  const addpost = handleAddPost(router, title, description, user)
  </script>
  
  <style scoped>
  .register-photo {
    padding: 80px 0;
  }
  
  .register-photo .image-holder {
    display: table-cell;
    width: auto;
    background: url(../components/assets/note1.jpeg);
    background-size: cover;
  }
  
  .register-photo .form-container {
    display: table;
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  }
  
  .register-photo form {
    display: table-cell;
    width: 400px;
    background-color: lightgray;
    padding: 40px 60px;
    color: #505e6c;
  }
  
  @media (max-width: 991px) {
    .register-photo form {
      padding: 40px;
    }
  }
  
  .register-photo form h2 {
    font-size: 50px;
    line-height: 1;
    margin-bottom: 30px;
  }
  
  .register-photo form h1 {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 30px;
    color: rgb(11, 11, 71);
  }
  
  .one {
    text-decoration: none;
    color: black;
  }
  </style>
  