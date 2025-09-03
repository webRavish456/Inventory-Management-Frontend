"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button
} from "@mui/material";

export default function Edit({ open, handleClose, supplier, handleSave }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (supplier) setFormData(supplier);
  }, [supplier]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Supplier</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Supplier Name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Contact Person"
          name="contactPerson"
          value={formData.contactPerson || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={() => handleSave(formData)} color="primary" variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
}