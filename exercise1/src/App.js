import React from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';  // Import the Header component

const App = () => {
  const cardContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.";

  return (
    <div className="app">
      <Header /> 
      <main className="app__main-content flex justify-center flex-wrap gap-x-6 gap-y-6">
        <Card 
          imageSrc="https://via.placeholder.com/400x300" 
          title="Card Title"
          content={cardContent}
        />
        <Card 
          imageSrc="https://via.placeholder.com/400x300" 
          title="Card Title"
          content={cardContent}
        />
        <Card 
          imageSrc="https://via.placeholder.com/400x300" 
          title="Card Title"
          content={cardContent}
        />
      </main>
    </div>
  );
};

export default App;
