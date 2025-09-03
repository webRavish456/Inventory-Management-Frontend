"use client";
import CommonDialog from "@/components/CommonDialog";
import CreateProduct from "@/components/dead-stock/create";
import DeleteProduct from "@/components/dead-stock/delete";
import EditProduct from "@/components/dead-stock/edit";
import ViewProduct from "@/components/dead-stock/view";
import Layout from "@/components/Layout";
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
  category,
  currentStockQty,
  lastSaleDate,
  daysSinceLastDate,
  stockValue,
  
  status
) {
  return { recordId,productName,category,currentStockQty,lastSaleDate,daysSinceLastDate,stockValue,status };
}

const rowsData=[
createData("DSI-001","LED Bulb 9W","Electricals",120,"2024-12-10",265,9600,"Dead Stock"),
createData("DSI-002","Cotton Shirt M","Apparel",45,"2025-01-05",240,13500,"Slow Moving"),
createData("DSI-003","Laptop Bag","Accessories",30,"2025-02-12",206,15000,"Dead Stock"),
createData("DSI-004","Ceiling Fan","Electricals",15,"2025-03-01",189,22500,"Dead Stock"),
createData("DSI-005","Stainless Bottle","Kitchenware",80,"2025-05-15",114,16000,"Slow Moving"),
createData("DSI-006","Sports Shoes L","Footwear",25,"2025-04-01",158,25000,"Dead Stock"),
createData("DSI-007","Office Chair","Furniture",10,"2024-11-25",280,50000,"Dead Stock")
];
export default function AllDeadStock() {
  const [search, setSearch] = useState("");
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
        prev.map((p)=>(p.recordId===
          updatedProduct.recordId? updatedProduct:p
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
          prevRows.filter((item)=>item.recordId !==deleteData.recordId));
        
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

 // ✅ search filter
  const filteredRows = rows.filter(
    (row) =>
      row.recordId.toLowerCase().includes(search.toLowerCase()) ||
      row.productName.toLowerCase().includes(search.toLowerCase()) ||
      row.category.toLowerCase().includes(search.toLowerCase()) ||
      row.lastSaleDate.toLowerCase().includes(search.toLowerCase()) ||
      row.status.toLowerCase().includes(search.toLowerCase())
  );
return (
    <Layout>
      <div className="staff-container">
        <div className="staff-header">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Dead Stock Identification
          </Typography>
          <div className="staff-controls">
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search dead stocks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="staff-search"
            />
            <Button variant="contained" color="primary" className="add-btn"
             onClick={()=> setOpenCreateDialog(true)}>
              + Add dead stocks
            </Button>
          </div>
        </div>
        {/* table */}
        <TableContainer component={Paper} className="table-container">
          <Table stickyHeader aria-label="staff table">
            <TableHead>
              <TableRow>
                <TableCell><b>Record ID</b></TableCell>
                <TableCell><b>Product Nme</b></TableCell>
                <TableCell align="right"><b>Category</b></TableCell>
                <TableCell align="right"><b>Current Stock Quantity</b></TableCell>
                <TableCell><b>Last Sale Date/Last Movement</b></TableCell>
                 <TableCell><b>Days since last movement</b></TableCell>
                <TableCell><b>Stock Value</b></TableCell>
               
                
                <TableCell align="right"><b>Status</b></TableCell>
                <TableCell align="right"><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
             <TableBody>
              {filteredRows.length > 0 ? (
                filteredRows.map((row) => (
                  <TableRow key={row.recordId}>
                    <TableCell align="right">{row.recordId}</TableCell>
                    <TableCell align="right">{row.productName}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.currentStockQty}</TableCell>
                    <TableCell align="right">{row.lastSaleDate}</TableCell>
                    <TableCell align="right">{row.daysSinceLastDate}</TableCell>
                    <TableCell align="right">{row.stockValue}</TableCell>
                    
                    <TableCell
                      sx={{ color: row.status === "Slow Moving" ? "green" : "red", fontWeight: "600" }}
                      align="right"
                    >
                      {row.status}
                    </TableCell>
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
                                  ) : (
                                    <TableRow>
                                      <TableCell colSpan={11} align="center" style={{ fontWeight: "bold", color: "grey" }}>
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
                              dialogTitle="View stocks"
                              dialogContent={<ViewProduct product={viewData} />}
                            /> 
                            {/* common dialog for edit */}
                             <CommonDialog
                            open={openEditDialog}
                            onClose={handleEditClose}
                            dialogTitle="Edit stocks"
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
                            dialogTitle="Delete dead stocks"
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
                            dialogTitle="Add new stocks"
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





          