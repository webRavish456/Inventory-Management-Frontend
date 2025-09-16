
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateStock({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
    productID: "",
    productname: "",
    openingqty: "",
    openingstockvlu: "",
    dofEntry: "",
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
        label="Product ID"
        name="productID"
        margin="dense"
        value={formData.productID}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product Name"
        name="productname"
        margin="dense"
        value={formData.productname}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Quantity"
        name="openingqty"
        margin="dense"
        value={formData.openingqty}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Stock Value"
        name="openingstockvlu"
        margin="dense"
        value={formData.openingstockvlu}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Date of Entry"
        name="dofEntry"
        margin="dense"
        value={formData.dofEntry}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
    </div>
  );
}
