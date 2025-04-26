// src/App.js
import React from 'react';
import Card from './components/card';

const App = () => {
  const movieData = {
    title: "Inception",
    image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/300x450", 
    description: "A mind-bending thriller about dreams within dreams."
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card 
        title={movieData.title} 
        image={movieData.image} 
        description={movieData.description} 
      />
    </div>
  );
};

export default App;
