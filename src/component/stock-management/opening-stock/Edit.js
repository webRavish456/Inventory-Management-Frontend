
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditStock({ editData, handleUpdate, handleClose }) {
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
        label="Product Name"
        name="productname"
        margin="dense"
        value={formData.productname || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Quantity"
        name="openingqty"
        margin="dense"
        value={formData.openingqty || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Stock Value"
        name="openingstockvlu"
        margin="dense"
        value={formData.openingstockvlu || ""}
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
