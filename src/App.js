import * as React from 'react';
//2 main components of the app
import Navbar from './components/Navbar';
import Container from './components/Container';
//2 main styling sheets
import '../src/styles/container.css';
import '../src/styles/filter-bar.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Container/>
    </div>
  );
};

export default App;