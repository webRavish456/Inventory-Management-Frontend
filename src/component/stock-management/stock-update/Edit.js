
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditStockUpdate({ editData, handleUpdate, handleClose }) {
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
        label="Quantity"
        name="quantity"
        margin="dense"
        value={formData.quantity || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Balance stock"
        name="balstock"
        margin="dense"
        value={formData.balstock || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label=" Transaction type"
        name=" transactiontyp"
        margin="dense"
        value={formData. transactiontyp || ""}
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
