<template>
  <div class="register-photo">
    <div class="form-container border border-dark">
      <div class="image-holder"></div>
      <form method="post" @submit.prevent="signupuser">
        <h2 class="text-center"><strong>Create</strong> an account.</h2>
        <div class="form-group">
          <input
            class="form-control mb-3"
            type="text"
            v-model="username"
            placeholder="Username"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control mb-3"
            type="email"
            v-model="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control mb-3"
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <input class="form-control mb-3" type="text" v-model="role" placeholder="Role" required />
        </div>
        <div class="form-group">
          <button class="btn btn-secondary btn-block" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import handleSignUpUser from '../composables/signup/handleSignUpUser.js'

const username = ref('')
const email = ref('')
const password = ref('')
const role = ref('')
const router = useRouter()
const signupuser = handleSignUpUser(router, username, email, password, role)
</script>

<style scoped>
.register-photo {
  padding: 80px 0;
}
.register-photo .image-holder {
  display: table-cell;
  width: auto;
  background: url(../components/assets/PXL_141017_18367757-e1675808829780.jpg);
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
</style>
