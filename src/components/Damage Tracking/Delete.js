"use client";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

export default function DeleteDamage({ deleteId, isDeleting, handleDelete, handleClose }) {
  if (!deleteId) return null;

  const handleConfirm = () => {
    if (handleDelete) handleDelete(deleteId);
    handleClose();
  };

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Delete Damage Record</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete this Damage Record (ID: {deleteId})?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleConfirm}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
