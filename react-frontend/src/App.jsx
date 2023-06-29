import * as React from 'react';
//2 main components of the app
import Navbar from './components/Navbar';
import Container from './components/Container';
import TechGallery from './components/TechGallery';
//2 main styling sheets
import './styles/container.css';
import './styles/filter-bar.css';
import './styles/moto-form.css';
import './styles/moto-card.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Container/>
      <TechGallery/>
    </div>
  );
};

export default App;