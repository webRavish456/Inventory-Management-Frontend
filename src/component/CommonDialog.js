import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material';

export default function CommonDialog({open,onClose,dialogTitle,dialogContent}) {
  

  return (
<>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {open && 
        <DialogTitle id="alert-dialog-title"
        sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          {dialogTitle}
          <IconButton onClick={onClose} style={{color:"inherit"}}><CloseIcon/></IconButton>
        </DialogTitle>}
        {open&&<DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>}
      </Dialog>
      </>
  );
}
