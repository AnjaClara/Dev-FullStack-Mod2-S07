import { useState } from "react"

function Header(){

  const [name, setName] = useState(' Clique aqui')

  function mudarNome() {
    let novoNome = prompt('Insira seu nome')
    if (novoNome){
      setName(' Bem vindo(a) ' + novoNome + '!')
    } else{
      setName(' Clique aqui')
    }
    // setName(' Bem-vindo(a)')
  }

  return(

    <div className="p-3 mb-2 bg-warning">

      <nav className="navbar navbar-light bg-light text-center rounded">
        <a className="navbar-brand" href="#" onClick={mudarNome}>
          {name}
        </a>
      </nav>

    </div>

  );

}

export default Header