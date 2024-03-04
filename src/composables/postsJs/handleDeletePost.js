const handleDeletePost = (id, router) => {
    const jwtToken = localStorage.getItem('token')
    const deletePost = async () => {
      await fetch('http://localhost:5000/post/?id=' + id, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` }
      })
      router.push({ name: 'HomePost' })
    }
    return { deletePost }
  }
  export default handleDeletePost
  