import React from 'react';
import './App.css';
import Carousel from './components/carousel.js';
import TopBar from './components/topBar.js'
import Story from './components/story.js';
import Galeria from './components/prodList.js';
import Contacto from './components/contactos.js';
import Footer from './components/footer.js';


function App() {
  return (
    <div>
      <header>
        <TopBar />
      </header>
      <Carousel />
      <Story />       
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  );
} 

export default App;
