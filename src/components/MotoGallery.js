import '../styles/motoGallery.css';
import reactLogo from '../static/react_logo.png';
import githubLogo from '../static/gh_logo3.png';
import nodeLogo from '../static/node_logo2.png';
import pythonLogo from '../static/py_logo2.png';
import supaBaseLogo from '../static/supa.png';

const MotoGallery = () => {

    return(
        <div className='motoGalleryMain'>
            <img src={reactLogo}/>
            <p id='reactBubble' className='reactBubble hideBubble'>this is for react</p>
            <img src={githubLogo}/>
            <img src={nodeLogo}/>
            <img src={pythonLogo}/>
            <img src={supaBaseLogo}/>
        </div>
    )
};

export default MotoGallery;