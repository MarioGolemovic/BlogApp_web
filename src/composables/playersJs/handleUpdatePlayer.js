const handleUpdatePlayer = (router, name,position,injury,age,number,yellow,red,goals,assists, id) => {
    const jwtToken = localStorage.getItem('token')
    const updateplayer = async () => {
     
      const userPlayer = {
        name: name.value,
        position: position.value,
        injury: injury.value,
        age: age.value,
        number: number.value,
        yellow: yellow.value,
        red: red.value,
        goals: goals.value,
        assists: assists.value,
        id: id
      }
      await fetch('http://localhost:5000/player', {
        method: 'PUT',
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
        body: JSON.stringify(userPlayer)
      })
      router.push({ name: 'Players' })
    }
    return updateplayer
  }
  export default handleUpdatePlayer
  