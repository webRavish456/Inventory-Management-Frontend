"use client";
import { Dialog, DialogTitle, DialogContent, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ViewStaff({ viewData, handleClose }) {
  if (!viewData) return null;

  
  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")      
      .replace(/^./, (str) => str.toUpperCase()); 
  };

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Staff Details
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {Object.entries(viewData).map(([key, value]) => {
            if (key === "action" || key === "si") return null;

            return (
              <Box key={key}>
                <Typography variant="subtitle2" color="textSecondary">
                  {formatKey(key)}
                </Typography>
                <Typography variant="body1">{value ?? "-"}</Typography>
              </Box>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
}



/*"use client";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ViewStaff({ viewData, handleClose }) {
  if (!viewData) return null;

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Staff Details
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
        <Grid container spacing={2}>
          {Object.entries(viewData).map(([key, value]) => {
            if (key === "action" || key === "si") return null;
            return (
              <Grid item xs={6} key={key}>
                <Typography variant="subtitle2" color="textSecondary">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
                <Typography variant="body1">{value}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>

    </Dialog>
  );
}*/