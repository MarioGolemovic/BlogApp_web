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
              <div class="btn-group" role="group" v-if="canEdit()">
                <button  class="btn btn-danger" @click="confirmDeleteNote">DELETE</button>
                <router-link  class="btn btn-secondary" :to="'/update/:id' + note.id"
                  >UPDATE</router-link
                >
              </div>
            </div>
          </div>
          <div class="mb-3">
            <h2>Comments:</h2>
            <ul class="list-group">
              <li v-for="comment in comments" :key="comment.id" class="list-group-item">
                <p class="mb-0"><strong>{{ comment.username }}:</strong> {{ comment.comment }}</p>
                <button v-if="comment.userId._id === userStore.UserId || userStore.userEmail === 'mariogolemovic12@gmail.com'" class="btn btn-danger" @click="confirmDeleteComment(comment.id)">DELETE</button>
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
import { ref} from 'vue'
import { useUserStore } from '@/stores/user'


export default {
  props: ['id'],
  setup(props) {
    const userStore = useUserStore();
    const userEmail = userStore.userEmail;
    
    const { note, load } = handleGetNote(props.id)
    load()
    const { deleteNote } = handleDeleteNote(props.id, useRouter())
    const { comments, load_comments } = handleGetCommentsByNote(props.id)
    load_comments()
    const commentText = ref('')
    const addComment = handleAddComment()
    const {deleteComment} = handleDeleteComment()
    
    const confirmDeleteNote = () => {
      if (window.confirm("Jeste li sigurni da želite izbrisati ovu bilješku?")) {
        deleteNote(); 
      }
    };

    const canEdit = () => {
      return userEmail === 'mariogolemovic12@gmail.com';
    };
    
    
    
    const submitComment = async () => {
      await addComment(props.userId, props.id, commentText.value)
      load_comments()
      commentText.value = ''
    }

    const onDeleteComment = async (commentId) => {
      await deleteComment(commentId);
      load_comments();
    }

    const confirmDeleteComment = (commentId) => {
      if (window.confirm("Jeste li sigurni da želite izbrisati ovaj komentar?")) {
        onDeleteComment(commentId);
      }
    };

 
    return { note, deleteNote, comments, commentText, submitComment,deleteComment, canEdit, userStore,onDeleteComment,confirmDeleteNote,confirmDeleteComment}
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
</style>
