
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateStockEntryout({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
 stockoutId:"",
   productId2:"",
   productname2:"",
    customerId:"",
   dateoutstock:"",
 transaction:"",
 paystatus:"",
 status2:""
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
        label="Stock out ID"
        name="stockoutId"
        margin="dense"
        value={formData. stockoutId}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product ID"
        name="productId2"
        margin="dense"
        value={formData.productId2}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product Name"
        name="productName2"
        margin="dense"
        value={formData. productname2}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="customer ID"
        name="customerId"
        margin="dense"
        value={formData.customerId}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Date of stock out"
        name="date"
        margin="dense"
        value={formData. dateoutstock}
        onChange={handleChange}
        type="Date"
      />
       <TextField
        fullWidth
        label="Payement Status"
        name="paystatus"
        margin="dense"
        value={formData. paystatus}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Status"
        name="status"
        margin="dense"
        value={formData.status2}
        onChange={handleChange}
        type="Date"
      />

      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
</div>
);
}
