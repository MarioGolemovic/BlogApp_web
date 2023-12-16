<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">ZAJEDNO ZA DINAMO!</h3>
          </div>
          <div class="card-body">
            <div v-if="notes.length">
              <NoteList :notes="notes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteList from '../components/NoteList.vue'
import handleGetNotes from '../composables/notesJs/handleGetNotes.js'
import { useNotesStore } from '@/stores/notes.js'
export default {
  name: 'Home',
  components: { NoteList },
  setup() {
    const { notes, load } = handleGetNotes()
    const getNotes = async () => {
      const notess = await load()
      return notess
    }
    getNotes().then(function (result) {
      const notesStore = useNotesStore()
      notesStore.notes = result
    })
    return { notes }
  }
}
</script>

<style >

body {
  background-color: #9ab7db;
}


.card-header {
  background-color: rgb(36, 41, 49);
}

.text-center {
  color: azure;
  font-family: 'Times New Roman', Times, serif;
}
</style>
