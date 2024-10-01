import React from 'react';

function PokemonTypes({ types }) {
  const typeColors = {
    fire: '#EE8130',
    water: '#6390F0',
    // Add all types...
  };

  return (
    <div className="pokemon-types">
      {types.map(typeInfo => (
        <span
          key={typeInfo.slot}
          style={{ backgroundColor: typeColors[typeInfo.type.name] }}
        >
          {typeInfo.type.name}
        </span>
      ))}
    </div>
  );
}

export default PokemonTypes;
