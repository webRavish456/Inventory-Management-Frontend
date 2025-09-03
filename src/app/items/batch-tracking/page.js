"use client";
import CommonDialog from "@/components/CommonDialog";
import Layout from "@/components/Layout";
import CreateProduct from "@/components/batch-tracking/create";
import DeleteProduct from "@/components/batch-tracking/delete";
import EditProduct from "@/components/batch-tracking/edit";
import ViewProduct from "@/components/batch-tracking/view";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

function createData(
  productName,
  varientName,
  batchNo,
  qty,
  manufactureDate,
  expiryDate,
  warehouseName,
  salesName,
  status
) {
  return {productName,varientName,batchNo,qty,manufactureDate,expiryDate,warehouseName,salesName,status,
    action:(
        <div className="action-buttons">
        <IconButton className="view-btn"  >
            <VisibilityIcon/>
            </IconButton>
            <IconButton className="edit-btn">
            <EditIcon/>
            </IconButton>
            <IconButton className="delete-btn">
              <DeleteIcon/>
                  </IconButton>
        </div>
    )
  };
}

    
      
        
        
const rowsData = [
  createData("Laptop Pro 15","16GB/512GB SSD","B001",25,"2024-01-14","2026-01-17","Delhi WH","Ramesh Kumar","In Stock"),
  createData("Office Chair","Ergonomic Black","B002",40,"2024-08-01","2026-02-29","Mumbai WH","Seema Singh","Sold"),
  createData("Coffee Mug","Ceramic White","B003",120,"2022-12-08","2025-11-12","Banglore WH","Amit Sharma","Returned"),
  createData("LED TV 43","Smart 4k","B004",80,"2024-01-19","2026-08-25","Chennai WH","Neha Verma","Expired"),
  createData("Printer Ink","Black Cartridge","B005",250,"2023-08-30","2025-11-18","Kolkata WH","Ravi Singh","Damaged"),

];
console.log(rowsData)
export default function AllProductCtegories() {
const [search,setSearch]=useState("");
const[rows,setRows]=useState(rowsData);
  // ✅ dialog states
  // view dialog states
  const [openDialog, setOpenDialog] = useState(false);
  const [viewData, setViewData] = useState(null);
  // edit dialog states
  const[openEditDialog,setOpenEditDialog]=useState(false);
  const[editData,setEditData]=useState(null);
  // delete dialog states
  const [openDeleteDialog,setOpenDeleteDialog]=useState(false);
  const[deleteData,setDeleteData]=useState(null);
  // create dialog states
  const [openCreateDialog,setOpenCreateDialog]=useState(false);
// view handlers
  const handleDialogClose = () => {
    setOpenDialog(false);
    setViewData(null);
  };

  // ✅ View button action
  const handleView = (row) => {
    setViewData(row);
    setOpenDialog(true);
  };

  // Edit + Delete ke liye future handlers (placeholder)
  const handleEditClose = () =>{
    setOpenEditDialog(false);
    setEditData(null);
  };
  const handleEdit = (row) => {
    setEditData(row);
    setOpenEditDialog(true);
  };
  const handleUpdate=(updatedProduct)=>{
    console.log("Updated product: ",updatedProduct);
    setRows((prev)=>
    prev.map((p)=>(p.batchNo===
      updatedProduct.batchNo? updatedProduct:p
    )));
    handleEditClose();
  };
  // delete handlers
const handleDeleteClose=()=>{
  setOpenDeleteDialog(false);
  setDeleteData(null);
};
const handleDelete=(row)=>{
  setDeleteData(row);
  setOpenDeleteDialog(true);
};
  const confirmDelete = () => {
    setRows((prevRows)=>
      prevRows.filter((item)=>item.batchNo !==deleteData.batchNo));
    
    handleDeleteClose();
  };
// create handlers
const handleCreateClose=()=>{
  setOpenCreateDialog(false);
};

const handleCreateSave=(newProduct)=>{
  console.log("New product added: ",newProduct);
  setRows((prev)=>[...prev,newProduct]);
  handleCreateClose();
};

  // filter rows
  const filteredRows= rowsData.filter(
    (row)=>
    row.productName.toLowerCase().includes(search.toLowerCase())||
    row.varientName.toLowerCase().includes(search.toLowerCase())||
    row.batchNo.toLowerCase().includes(search.toLowerCase())||
    row.manufactureDate.toLowerCase().includes(search.toLowerCase())||
    row.expiryDate.toLowerCase().includes(search.toLowerCase())||
    row.warehouseName.toLowerCase().includes(search.toLowerCase())||
    row.salesName.toLowerCase().includes(search.toLowerCase())||
    row.status.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <Layout>
        <div className="staff-container">
        <div className="staff-header">
            <Typography
              variant="h6"
              className="staff-title"
              gutterBottom sx={{fontWeight:600}}>
              Batch & Serial No.
              </Typography>
            <div className="staff-controls">
              <TextField
              size='small'
              varient="outlined"
              placeholder="Search batch no. ..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="staff-search"
              />
              <Button varient="contained" color="primary" className="add-btn" onClick={()=> setOpenCreateDialog(true)}>+ Add batch number</Button>
              </div>
              </div>
    <TableContainer component={Paper} className="table-container">
      <Table stickyHeader  aria-label="staff table" className="staff-title">
        <TableHead>
          <TableRow>
          
        
            <TableCell sx={{color:"black",fontWeight:"600"}}>Product Name </TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}>Varient Name</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">BATCH/Serial No.</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Quantity</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}>Manufacture Date</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Expiry Date</TableCell>
              
              <TableCell sx={{color:"black",fontWeight:"600"}}>Warehouse Name</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Sales Name</TableCell>
        
                
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Status</TableCell>
        <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row) => (
            <TableRow
              key={row.productName}>
              
            
              <TableCell>
                {row.productName}
              </TableCell>
                <TableCell align="right">{row.varientName}</TableCell>
              <TableCell align="right">{row.batchNo}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.manufactureDate}</TableCell>
                  <TableCell align="right">{row.expiryDate}</TableCell>
                    
                      <TableCell align="right">{row.warehouseName}</TableCell>
                      <TableCell align="right">{row.salesName}</TableCell>
                        
                        
              <TableCell  align="right">{row.status}</TableCell>
            {/* <TableCell align="right">{row.action}</TableCell> */}
            <TableCell align="right">
                                  {/* ✅ action-buttons div wapis dala */}
                                  <div className="action-buttons">
                                    <IconButton className="view-btn" onClick={() => handleView(row)}>
                                      <VisibilityIcon />
                                    </IconButton>
                                    <IconButton className="edit-btn" onClick={() => handleEdit(row)}>
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton className="delete-btn" onClick={() => handleDelete(row)}>
                                      <DeleteIcon />
                                    </IconButton>
                                  </div>
                                </TableCell>
            </TableRow>
          ))
        ):(
          <TableRow>
            <TableCell colSpan={9} align="center" style={{fontWeight:"bold", color:"grey"}}>
              No results found
            </TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
    
        {/* ✅ CommonDialog for View */}
        <CommonDialog
          open={openDialog}
          onClose={handleDialogClose}
          dialogTitle="View Product"
          dialogContent={<ViewProduct product={viewData} />}
        />
        {/* common dialog for edit */}
        <CommonDialog
        open={openEditDialog}
        onClose={handleEditClose}
        dialogTitle="Edit Products"
        dialogContent={
          <EditProduct
          product={editData}
          onCancel={handleEditClose}
          onUpdate={handleUpdate}/>
        }
        />
        {/* common dialog for delete */}
        <CommonDialog
        open ={openDeleteDialog}
        onClose={handleDeleteClose}
        dialogTitle="Delete Product"
        dialogContent={
          <DeleteProduct
          product={deleteData}
          onCancel={handleDeleteClose}
          onDelete={confirmDelete}/>
        }
        />
        {/* common dialog for create */}
        <CommonDialog
        open={openCreateDialog}
        onClose={handleCreateClose}
        dialogTitle="Add new batch no"
        dialogContent={
          <CreateProduct
          onCancel={handleCreateClose}
          onSave={handleCreateSave}/>
        }
        />
   
    </div>
    </Layout>
  );
}
