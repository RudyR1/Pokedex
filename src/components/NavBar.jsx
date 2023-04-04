const NavBar = ({pokemonList, pokemonIndex, setPokemonIndex}) => {
    
    const ShowPrevious = () => {
        setPokemonIndex ( pokemonIndex -1);
      };
    
      const NextPrevious = () => {
        setPokemonIndex ( pokemonIndex +1);
      };

      return (
        <nav>
        {pokemonIndex > 0 && ( <button type='button' onClick={ShowPrevious}>Previous</button>)}
        
        {pokemonIndex < pokemonList.length-1 && (<button type='button' onClick={NextPrevious}>Next</button>)}

      </nav>
      )
}

export default NavBar;