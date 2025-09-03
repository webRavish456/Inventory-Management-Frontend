"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
} from "@mui/material";

export default function ViewDamage({ viewData, handleClose }) {
  if (!viewData) return null;

  const formatKey = (key) =>
    key
      .replace(/([A-Z])/g, " $1") 
      .replace(/^./, (str) => str.toUpperCase()); 

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Damage Record Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {Object.entries(viewData).map(([key, value]) => {
            if (key === "action" || key === "si") return null; 
            return (
              <Grid item xs={6} key={key}>
                <Typography variant="subtitle2" color="text.secondary">
                  {formatKey(key)}
                </Typography>
                <Typography variant="body1">{value ?? "N/A"}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
