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
import CreateSalesOrder from "@/component/sales/sales-order/Create";
import ViewSalesOrder from "@/component/sales/sales-order/View";
import EditSalesOrder from "@/component/sales/sales-order/Edit";
import DeleteSalesOrder from "@/component/sales/sales-order/Delete";



export default function SalesReturns() {


  const [openData, setOpenData] = useState(false);
      const [viewShow, setViewShow] = useState(false);
      const [editShow, setEditShow] = useState(false);
       const [deleteShow, setDeleteShow] = useState(false);
    
      const [ViewData, setViewData] = useState(null);
      const [editData, setEditData] = useState(null);
      const [deleteData, setDeleteData] = useState(null);
      const [deleteId, setDeleteId] =useState(null);
  const createData=(
Salesodrid,
odrDate,
customerId,
 customercall,
 Productname,
 qntyodr,
 totalcost,
 discount,
 deliveryDate
    ) =>{
 const handleEdit = () => {
    setEditData({Salesodrid,odrDate,customerId, customercall,Productname,qntyodr,totalcost,discount,deliveryDate,});
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ Salesodrid,odrDate,customerId, customercall,Productname,qntyodr,totalcost,discount,deliveryDate,});
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ Salesodrid,odrDate,customerId, customercall,Productname,qntyodr,totalcost,discount,deliveryDate,});
    setDeleteShow(true);
  };

  
 
  return { Salesodrid,odrDate,customerId, customercall,Productname,qntyodr,totalcost,discount,deliveryDate,
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
// Salesodrid,odrDate,customerId, customercall,Productname,qntyodr,totalcost,discount,deliveryDate
const rows = [
  createData("SO3", "2-2-25 ",23,9123456736,"dove",60,"400",50,"15-2-15"),
  createData("SO4","5-4-25",43,6245904783,"sunsilk",50,"600",15,"12-4-25"),

];
   const [search,setSearch]=useState("");

  const filteredRows= rows.filter(
    (row)=>
       
      row.Productname.toLowerCase().includes(search.toLowerCase())
  );

 
  return (
    <Layout>
      <h1><center> Sales Order</center></h1>
      <div className='btn-side'>
         <TextField
              size='small'
              varient="outlined"
              placeholder="Search by Return id..."
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
            <TableCell> Sales order ID</TableCell>
            <TableCell>  order Date</TableCell>
            <TableCell align="right">Customer ID </TableCell>
            <TableCell align="right">Customer phone no.</TableCell>
            <TableCell align="right">Product Name</TableCell>
             <TableCell align="right"> Quantity Order</TableCell>
             <TableCell align="right"> Total cost</TableCell>
             <TableCell align="right">Discount</TableCell>
             <TableCell align="right"> Delivery Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row,index) => (
            <TableRow
              key={index}>
              <TableCell>
                {row.Salesodrid}
              </TableCell> 
               <TableCell align="right">{row. odrDate}</TableCell>
              <TableCell align="right">{row. customerId}</TableCell>
              <TableCell align="right">{row.customercall}</TableCell>
              <TableCell align="right">{row.Productname }</TableCell>
              <TableCell align="right">{row.qntyodr}</TableCell>            
              <TableCell align="right">{row.totalcost}</TableCell>
              <TableCell align="right">{row.discount}</TableCell>
              <TableCell align="right">{row.deliveryDate}</TableCell>
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
              <CreateSalesOrder handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewSalesOrder viewData={ViewData} />
            ) : editShow ? (
              <EditSalesOrder
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteSalesOrder
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




