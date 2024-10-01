import React from 'react';

function InfoMovesToggle({ showInfo, onToggle }) {
  return (
    <div className="info-moves-toggle">
      <button
        style={{ backgroundColor: showInfo ? 'green' : 'grey' }}
        onClick={() => onToggle(true)}
      >
        Info
      </button>
      <button
        style={{ backgroundColor: !showInfo ? 'green' : 'grey' }}
        onClick={() => onToggle(false)}
      >
        Moves
      </button>
    </div>
  );
}

export default InfoMovesToggle;
