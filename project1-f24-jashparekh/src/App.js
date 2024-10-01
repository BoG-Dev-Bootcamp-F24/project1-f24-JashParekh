import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonDisplay from './components/PokemonDisplay';
import PokemonInfo from './components/PokemonInfo';
import PokemonMoves from './components/PokemonMoves';
import InfoMovesToggle from './components/InfoMovesToggle';
import ArrowButtons from './components/ArrowButtons';

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(error => console.error('Error fetching Pokémon data:', error));
  }, [pokemonId]);

  const handleNext = () => {
    setPokemonId(prevId => prevId + 1);
  };

  const handlePrevious = () => {
    setPokemonId(prevId => (prevId > 1 ? prevId - 1 : 1));
  };

  const handleToggle = (showInfo) => {
    setShowInfo(showInfo);
  };

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Bits of Good Mid-Semester Project</h1>
      <div className="main-content">
        <div className="left-panel">
          <PokemonDisplay pokemonData={pokemonData} />
          <ArrowButtons onNext={handleNext} onPrevious={handlePrevious} />
        </div>
        <div className="right-panel">
          <InfoMovesToggle showInfo={showInfo} onToggle={handleToggle} />
          {showInfo ? (
            <PokemonInfo pokemonData={pokemonData} />
          ) : (
            <PokemonMoves pokemonData={pokemonData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
