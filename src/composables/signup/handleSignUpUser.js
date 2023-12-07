const handleSignUpUser = (router, username, email, password) => {
  const signupuser = async () => {
    if (username.value.length < 3 || username.value.length > 50) {
      alert('Please write a username not longer than 50 characters and not less than 3 characters!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert('Molimo unesite ispravnu adresu e-pošte');
      return;
    }

    if (password.value.length < 8 || password.value.length > 50) {
      alert('Please write a password not longer than 50 characters and not less than 8 characters!');
      return;
    }

    const post = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    try {
      const response = await fetch('http://localhost:5000/users/signup', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        alert(errorMessage); 
        return;
      }

      router.push({ name: 'SignIn' });
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return signupuser;
};

export default handleSignUpUser;
