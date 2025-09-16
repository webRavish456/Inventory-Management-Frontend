"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

export default function View({ open, handleClose, supplier }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Supplier Details</DialogTitle>
      <DialogContent dividers>
        {supplier && (
          <div>
            <Typography><b>Name:</b> {supplier.name}</Typography>
            <Typography><b>Contact Person:</b> {supplier.contactPerson}</Typography>
            <Typography><b>Phone:</b> {supplier.phone}</Typography>
            <Typography><b>Email:</b> {supplier.email}</Typography>
            <Typography><b>Address:</b> {supplier.address}</Typography>
            <Typography><b>GST:</b> {supplier.gst}</Typography>
            <Typography><b>City:</b> {supplier.city}</Typography>
            <Typography><b>State:</b> {supplier.state}</Typography>
            <Typography><b>Status:</b> {supplier.status}</Typography>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
}