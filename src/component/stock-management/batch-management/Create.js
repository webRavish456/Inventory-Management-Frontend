
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateBatchmng({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
    batchID:"", 
    productname:"",
    productID:"",
     batchqty:"",
      mftgDate:"",
      priceperunit:"",
      Suppliername:"",
      qualityStatus:"",
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
        label="Batch ID"
        name="batchID"
        margin="dense"
        value={formData.batchID}
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
        label="product ID"
        name="productID"
        margin="dense"
        value={formData.productID}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Batch Quantity"
        name="batchqty"
        margin="dense"
        value={formData.batchqty}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Date of Entry"
        name="dofEntry"
        margin="dense"
        value={formData.mftgDate}
        onChange={handleChange}
        type="date"
      />

       <TextField
        fullWidth
        label="price per unit"
        name="priceperunit"
        margin="dense"
        value={formData.priceperunit}
        onChange={handleChange}
      />

       <TextField
        fullWidth
        label="Supplier name"
        name="Suppliername"
        margin="dense"
        value={formData.Suppliername}
        onChange={handleChange}
      />

       <TextField
        fullWidth
        label="Quality Status"
        name="qualityStatus"
        margin="dense"
        value={formData.qualityStatus}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
    </div>
  );
}
