'use client'
import Layout from "../../../component/Layout";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import  VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Button } from "@mui/material";
import { useState } from "react";
import CommonDialog from "@/component/CommonDialog";


import ViewStock from "@/component/stock-management/opening-stock/View";
import CreateStock from "@/component/stock-management/opening-stock/Create";
import EditStock from "@/component/stock-management/opening-stock/Edit";
import DeleteStock from "@/component/stock-management/opening-stock/Delete";
export default function openingStock() {
 

  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
   const [deleteShow, setDeleteShow] = useState(false);

  const [ViewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeleteId] =useState(null);
// const [deleting,isDeleting] =useState(false);
  const createData = (openingstockID, productID, productname, openingqty, openingstockvlu, dofEntry) => {
  const handleEdit = () => {
    setEditData({ openingstockID, productID, productname, openingqty, openingstockvlu, dofEntry });
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ openingstockID, productID, productname, openingqty, openingstockvlu, dofEntry });
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ openingstockID, productID, productname, openingqty, openingstockvlu, dofEntry});
    setDeleteShow(true);
  };

  return {
    openingstockID,
    productID,
    productname,
    openingqty,
    openingstockvlu,
    dofEntry,
    action: (
      <div className='action-btn'>
        <IconButton className="view-btn" onClick={handleView}><VisibilityIcon/></IconButton>
        <IconButton className="edit-btn" onClick={handleEdit}><EditIcon/></IconButton>
        <IconButton className="delete-btn" onClick={handleDelete}><DeleteIcon/></IconButton>
      </div>
       )
  };
};


const handleClose = () => {
  setOpenData(false);
  setViewShow(false);
  setEditShow(false);
  setDeleteShow(false);
};
const handleCreate =(data)=>{
  setLoading(data);
  setOpenData(true);
};
const handleUpdate =(data)=>{
  setLoading(data);
  setEditShow(true);
};
const handleDelete=()=>{
    setDeleteShow(true);
    setDeleteId(null);
}

const rows = [
  createData(1, 13, "dove", 2, 40,"2-4-25"),
  createData(1, 23, "sunsilk", 5, 33,"5-4-25"),

];
   const [search,setSearch]=useState("");

  const filteredRows= rows.filter(
    (row)=>
       
      row.productname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h1><center>opening Stock</center></h1>
      <div className='btn-side'>
         <TextField
              size='small'
              varient="outlined"
              placeholder="Search items..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="staff-search"
              />
      <Button className="add-btn" onClick={()=>setOpenData(true)}>Add Stock</Button><br></br>
      </div><br></br>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>openingstockID</TableCell>
            <TableCell align="right">productID</TableCell>
            <TableCell align="right">productname</TableCell>
            <TableCell align="right">openingqty&nbsp;(g)</TableCell>
            <TableCell align="right">openingstockvlu</TableCell>
            <TableCell align="right">dofEntry</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row,index) => (
            <TableRow
              key={index}>
              
            
              <TableCell>
                {row.openingstockID}
              </TableCell>
               <TableCell align="right">{row.productID}</TableCell>
              <TableCell align="right">{row.productname}</TableCell>
              <TableCell align="right">{row.openingqty}</TableCell>
              <TableCell align="right">{row.openingstockvlu}</TableCell>
              <TableCell align="right">{row.dofEntry}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
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
    <CommonDialog
  open={openData || viewShow || editShow || deleteShow}
  onClose={handleClose}
  dialogTitle={
    openData
      ? "Create New Stock"
      : viewShow
      ? "View Stock"
      : editShow
      ? "Edit Stock"
      : deleteShow
      ? "Delete Stock"
      : ""
  }
  dialogContent={
    openData ? (
      <CreateStock handleCreate={handleCreate} handleClose={handleClose} />
    ) : viewShow ? (
      <ViewStock viewData={ViewData} />
    ) : editShow ? (
      <EditStock
        editData={editData}
        handleUpdate={handleUpdate}
        handleClose={handleClose}
      />
    ) : deleteShow ? (
      <DeleteStock
        deleteData={deleteData}
        handleDelete={handleDelete}
        // isDeleting={isDeleting}
        handleClose={handleClose}
      />
    ) : null
 }
/>

    </Layout>
 );





}
