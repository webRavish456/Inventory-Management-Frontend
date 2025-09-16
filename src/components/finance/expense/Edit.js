import React from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button
} from "@mui/material";

export default function EditExpense({ open, onClose, expense }) {
  if (!expense) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Expense</DialogTitle>
      <DialogContent dividers>
        <TextField margin="dense" label="Expense Type" fullWidth defaultValue={expense.expenseType} />
        <TextField margin="dense" label="Date" type="date" fullWidth InputLabelProps={{ shrink: true }} defaultValue={expense.date} />
        <TextField margin="dense" label="Paid To" fullWidth defaultValue={expense.paidTo} />
        <TextField margin="dense" label="Amount" fullWidth defaultValue={expense.amount} />
        <TextField margin="dense" label="Payment Mode" fullWidth defaultValue={expense.paymentMode} />
        <TextField margin="dense" label="Reference No." fullWidth defaultValue={expense.referenceNo} />
        <TextField margin="dense" label="Status" fullWidth defaultValue={expense.status} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onClose}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}