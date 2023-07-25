import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Formulario/>
    </>
  )
}

export default App
