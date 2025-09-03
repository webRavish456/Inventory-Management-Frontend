
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateStockTransfer({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
TransferID:"",
 productID:"", 
 productname:"",
  qtytransferred:"",
   fromLocation:"",
   toLocation:"",
   Transferdate:"",
   TransferTime:"",
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
        value={formData.TransferID}
        onChange={handleChange}
      />
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
        label="Quantity transferred"
        name="qtytransferred"
        margin="dense"
        value={formData.qtytransferred}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="from Location"
        name="fromLocation"
        margin="dense"
        value={formData.fromLocation}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="ToTLocation"
        name="toLocation"
        margin="dense"
        value={formData.toLocation}
        onChange={handleChange}
      />
 <TextField
        fullWidth
        label="Transfer date"
        name="Transferdate"
        margin="dense"
        value={formData.Transferdate}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Transfer Time"
        name="TransferTime"
        margin="dense"
        value={formData.TransferTime}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
    </div>
  );
}
