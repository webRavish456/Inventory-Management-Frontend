
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditOrderTracking({ editData, handleUpdate, handleClose }) {
  const [formData, setFormData] = useState(editData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    handleUpdate(formData);
    handleClose();
  };

  return (
    <div>

      <TextField
        fullWidth
        label="Tracking ID"
        name="trackingId"
        margin="dense"
        value={formData.trackingId|| ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Sales order"
        name="salesodr"
        margin="dense"
        value={formData.salesodr|| ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="current status"
        name="currentstus"
        margin="dense"
        value={formData.currentstus|| ""}
        onChange={handleChange}
      />
           <TextField
        fullWidth
        label="last updte (Date&Time)"
        name="lstupdtetime"
        margin="dense"
        value={formData.lstupdtetime|| ""}
        onChange={handleChange}
        type="date"
      />
           <TextField
        fullWidth
        label="location updte  "
        name="locationupdte "
        margin="dense"
        value={formData.locationupdte  || ""}
        onChange={handleChange}
      />
      
     <div className="btn-lft">
      <Button variant="contained" onClick={saveChanges} sx={{ mt: 2 }}>
        Save
      </Button>
      </div>
    </div>
  );
}
