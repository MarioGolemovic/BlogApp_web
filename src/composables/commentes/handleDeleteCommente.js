const handleDeleteCommente = () => {
    const jwtToken = localStorage.getItem('token')
    const deleteCommente = async (id) => {
      await fetch(`http://localhost:5000/commente?id=` + id, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` }
      })
    }
  
    return { deleteCommente }
  }
  
  export default handleDeleteCommente
  