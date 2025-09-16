
import { useState } from "react";
import { TextField, Button } from "@mui/material";


export default function CreateSalesReturn({ handleCreate, handleClose }) {
  const [formData, setFormData] = useState({
Returnid:"",
Salesodrid:"",
Productid:"",
Productname:"",
qntyreturned:"",
Rtrndate:"",
ReturnedReason:"",
Refundamount:"",
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
        label="Return Id"
        name="Returnid"
        margin="dense"
        value={formData.Returnid}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="sales order"
        name="salesodrid"
        margin="dense"
        value={formData. Salesodrid}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product Id"
        name="Productid"
        margin="dense"
        value={formData. Productid}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Product name"
        name="Productname"
        margin="dense"
        value={formData. Productname}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="quantity returned"
        name="qntyreturned"
        margin="dense"
        value={formData.qntyreturned}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Return date"
        name="Rtrndate"
        margin="dense"
        value={formData.Rtrndate}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Returned Reason"
        name="ReturnedReason"
        margin="dense"
        value={formData.ReturnedReason}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Refund Amount"
        name="Refundamount"
        margin="dense"
        value={formData.Refundamount}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={submitForm} sx={{ mt: 2 }}>
        Create
      </Button>
    </div>
  );
}
