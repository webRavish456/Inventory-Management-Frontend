
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditBatchmng({ editData, handleUpdate, handleClose }) {
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
        label="Batch quantity"
        name="batchqty"
        margin="dense"
        value={formData.batchqty|| ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="manufacturing Date"
        name="mftgDate"
        margin="dense"
        value={formData. mftgDate || ""}
        onChange={handleChange}
        type="date"
      />
      <TextField
        fullWidth
        label="price per unit"
        name="priceperunit"
        margin="dense"
        value={formData.priceperunit || ""}
        onChange={handleChange}
      /> <TextField
        fullWidth
        label="quality Status"
        name="qualityStatus"
        margin="dense"
        value={formData.qualityStatus || ""}
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
