<template>
  <div class="d-flex align-items-center min-vh-50">
    <div class="container mt-5 max-width">
      <div class="row">
        <div class="col">
          <div v-if="post" class="card mb-3">
            <div class="card-header">
              <h1>{{ post.title }}</h1>
            </div>
            <div class="card-body">
              <p class="card-text">{{ post.description }}</p>
            </div>
            <div class="card-footer">
              <div class="btn-group" role="group" v-if="canEdit()">
                <button class="btn btn-danger" @click="confirmDeletePost">OBRIŠI</button>
                <router-link class="btn btn-secondary" :to="'/updatepost/:id' + post.id"
                  >AŽURIRAJ</router-link
                >
              </div>
            </div>
          </div>
          <div class="mb-3">
            <h2>Komentari:</h2>
            <ul class="list-group">
              <li v-for="commente in commentes" :key="commente.id" class="list-group-item">
                <p class="mb-0">
                  <strong>{{ commente.username }}:</strong> {{ commente.commente }}
                </p>
                <button
                  v-if="
                    commente.userId._id === userStore.UserId ||
                    userStore.userEmail === 'mariogolemovic12@gmail.com'
                  "
                  class="btn btn-danger"
                  @click="confirmDeleteCommente(commente.id)"
                >
                  OBRIŠI
                </button>
              </li>
            </ul>
          </div>
          <form @submit.prevent="submitCommente">
            <div class="form-group">
              <label for="commente"><h5>Dodaj komentar:</h5></label>
              <input type="text" class="form-control" id="commente" v-model="commenteText" />
            </div>
            <button type="submit" class="btn btn-secondary mt-3 mb-3">POTVRDI</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import handleDeletePost from '../composables/postsJs/handleDeletePost.js'
import handleGetPost from '../composables/postsJs/handleGetPost.js'
import handleAddCommente from '../composables/commentes/handleAddCommente.js'
import handleGetCommentesByPost from '../composables/commentes/handleGetCommentesByPost.js'
import handleDeleteCommente from '../composables/commentes/handleDeleteCommente.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

export default {
  props: ['id'],
  setup(props) {
    const userStore = useUserStore()
    const userEmail = userStore.userEmail

    const { post, load } = handleGetPost(props.id)
    load()
    const { deletePost } = handleDeletePost(props.id, useRouter())
    const { commentes, load_commentes } = handleGetCommentesByPost(props.id)
    load_commentes()
    const commenteText = ref('')
    const addCommente = handleAddCommente()
    const { deleteCommente } = handleDeleteCommente()

    const confirmDeletePost = () => {
      if (window.confirm('Jeste li sigurni da želite izbrisati ovu bilješku?')) {
        deletePost()
      }
    }

    const canEdit = () => {
      return userEmail === 'mariogolemovic12@gmail.com'
    }

    const submitCommente = async () => {
      await addCommente(props.userId, props.id, commenteText.value)
      load_commentes()
      commenteText.value = ''
    }

    const onDeleteCommente = async (commenteId) => {
      await deleteCommente(commenteId)
      load_commentes()
    }

    const confirmDeleteCommente = (commenteId) => {
      if (window.confirm('Jeste li sigurni da želite izbrisati ovaj komentar?')) {
        onDeleteCommente(commenteId)
      }
    }

    return {
      post,
      deletePost,
      commentes,
      commenteText,
      submitCommente,
      deleteCommente,
      canEdit,
      userStore,
      onDeleteCommente,
      confirmDeletePost,
      confirmDeleteCommente
    }
  }
}
</script>
<style scoped>
h2 {
  color: aliceblue;
}

label {
  color: antiquewhite;
}
.btn {
  display: block !important;
}

.max-width {
  max-width: 65%;
  margin: 0 auto;
}

.card-header {
  background-color: rgb(40, 43, 49);
}

h1 {
  color: azure;
}
h2 {
  color: black;
}
h5 {
  color: black;
}
</style>
