<template>
    <div class="register-photo">
      <div class="form-container border border-dark">
        <form method="post" @submit.prevent="resetPassword">
          <h2 class="text-center"><strong>PROMIJENITE</strong> LOZINKU</h2>
          <div class="form-group">
            <input
              class="form-control mb-3"
              type="email"
              v-model="email"
              placeholder="EMAIL"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="form-control mb-3"
              type="password"
              v-model="newPassword"
              placeholder="NOVA LOZINKA"
              required
            />
          </div>
          <div class="form-group">
            <button class="btn btn-secondary btn-block" type="submit">POTVRDI</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import handleResetPassword from '../composables/resetpassword/handleResetPassword.js'
  
  const email = ref('')
  const newPassword = ref('')
  const router = useRouter()
  const resetPassword = handleResetPassword(router, email, newPassword)
  </script>
  
  <style scoped>
  .register-photo {
    padding: 80px 0;
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
  .register-photo form h2 {
    font-size: 50px;
    line-height: 1;
    margin-bottom: 30px;
    color: black;
  }
  </style>