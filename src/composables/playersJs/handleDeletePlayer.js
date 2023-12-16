const handleDeletePlayer = (id, router) => {
    const jwtToken = localStorage.getItem('token')
    const deletePlayer = async () => {
      await fetch('http://localhost:5000/player/?id=' + id, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` }
      })
      router.push({ name: 'Players' })
    }
    return { deletePlayer }
  }
  export default handleDeletePlayer
  