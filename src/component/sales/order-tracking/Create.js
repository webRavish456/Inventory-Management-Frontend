
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateSalesReturn({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
trackingId:"",
 salesodr:"",
   lstupdtetime:"", 
  locationupdte:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    handleCreate(formData);
    handleClose();
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Tracking Id"
        name="trackingId"
        margin="dense"
        value={formData.trackingId}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="sales order"
        name="salesodrid"
        margin="dense"
        value={formData. salesodr}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Current Status"
        name="currentstus"
        margin="dense"
        value={formData.  currentstus}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="last updte(Date &Time)"
        name="lstupdtetime"
        margin="dense"
        value={formData. lstupdtetime}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="location update"
        name="locationupdte"
        margin="dense"
        value={formData.  locationupdte}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
    </div>
  );
}
