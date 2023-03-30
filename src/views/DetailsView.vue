<template>
  <div class="d-flex align-items-center min-vh-50">
    <div class="container mt-5 max-width">
      <div class="row">
        <div class="col">
          <div v-if="note" class="card mb-3">
            <div class="card-header">
              <h1>{{ note.title }}</h1>
            </div>
            <div class="card-body">
              <p class="card-text">{{ note.description }}</p>
            </div>
            <div class="card-footer">
              <div class="btn-group" role="group">
                <button class="btn btn-danger" @click="deleteNote">DELETE</button>
                <router-link class="btn btn-secondary" :to="'/update/:id' + note.id"
                  >UPDATE</router-link
                >
              </div>
            </div>
          </div>
          <div class="mb-3">
            <h2>Komentari</h2>
            <ul class="list-group">
              <li v-for="comment in comments" :key="comment.id" class="list-group-item">
                <p class="mb-0">{{ comment.comment }}</p>
                <button class="btn btn-danger" @click="deleteComment(comment.id)">DELETE</button>
              </li>
            </ul>
          </div>
          <form @submit.prevent="submitComment">
            <div class="form-group">
              <label for="comment">Add a comment:</label>
              <input type="text" class="form-control" id="comment" v-model="commentText" />
            </div>
            <button type="submit" class="btn btn-secondary mt-3 mb-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import handleDeleteNote from '../composables/notesJs/handleDeleteNote.js'
import handleGetNote from '../composables/notesJs/handleGetNote.js'
import handleAddComment from '../composables/comments/handleAddComment.js'
import handleGetCommentsByNote from '../composables/comments/handleGetCommentsByNote.js'
import handleDeleteComment from '../composables/comments/handleDeleteComment.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  props: ['id', 'userId'],
  setup(props) {
    const { note, load } = handleGetNote(props.id)
    load()
    const { deleteNote } = handleDeleteNote(props.id, useRouter())
    const { comments, load_comments } = handleGetCommentsByNote(props.id)
    load_comments()
    const commentText = ref('')
    const addComment = handleAddComment()
    const {deleteComment} = handleDeleteComment()
    const submitComment = async () => {
      await addComment(props.userId, props.id, commentText.value)
      load_comments()
      commentText.value = ''
    }
    return { note, deleteNote, comments, commentText, submitComment,deleteComment }
  }
}
</script>

<style scoped>
.btn {
  display: block !important;
}

.max-width {
  max-width: 65%;
  margin: 0 auto;
}

.text-center {
  color: rgb(18, 18, 74);
}

.card-header {
  background-color: rgb(13, 43, 96);
}

h1 {
  color: azure;
}
</style>
