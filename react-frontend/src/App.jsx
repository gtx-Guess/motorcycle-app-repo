import * as React from "react";
//2 main components of the app
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import TechGallery from "./components/TechGallery";
import About from "./components/About";
//2 main styling sheets
import "./styles/container.css";
import "./styles/filter-bar.css";
import "./styles/moto-form.css";
import "./styles/moto-card.css";
import "./styles/edit-moto.css";
import './styles/dropzone.css'
import './styles/about.css';

const App = () => {
    const removeClass = document.querySelectorAll('to-front');
    removeClass.forEach(e => { e.classList.remove('to-front')});
    // const [reloadKey, setReloadKey] = useState(0);

    // const handleReload = () => {
    //     //console.log('realoded')
    //     setReloadKey((prevKey) => prevKey + 1);
    // };

    return (
        <div>
            <div id={"overlay"} className={"overlay hide"}></div>
            <Navbar />
            {/* <Container  reload={handleReload} key={reloadKey}/> */}
            <Container />
            <TechGallery />
            <About />
        </div>
    );
};

export default App;
