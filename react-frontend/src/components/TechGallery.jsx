import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/techGallery.css';
import reactLogo from '../static/react_logo.png';
import githubLogo from '../static/gh_logo3.png';
import nodeLogo from '../static/node_logo2.png';
import pythonLogo from '../static/py_logo2.png';
import supaBaseLogo from '../static/supa.png';

const TechGallery = () => {

    return(
        <div className={'techGalleryMain'}>
            <FontAwesomeIcon icon={faArrowRight} beat className={'arrow'}/>
            <img className={'techGalleryMainImg'} src={reactLogo} alt='react logo'/>
            <p id='reactBubble' className={'popup reactBubble'}>React for the frontend</p>

            <a href='https://github.com/gtx-Guess/motorcycle-app-repo' target="_blank">
                <div>
                    <img className={'techGalleryMainImg'} src={githubLogo} alt='git hub logo'/>
                    <p id='ghBubble' className={'popup ghBubble'}>Click the cat icon below for my github repo!</p>
                </div>
            </a>

            <img className={'techGalleryMainImg'} src={nodeLogo} alt='node logo'/>
            <p id='nodeBubble' className={'popup nodeBubble'}>Javascript/node for development</p>

            <img className={'techGalleryMainImg'} src={pythonLogo} alt='python logo'/>
            <p id='pyBubble' className={'popup pyBubble'}>Python for the backend to create REST Api</p>

            <img className={'techGalleryMainImg'} src={supaBaseLogo} alt='supa base logo'/>
            <p id='sbBubble' className={'popup sbBubble'}>SupaBase for cloud storage and cloud database platform</p>
            <FontAwesomeIcon icon={faArrowRight} beat className={'arrow2'}/>
        </div>
    )
};

export default TechGallery;