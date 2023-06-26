import * as React from 'react';
//2 main components of the app
import Navbar from './components/Navbar';
import Container from './components/Container';
import TechGallery from './components/TechGallery';
//2 main styling sheets
import './styles/container.css';
import './styles/filter-bar.css';
import './styles/moto-form.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Container/>
      {/* <ErrorBubble/> */}
      <div id='background-blur' className={'background-blur hide-moto-modal'}></div>
      <TechGallery/>
    </div>
  );
};

export default App;