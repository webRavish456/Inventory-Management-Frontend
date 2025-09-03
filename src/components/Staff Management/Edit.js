


"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function EditStaff({ editData, handleUpdate, handleClose }) {
  const [staffData, setStaffData] = useState({ ...editData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (handleUpdate) handleUpdate(staffData);
    handleClose();
  };

  if (!editData) return null;

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Edit Staff
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField label="Staff ID" name="id" value={staffData.id} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Staff Name" name="name" value={staffData.name} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Designation" name="designation" value={staffData.designation} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Mobile" name="mobile" value={staffData.mobile} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" name="email" value={staffData.email} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Address" name="address" value={staffData.address} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Salary" name="salary" value={staffData.salary} onChange={handleChange} type="number" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Joining Date"
              name="joiningdate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={staffData.joiningdate}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Availability"
              name="availability"
              value={staffData.availability}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Unavailable">Unavailable</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
