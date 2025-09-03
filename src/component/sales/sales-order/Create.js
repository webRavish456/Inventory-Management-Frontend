
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateSalesOrder({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
Salesodrid:"",
odrDate:"",
customerId:"",
 customercall:"",
 Productname:"",
 qntyodr:"",
 totalcost:"",
 discount:"",
 deliveryDate:"",
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
        label="Sales order Id"
        name="Salesodrid"
        margin="dense"
        value={formData.Salesodrid}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="odrDate"
        name="odrDate"
        margin="dense"
        value={formData. odrDate}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="customer Id"
        name="customerId"
        margin="dense"
        value={formData. customerId}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Customer call"
        name="customercall"
        margin="dense"
        value={formData.customercall}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product name"
        name="Productname"
        margin="dense"
        value={formData.Productname}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="quantity order"
        name="qntyodr"
        margin="dense"
        value={formData.qntyodr}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Total cost"
        name="totalcost"
        margin="dense"
        value={formData.totalcost}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Discount"
        name="discount"
        margin="dense"
        value={formData.discount}
        onChange={handleChange}
      />
      
      <TextField
        fullWidth
        label="Delivery Date"
        name="deliveryDate"
        margin="dense"
        value={formData.deliveryDate}
        onChange={handleChange}
        />
      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
    </div>
  );
}
