const handleAddComment = () => {
  const jwtToken = localStorage.getItem('token');
  const addComment = async (userId, noteID, comment) => {
    const userNote = {
      comment: comment,
      noteID: noteID,
      userId: userId,
    };
    await fetch('http://localhost:5000/comment/?id=' + noteID, {
      method: 'POST',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
      body: JSON.stringify(userNote),
    });
  };
  return addComment;
};

export default handleAddComment;
