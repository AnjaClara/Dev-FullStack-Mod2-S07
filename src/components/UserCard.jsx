import React, { useState } from 'react';

const UserCard = ({ user, onLike, onEdit }) => {
  const [likes, setLikes] = useState(user.likes || 0);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
    onLike(user.id);
  };

  const handleEdit = () => {
    if(!editing){
      setEditing(true);
      onEdit(user.id)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedUser); // Envie as informações editadas para a função onEdit
    setEditing(false); // Volte para o modo de visualização
  };

  return (
    <div className="user-card">
      {editing ? (
        <div>
          <input
            type="text"
            name="nickname"
            value={editedUser.nickname}
            onChange={handleChange}
          />
          <input
            type="number"
            name="idade"
            value={editedUser.idade}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="senha"
            value={editedUser.senha}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          <h3>{user.nickname}</h3>
          <p>Idade: {user.idade}</p>
          <p>Email: {user.email}</p>
          <p>Likes: {likes}</p>
          <button onClick={handleLike}>Like</button>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default UserCard;