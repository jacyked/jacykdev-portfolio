import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import Popover from '@mui/material/Popover';


export function LinkConfirm(link) {
    const [openLink, setOpenLink] = useState(true);

    const refuse = () => {
        setOpenLink(false);
    }

    return(
        <Popover 
        onClose={refuse}
        open={openLink}
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
            <Typography sx={{ p: 2 }}>You're about to leave this site and visit {link}</Typography>
            <Typography sx={{ p: 2 }}>Would you like to continue? </Typography>
            <span><Button onClick={refuse}>No</Button><Button onClick={() => {window.location=link}}>Yes</Button></span>
            </Box>
        </Popover>
    );
}

