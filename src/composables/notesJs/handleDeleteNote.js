const handleDeleteNote = (id, router) => {
  const jwtToken = localStorage.getItem('token')
  const deleteNote = async () => {
    await fetch('http://localhost:5000/note/?id=' + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` }
    })
    router.push({ name: 'Home' })
  }
  return { deleteNote }
}
export default handleDeleteNote
