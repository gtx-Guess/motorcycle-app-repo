import reactPic from '../static/react_ss.png';
import pythonPic from '../static/python_ss.png';
import ghPic from '../static/github_ss.png';
import supaPic from '../static/supa_ss.png';
import apiNinja from '../static/api_ninja_ss.png';
const About = () => {
  return (
    <div id="about">
        <div>
            <div>
                <p style={{"padding": "10px"}}>
                    <h1>Frontend</h1>
                    React - I used react for my front end, I needed the practice so I picked it as my framework, was<br/>fun
                    but I think Ive built enough apps in react Ill move on to svelte or vue
                    <br/><br/>
                    Javascript - Wanted some practice to use some js libraries like axios for api handling and data management<br/>
                    also wanted to get in the habit of creating my own util functions for frontend tasks.<br/>
                    Additionally I wanted to learn how to use aws-sdk and how to setup policies etc...
                    <br/><br/>
                    Styling - All my css is custom, didnt copy any of it wrote it all from scratch.
                </p>
                <img style={{"width": "35%"}} className={'ssImgBase'} src={reactPic} alt='reactPic'/>
            </div>
        </div>
        <div>
            <div>
                <img style={{"width": "40%"}} className={'ssImgBase'} src={pythonPic} alt='pythonPic' />
                <p style={{"padding": "10px"}}>
                    <h1>Backend</h1>
                    Python - Wanted to connect 2 different languages to create a full stack app. Also just enjoy python<br/><br/>
                    FastApi - Didnt want to use ExpressJs with NodeJs just because its such a common personal project stack<br/>
                    so I decided to learn something new with python.
                </p>
            </div>
        </div>
        <div>
            <div>
                <p style={{"padding": "10px"}}>
                    <h1>Version Control</h1>
                    GitHub - The most common type of tech used for version control however I also wanted to level up my experience<br/>
                    In setting up different branches such as a dev branch and a prod "master" branch and being able to update/merge them properly
                </p>
                <img style={{"width": "42%"}} className={'ssImgBase'} src={ghPic} alt='githubPic'/>
            </div>
        </div>
        <div>
            <div>
                <img style={{"width": "42%"}} className={'ssImgBase'} src={supaPic} alt='supaPic'/>
                <p style={{"padding": "10px"}}>
                    <h1>Database</h1>
                    Supabase - Used as a cloud storage, has a postgres sql database. <br/><br/>
                    Amazon S3 - Used that as cloud storage for the motorcycle images, when the motorcycle is created <br/>
                    by a user the frontend converts the image into a blob that can then be uploaded to s3.<br/>
                    That then returns a publiclyaccessible url that is readable by the frontend when the page is loaded. <br/>
                    The image s3 bucket name is also assigned to the moto object in the database.
                </p>
            </div>
        </div>
        <div>
            <div>
                <p style={{"padding": "10px"}}>
                    <h1>API</h1>
                    Api-Ninjas - This is an open source API by Ninjas that Im using as a resource for getting motorcycle spec data <br/><br/>
                    Amazon aws-sdk api - Used the Amazon api and aws-sdk node library for querying s3
                </p>
                <img style={{"width": "32%", "height": "auto"}} className={'ssImgBase'} src={apiNinja} alt='apiNinja'/>
            </div>
        </div>
    </div>
  )
}

export default About;