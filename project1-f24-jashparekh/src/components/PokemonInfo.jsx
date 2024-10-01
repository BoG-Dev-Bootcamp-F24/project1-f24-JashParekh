import React from 'react';

function PokemonInfo({ pokemonData }) {
  return (
    <div className="pokemon-info">
      <p>Height: {pokemonData.height * 10} cm</p>
      <p>Weight: {pokemonData.weight / 10} kg</p>
      <p>Abilities:</p>
      <ul>
        {pokemonData.abilities.map(abilityInfo => (
          <li key={abilityInfo.slot}>{abilityInfo.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonInfo;
