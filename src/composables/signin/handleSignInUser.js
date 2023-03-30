import { useUserStore } from '@/stores/user'

const handleSignInUser = (router, email, password) => {
  const signinuser = async () => {
    const post = {
      email: email.value,
      password: password.value
    }
    const jwtToken = localStorage.getItem('token')
    const headers = jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {}
    const res = await fetch('http://localhost:5000/users/signin', {
      method: 'POST',
      headers: {
        ...headers,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const user = useUserStore()
    user.signin(await res.json())
    router.push({ name: 'Home' })
  }
  return signinuser
}
export default handleSignInUser
