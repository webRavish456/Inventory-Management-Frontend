"use client";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Grid, Typography, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export default function CreateStaff({ handleClose, handleCreate }) {
  const [staffData, setStaffData] = useState({
    staffName: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    qualification: "",
    experience: "",
    address: "",

    branchName: "",
    designation: "",
    department: "",
    salary: "",
    joiningdate: "",
    shift: "",

    resume: null,
    qualificationCert: null,
    panCard: null,
    aadharCard: null,

    accountHolder: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
    bankBranch: "",
    branchLocation: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setStaffData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setStaffData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (handleCreate) handleCreate(staffData);
    handleClose();
  };

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Create New Staff</DialogTitle>
      <DialogContent dividers>
        
        <Typography variant="h6" gutterBottom>Personal Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}><TextField label="Staff Name" name="staffName" value={staffData.staffName} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}>
            <TextField select label="Gender" name="gender" value={staffData.gender} onChange={handleChange} fullWidth>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}><TextField type="date" label="Date of Birth" name="dob" value={staffData.dob} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} /></Grid>
          <Grid item xs={6}><TextField label="Mobile Number" name="mobile" value={staffData.mobile} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Email ID" name="email" value={staffData.email} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Qualification" name="qualification" value={staffData.qualification} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Experience" name="experience" value={staffData.experience} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Address" name="address" value={staffData.address} onChange={handleChange} fullWidth /></Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        
        <Typography variant="h6" gutterBottom>Company Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}><TextField label="Branch Name" name="branchName" value={staffData.branchName} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Designation" name="designation" value={staffData.designation} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Department" name="department" value={staffData.department} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Salary" name="salary" type="number" value={staffData.salary} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField type="date" label="Joining Date" name="joiningdate" value={staffData.joiningdate} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} /></Grid>
          <Grid item xs={6}><TextField label="Shift" name="shift" value={staffData.shift} onChange={handleChange} fullWidth /></Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        
        <Typography variant="h6" gutterBottom>Document Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}><Button variant="outlined" component="label">Upload Resume <input type="file" name="resume" hidden onChange={handleChange} /></Button></Grid>
          <Grid item xs={6}><Button variant="outlined" component="label">Upload Qualification Certificate <input type="file" name="qualificationCert" hidden onChange={handleChange} /></Button></Grid>
          <Grid item xs={6}><Button variant="outlined" component="label">Upload PAN Card <input type="file" name="panCard" hidden onChange={handleChange} /></Button></Grid>
          <Grid item xs={6}><Button variant="outlined" component="label">Upload Aadhaar Card <input type="file" name="aadharCard" hidden onChange={handleChange} /></Button></Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

       
        <Typography variant="h6" gutterBottom>Bank Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}><TextField label="Account Holder Name" name="accountHolder" value={staffData.accountHolder} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Account Number" name="accountNumber" value={staffData.accountNumber} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Bank Name" name="bankName" value={staffData.bankName} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="IFSC Code" name="ifsc" value={staffData.ifsc} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Bank Branch" name="bankBranch" value={staffData.bankBranch} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={6}><TextField label="Branch Location" name="branchLocation" value={staffData.branchLocation} onChange={handleChange} fullWidth /></Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}





/*"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CreateStaff({ handleClose, handleCreate }) {
  const [staffData, setStaffData] = useState({
    id: "",
    name: "",
    designation: "",
    mobile: "",
    email: "",
    address: "",
    salary: "",
    joiningdate: "",
    availability: "Available",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Creating staff:", staffData);
    if (handleCreate) handleCreate(staffData);
    handleClose();
  };

  return (
    <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Create New Staff
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField label="Staff ID" name="id" value={staffData.id} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Staff Name" name="name" value={staffData.name} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Designation" name="designation" value={staffData.designation} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Mobile" name="mobile" value={staffData.mobile} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" name="email" value={staffData.email} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Address" name="address" value={staffData.address} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Salary" name="salary" value={staffData.salary} onChange={handleChange} type="number" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Joining Date"
              name="joiningdate"
              type="date"
              value={staffData.joiningdate}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Availability"
              name="availability"
              value={staffData.availability}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Unavailable">Unavailable</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}*/
