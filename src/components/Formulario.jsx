import React, { useState } from 'react';
import SearchUser from './SearchUser';
import UserCard from './UserCard';

const Formulario = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    nickname: '',
    idade: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLike = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, likes: (user.likes || 0) + 1 } : user
    );
    setUsers(updatedUsers);
  };

  const handleEdit = (editedUser) => {
    const updatedUsers = users.map((user) => (user.nickname === editedUser.nickname ? editedUser : user));
    setUsers(updatedUsers);
    console.log('Informações editadas do usuário:', editedUser);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { nickname, idade, email, senha } = formData;
    if (!nickname || !idade || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newUser = { ...formData };

    setUsers((prevUsers) => [...prevUsers, newUser]);

    setFormData({
      nickname: '',
      idade: '',
      email: '',
      senha: '',
    });

    alert('Usuário cadastrado com sucesso!');
    
    console.log('Informações do usuário cadastrado:', newUser)
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nickname:
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Idade:
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Senha:
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      <SearchUser users={users}/>
      {users.length > 0 && (
        <div>
        <h2>Usuários Cadastrados:</h2>
          <div className="user-cards-container">
            {users.map((user, index) => (
              <UserCard key={index} 
                        user={user} 
                        onLike={handleLike}
                        onEdit={handleEdit} 
                        />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulario;
