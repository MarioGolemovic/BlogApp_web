const handleUpdateNote = (router, title, description, id) => {
  const jwtToken = localStorage.getItem('token')
  const updatenote = async () => {
    const userNote = {
      title: title.value,
      description: description.value,
      id: id
    }
    await fetch('http://localhost:5000/note', {
      method: 'PUT',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
      body: JSON.stringify(userNote)
    })
    router.push({ name: 'Home' })
  }
  return updatenote
}
export default handleUpdateNote
