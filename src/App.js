import * as React from 'react';
//2 main components of the app
import Navbar from './components/Navbar';
import Container from './components/Container';
//2 main styling sheets
import '../src/styles/container.css';
import '../src/styles/filter-bar.css';
import '../src/styles/moto-form.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Container/>
      <div id='background-blur' className='background-blur hide-moto-modal'></div>
    </div>
  );
};

export default App;