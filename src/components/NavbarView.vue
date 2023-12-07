<template>
  <div class="background">
    <header>
      <img src="./assets/bbb.png" alt="BBB" width="130" />
      <router-link :to="{ name: 'Home' }"><h1>Bad Blue Boys</h1></router-link>

      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link v-show="!user" :to="{ name: 'SignIn' }">Sign In</router-link>
        <router-link v-show="!user" :to="{ name: 'SignUp' }">Sign Up</router-link>
        <router-link v-show="canCreate" :to="{ name: 'Create' }">Create</router-link>
        <a @click="confirmLogout" v-show="user" class="logout">Logout</a>
      </nav>
    </header>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user.js';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const userStore = useUserStore();
    const user = computed(() => userStore.user);
    const userEmail = computed(() => userStore.userEmail);
    
    // Variable to store the current route before initiating logout
    let currentRouteBeforeLogout = null;

    const canCreate = computed(() => user.value && userEmail.value === 'mariogolemovic12@gmail.com');

    const signin = async () => {
      await userStore.signin();
    };

    const signout = () => {
      userStore.signout();
    };

    const confirmLogout = async () => {
      // Store the current route before initiating logout
      currentRouteBeforeLogout = { ...router.currentRoute.value };

      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        await signout();
        // If user confirms, navigate to the "SignIn" page
        router.replace({ name: 'SignIn' });
      } else {
        // If user clicks "Cancel", navigate back to the stored route
        if (currentRouteBeforeLogout) {
          router.replace(currentRouteBeforeLogout);
        }
      }
    };

    return { user, canCreate, signin, confirmLogout };
  },
};
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
