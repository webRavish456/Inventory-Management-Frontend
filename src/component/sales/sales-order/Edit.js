
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function EditSalesOrder({ editData, handleUpdate, handleClose }) {
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
        label="customer call"
        name="customercall"
        margin="dense"
        value={formData.customercall|| ""}
        onChange={handleChange}
      />
       <TextField
        fullWidth
        label="quantity order"
        name="qntyodr"
        margin="dense"
        value={formData.qntyodr|| ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="total cost"
        name="totalcost"
        margin="dense"
        value={formData.totalcost|| ""}
        onChange={handleChange}
      />
           <TextField
        fullWidth
        label="delivery Date"
        name="deliveryDate"
        margin="dense"
        value={formData.deliveryDate|| ""}
        onChange={handleChange}
      />
        
     <div className="btn-lft">
      <Button variant="contained" onClick={saveChanges} sx={{ mt: 2 }}>
        Save
      </Button>
      </div>
    </div>
  );
}
