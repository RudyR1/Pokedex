import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(2)

  const ShowPrevious = () => {
    setPokemonIndex ( pokemonIndex -1);
  };

  const NextPrevious = () => {
    setPokemonIndex ( pokemonIndex +1);
  };
  return (
    <div className="App">
      <nav>
        {pokemonIndex > 0 && ( <button type='button' onClick={ShowPrevious}>Previous</button>)}
        
        {pokemonIndex < pokemonList.length-1 && (<button type='button' onClick={NextPrevious}>Next</button>)}

      </nav>

          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        
        
    </div>
  )
  
}




export default App;
