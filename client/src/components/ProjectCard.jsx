import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faSquareJs, faReact, faNode, faJava, faEnvira} from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import { Button } from '@mui/material';
import { textAlign } from '@mui/system';
import { LinkConfirm } from './LinkConfirm'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));



function ProjectCard(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState({link: "", open: false})
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleExpandClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };
    const refuse = () => {
        setIsOpen({open: false});
    }
    function redirectPopup(link){
        setIsOpen({link, open: true})
      }




    return (
        <Card sx={{ maxWidth: 500, m: 5,}}>
          <CardHeader
            title={props.title}
            subheader={props.stack}
          />
          <CardMedia
            component="img"
            height="194"
            image={props.imgURL}
            alt={props.alt}
            name={props.link}
            onClick={()=>{redirectPopup(props.link)}}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.sub}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="github" name={props.github} sx={{display: ((!props.github?'none':''))}} onClick={()=>{redirectPopup(props.github)}}>
                <FontAwesomeIcon  size="xl" icon={faSquareGithub} />
            </IconButton>
            <ExpandMore
                aria-describedby={id}
                expand={open}
                onClick={handleExpandClick}
                aria-expanded={open}
                aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Popover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            >
                <Typography sx={{ p: 2 }}>{props.details}</Typography>
            </Popover>
        <Popover 
        onClose={refuse}
        open={isOpen.open}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 400, left: 950 }}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
        }}
        >
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
            <Typography sx={{ p: 2 }}>You're about to leave this site and visit {isOpen.link}</Typography>
            <Typography sx={{ p: 2 }}>Would you like to continue? </Typography>
            <span><Button onClick={refuse}>No</Button><Button onClick={() => {window.location=isOpen.link}}>Yes</Button></span>
            </Box>
        </Popover>
        </Card>
      );
    
}

export default ProjectCard;