"use client";
import CommonDialog from "@/components/CommonDialog";
import Layout from "@/components/Layout";
import CreateProduct from "@/components/hsn-code/create";
import DeleteProduct from "@/components/hsn-code/delete";
import EditProduct from "@/components/hsn-code/edit";
import ViewProduct from "@/components/hsn-code/view";
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
    recordId,
    productName,
  productCategory,
  hsn_sacCode,
  description,
  gstRate,
  uqc,
  createdDate,
  updatedDate,
 status
) {
  return {recordId,productName,productCategory,hsn_sacCode,description,gstRate,uqc,createdDate,updatedDate,status,
    action:(
        <div className="action-buttons">
        <IconButton className="view-btn"
        
        
        >
            <VisibilityIcon/>
            </IconButton>
            <IconButton className="edit-btn"
            
       
        >
<EditIcon/>
            </IconButton>
            <IconButton className="delete-btn"
    
      
        >
            <DeleteIcon/>
        </IconButton>
        </div>
    )
   };
}

const rowsData = [
  createData("HSN001","Laptop Battery","Electronics","85076000","Rechargeable Lion battery","18%","PCS","2025-08-01","2025-08-15","Active"),
  createData("HSN002","Office Chair","Furniture","94013000","Swivel adjustable chair","18%","PCS","2025-07-20","2025-08-10","Active"),
  createData("HSN003","Consulting Fees","Services","998312","Management consultancy","18%","HRS","2025-06-05","2025-07-25","Active"),
  createData("HSN004","Cotton Shirts","Apparel","61051000","Men’s cotton woven shirts","5%","PCS","2025-05-18","2025-08-01","Active"),
  createData("HSN005","Packaged Biscuits","Food Products","19053100","Sweet biscuits (packaged)","12%","KGS","2025-04-25","2025-07-30","Active"),

]; 
console.log(rowsData)
export default function AllHsnCodes() {
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
    prev.map((p)=>(p.hsn_sacCode===
      updatedProduct.hsn_sacCode? updatedProduct:p
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
      prevRows.filter((item)=>item.hsn_sacCode !==deleteData.hsn_sacCode));
    
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
       
    row.recordId.toLowerCase().includes(search.toLowerCase())||
    row.productName.toLowerCase().includes(search.toLowerCase())||
    row.productCategory.toLowerCase().includes(search.toLowerCase())||
    row.description.toLowerCase().includes(search.toLowerCase())||
    row.gstRate.toLowerCase().includes(search.toLowerCase())||
    row.hsn_sacCode.toLowerCase().includes(search.toLowerCase())||
    row.uqc.toLowerCase().includes(search.toLowerCase())||
    row.createdDate.toLowerCase().includes(search.toLowerCase())||
    row.updatedDate.toLowerCase().includes(search.toLowerCase())||
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
                HSN/SAC Code
                </Typography>
            <div className="staff-controls">
              <TextField
              size='small'
              varient="outlined"
              placeholder="Search HSN/SAC Code..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="staff-search"
              />
              <Button varient="contained" color="primary" className="add-btn"
               onClick={()=> setOpenCreateDialog(true)}>+ Add HSN/SAC Code</Button>
              </div>
              </div>
    <TableContainer component={Paper} className="table-container">
      <Table stickyHeader  aria-label="staff table" className="staff-title">
        <TableHead>
          <TableRow>
          
        
            <TableCell sx={{color:"black",fontWeight:"600"}}align="right">Record ID </TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}align="right">Product Name</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Product Category</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">HSN/SAC Code</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}align="right">Description </TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}align="right">GST Rate</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}align="right">UQC (Unit Quantity Code)</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}align="right">Created Date</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}align="right">Updated Date</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Status</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row) => (
            <TableRow
              key={row.recordId}>
              
            
              <TableCell align="right">{row.recordId}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.productCategory}</TableCell>
              <TableCell align="right">{row.hsn_sacCode}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.gstRate}</TableCell>
              <TableCell align="right">{row.uqc}</TableCell>
              <TableCell align="right">{row.createdDate}</TableCell>
              <TableCell align="right">{row.updatedDate}</TableCell>
              <TableCell  align="right">{row.status}</TableCell>
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
            <TableCell colSpan={11} align="center" style={{fontWeight:"bold", color:"grey"}}>
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
          dialogTitle="View HSN/SAC Code"
          dialogContent={<ViewProduct product={viewData} />}
        />
        {/* common dialog for edit */}
        <CommonDialog
        open={openEditDialog}
        onClose={handleEditClose}
        dialogTitle="Edit HSN/SAC Code"
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
        dialogTitle="Delete HSN/SAC Code"
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
        dialogTitle="Add HSN/SAC Code"
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
