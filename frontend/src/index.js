import React from 'react';
import EventCalander from './Components/EventCalander'; 
import ArtistPortfolio from './Components/ArtistPortfolio';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Artist's Portfolio</h1>
      <EventCalander />
      <ArtistPortfolio />
    </div>
  );
}

export default HomePage;

