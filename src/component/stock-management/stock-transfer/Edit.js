
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditStockTransfer({ editData, handleUpdate, handleClose }) {
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
        label="Quantity Transfered"
        name="qtytransferred"
        margin="dense"
        value={formData.qtytransferred || ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Location(from)"
        name="fromLocation"
        margin="dense"
        value={formData.fromLocation|| ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Location(to)"
        name="toLocation"
        margin="dense"
        value={formData.toLocation|| ""}
        onChange={handleChange}
      />
           <TextField
        fullWidth
        label="Transfer date"
        name="Transferdate"
        margin="dense"
        value={formData.Transferdate || ""}
        onChange={handleChange}
        type="date"
      />
           <TextField
        fullWidth
        label="Transfer Time "
        name="TransferTime"
        margin="dense"
        value={formData.TransferTime || ""}
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
