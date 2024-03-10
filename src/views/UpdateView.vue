<template>
  <div class="register-photo">
    <div class="form-container border border-dark">
      <div class="image-holder"></div>
      <form method="post" @submit.prevent="updatenote">
        <h1 class="text-center"><strong>Ažuriraj </strong>objavu!</h1>
        <div class="form-group">
          <input
            class="form-control mb-3"
            type="text"
            v-model="title"
            placeholder="NASLOV"
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control mb-3"
            type="text"
            v-model="description"
            placeholder="OPIS"
            rows="8"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-secondary btn-block" type="submit">AŽURIRAJ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import handleUpdateNote from '../composables/notesJs/handleUpdateNote.js'

const title = ref('')
const description = ref('')
const router = useRouter()
const noteID = router.currentRoute.value.params.id.substring(3)
const updatenote = handleUpdateNote(router, title, description, noteID)
</script>

<style scoped>
.register-photo {
  padding: 60px 0;
}

.register-photo .image-holder {
  display: table-cell;
  width: auto;
  background: url(../components/assets/belli.jpg);
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
  color: rgb(0, 0, 3);
}
.form-container {
  border: 4px solid black !important; /* Promijenite debljinu granice na 4px */
}
</style>
