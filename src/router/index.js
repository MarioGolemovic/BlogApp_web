import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Details from '../views/DetailsView.vue'
import SignUp from '../views/SignUpView.vue'
import SignIn from '../views/SignInView.vue'
import Create from '../views/CreateView.vue'
import Update from '../views/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
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
