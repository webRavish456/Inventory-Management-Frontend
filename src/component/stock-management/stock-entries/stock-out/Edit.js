
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditStockEntryout({ editData, handleUpdate, handleClose }) {
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
        label="stock out Id"
        name="stockoutId"
        margin="dense"
        value={formData.stockoutId || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="product Id"
        name="productId2"
        margin="dense"
        value={formData. productId2 || ""}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="transaction"
        name="transaction"
        margin="dense"
        value={formData.transaction|| ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="paystatus"
        name="paystatus"
        margin="dense"
        value={formData.paystatus|| ""}
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
