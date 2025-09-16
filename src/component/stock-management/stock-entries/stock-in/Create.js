
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateStockEntryin({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
 stockId:"",
   productId:"",
   productName:"",
    supplierId :"",
         date:"",
 paymentStatus:"",
 status:"",
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
        label="Stock ID"
        name="stockId"
        margin="dense"
        value={formData. stockId}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product ID"
        name="productId"
        margin="dense"
        value={formData. productId}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product Name"
        name="productName"
        margin="dense"
        value={formData.productName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Supplier ID"
        name="supplierId"
        margin="dense"
        value={formData.supplierId}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Date of Entry"
        name="date"
        margin="dense"
        value={formData.date}
        onChange={handleChange}
        type="Date"
      />
       <TextField
        fullWidth
        label="Payement Status"
        name="paymentStatus"
        margin="dense"
        value={formData. paymentStatus}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Status"
        name="status"
        margin="dense"
        value={formData. status}
        onChange={handleChange}
        type="Date"
      />

      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
    </div>
  );
}
