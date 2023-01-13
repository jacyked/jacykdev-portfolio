import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export function LinkConfirm(link) {
    const [openLink, setOpenLink] = useState(true);

    const refuse = () => {
        setOpenLink(false);
    }

    return(
              <Dialog
              open={openLink}
              onClose={refuse}
              aria-labelledby="Leave Site?"
              aria-describedby="Incomplete workout found"
            >
              <DialogTitle id="alert-dialog-title">
                {"Leave Site?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                You're about to leave this site and visit {link}.
                <br />
                Would you like to continue?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={refuse} variant="filled">Back</Button>
                <Button onClick={() => {window.location=link}} autoFocus>
                  Continue
                </Button>
              </DialogActions>
            </Dialog> 
    );
}

