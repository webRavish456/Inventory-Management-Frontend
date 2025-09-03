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
import CreateSalesReturn from "@/component/sales/order-tracking/Create";
import ViewSalesReturn from "@/component/sales/sales-return/View";
import EditSalesReturn from "@/component/sales/sales-return/Edit";
import DeleteSalesReturn from "@/component/sales/sales-return/Delete";



export default function SalesReturns() {


  const [openData, setOpenData] = useState(false);
      const [viewShow, setViewShow] = useState(false);
      const [editShow, setEditShow] = useState(false);
       const [deleteShow, setDeleteShow] = useState(false);
    
      const [ViewData, setViewData] = useState(null);
      const [editData, setEditData] = useState(null);
      const [deleteData, setDeleteData] = useState(null);
      const [deleteId, setDeleteId] =useState(null);
  const createData=(Returnid,
Salesodrid,
Productid,
Productname,
qntyreturned,
Rtrndate,
ReturnedReason,
Refundamount
    ) =>{
 const handleEdit = () => {
    setEditData({Returnid,Salesodrid,Productid,Productname,qntyreturned,Rtrndate,ReturnedReason,Refundamount,});
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ Returnid,Salesodrid,Productid,Productname,qntyreturned,Rtrndate,ReturnedReason,Refundamount,});
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ Returnid,Salesodrid,Productid,Productname,qntyreturned,Rtrndate,ReturnedReason,Refundamount,});
    setDeleteShow(true);
  };

  
 
  return { Returnid,Salesodrid,Productid,Productname,qntyreturned,Rtrndate,ReturnedReason,Refundamount,
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
  createData("R1",23,23,"dove",60, "2-2-25 ","leaked","400",),
  createData("R2",43,47,"sunsilk",50,"5-4-25","unfilled","600"),

];
   const [search,setSearch]=useState("");

  const filteredRows= rows.filter(
    (row)=>
       
      row.Returnid.toLowerCase().includes(search.toLowerCase())
  );

 
  return (
    <Layout>
      <h1><center> Sales Return</center></h1>
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
            <TableCell>  Return ID</TableCell>
            <TableCell align="right">Sales order ID </TableCell>
            <TableCell align="right">Product ID</TableCell>
            <TableCell align="right">Product Name</TableCell>
             <TableCell align="right"> Quantity Returned</TableCell>
             <TableCell align="right"> Return Date</TableCell>
             <TableCell align="right"> Returned Reason</TableCell>
             <TableCell align="right"> Refund Amount</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row,index) => (
            <TableRow
              key={index}>
              
            
              <TableCell>
                {row.Returnid}
              </TableCell>
               <TableCell align="right">{row. Salesodrid}</TableCell>
              <TableCell align="right">{row. Productid}</TableCell>
              <TableCell align="right">{row.Productname }</TableCell>
              <TableCell align="right">{row.qntyreturned}</TableCell>            
              <TableCell align="right">{row.Rtrndate}</TableCell>
              <TableCell align="right">{row.ReturnedReason}</TableCell>
              <TableCell align="right">{row.Refundamount}</TableCell>
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
              <CreateSalesReturn handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewSalesReturn viewData={ViewData} />
            ) : editShow ? (
              <EditSalesReturn
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteSalesReturn
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




