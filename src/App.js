import * as React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Container/>
    </div>
  );
};

// const Welcome = ({ text }) => {
//   return <h1>{text}</h1>;
// };

// const Title = ({ text }) => {
//   return <h1 id="should be title">{text}</h1>;
// };

export default App;