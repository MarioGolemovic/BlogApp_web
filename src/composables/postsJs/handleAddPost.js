const handleAddPost = (router, title, description, userId) => {
    const jwtToken = localStorage.getItem('token')
    const addpost = async () => {
      if (title.value.length < 5 || title.value.length > 50) {
        alert('Please write a title not longer than 50 characters and not less than 5 characters!');
        return;
      }
  
      if (description.value.length < 20 || description.value.length > 255) {
        alert('Please write a description not longer than 255 characters and not less than 20 characters!');
        return;
      }
      
      const userPost = {
        title: title.value,
        description: description.value,
        userId: userId
      }
      await fetch('http://localhost:5000/post', {
        method: 'POST',
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
        body: JSON.stringify(userPost)
      })
      router.push({ name: 'HomePost' })
    }
    return addpost
  }
  export default handleAddPost
  