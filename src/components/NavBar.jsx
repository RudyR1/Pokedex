import { element } from "prop-types";

const NavBar = ({pokemonList, pokemonIndex, setPokemonIndex}) => {
    
    const ShowPrevious = () => {
        setPokemonIndex ( pokemonIndex -1);
      };
    
      const NextPrevious = () => {
        setPokemonIndex ( pokemonIndex +1);
      };

      return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button type="button" onClick={() => setPokemonIndex(index)} 
                key={index}>{pokemon.name}</button>
            )
            )}

        

      </nav>
      )
}

export default NavBar;