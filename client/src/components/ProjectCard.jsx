import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faSquareJs, faReact, faNode, faJava, faEnvira} from '@fortawesome/free-brands-svg-icons'


function ProjectCard(props) {
    return (
        
            <div style={{display: 'block', width: '31%', minHeight: '50%',backgroundColor: '#ffffff', borderRadius: "20px", padding: '0.5%', margin: '1%'}}>
                <span style={{display: 'block'}}>
                    <a href={props.url} ><img src={props.image} style={{border: 'solid 0.5px', borderRadius: '20px',margin: '2px', display: 'inline-block', float: 'left', width: '45%',}}/> </a>
                    <strong style={{margin: '5px', display: 'inline', verticalAlign: 'top'}}>{props.title}</strong>
                    <span style={{display:"block" ,verticalAlign:"middle", padding:"0", margin:"0"}}><FontAwesomeIcon size="sm" icon={faReact} style={{margin: '2px', verticalAlign:"middle",}}/><FontAwesomeIcon size="sm" icon={faNode} style={{margin: '2px', verticalAlign:"middle",}} />
                    
                <strong style={{fontSize:"0.5em", display:"inline" , margin: '2px'}}> EXPRESS </strong></span>
                </span>
                <p style={{display: 'block', float: 'right', fontSize: '0.8em', margin: '5px', padding: '5px'}}>{props.text}</p>
            </div>
      
    );
}

export default ProjectCard;