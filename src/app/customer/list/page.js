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
import CreateCustomer from "@/components/Customer Management/Create";
import ViewCustomer from "@/components/Customer Management/View";
import EditCustomer from "@/components/Customer Management/Edit";
import DeleteCustomer from "@/components/Customer Management/Delete";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


export default function CustomerTable() {
  const [rows, setRows] = useState([
    createData(1,"CUST001","Neha Mehra", "Apex Solutions Pvt Ltd","contact@apexsol.com","9800124567","27ABCDE1234F1Z5","ABCPA1234F","Active"),
    createData(2,"CUST002","Rohan Mehta", "BlueWave Technologies","info@bluewave.com","7009124567","27BCDEB1234G1Z6","BCDPB5678G","Inactive"),
    createData(3,"CUST003","Vivek Choudhary", "Orion Enterprises","support@orion.com","8001248567","27DEFPD3456J1Z8","DEFPD3456J","Active"),
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

  
  function createData(si, id, name, company, email, contact, gst, pan, status) {
    return {
      si, id, name, company, email, contact, gst, pan, status,
      action: (
        <>
          <IconButton style={{ color: "#072eb0", padding: "4px", transform: "scale(0.8)" }} onClick={() => handleView({ si, id, name, company, email, contact, gst, pan, status})}><VisibilityIcon/></IconButton>
          <IconButton style={{ color: "#6b6666", padding: "4px", transform: "scale(0.8)" }} onClick={() => handleEdit({ si, id, name, company, email, contact, gst, pan, status })}><EditIcon/></IconButton>
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

  
  const handleCreate = (newCustomer) => {
    const nextSi = rows.length + 1;
    const newRow = createData(
      nextSi,
      newCustomer.id,
      newCustomer.name,
      newCustomer.company,
      newCustomer.email,
      newCustomer.contact,
      newCustomer.gst,
      newCustomer.pan,
      newCustomer.status
    );
    setRows([...rows, newRow]);
  };

  
  const handleUpdate = (updatedCustomer) => {
    setRows(rows.map(row =>
      row.si === updatedCustomer.si
        ? createData(
            row.si,
            updatedCustomer.id,
            updatedCustomer.name,
            updatedCustomer.company,
            updatedCustomer.email,
            updatedCustomer.contact,
            updatedCustomer.gst,
            updatedCustomer.pan,
            updatedCustomer.status
            
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
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Customer Details</Typography>

        
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, marginBottom: 2 }}>
          <Button  className="myBtn" variant="contained"  onClick={handleCreateOpen}><AddIcon></AddIcon>Add Customer</Button>
          <TextField
           InputProps={{
            startAdornment: <SearchIcon size={20} style={{marginLeft:8}}/>
            }}
           placeholder="Search Customer"
            className="seachBar"
            label="Search Customer"
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
                <TableCell sx={{ fontWeight: "600" }} align="left">Customer ID</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Customer Name</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Company</TableCell>
                 <TableCell sx={{ fontWeight: "600" }} align="left">Email</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Contact No.</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">GST No.</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">PAN No.</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Status</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow key={row.si}>
                  <TableCell>{row.si}</TableCell>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.company}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.contact}</TableCell>
                  <TableCell align="left">{row.gst}</TableCell>
                  <TableCell align="left">{row.pan}</TableCell>
                  <TableCell align="left" sx={{ color: row.status === "Active" ? "green" : "gray", fontWeight: "600" }}>{row.status}</TableCell>
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
            createShow ? "Create New Customer" :
            viewShow ? "View Customer" :
            editShow ? "Edit Customer" :
            deleteShow ? "Delete Customer" : ""
          }
          dialogContent={
            createShow ? <CreateCustomer handleClose={handleClose} handleCreate={handleCreate} /> :
            viewShow ? <ViewCustomer viewData={viewData} handleClose={handleClose} /> :
            editShow ? <EditCustomer editData={editData} handleUpdate={handleUpdate} handleClose={handleClose} /> :
            deleteShow ? <DeleteCustomer deleteId={deleteId} isDeleting={isDeleting} handleDelete={handleDelete} handleClose={handleClose} /> : null
          }
        />
      </Box>
    </Layout>
  );
}
