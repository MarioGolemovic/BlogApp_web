const handleDeleteComment = () => {
  const jwtToken = localStorage.getItem('token')
  const deleteComment = async (id) => {
    await fetch(`http://localhost:5000/comment?id=` + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` }
    })
  }

  return { deleteComment }
}

export default handleDeleteComment
