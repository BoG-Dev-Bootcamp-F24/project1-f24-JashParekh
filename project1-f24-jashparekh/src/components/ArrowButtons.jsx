import React from 'react';

function ArrowButtons({ onNext, onPrevious }) {
  return (
    <div className="arrow-buttons">
      <button onClick={onPrevious}>←</button>
      <button onClick={onNext}>→</button>
    </div>
  );
}

export default ArrowButtons;
