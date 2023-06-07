import '../styles/techGallery.css';
import reactLogo from '../static/react_logo.png';
import githubLogo from '../static/gh_logo3.png';
import nodeLogo from '../static/node_logo2.png';
import pythonLogo from '../static/py_logo2.png';
import supaBaseLogo from '../static/supa.png';

const TechGallery = () => {

    return(
        <div className={'techGalleryMain'}>
            <img className={'techGalleryMainImg'} src={reactLogo}/>
            <p id='reactBubble' className='popup'>this is for react</p>
            <img className={'techGalleryMainImg'} src={githubLogo}/>
            <img className={'techGalleryMainImg'} src={nodeLogo}/>
            <img className={'techGalleryMainImg'} src={pythonLogo}/>
            <img className={'techGalleryMainImg'} src={supaBaseLogo}/>
        </div>
    )
};

export default TechGallery;