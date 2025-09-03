"use client";
import CommonDialog from "@/components/CommonDialog";
import CreateProduct from '@/components/item/products/create';
import DeleteProduct from '@/components/item/products/delete';
import EditProduct from '@/components/item/products/edit';
import ViewProduct from '@/components/item/products/view';
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
  productName,
  SKUcode,
  type,
  BarCode,
  purPrice,
  sellPrice,
  taxRate,
  stock,
  warehouseName,
  status
) {
  return { productName, SKUcode, type, BarCode, purPrice, sellPrice, taxRate, stock, warehouseName, status };
}

const rowsData = [
  createData("Laptop Pro 15","LAP12345","Electronics",890123456789,50000,58000,"18%",25,"Main WH","Active"),
  createData("Office Chair","CHR98765","Furniture",8909876543,3000,3500,"12%",80,"Furniture WH","Active"),
  createData("Coffee Mug","MUG13456","Kitchenware",8906843278,50,94,"5%",200,"Main WH","Inactive"),
  createData("LED TV 43","TV49022","Electronics",89011668833,22000,28900,"18%",18,"Electronics WH","Active"),
  createData("Printer Ink","INK65901","Stationary",89043218,400,650,"12%",150,"Main WH","Inactive"),
];

export default function AllProductsPage() {
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
    prev.map((p)=>(p.SKUcode===
      updatedProduct.SKUcode? updatedProduct:p
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
      prevRows.filter((item)=>item.SKUcode !==deleteData.SKUcode));
    
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
      row.SKUcode.toLowerCase().includes(search.toLowerCase()) ||
      row.type.toLowerCase().includes(search.toLowerCase()) ||
      row.warehouseName.toLowerCase().includes(search.toLowerCase()) ||
      row.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="staff-container">
        <div className="staff-header">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Item Details
          </Typography>

          <div className="staff-controls">
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="staff-search"
            />
            <Button variant="contained" color="primary" className="add-btn"
             onClick={()=> setOpenCreateDialog(true)}>
              + Add Item
            </Button>
          </div>
        </div>

        {/* table */}
        <TableContainer component={Paper} className="table-container">
          <Table stickyHeader aria-label="staff table">
            <TableHead>
              <TableRow>
                <TableCell><b>Product Name</b></TableCell>
                <TableCell><b>SKU Code</b></TableCell>
                <TableCell align="right"><b>Product Type</b></TableCell>
                <TableCell align="right"><b>Bar Code</b></TableCell>
                <TableCell><b>Purchase Price</b></TableCell>
                <TableCell><b>Selling Price</b></TableCell>
                <TableCell><b>Tax Rate</b></TableCell>
                <TableCell><b>Stock</b></TableCell>
                <TableCell><b>Warehouse Name</b></TableCell>
                <TableCell align="right"><b>Status</b></TableCell>
                <TableCell align="right"><b>Action</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRows.length > 0 ? (
                filteredRows.map((row) => (
                  <TableRow key={row.productName}>
                    <TableCell>{row.productName}</TableCell>
                    <TableCell align="right">{row.SKUcode}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.BarCode}</TableCell>
                    <TableCell align="right">{row.purPrice}</TableCell>
                    <TableCell align="right">{row.sellPrice}</TableCell>
                    <TableCell align="right">{row.taxRate}</TableCell>
                    <TableCell align="right">{row.stock}</TableCell>
                    <TableCell align="right">{row.warehouseName}</TableCell>
                    <TableCell
                      sx={{ color: row.status === "Active" ? "green" : "red", fontWeight: "600" }}
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
        dialogTitle="Add new Product"
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