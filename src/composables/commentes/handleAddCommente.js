const handleAddCommente = () => {
    const jwtToken = localStorage.getItem('token');
    const addCommente = async (userId, postID, commente) => {
      const userPost = {
        commente: commente,
        postID: postID,
        userId: userId,
      };
      await fetch('http://localhost:5000/commente/?id=' + postID, {
        method: 'POST',
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
        body: JSON.stringify(userPost),
      });
    };
    return addCommente;
  };
  
  export default handleAddCommente;
  