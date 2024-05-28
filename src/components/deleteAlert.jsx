import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const DeleteAlert = ({ id, open, handleClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete Topic"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you delete this topic, you can't recover it. Continue?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          No
        </Button>
        <Button color="error" autoFocus  onClick={() => {
          handleDelete(id);
        }}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAlert;