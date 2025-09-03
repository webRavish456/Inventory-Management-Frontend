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

export default function CreateDamage({ handleClose, handleCreate }) {
  const [damageData, setDamageData] = useState({
    entryId: "",
    writeoffId: "",
    product: "",
    quantity: "",
    reason: "",
    damageDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDamageData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Creating damage record:", damageData);
    if (handleCreate) handleCreate(damageData);
    handleClose();
  };

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Create Damage Record
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
            <TextField label="Entry ID" name="entryId" value={damageData.entryId} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Writeoff ID" name="writeoffId" value={damageData.writeoffId} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Product" name="product" value={damageData.product} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="number" label="Quantity" name="quantity" value={damageData.quantity} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Reason"
              name="reason"
              value={damageData.reason}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="date"
              label="Damage Report Date"
              name="damageDate"
              value={damageData.damageDate}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Status"
              name="status"
              value={damageData.status}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Approved">Approved</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
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
