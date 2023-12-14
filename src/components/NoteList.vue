<template>
    <div class="note-list">
      <div v-for="note in notes" :key="note.id">
        <SingleNote :notes="notes" :note="note" />
      </div>
    </div>
  </template>
  
  <script>
  import SingleNote from "./SingleNote.vue";
  export default {
    props: ["notes"],
    components: { SingleNote },
    setup(props) {
      return props.notes;
    },
  };
  </script>
  
  <style>

</style>