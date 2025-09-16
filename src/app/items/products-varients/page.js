"use client";
import CommonDialog from "@/components/CommonDialog";
import Layout from "@/components/Layout";
import CreateProduct from "@/components/products-varients/create";
import DeleteProduct from "@/components/products-varients/delete";
import EditProduct from "@/components/products-varients/edit";
import ViewProduct from "@/components/products-varients/view";
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
    sNo,
    varId,
  parentProduct,
  varName,
  attributes,
  sku,
  barCode,
  costPrice,
  sellingPrice,
  stock,
  reorderLevel,
  status
) {
  return {sNo,varId,parentProduct,varName,attributes,sku,barCode,costPrice,sellingPrice,stock,reorderLevel,status,
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
  createData(1,"PV001","Laptop Pro 15","Laptop Pro 15-8GB RAM","RAM:8GB, Storage:512gb SSD","LAP12345A",6201395,45000,50000,25,5,"Active"),
  createData(2,"PV002","Laptop Pro 15","Laptop Pro 15-16GB RAM","RAM:16GB, Storage: 1TB SSD","LAP12345B",870982,48000,55000,15,3,"Active"),
  createData(3,"PV003","Office Chair","Office Chair-Black","Color: Black, Material: Leather","CHR930479",9508809,2500,3000,60,10,"Inactive"),
    createData(4,"PV004","Office Chair","Office Chair-Grey","Color:Grey, Material: Fabric","CHR993400",870479,2500,2800,40,8,"Active"),
    createData(5,"PV005","Coffee Mug","Coffee Mug-Small","Size:250ml, Color: White","MUG98765",4569839,80,120,200,30,"Inactive"),
    createData(6,"PV006","Coffee Mug","Coffee Mug-Big","Size:450ml, Color:Blue","MUG98065",721839,90,190,140,70,"Active"),
    createData(7,"PV007","LED TV 43","LED TV 43-Smart","Type: Smart, Resolution: 4K","TV143065",456552,18000,32000,290,10,"Active"),
    createData(8,"PV008","LED TV 43","LED TV 43-Basic","Type: Non-Smart,Resolution:HD","TV98765",996839,15000,22000,350,15,"Inactive"),
    createData(9,"PV009","Printer Ink","Printer Ink-Black","Color: Black, Volume: 200ml","INK88265",4569919,350,450,80,20,"Active"),
    createData(10,"PV0010","Printer Ink","Printer Ink-Color","Color:CMYK, Volume: 200ml","INK98765",993286,370,420,50,10,"Inactive"),

];

console.log(rowsData)
export default function AllProductVarients() {



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
      prev.map((p)=>(p.varId===
        updatedProduct.varId? updatedProduct:p
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
        prevRows.filter((item)=>item.varId !==deleteData.varId));
      
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
       
      row.varId.toLowerCase().includes(search.toLowerCase())||
    row.parentProduct.toLowerCase().includes(search.toLowerCase())||
     row.varName.toLowerCase().includes(search.toLowerCase())||
         row.sku.toLowerCase().includes(search.toLowerCase())||
      
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
                Item Details
                </Typography>
            <div className="staff-controls">
              <TextField
              size='small'
              varient="outlined"
              placeholder="Search products..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="staff-search"
              />
              <Button varient="contained" color="primary" className="add-btn"
              onClick={()=> setOpenCreateDialog(true)}>+ Add  Products</Button>
              </div>
              </div>
    <TableContainer component={Paper} className="table-container">
      <Table stickyHeader  aria-label="staff table" className="staff-title">
        <TableHead>
          <TableRow>
          
        
            <TableCell sx={{color:"black",fontWeight:"600"}}>Serial No.</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}>Varient ID</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Parent Product</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Varient Name</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}>Attributes</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>SKU</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Bar Code</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Selling Price</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Cost Price</TableCell>
        <TableCell sx={{color:"black",fontWeight:"600"}}>Stock</TableCell>
                <TableCell sx={{color:"black",fontWeight:"600"}}>Reorder Level</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Status</TableCell>
        <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row) => (
            <TableRow
              key={row.sNo}>
              
            
              <TableCell>
                {row.sNo}
              </TableCell>
                <TableCell align="right">{row.varId}</TableCell>
              <TableCell align="right">{row.parentProduct}</TableCell>
              <TableCell align="right">{row.varName}</TableCell>
                <TableCell align="right">{row.attributes}</TableCell>
                  <TableCell align="right">{row.sku}</TableCell>
                    <TableCell align="right">{row.barCode}</TableCell>
                      <TableCell align="right">{row.sellingPrice}</TableCell>
                      <TableCell align="right">{row.costPrice}</TableCell>
                        <TableCell align="right">{row.stock}</TableCell>
                        <TableCell align="right">{row.reorderLevel}</TableCell>
              <TableCell sx={{color:row.status==="Active" ? "green": "red", fontWeight:"600",}} align="right">{row.status}</TableCell>
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
            <TableCell colSpan={12} align="center" style={{fontWeight:"bold", color:"grey"}}>
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
          dialogTitle="View Product varient"
          dialogContent={<ViewProduct product={viewData} />}
        />
        {/* common dialog for edit */}
        <CommonDialog
        open={openEditDialog}
        onClose={handleEditClose}
        dialogTitle="Edit Products varient"
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
        dialogTitle="Delete Product varient "
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
        dialogTitle="Add new Product varient"
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
