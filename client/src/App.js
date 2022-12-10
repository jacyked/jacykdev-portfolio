
import './App.css';
import './profile.jpg';
import AnimatedHeader from './components/AnimatedHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faSquareGithub, faLinkedin, faSquareJs, faReact, faNode, faJava, faEnvira} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase} from '@fortawesome/free-solid-svg-icons'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AnimatedHeader sequence={["Hello", 200, "Hello World!", 2000, "I'm Matt Jacyk, A Full Stack Developer."]} wrapper="h1" repeat='0'/>
        <span>
          <a className="App-link" href="https://github.com/jacyked"><FontAwesomeIcon className="FA-clickable" size="2xl" icon={faSquareGithub} bounce/></a>
          <a className="App-link" href="https://www.linkedin.com/in/matt-jacyk-a13a8216b/"><FontAwesomeIcon className="FA-clickable" size="2xl" icon={faLinkedin} bounce/></a>
        </span>
      </header>
      <div className="App-body">
        <div className="App-aboutme">
          <img className="App-img-profile" src='./profile.jpg'/>
          <h2 className='App-h2-profile'> About Me</h2>
          <p className='App-h2-profile'> Hi! My name is Matt Jacyk; I am a proud father, amateur bodybuilder, and full stack developer. I enjoy challenging projects that require a technically creative approach.</p>
        </div>
        <div className="App-skillset">
          <h2>Skillset</h2>
          <div>
            <span><FontAwesomeIcon size="2xl" icon={faSquareJs} /><strong> JavaScript </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faReact}  /><strong> React.js </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faNode}  /></span>
            <span><strong> EXPRESS </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faJava}  /><strong> Java </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faCode}  /><strong> HTML/CSS </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faEnvira}  /><strong> MongoDB </strong></span>
            <span><FontAwesomeIcon size='2xl' icon={faDatabase}  /><strong> SQL </strong></span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
