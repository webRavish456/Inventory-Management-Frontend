
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditSalesReturn({ editData, handleUpdate, handleClose }) {
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
        label="Return ID"
        name="Returnid"
        margin="dense"
        value={formData.Returnid|| ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Sales Order id"
        name="Salesodrid"
        margin="dense"
        value={formData.Salesodrid|| ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Product Id"
        name="Productid"
        margin="dense"
        value={formData.Productid|| ""}
        onChange={handleChange}
      />
           <TextField
        fullWidth
        label="Product Name"
        name="Productname"
        margin="dense"
        value={formData.Productname|| ""}
        onChange={handleChange}
      />
           <TextField
        fullWidth
        label="Quantity returned "
        name="qntyreturned "
        margin="dense"
        value={formData.qntyreturned || ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Returned date"
        name="Rtrndate "
        margin="dense"
        value={formData.Rtrndate || ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Returned Reason "
        name="ReturnedReason"
        margin="dense"
        value={formData.ReturnedReason|| ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="Refund amount"
        name="Refundamount"
        margin="dense"
        value={formData.Refundamount || ""}
        onChange={handleChange}
      />
      {/* Rtrndate,ReturnedReason,Refundamount */}
     <div className="btn-lft">
      <Button variant="contained" onClick={saveChanges} sx={{ mt: 2 }}>
        Save
      </Button>
      </div>
    </div>
  );
}
