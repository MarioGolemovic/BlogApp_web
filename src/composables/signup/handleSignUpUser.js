const handleSignUpUser = (router, username, email, password, role) => {
  const signupuser = async () => {
    if (username.value.length < 3 || username.value.length > 50) {
      alert('Please write a username not longer than 50 characters and not less than 3 characters!')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
      alert('Molimo unesite ispravnu adresu e-pošte')
      return
    }

    if (password.value.length < 8 || password.value.length > 50) {
      alert('Please write a password not longer than 50 characters and not less than 8 characters!')
      return
    }

    if (role.value !== 'admin' && role.value !== 'user') {
      alert('Invalid role provided')
      return
    }
    const post = {
      username: username.value,
      email: email.value,
      password: password.value,
      role: role.value
    }
    await fetch('http://localhost:5000/users/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(post)
    })

    router.push({ name: 'SignIn' })
  }
  return signupuser
}

export default handleSignUpUser
