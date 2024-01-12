import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Details from '../views/DetailsView.vue'
import SignUp from '../views/SignUpView.vue'
import SignIn from '../views/SignInView.vue'
import Create from '../views/CreateView.vue'
import Update from '../views/UpdateView.vue'
import Contact from '../views/ContactView.vue'
import AboutClub from '../views/AboutClubView.vue'
import CreatePlayer from '../views/CreatePlayerView.vue'
import UpdatePlayer from '../views/UpdatePlayerView.vue'
import DetailsPlayer from '../views/DetailsPlayerView.vue'
import Players from '../views/PlayersView.vue'
import Gallery from '../views/GalleryView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
   
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
 
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/players/:id',
      name: 'DetailsPlayer',
      component: DetailsPlayer,
      props: true
    },
    {
      path: '/createplayer',
      name: 'CreatePlayer',
      component: CreatePlayer
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/updateplayer/:id',
      name: 'UpdatePlayer',
      component: UpdatePlayer
    },
    {
      path: '/aboutclub',
      name: 'AboutClub',
      component: AboutClub,
    },
    {
      path: '/notes/:id',
      name: 'Details',
      component: Details,
      props: true
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    }
  ]
})

export default router
