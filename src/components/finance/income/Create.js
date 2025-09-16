"use client";
import React, { useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem
} from "@mui/material";

export default function CreateIncome({ open, onClose, onSave }) {
  const [formData, setFormData] = useState({
    incomeType: "",
    date: "",
    receivedFrom: "",
    amount: "",
    paymentMode: "",
    referenceNo: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Income</DialogTitle>
      <DialogContent>
        <TextField fullWidth margin="dense" label="Income Type" name="incomeType" onChange={handleChange} />
        <TextField fullWidth margin="dense" type="date" label="Date" name="date" InputLabelProps={{ shrink: true }} onChange={handleChange} />
        <TextField fullWidth margin="dense" label="Received From" name="receivedFrom" onChange={handleChange} />
        <TextField fullWidth margin="dense" label="Amount" type="number" name="amount" onChange={handleChange} />
        <TextField fullWidth margin="dense" select label="Payment Mode" name="paymentMode" onChange={handleChange}>
          <MenuItem value="Cash">Cash</MenuItem>
          <MenuItem value="UPI">UPI</MenuItem>
          <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
        </TextField>
        <TextField fullWidth margin="dense" label="Reference No." name="referenceNo" onChange={handleChange} />
        <TextField fullWidth margin="dense" select label="Status" name="status" onChange={handleChange}>
          <MenuItem value="Received">Received</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}