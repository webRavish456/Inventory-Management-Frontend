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
import CreateDeliveryChalan from "@/component/sales/delivery-challans/Create";
import DeleteDeliveryChalan from "@/component/sales/delivery-challans/Delete";
import EditDeliveryChalan from "@/component/sales/delivery-challans/Edit";



export default function SalesDeliveryChalan() {


  const [openData, setOpenData] = useState(false);
      const [viewShow, setViewShow] = useState(false);
      const [editShow, setEditShow] = useState(false);
       const [deleteShow, setDeleteShow] = useState(false);
    
      const [ViewData, setViewData] = useState(null);
      const [editData, setEditData] = useState(null);
      const [deleteData, setDeleteData] = useState(null);
      const [deleteId, setDeleteId] =useState(null);
  const createData=(deliveryId, salesodrid, deliveryDate, deliveryAdd, deliverystatus,deliverdby,
    ) =>{
 const handleEdit = () => {
    setEditData({deliveryId, salesodrid, deliveryDate, deliveryAdd, deliverystatus,deliverdby, });
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ deliveryId, salesodrid, deliveryDate, deliveryAdd, deliverystatus,deliverdby, });
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ deliveryId, salesodrid, deliveryDate, deliveryAdd, deliverystatus,deliverdby,});
    setDeleteShow(true);
  };

  
 
  return { deliveryId, salesodrid, deliveryDate, deliveryAdd, deliverystatus,deliverdby,
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
  createData(1, "SO13", "5-5-2024","Adityapur","delivered","Aditya"),
  createData(2, "SO23", "6-5-2025","Adityapur","pending","Rohit"),

];
   const [search,setSearch]=useState("");

  const filteredRows= rows.filter(
    (row)=>
       
      row.salesodrid.toLowerCase().includes(search.toLowerCase())
  );

 
  return (
    <Layout>
      <h1><center> Delivery Chalan</center></h1>
      <div className='btn-side'>
         <TextField
              size='small'
              varient="outlined"
              placeholder="Search by sales order id..."
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
            <TableCell> delivery Id</TableCell>
            <TableCell align="right">sales order id</TableCell>
            <TableCell align="right">deliveryDate</TableCell>
            <TableCell align="right"> deliveryAddress&nbsp;(Location)</TableCell>
            <TableCell align="right">delivery status</TableCell>
            <TableCell align="right">deliverd by</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row,index) => (
            <TableRow
              key={index}>
              
            
              <TableCell>
                {row.deliveryId}
              </TableCell>
               
              <TableCell align="right">{row.salesodrid}</TableCell>
              <TableCell align="right">{row.deliveryDate}</TableCell>
              <TableCell align="right">{row.deliveryAdd}</TableCell>
              <TableCell align="right">{row.deliverystatus}</TableCell>
              <TableCell align="right">{row.deliverdby}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
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
              <CreateDeliveryChalan handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewStockTransfer viewData={ViewData} />
            ) : editShow ? (
              <EditDeliveryChalan
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteDeliveryChalan
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




