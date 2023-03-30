const handleAddNote = (router, title, description, userId) => {
  const jwtToken = localStorage.getItem('token')
  const addnote = async () => {
    const userNote = {
      title: title.value,
      description: description.value,
      userId: userId
    }
    await fetch('http://localhost:5000/note', {
      method: 'POST',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
      body: JSON.stringify(userNote)
    })
    router.push({ name: 'Home' })
  }
  return addnote
}
export default handleAddNote
