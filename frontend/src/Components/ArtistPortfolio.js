import React, { useState, useEffect } from 'react';

function ArtistPortfolio() {
  const [artist, setArtist] = useState({}); 

  useEffect(() => {
    fetch('/api/portfolio')
      .then((response) => response.json())
      .then((data) => setArtist(data));
  }, []);
  
  return (
    <div>
      <h2>Artist Portfolio</h2>
      <p>Name: {artist.artist_name}</p>
      <p>Bio: {artist.bio}</p>
    </div>
  );
}

export default ArtistPortfolio;
