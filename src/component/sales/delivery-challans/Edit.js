
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditDeliveryChalan({ editData, handleUpdate, handleClose }) {
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
{/* deliveryId, salesodrid, deliveryDate, deliveryAdd, deliverystatus,deliverdby */}
      <TextField
        fullWidth
        label="Delivery ID"
        name="deliveryId"
        margin="dense"
        value={formData.deliveryId|| ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Salesodr ID"
        name="salesodrid"
        margin="dense"
        value={formData.salesodrid|| ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Delivery Date"
        name="deliveryDate"
        margin="dense"
        value={formData.deliveryDate|| ""}
        onChange={handleChange}
      />
           <TextField
        fullWidth
        label="Delivery Add"
        name="deliveryAdd"
        margin="dense"
        value={formData.deliveryAdd|| ""}
        onChange={handleChange}
      />
           <TextField
        fullWidth
        label="deliverystatus "
        name="deliverystatus"
        margin="dense"
        value={formData.deliverystatus || ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Deliverd By"
        name="deliverdby"
        margin="dense"
        value={formData.deliverdby|| ""}
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
