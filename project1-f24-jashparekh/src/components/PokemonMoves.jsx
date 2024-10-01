import React from 'react';

function PokemonMoves({ pokemonData }) {
  return (
    <div className="pokemon-moves">
      <ul>
        {pokemonData.moves.map(moveInfo => (
          <li key={moveInfo.move.name}>{moveInfo.move.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonMoves;
