const handleResetPassword = (router, email, newPassword) => {
    const resetPassword = async () => {
      try {
        const post = {
          email: email.value,
          newPassword: newPassword.value
        };
  
        const response = await fetch('http://localhost:5000/users/resetpassword', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(post),
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
  
        alert('Lozinka je uspešno resetovana. Molimo prijavite se sa novom lozinkom.');
        router.push({ name: 'SignIn' });
      } catch (error) {
        console.error('Error during password reset:', error);
        alert('Došlo je do greške prilikom resetovanja lozinke.');
      }
    };
  
    return resetPassword;
  };
  
  export default handleResetPassword;