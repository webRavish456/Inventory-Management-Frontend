
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateDeliveryChalan({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
deliveryId:"",
 salesodrid:"",
  deliveryDate:"", 
  deliveryAdd:"",
   deliverystatus:"",
   deliverdby:"",
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
        label="Delivery Id"
        name="deliveryId"
        margin="dense"
        value={formData.deliveryId}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="sales order"
        name="salesodrid"
        margin="dense"
        value={formData. salesodrid}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="delivery Date"
        name="deliveryDate"
        margin="dense"
        value={formData. deliveryDate}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Delivery Address "
        name="deliveryAdd"
        margin="dense"
        value={formData. deliveryAdd}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Delivery status"
        name="deliverystatus"
        margin="dense"
        value={formData. deliverystatus}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Deliverd by"
        name="deliverdby"
        margin="dense"
        value={formData.deliverdby}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
    </div>
  );
}
