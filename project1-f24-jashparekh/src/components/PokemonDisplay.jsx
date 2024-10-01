import React from 'react';
import PokemonTypes from './PokemonTypes';

function PokemonDisplay({ pokemonData }) {
  return (
    <div className="pokemon-display">
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h2>{pokemonData.name}</h2>
      <PokemonTypes types={pokemonData.types} />
    </div>
  );
}

export default PokemonDisplay;
