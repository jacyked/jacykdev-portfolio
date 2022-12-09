
import './App.css';
import AnimatedHeader from './components/AnimatedHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AnimatedHeader sequence={["Hello", 700, "Hello World!", 2000, "I am Matt Jacyk, a Full Stack Developer."]} wrapper="h1" repeat='0'/>
        <span>
          <a className="App-link" href="https://github.com/jacyked"><FontAwesomeIcon size="xl" icon={faGithub}/></a>
          <a className="App-link" href="https://www.linkedin.com/in/matt-jacyk-a13a8216b/"><FontAwesomeIcon size="xl" icon={faLinkedin}/></a>
        </span>
      </header>
    </div>
  );
}

export default App;
