const handleAddPlayer = (router, name,nationality,position,injury, age, number,yellow, red, goals, assists, userId) => {
    const jwtToken = localStorage.getItem('token')
    const addplayer = async () => {
      
      if (position.value != "ATT" && position.value != "MID" && position.value != "GK" && position.value != "DEF") {
        alert('Invalid position. Please enter ATT, MID, DEF, or GK.');
        return;
      }

      if(age.value.length != 2){
        alert('please enter the correct age');
        return;
      }

      if(number.value.length > 2 || yellow.value.length > 2 || red.value.length > 2 || goals.value.length > 2 || assists.value.length > 2){
        alert('please enter the correct information');
        return;
      }

      
      const userPlayer = {
        name: name.value,
        nationality: nationality.value,
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
  