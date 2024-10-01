import React from 'react';

function PokemonInfo({ pokemonData }) {
  return (
    <div className="pokemon-info">
      <p>Height: {pokemonData.height * 10} cm</p>
      <p>Weight: {pokemonData.weight / 10} kg</p>
      <p>HP: {pokemonData.stats[0].base_stat}</p>
      <p>Attack: {pokemonData.stats[1].base_stat}</p>
      <p>Defense: {pokemonData.stats[2].base_stat}</p>
      <p>Special-Attack: {pokemonData.stats[3].base_stat}</p>
      <p>Special-Defense: {pokemonData.stats[4].base_stat}</p>
      <p>Speed: {pokemonData.stats[5].base_stat}</p>
    </div>
  );
}

export default PokemonInfo;
