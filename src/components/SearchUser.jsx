import React, { useState } from 'react';

const SearchUser = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const foundUser = users.find(
      (user) => user.nickname.toLowerCase() === searchQuery.toLowerCase()
    );

    setSearchResult(foundUser);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Digite o nickname do usuário"
      />
      <button onClick={handleSearch}>Pesquisar</button>
      <h2>Usuários Encontrados:</h2>
      {searchResult ? (
        <div>
          <h3>{searchResult.nickname}</h3>
          <p>Idade: {searchResult.idade}</p>
          <p>Email: {searchResult.email}</p>
          <p>Likes: {searchResult.likes}</p>
        </div>
      ) : (
        <p>Cadastro não encontrado</p>
      )}
    </div>
  );
};

export default SearchUser;
