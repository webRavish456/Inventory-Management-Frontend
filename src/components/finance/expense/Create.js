

import React from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button
} from "@mui/material";

export default function CreateExpense({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Expense</DialogTitle>
      <DialogContent dividers>
        <TextField margin="dense" label="Expense Type" fullWidth />
        <TextField margin="dense" label="Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
        <TextField margin="dense" label="Paid To" fullWidth />
        <TextField margin="dense" label="Amount" fullWidth />
        <TextField margin="dense" label="Payment Mode" fullWidth />
        <TextField margin="dense" label="Reference No." fullWidth />
        <TextField margin="dense" label="Status" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}