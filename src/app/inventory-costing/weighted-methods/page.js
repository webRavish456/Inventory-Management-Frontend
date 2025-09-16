"use client";
import CommonDialog from "@/components/CommonDialog";
import Layout from "@/components/Layout";
import CreateProduct from "@/components/weighted-methods/create";
import DeleteProduct from "@/components/weighted-methods/delete";
import EditProduct from "@/components/weighted-methods/edit";
import ViewProduct from "@/components/weighted-methods/view";
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
  valuationMethod,
  qty,
  unitCost,
  totalValue,
  dateOfCalculation,
  status
) {
  return { recordId,productName,valuationMethod,qty,unitCost,totalValue,dateOfCalculation,status };
}

const rowsData=[
createData(1,"Steel Rods","FIFO",100,250,25000,"2025-09-01","Completed"),
createData(2,"Copper Wires","LIFO",200,150,30000,"2025-09-04","Completed"),
createData(3,"PVC Pipes","Weighted Average",500,90,45000,"2025-09-05","Completed"),
createData(4,"Cement Bags","FIFO",300,320,96000,"2025-06-12","Pending"),
createData(5,"Iron Sheets","LIFO",150,400,60000,"2025-09-01","Completed"),
createData(6,"Glass Panels","Weighted Average",80,500,40000,"2025-09-01","Pending"),
createData(7,"Aluminium Foil","FIFO",600,50,30000,"2025-09-01","Completed")
];
export default function AllWeightedMethods() {
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
  const filteredRows = rowsData.filter(
    (row) =>
      row.productName.toLowerCase().includes(search.toLowerCase()) ||
      row.valuationMethod.toLowerCase().includes(search.toLowerCase()) ||
      row.dateOfCalculation.toLowerCase().includes(search.toLowerCase()) ||
      row.status.toLowerCase().includes(search.toLowerCase())
  );
return (
    <Layout>
      <div className="staff-container">
        <div className="staff-header">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Weighted Average Methods
          </Typography>
          <div className="staff-controls">
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search methods..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="staff-search"
            />
            <Button variant="contained" color="primary" className="add-btn"
            onClick={()=> setOpenCreateDialog(true)}>
              + Add methods
            </Button>
          </div>
        </div>
        {/* table */}
        <TableContainer component={Paper} className="table-container">
          <Table stickyHeader aria-label="staff table">
            <TableHead>
              <TableRow>
                <TableCell align="right"><b>Record ID</b></TableCell>
                <TableCell align="right"><b>Product Nme</b></TableCell>
                <TableCell align="right"><b>Valuation Methods</b></TableCell>
                <TableCell align="right"><b>Quantity</b></TableCell>
                <TableCell align="right"><b>Unit cost</b></TableCell>
                <TableCell align="right"><b>Total Value</b></TableCell>
                <TableCell align="right"><b>Date of Calculation</b></TableCell>
                
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
                    <TableCell align="right">{row.valuationMethod}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.unitCost}</TableCell>
                    <TableCell align="right">{row.totalValue}</TableCell>
                    <TableCell align="right">{row.dateOfCalculation}</TableCell>
                    
                    <TableCell
                      sx={{ color: row.status === "Completed" ? "green" : "red", fontWeight: "600" }}
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
                    
                            {/* ✅ CommonDialog for View  */}
                            <CommonDialog
                              open={openDialog}
                              onClose={handleDialogClose}
                              dialogTitle="View Method"
                              dialogContent={<ViewProduct product={viewData} />}
                            />
                            {/* common dialog for edit */}
        <CommonDialog
        open={openEditDialog}
        onClose={handleEditClose}
        dialogTitle="Edit Method"
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
        dialogTitle="Delete Method"
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
        dialogTitle="Add new Method"
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





          