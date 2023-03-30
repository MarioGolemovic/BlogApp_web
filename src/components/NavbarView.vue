<template>
  <div class="background">
    <header>
      <img src="./assets/bbb.png" alt="BBB" width="130" />
      <router-link :to="{ name: 'Home' }"><h1>Bad Blue Boys</h1> </router-link>

      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link v-show="!user" :to="{ name: 'SignIn' }">Sign In</router-link>
        <router-link v-show="!user" :to="{ name: 'SignUp' }">Sign Up</router-link>
        <router-link v-show="user" :to="{ name: 'Create' }">Create</router-link>
        <router-link @click="signout" v-show="user" :to="{ name: 'SignIn' }"
          ><nav class="signout">logout</nav></router-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user.js'
import { computed } from 'vue'
export default {
  setup() {
    const userStore = useUserStore()
    let user = computed(() => {
      return userStore.user
    })
    const signin = () => {
      userStore.signin()
    }
    const signout = () => {
      userStore.signout()
    }

    return { user, signin, signout }
  }
}
</script>

<style>
.background {
  background: lightgrey;
  width: 100%;
  top: 0px;
  z-index: 2;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}
header h1 {
  color: rgb(67, 67, 67);
  font-size: 48px;
}
header h1:hover {
  -webkit-transition: color 0.33s;
  transition: color 0.33s;
  color: #3313c1;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: rgb(67, 67, 67);
  font-weight: bold;
}
header nav {
  display: inline;
  margin-left: 0%;
}
.logout {
  color: #bbb;
  text-decoration: none;
}
</style>
