import { useState } from 'react';
import { first151Pokemon, getFullPokedexNumber } from '../utils';

export default function SideNav(props) {
  const {
    selectedPokemon,
    setSelectedPokemon,
    handleToggleMenu,
    showSideMenu,
  } = props;

  const [searchValue, setSearchValue] = useState('');

  const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
    if (getFullPokedexNumber(eleIndex).includes(searchValue)) {
      return true;
    }
    if (ele.toLocaleLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }

    return false;
  });
  return (
    <nav className={' ' + (!showSideMenu ? ' open' : '')}>
      <div className={'header ' + (!showSideMenu ? ' open' : '')}>
        <button className="open-nav-button" onClick={handleToggleMenu}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className={'text-gradient'}>Pokedex</h1>
      </div>

      <input
        value={searchValue}
        placeholder="Index number, or name"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      {filteredPokemon.map((pokemon, pokemonIndex) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon);
        return (
          <button
            key={pokemonIndex}
            onClick={() => setSelectedPokemon(truePokedexNumber)}
            className={
              'nav-card' +
              (pokemonIndex === selectedPokemon ? ' nav-card-selected' : ' ')
            }
          >
            <p>{getFullPokedexNumber(truePokedexNumber)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
