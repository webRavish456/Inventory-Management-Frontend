"use client";
import React, { useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button
} from "@mui/material";

export default function AddSupplierDialog({ open, handleClose, handleSave }) {
  const [form, setForm] = useState({
    name: "",
    contactPerson: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleSave(form);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Supplier</DialogTitle>
      <DialogContent dividers>
        <TextField margin="dense" label="Supplier Name" name="name" fullWidth value={form.name} onChange={handleChange}  />
        <TextField margin="dense" label="Contact Person" name="contactPerson" fullWidth value={form.contactPerson} onChange={handleChange} />
        <TextField margin="dense" label="Phone" name="phone" fullWidth value={form.phone} onChange={handleChange} />
        <TextField margin="dense" label="Email" name="email" type="email" fullWidth value={form.email} onChange={handleChange} />
        <TextField margin="dense" label="City" name="city" fullWidth value={form.city} onChange={handleChange} />
        <TextField margin="dense" label="State" name="state" fullWidth value={form.state} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
}