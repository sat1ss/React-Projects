import { Header } from './components/header'
import { SideNav } from './components/SideNav'
import { PokeCard } from './components/PokeCard'
import { useState } from 'react'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)

  return (
    <>
      <Header />
      <SideNav />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
