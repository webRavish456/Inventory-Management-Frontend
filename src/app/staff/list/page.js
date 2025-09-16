"use client";
import { useState } from "react";
import {
  IconButton,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Box
} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Layout from "@/components/Layout";
import CommonDialog from "@/components/CommonDialog";
import CreateStaff from "@/components/Staff Management/Create";
import ViewStaff from "@/components/Staff Management/View";
import EditStaff from "@/components/Staff Management/Edit";
import DeleteStaff from "@/components/Staff Management/Delete";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


export default function StaffTable() {
  const [rows, setRows] = useState([
    createData(1,"STF001","Priya Singh", "Manager","9771800567","priya21@gmail.com","Jamshedpur","60000","2024-02-12","Available"),
    createData(2,"STF002","Ayush Kumar", "Assistant Manager","7682967811","ayush90@gmail.com","Ranchi","450000","2024-03-18","Unavailable"),
    createData(3,"STF003","Nysa Mittal", "Purchase Executive","9980201123","nysaa31@gmail.com","Hazaribagh","50000","2024-04-15","Available"),
  ]);

  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [createShow, setCreateShow] = useState(false);

  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  
  function createData(si, id, name, designation, mobile, email, address, salary, joiningdate, availability) {
    return {
      si, id, name, designation, mobile, email, address, salary, joiningdate, availability,
      action: (
        <>
          <IconButton style={{ color: "#072eb0", padding: "4px", transform: "scale(0.8)" }} onClick={() => handleView({ si, id, name, designation, mobile, email, address, salary, joiningdate, availability })}><VisibilityIcon/></IconButton>
          <IconButton style={{ color: "#6b6666", padding: "4px", transform: "scale(0.8)" }} onClick={() => handleEdit({ si, id, name, designation, mobile, email, address, salary, joiningdate, availability })}><EditIcon/></IconButton>
          <IconButton style={{ color: "#e6130b", padding: "4px", transform: "scale(0.8)" }} onClick={() => handleShowDelete(id)}><DeleteIcon/></IconButton>
        </>
      )
    };
  }

  
  const handleView = (row) => { setViewData(row); setViewShow(true); };
  const handleEdit = (row) => { setEditData(row); setEditShow(true); };
  const handleShowDelete = (id) => { setDeleteId(id); setDeleteShow(true); };
  const handleCreateOpen = () => setCreateShow(true);
  const handleClose = () => { setViewShow(false); setEditShow(false); setDeleteShow(false); setCreateShow(false); };

  
  const handleCreate = (newStaff) => {
    const nextSi = rows.length + 1;
    const newRow = createData(
      nextSi,
      newStaff.id,
      newStaff.name,
      newStaff.designation,
      newStaff.mobile,
      newStaff.email,
      newStaff.address,
      newStaff.salary,
      newStaff.joiningdate,
      newStaff.availability
    );
    setRows([...rows, newRow]);
  };

  
  const handleUpdate = (updatedStaff) => {
    setRows(rows.map(row =>
      row.si === updatedStaff.si
        ? createData(
            row.si,
            updatedStaff.id,
            updatedStaff.name,
            updatedStaff.designation,
            updatedStaff.mobile,
            updatedStaff.email,
            updatedStaff.address,
            updatedStaff.salary,
            updatedStaff.joiningdate,
            updatedStaff.availability
          )
        : row
    ));
  };


  const handleDelete = (id) => {
    setRows(rows.filter(row => row.id !== id));
    setIsDeleting(false);
  };

  
  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Staff Details</Typography>

        
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, marginBottom: 2 }}>
          <Button  className="myBtn" variant="contained"  onClick={handleCreateOpen}><AddIcon></AddIcon>Add Staff</Button>
          <TextField
          InputProps={{
            startAdornment: <SearchIcon size={20} style={{ marginLeft: 8 }} />
          }}
            placeholder="Search Staff"
            className="seachBar"
            label="Search Staff"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "white" }}>
                <TableCell sx={{ fontWeight: "600" }}>SI No.</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Staff ID</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Staff Name</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Staff Designation</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Mobile No.</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Email</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Address</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Salary</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Joining Date</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Availability</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow key={row.si}>
                  <TableCell>{row.si}</TableCell>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.designation}</TableCell>
                  <TableCell align="left">{row.mobile}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">{row.salary}</TableCell>
                  <TableCell align="left">{row.joiningdate}</TableCell>
                  <TableCell align="left" sx={{ color: row.availability === "Available" ? "green" : "gray", fontWeight: "600" }}>{row.availability}</TableCell>
                  <TableCell align="left">{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        
        <CommonDialog
          open={createShow || viewShow || editShow || deleteShow}
          onClose={handleClose}
          dialogTitle={
            createShow ? "Create New Staff" :
            viewShow ? "View Staff" :
            editShow ? "Edit Staff" :
            deleteShow ? "Delete Staff" : ""
          }
          dialogContent={
            createShow ? <CreateStaff handleClose={handleClose} handleCreate={handleCreate} /> :
            viewShow ? <ViewStaff viewData={viewData} handleClose={handleClose} /> :
            editShow ? <EditStaff editData={editData} handleUpdate={handleUpdate} handleClose={handleClose} /> :
            deleteShow ? <DeleteStaff deleteId={deleteId} isDeleting={isDeleting} handleDelete={handleDelete} handleClose={handleClose} /> : null
          }
        />
      </Box>
    </Layout>
  );
}





