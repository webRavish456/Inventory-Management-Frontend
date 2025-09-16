"use client";
import React from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Typography, Button
} from "@mui/material";

export default function Delete({ open, handleClose, supplier, handleDelete }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent dividers>
        <Typography>
          Are you sure you want to delete supplier <b>{supplier?.name}</b>?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button
          onClick={() => handleDelete(supplier?.id)}
          color="error"
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}