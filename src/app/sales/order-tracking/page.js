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
import CreateOrderTracking from "@/component/sales/order-tracking/Create";
import ViewOrderTracking from "@/component/sales/order-tracking/View";
import EditOrderTracking from "@/component/sales/order-tracking/Edit";
import DeleteOrderTracking from "@/component/sales/order-tracking/Delete";



export default function SalesOrderTracking() {


  const [openData, setOpenData] = useState(false);
      const [viewShow, setViewShow] = useState(false);
      const [editShow, setEditShow] = useState(false);
       const [deleteShow, setDeleteShow] = useState(false);
    
      const [ViewData, setViewData] = useState(null);
      const [editData, setEditData] = useState(null);
      const [deleteData, setDeleteData] = useState(null);
      const [deleteId, setDeleteId] =useState(null);
  const createData=(trackingId, salesodr, currentstus, lstupdtetime, locationupdte,
    ) =>{
 const handleEdit = () => {
    setEditData({trackingId, salesodr, currentstus, lstupdtetime, locationupdte,});
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ trackingId, salesodr, currentstus, lstupdtetime, locationupdte,});
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ trackingId, salesodr, currentstus, lstupdtetime, locationupdte,});
    setDeleteShow(true);
  };

  
 
  return { trackingId, salesodr, currentstus, lstupdtetime, locationupdte,
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
  createData(1, "dove","pending", "2-2-25 4:30pm","Chaibasa",),
  createData(2, "sunsilk","delivered","5-4-25 5:30pm", "Adityapur"),

];
   const [search,setSearch]=useState("");

  const filteredRows= rows.filter(
    (row)=>
       
      row.salesodr.toLowerCase().includes(search.toLowerCase())
  );

 
  return (
    <Layout>
      <h1><center> Order Tracking</center></h1>
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
            <TableCell>  Tracking Id</TableCell>
            <TableCell align="right">sales order </TableCell>
            <TableCell align="right">current status</TableCell>
            <TableCell align="right">last update (Date&time)</TableCell>
             <TableCell align="right"> Location Update &nbsp;(Location)</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row,index) => (
            <TableRow
              key={index}>
              
            
              <TableCell>
                {row.trackingId}
              </TableCell>
               <TableCell align="right">{row. salesodr}</TableCell>
              <TableCell align="right">{row. currentstus}</TableCell>
              <TableCell align="right">{row.lstupdtetime }</TableCell>
              <TableCell align="right">{row.locationupdte}</TableCell>
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
              <CreateOrderTracking handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewOrderTracking viewData={ViewData} />
            ) : editShow ? (
              <EditOrderTracking
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteOrderTracking
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




