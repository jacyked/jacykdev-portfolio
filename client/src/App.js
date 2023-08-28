
import './App.css';
import './profile.jpg';
import logo from './logo_transparent.png';
import deployed1 from './deployed1.PNG';
import deployed2 from './deployed2.PNG';
import deployed3 from './deployed3.PNG';
import deployed4 from "./deployed4.png";
import AnimatedHeader from './components/AnimatedHeader';
import ProjectCard from './components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSquareGithub, faLinkedin, faSquareJs, faReact, faNode, faJava, faEnvira} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase} from '@fortawesome/free-solid-svg-icons'
import { SvgIcon, createSvgIcon } from '@mui/material';
import { ReactComponent as FlutterIcon } from './flutter-24px.svg';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimatedHeader sequence={["Hello", 200, "Hello World!", 1500, "I'm Matt Jacyk, A Full Stack Developer."]} wrapper="h1" repeat='0'/>
        <span>
          <a className="App-link" href="https://github.com/jacyked"><FontAwesomeIcon className="FA-clickable" size="2xl" icon={faSquareGithub} bounce/></a>
          <a className="App-link" href="https://www.linkedin.com/in/matt-jacyk-a13a8216b/"><FontAwesomeIcon className="FA-clickable" size="2xl" icon={faLinkedin} bounce/></a>
        </span>
      </header>
      <div className="App-body">
        <div className="App-aboutme">
          <img className="App-img-profile" src='./profile.jpg'/>
          <div>
            <h2 className='App-h2-profile'> About Me</h2>
            <p className='App-h2-profile'> Hi! My name is Matt Jacyk; I am a proud father, amateur bodybuilder, and full stack developer. I enjoy challenging projects that require a technically creative approach.</p>
          </div>
        </div>
        <h2>Current Projects </h2>
        <div className="App-current">
          <div style={{marginRight: '1%', marginLeft: '1%'}}>
          
          </div>
          <ProjectCard imgURL={deployed1} link="https://hopeemilyportfolio.netlify.app" github="https://github.com/jacyked/ArtClient" title="Artist Portfolio" stack="Built with: Node.js, React.js, Express" sub="A dynamically updating art display site" details="This site automatically pulls images from the artist's Google Drive and displays them in dynamically built image carousels. It is a fully automated process; any images added/removed from the Google Drive are immediately reflected on the site. These images are also automatically sorted into corresponding categories for each display carousel, meaning all updates regarding images can be done directly by the artist from Google Drive, without needing to change any code."/>
          <ProjectCard imgURL={deployed2} link="https://nodex-capstone.netlify.app" title="Nodex Event Finder" stack="Built with: React.js, Express, MongoDB" sub="Centralized hub for finding events" details="Our SAIT Capstone project, this Event Finder utilizes a hand-crafted web scraper to compile events from multiple websites into one place. Users can view compiled events, book them on their source websites, or view/purchase tickets for locally hosted events. They can search for events by name, category, dates, or descriptions."/>
          <ProjectCard imgURL={deployed3} title="Workout Tracker" link="https://github.com/jacyked/WorkoutTracker"  github="https://github.com/jacyked/WorkoutTracker" stack="Built with: React.js, Express, MongoDB" sub="Progressive Web App for tracking workouts" details="This in development project aims to be a mobile-based web application for tracking workouts and exercises. It currently features a database of 3149 different exercises, each containing an overall rating of effectiveness, a description, which muscle groups it targets, required equipment, and more. It also features secure login/authentication, and also allows persistant login to users if they trust the device."/>
          <ProjectCard imgURL={deployed4} title="Wordle Practice App" link="https://github.com/jacyked/flutter_test_1"  github="https://github.com/jacyked/flutter_test_1" stack="Built with: Flutter, MaterialUI" sub="Flexible mobile application for practicing Wordle" details="This project was intended to practice development using Flutter and MaterialUI to build flexible and deployable mobile applications for Android, IOS, and Web from a single code base. It functions similarly to the classic Wordle from The New York Times, except it allows users to refine their skills by recording times and the number of guesses required to reach the correct word."/>
          


        </div>
        
        <div className="App-skillset">
          <h2>Skillset</h2>
          <div>
            <span><FontAwesomeIcon size="2xl" icon={faSquareJs} /><strong> JavaScript </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faReact}  /><strong> React.js </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faNode}  /></span>
            <span><strong> EXPRESS </strong></span>
            <span><SvgIcon component={FlutterIcon} inheritViewBox
              /><strong> Flutter </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faJava}  /><strong> Java </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faCode}  /><strong> HTML/CSS </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faEnvira}  /><strong> MongoDB </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faDatabase}  /><strong> SQL </strong></span>
          </div>

        </div>

      </div>
      <footer className="Index-footer">
        <br />
        <label>Built By </label>
        <img className="Index-logo" src={logo}/>
        <br />
      </footer>
    </div>
  );
}

export default App;
