
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditStockEntryin({ editData, handleUpdate, handleClose }) {
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
        name="stockId"
        margin="dense"
        value={formData.stockId || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="product Id"
        name="productId"
        margin="dense"
        value={formData. productId|| ""}
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
        label="payment status"
        name="paymentstatus"
        margin="dense"
        value={formData.paymentstatus|| ""}
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
