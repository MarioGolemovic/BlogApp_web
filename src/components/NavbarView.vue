<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <div class="container">
        <div class="d-flex align-items-center">
          <router-link class="navbar-brand" :to="{ name: 'Home' }">
            <img src="./assets/RMA_GRB.png" alt="Brand Logo" class="brand-logo" />
          </router-link>
        </div>
        <div class="title-container">
          <h1 class="text-white title">Madridistas</h1>
          
        </div>

        <b-nav-toggle target="navbarNav"></b-nav-toggle>

        <b-collapse id="navbarNav" is-nav>
          <ul class="navbar-nav mx-auto">
            
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Gallery' }">Galerija</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }">Novosti</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'HomePost' }">Utakmice</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'AboutClub' }">O klubu</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Contact' }">Kontakt</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Players' }">Igrači</router-link>
            </li>
            <li class="nav-item" v-show="!user">
              <router-link class="nav-link" :to="{ name: 'SignIn' }">Prijava</router-link>
            </li>
            <li class="nav-item" v-show="!user">
              <router-link class="nav-link" :to="{ name: 'SignUp' }">Registracija</router-link>
            </li>
            <li class="nav-item" v-show="canCreate">
              <router-link class="nav-link" :to="{ name: 'Create' }">Dodaj novost</router-link>
            </li>
            <li class="nav-item" v-show="canCreate">
              <router-link class="nav-link" :to="{ name: 'CreatePlayer' }"
                >Dodaj igrača</router-link
              >
            </li>
            <li class="nav-item" v-show="canCreate">
              <router-link class="nav-link" :to="{ name: 'CreatePost' }"
                >Dodaj utakmicu</router-link
              >
            </li>

            <li class="nav-item" v-show="user">
              <a class="nav-link" @click="confirmLogout">Odjava</a>
            </li>
          </ul>
        </b-collapse>
      </div>
    </nav>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const user = computed(() => userStore.user)
    const userEmail = computed(() => userStore.userEmail)

    let currentRouteBeforeLogout = null

    const canCreate = computed(() => user.value && userEmail.value === 'mariogolemovic12@gmail.com')

    const signin = async () => {
      await userStore.signin()
    }

    const signout = () => {
      userStore.signout()
    }

    const confirmLogout = async () => {
      currentRouteBeforeLogout = { ...router.currentRoute.value }

      const confirmLogout = window.confirm('Are you sure you want to logout?')
      if (confirmLogout) {
        await signout()
        router.replace({ name: 'SignIn' })
      } else {
        if (currentRouteBeforeLogout) {
          router.replace(currentRouteBeforeLogout)
        }
      }
    }

    return { user, canCreate, signin, confirmLogout }
  }
}
</script>
<style scoped>
.brand-logo {
  max-width: 100%;
  margin-right: 10px;
  max-width: 90px;
}
.title-container {
  flex-grow: 1;
  text-align: center;
}

.title {
  color: #fff;
  font-size: 60px;
  margin-bottom: 0;
}
.nav-link:hover {
  font-size: 15px; /* Povećajte veličinu teksta prilikom prelaska mišem */
  color: rgb(219, 189, 16) !important;
  font-weight: bold; /* Promenite boju teksta u žutu prilikom prelaska mišem */
}
</style>
