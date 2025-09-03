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
import { IconButton,Button } from '@mui/material';
import { useState } from "react";


import CommonDialog from "@/component/CommonDialog";
import CreateStockTransfer from "@/component/stock-management/stock-transfer/Create";
import ViewStockTransfer from "@/component/stock-management/stock-transfer/View";
import EditStockTransfer from "@/component/stock-management/stock-transfer/Edit";
import DeleteStockTransfer from "@/component/stock-management/stock-transfer/Delete";



export default function Stocktransfer() {

  const[add,setAdd]=useState(false)

  const [openData, setOpenData] = useState(false);
      const [viewShow, setViewShow] = useState(false);
      const [editShow, setEditShow] = useState(false);
       const [deleteShow, setDeleteShow] = useState(false);
    
      const [ViewData, setViewData] = useState(null);
      const [editData, setEditData] = useState(null);
      const [deleteData, setDeleteData] = useState(null);
      const [deleteId, setDeleteId] =useState(null);
  const createData=(TransferID, productID, productname, qtytransferred, fromLocation,toLocation,Transferdate,TransferTime
    ) =>{
 const handleEdit = () => {
    setEditData({TransferID, productID, productname, qtytransferred, fromLocation,toLocation,Transferdate,TransferTime });
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ TransferID, productID, productname, qtytransferred, fromLocation,toLocation,Transferdate,TransferTime });
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ TransferID, productID, productname, qtytransferred, fromLocation,toLocation,Transferdate,TransferTime});
    setDeleteShow(true);
  };

  
 
  return { TransferID, productID, productname, qtytransferred, fromLocation,toLocation,Transferdate,TransferTime, 
    action:(
    <div className='action-btn'>
      <IconButton className="view-btn" onClick={handleView}><VisibilityIcon/></IconButton>
      <IconButton className="edit-btn"onClick={handleEdit}><EditIcon/></IconButton>
      <IconButton className="delete-btn"onClick={handleDelete}><DeleteIcon/></IconButton>
    </div>
    )
    
    
  };
}

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
  createData(1, 13, "dove", 2,"Adityapur", "Chaibasa","2-4-25","4:30pm"),
  createData(2, 23, "sunsilk", 5,"Adityapur", "Chaibasa","5-4-25","5:30pm"),

];
   const [search,setSearch]=useState("");

  const filteredRows= rows.filter(
    (row)=>
       
      row.productname.toLowerCase().includes(search.toLowerCase())
  );

   const handleAdd=()=>{
  setAdd(true);
  };
  return (
    <Layout>
      <h1><center> Stock Transfer</center></h1>
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
            <TableCell>TransferID</TableCell>
            <TableCell align="right">productID</TableCell>
            <TableCell align="right">productname</TableCell>
            <TableCell align="right">Quantity Transfer&nbsp;(g)</TableCell>
            <TableCell align="right">Location(From)</TableCell>
            <TableCell align="right">LOcation(To)</TableCell>
             <TableCell align="right">Date(transfer)</TableCell>
              <TableCell align="right">Time(transfer)</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row,index) => (
            <TableRow
              key={index}>
              
            
              <TableCell>
                {row.TransferID}
              </TableCell>
               <TableCell align="right">{row.productID}</TableCell>
              <TableCell align="right">{row.productname}</TableCell>
              <TableCell align="right">{row.qtytransferred}</TableCell>
              <TableCell align="right">{row.fromLocation}</TableCell>
              <TableCell align="right">{row.toLocation}</TableCell>
              <TableCell align="right">{row.Transferdate}</TableCell>
              <TableCell align="right">{row.TransferTime}</TableCell>
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
              <CreateStockTransfer handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewStockTransfer viewData={ViewData} />
            ) : editShow ? (
              <EditStockTransfer
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteStockTransfer
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




