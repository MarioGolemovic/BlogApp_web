const handleAddPlayer = (router, name,position,injury, age, number,yellow, red, goals, assists, userId) => {
    const jwtToken = localStorage.getItem('token')
    const addplayer = async () => {
     
      
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
        userId: userId
      }
      await fetch('http://localhost:5000/player', {
        method: 'POST',
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
        body: JSON.stringify(userPlayer)
      })
      router.push({ name: 'Players' })
    }
    return addplayer
  }
  export default handleAddPlayer
  