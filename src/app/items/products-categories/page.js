"use client";
import CommonDialog from "@/components/CommonDialog";
import Layout from "@/components/Layout";
import CreateProduct from "@/components/products-categories/create";
import DeleteProduct from "@/components/products-categories/delete";
import EditProduct from "@/components/products-categories/edit";
import ViewProduct from "@/components/products-categories/view";
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
    proID,
    varId,
  batch_sNo,
  qty,
  manufactureDate,
  expiryDate,
  purID,
  wareID,
  salesID,
 
  status
) {
  return {proID,varId,batch_sNo,qty,manufactureDate,expiryDate,purID,wareID,salesID,status,
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
  createData("P1001","PV001","BATCH-LP15A01",50,"2024-01-14","2026-01-17","PUR-501","WH-01","SALE-301","In Stock"),
  createData("P1001","PV002","BATCH-LP15A02",30,"2024-08-01","2026-02-29","PUR-502","WH-02","SALE-302","Sold"),
  createData("P1002","PV003","CHR-SN-1001",120,"2022-12-08","2025-11-12","PUR-503","WH-01","SALE-303","Returned"),
  createData("P1002","PV004","CHR-SN-1002",80,"2024-01-19","2026-08-25","PUR-504","WH-03","SALE-304","In Stock"),
  createData("P1003","PV005","CMG-BATCH-01",250,"2023-08-30","2025-11-18","PUR-505","WH-04","SALE-305","In Stock"),
  createData("P1003","PV006","CMG-BATCH-02",150,"2022-01-14","2024-01-17","PUR-506","WH-04","SALE-306","Sold"),
 createData("P1004","PV007","LED43-SN-7001",60,"2024-01-18","2020-01-17","PUR-507","WH-05","SALE-307","Expired")
]; 
console.log(rowsData)
export default function AllProductCategories() {
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
      prev.map((p)=>(p.proID===
        updatedProduct.proID? updatedProduct:p
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
        prevRows.filter((item)=>item.proID !==deleteData.proID));
      
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
  const filteredRows= rows.filter(
    (row)=>
       
      row.proID.toLowerCase().includes(search.toLowerCase())||
    row.varId.toLowerCase().includes(search.toLowerCase())||
     row.batch_sNo.toLowerCase().includes(search.toLowerCase())||
         row.manufactureDate.toLowerCase().includes(search.toLowerCase())||
            row.expiryDate.toLowerCase().includes(search.toLowerCase())||
                  row.purID.toLowerCase().includes(search.toLowerCase())||
                        row.wareID.toLowerCase().includes(search.toLowerCase())||
                        row.salesID.toLowerCase().includes(search.toLowerCase())||
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
                Products Categories
                </Typography>
            <div className="staff-controls">
              <TextField
              size='small'
              variant="outlined"
              placeholder="Search categories..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="staff-search"
              />
              <Button variant="contained" color="primary" className="add-btn"
               onClick={()=> setOpenCreateDialog(true)}>+ Add Categories</Button>
              </div>
              </div>
    <TableContainer component={Paper} className="table-container">
      <Table stickyHeader  aria-label="staff table" className="staff-title">
        <TableHead>
          <TableRow>
          
        
            <TableCell sx={{color:"black",fontWeight:"600"}}>Product ID </TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}>Varient ID</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">BATCH/Serial No.</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Quantity</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}>Manufacture Date</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Expiry Date</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Purchasse ID</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Warehouse ID</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Sales ID</TableCell>
        
                
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Status</TableCell>
        <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row) => (
            <TableRow
              key={row.proID}>
              
            
              <TableCell>
                {row.proID}
              </TableCell>
                <TableCell align="right">{row.varId}</TableCell>
              <TableCell align="right">{row.batch_sNo}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.manufactureDate}</TableCell>
                  <TableCell align="right">{row.expiryDate}</TableCell>
                    <TableCell align="right">{row.purID}</TableCell>
                      <TableCell align="right">{row.wareID}</TableCell>
                      <TableCell align="right">{row.salesID}</TableCell>
                        
                        
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
          dialogTitle="View Product Category"
          dialogContent={<ViewProduct product={viewData} />}
        />
        {/* common dialog for edit */}
        <CommonDialog
        open={openEditDialog}
        onClose={handleEditClose}
        dialogTitle="Edit Products Category"
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
        dialogTitle="Delete Product Category "
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
        dialogTitle="Add new Product Category"
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
