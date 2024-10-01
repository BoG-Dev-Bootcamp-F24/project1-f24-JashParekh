import './App.css';
import React, { useState, useEffect } from 'react';
import ArrowButtons from './components/ArrowButtons';
import PokemonDisplay from './components/PokemonDisplay';
import InfoMovesToggle from './components/InfoMovesToggle';
import PokemonInfo from './components/PokemonInfo';
import PokemonMoves from './components/PokemonMoves';
import { fetchPokemonData } from './services/pokemonService'; // Import the service

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    fetchPokemonData(pokemonId).then(data => setPokemonData(data));
  }, [pokemonId]);

  const handlePrev = () => {
    setPokemonId(prevId => (prevId > 1 ? prevId - 1 : prevId));
  };

  const handleNext = () => {
    setPokemonId(prevId => prevId + 1);
  };

  const handleToggle = (isInfo) => {
    setShowInfo(isInfo);
  };

  return (
    <div className="app-container">
      <ArrowButtons onPrev={handlePrev} onNext={handleNext} />
      {pokemonData && (
        <>
          <PokemonDisplay pokemonData={pokemonData} />
          <InfoMovesToggle showInfo={showInfo} onToggle={handleToggle} />
          {showInfo ? <PokemonInfo pokemonData={pokemonData} /> : <PokemonMoves pokemonData={pokemonData} />}
        </>
      )}
    </div>
  );
}

export default App;
