<template>
    <div>
      <input type="file" @change="handleFileChange" />
      <button @click="handleUpload">Upload</button>
      <div>
        <img
          v-for="image in images"
          :key="image._id"
          :src="`http://localhost:5000/Images/${image.image}`"
          :style="{ width: '100px', height: '100px', margin: '10px' }"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  export default {
    setup() {
      const file = ref(null);
      const images = ref([]);
  
      const handleFileChange = (e) => {
        file.value = e.target.files[0];
      };
  
      const handleUpload = () => {
        const formData = new FormData();
        formData.append("file", file.value);
  
        axios
          .post("http://localhost:5000/upload", formData)
          .then((res) => {
            console.log(res);
            // Add the new image to the images state to display it
            images.value = [...images.value, res.data];
          })
          .catch((err) => console.log(err));
      };
  
      onMounted(() => {
        // Load images on the first render of the component
        axios
          .get("http://localhost:5000/get-image")
          .then((res) => (images.value = res.data))
          .catch((err) => console.log(err));
      });
  
      return {
        file,
        images,
        handleFileChange,
        handleUpload,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here if needed */
  </style>
  