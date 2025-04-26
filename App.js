// src/App.js
import React from 'react';
import Card from './components/card';

const App = () => {
  const movieData = {
    title: "Inception",
    image: "https://via.placeholder.com/150", // Замените на реальный URL изображения
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