
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateStockUpdate({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
    transactionID:"",
     productID:"", 
     productname:"", 
     transactiontyp:"", 
     quantity:"",
     trscdate:"",
     trsctime:"",
     balstock:"",
     refno:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    handleCreate(formData);
    handleClose();
  };
// transactionID, productID, productname, transactiontyp, quantity,trscdate,trsctime,balstock,refno
  return (
    <div>
      <TextField
        fullWidth
        label="Transaction ID"
        name="transactionID"
        margin="dense"
        value={formData.transactionID}
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
        label="product Name"
        name="productname"
        margin="dense"
        value={formData.productname}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Transaction type"
        name="transactiontyp"
        margin="dense"
        value={formData.transactiontyp}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="quantity"
        name="quantity"
        margin="dense"
        value={formData.quantity}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Transaction Date"
        name="trscdate"
        margin="dense"
        value={formData.trscdate}
        onChange={handleChange}
        type="date"
      />
      <TextField
        fullWidth
        label="Transaction Time"
        name="trsctime"
        margin="dense"
        value={formData.trsctime}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Balance stock"
        name="balstock"
        margin="dense"
        value={formData.balstock}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Refrence no."   
        name="refno"
        margin="dense"
        value={formData.refno}
        onChange={handleChange}
      />
     <div className="lft-btn">
      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
      </div>
    </div>
  );
}