/*"use client";
import { IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Layout from "@/components/Layout";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

function createData(
  si,
    id,
  name,
  designation,
  mobile,
  email,
  address,
  salary,
  joiningdate,
  availability,
  

) {
  return { si,id,name,designation,mobile,email,address,salary,joiningdate,availability,
    action:(
        <>
        <IconButton
        style={{color:"#072eb0", padding:"4px", transform:"scale(0.8)"}}
          onClick={()=>handleView(row)}
          >
            <VisibilityIcon/>
            </IconButton>
            <IconButton  style={{color:"#6b6666", padding:"4px", transform:"scale(0.8)"}}
             onClick={()=>handleEdit(row)}
          >
            <EditIcon/>
            </IconButton>
            <IconButton style={{color:"#e6130b", padding:"4px", transform:"scale(0.8)"}}
              onClick={()=>handleShowDelete(row._id)}
          >
            <DeleteIcon/>
        </IconButton>
        </>
    )
   };
}
const handleView=(row)=>{
  console.log("row",row)
  setViewData(row);
  setViewShow(true);
};

const rows = [
  createData(1,"STF001","Priya Singh", "Developer","9771800567","priya21@gmail.com","Jamshedpur","60000","12 Feb 2024","Available",),
  createData(2,"STF002","Ayush Kumar", "UI/UX Developer","7682967811","ayush90@gmail.com","Ranchi","450000","18 Mar 2024","Unavailable",),
   createData(3,"STF003","Nysa Mittal", "Manager","9980201123","nysaa31@gmail.com","Hazaribagh","50000","15 Apr 2024","Available",),
];

export default function StaffTable() {
  return (
    <Layout>
        <div style={{padding:"20px"}}>
            <Typography variant="h5" gutterBottom sx={{fontWeight:600}}>Staff Details</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="staff table">
        <TableHead>
          
              <TableRow sx={{backgroundColor:"white"}}>
            <TableCell sx={{color:"black",fontWeight:"600"}}>SI No.</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Staff ID</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Staff Name</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Staff Designation</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Mobile No.</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Email</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Address</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Salary</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Joining Date</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Availability</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.si}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell component="th" scope="row">
                {row.si}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right">{row.joiningdate}</TableCell>
              <TableCell sx={{color:row.availability==="Available" ? "green": "gray", fontWeight:"600",}} align="right">{row.availability}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </div>
    </Layout>
  );
}




"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import Layout from "@/components/Layout";

function createData(
  si,
  id,
  name,
  designation,
  mobile,
  email,
  address,
  salary,
  joiningdate,
  availability
) {
  return {
    si,
    id,
    name,
    designation,
    mobile,
    email,
    address,
    salary,
    joiningdate,
    availability,
  };
}

export default function StaffTable() {
  const [rows, setRows] = useState([
    createData(
      1,
      "STF01",
      "Priya Singh",
      "Manager",
      "7682901123",
      "priya21@gmail.com",
      "Jamshedpur",
      "40000",
      "12 Feb 2024",
      "Available"
    ),
    createData(
      2,
      "STF02",
      "Anita Behra",
      "Assistant",
      "9876543210",
      "anita12@gmail.com",
      "Hazaribagh",
      "30000",
      "15 Mar 2024",
      "Unavailable"
    ),
    createData(
      3,
      "STF03",
      "Amisa Mittal",
      "Assistant",
      "9876543210",
      "amisa12@gmail.com",
      "Dhanbad",
      "30000",
      "20 Mar 2024",
      "Unavailable"
    ),
    createData(
      4,
      "STF04",
      "Alisha Mehra",
      "Developer",
      "9876545410",
      "aliya12@gmail.com",
      "Ranchi",
      "50000",
      "15 Apr 2024",
      "Available"
    ),
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [formData, setFormData] = useState({
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

 
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = (row = null) => {
    if (row) {
      setEditRow(row);
      setFormData(row);
    } else {
      setEditRow(null);
      setFormData({
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
    }
    setOpenDialog(true);
  };

  const handleClose = () => setOpenDialog(false);

  const handleSave = () => {
    if (editRow) {
      setRows(
        rows.map((row) =>
          row.id === editRow.id ? { ...formData, si: row.si } : row
        )
      );
    } else {
      setRows([...rows, { ...formData, si: rows.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Layout>
      
      <AppBar position="static" sx={{ mb: 2, background: "#072eb0" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Staff Management
          </Typography>

          
          <TextField
          
            size="small"
            placeholder="Search staff..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1 }} />,
            }}
            sx={{ background: "white", borderRadius: 1, mr: 2 }}
          />

          <Button
            className="myBtn"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpen()}
          >
            Add Staff
          </Button>
        </Toolbar>
      </AppBar>

      
      <div style={{ padding: "20px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "white" }}>
                <TableCell sx={{ fontWeight: 600 }}>SI No.</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Staff ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Designation</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Mobile</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Address</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Salary INR</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Joining Date</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Availability</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow key={row.si}>
                  <TableCell>{row.si}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.salary}</TableCell>
                  <TableCell>{row.joiningdate}</TableCell>
                  <TableCell
                    sx={{
                      color: row.availability === "Available" ? "green" : "grey",
                      fontWeight: "600",
                    }}
                  >
                    {row.availability}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      sx={{ color: "#072eb0" }}
                      onClick={() => console.log("View", row)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      sx={{ color: "#6b6666" }}
                      onClick={() => handleOpen(row)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      sx={{ color: "#e6130b" }}
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

             
              {filteredRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={11} align="center" sx={{ py: 3 }}>
                    No matching staff found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      
      <Dialog open={openDialog} onClose={handleClose} fullWidth>
        <DialogTitle>{editRow ? "Edit Staff" : "Add Staff"}</DialogTitle>
        <DialogContent dividers>
          <TextField
            margin="dense"
            label="Staff ID"
            fullWidth
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Designation"
            fullWidth
            value={formData.designation}
            onChange={(e) =>
              setFormData({ ...formData, designation: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Mobile"
            fullWidth
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Address"
            fullWidth
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Salary"
            fullWidth
            value={formData.salary}
            onChange={(e) =>
              setFormData({ ...formData, salary: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Joining Date"
            fullWidth
            value={formData.joiningdate}
            onChange={(e) =>
              setFormData({ ...formData, joiningdate: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Availability"
            fullWidth
            value={formData.availability}
            onChange={(e) =>
              setFormData({ ...formData, availability: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
}










"use client";
import { IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Layout from "@/components/Layout";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

function createData(
  si,
  id,
  name,
  designation,
  mobile,
  email,
  address,
  salary,
  joiningdate,
  availability
) {
  return {
    si,
    id,
    name,
    designation,
    mobile,
    email,
    address,
    salary,
    joiningdate,
    availability,
    action: (
      <>
        <IconButton
          style={{ color: "#072eb0", padding: "4px", transform: "scale(0.8)" }}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          style={{ color: "#6b6666", padding: "4px", transform: "scale(0.8)" }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          style={{ color: "#e6130b", padding: "4px", transform: "scale(0.8)" }}
        >
          <DeleteIcon />
        </IconButton>
      </>
    ),
  };
}

const rows = [
  createData(
    1,
    "STF01",
    "Priya",
    "Manager",
    "7682901123",
    "priya21@gmail.com",
    "Jamshedpur",
    "40000",
    "12 Feb 2024",
    "Available"
  ),
  createData(
    2,
    "STF02",
    "Anita",
    "Assistant",
    "9876543210",
    "anita12@gmail.com",
    "Ranchi",
    "30000",
    "15 Mar 2024",
    "Unavailable"
  ),
  createData(
    3,
    "STF03",
    "Rahul",
    "Clerk",
    "9123456780",
    "rahul33@gmail.com",
    "Dhanbad",
    "25000",
    "20 Jan 2024",
    "Available"
  ),
];

export default function BasicTable() {
  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Staff Details
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="staff table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "white" }}>
                <TableCell sx={{ color: "black", fontWeight: "600" }}>
                  SI No.
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Staff ID
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Name
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Staff Designation
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Mobile No.
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Email
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Address
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Salary
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Joining Date
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Availability
                </TableCell>
                <TableCell sx={{ color: "black", fontWeight: "600" }} align="right">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.si}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.si}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.designation}</TableCell>
                  <TableCell align="right">{row.mobile}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.salary}</TableCell>
                  <TableCell align="right">{row.joiningdate}</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: row.availability === "Available" ? "green" : "red",
                      fontWeight: "600",
                    }}
                  >
                    {row.availability}
                  </TableCell>
                  <TableCell align="right">{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}














"use client";
import { IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Layout from "@/components/Layout";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

function createData(
  si,
    id,
  name,
  designation,
  mobile,
  email,
  address,
  salary,
  joiningdate,
  availability,
  

) {
  return { si,id,name,designation,mobile,email,address,salary,joiningdate,availability,
    action:(
        <>
        <IconButton
        style={{color:"#072eb0", padding:"4px", transform:"scale(0.8)"}}
        
        >
            <VisibilityIcon/>
            </IconButton>
            <IconButton  style={{color:"#6b6666", padding:"4px", transform:"scale(0.8)"}}
       
        >
<EditIcon/>
            </IconButton>
            <IconButton style={{color:"#e6130b", padding:"4px", transform:"scale(0.8)"}}
      
        >
            <DeleteIcon/>
        </IconButton>
        </>
    )
   };
}

const rows = [
  createData(1,"MO78","Priya", "Manager","7682901123","priya21@gmail.com","Jamshedpur","40000","12 Feb 2024","Available",),
  createData(2,"MO78","Priya", "Manager","7682901123","priya21@gmail.com","Jamshedpur","40000","12 Feb 2024","Unavailable",),
   createData(3,"MO78","Priya", "Manager","7682901123","priya21@gmail.com","Jamshedpur","40000","12 Feb 2024","Available",),
];

export default function BasicTable() {
  return (
    <Layout>
        <div style={{padding:"20px"}}>
            <Typography variant="h5" gutterBottom sx={{fontWeight:600}}>Staff Details</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="staff table">
        <TableHead>
          
              <TableRow sx={{backgroundColor:"white"}}>
            <TableCell sx={{color:"black",fontWeight:"600"}}>SI No.</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Staff ID</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Staff Designation</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Mobile No.</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Email</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Address</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Salary</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Joining Date</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Availability</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Status</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.si}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell component="th" scope="row">
                {row.si}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right">{row.joiningdate}</TableCell>
              <TableCell sx={{color:row.status==="Available" ? "green": "red", fontWeight:"600",}} align="right">{row.status}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </div>
    </Layout>
  );
}*/