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
import DeleteStockUpdate from "@/component/stock-management/stock-update/Delete";
import EditStockUpdate from "@/component/stock-management/stock-update/Edit";
import ViewStockUpdate from "@/component/stock-management/stock-update/View";
import CreateStockUpdate from "@/component/stock-management/stock-update/Create";
import CommonDialog from "@/component/CommonDialog";


export default function StockUpdation() {
  const [openData, setOpenData] = useState(false);
    const [viewShow, setViewShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
     const [deleteShow, setDeleteShow] = useState(false);
  
    const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [deleteId, setDeleteId] =useState(null);

  //  const [edit,setEdit]= useState(false)
  // const [view,setView]= useState(false)
  // const [Delete,setDelete]= useState(false)
  // const[add,setAdd]=useState(false)
  const createData=(transactionID, productID, productname, transactiontyp, quantity,trscdate,trsctime,balstock,refno,
    ) =>{
  const handleEdit = () => {
    setEditData({transactionID, productID, productname, transactiontyp, quantity,trscdate,trsctime,balstock,refno });
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ transactionID, productID, productname, transactiontyp, quantity,trscdate,trsctime,balstock,refno });
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ transactionID, productID, productname, transactiontyp, quantity,trscdate,trsctime,balstock,refno});
    setDeleteShow(true);
  };
 
  return { transactionID, productID, productname, transactiontyp, quantity,trscdate,trsctime,balstock,refno, 
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
  createData(1, 13, "dove", "online",2,"2-4-25","4:30pm",600,40),
  createData(1, 23, "sunsilk","offline", 5,"5-4-25","3:20pm",500,21),

];
   const [search,setSearch]=useState("");

  const filteredRows= rows.filter(
    (row)=>
       
      row.productname.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <Layout>
      <h1><center> Stock Update</center></h1>
      <div className='btn-side'>
         <TextField
              size='small'
              varient="outlined"
              placeholder="Search items..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="staff-search"
              />
      <Button className="add-btn" onClick={()=>setOpenData(true)}>Add Updates</Button><br></br>
      </div><br></br>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>transactionID</TableCell>
            <TableCell align="right">productID</TableCell>
            <TableCell align="right">productname</TableCell>
            <TableCell align="right">transactiontyp</TableCell>
            <TableCell align="right">quantity&nbsp;(g)</TableCell>
            <TableCell align="right">Transaction Date</TableCell>
            <TableCell align="right">Transaction Time</TableCell>
            <TableCell align="right">Available Stock&nbsp;(g)</TableCell>
            <TableCell align="right">Reference no.</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
      {filteredRows.length>0?(
          filteredRows.map((row,index) => (
            <TableRow
              key={index}>
              
            
              <TableCell>
                {row.transactionID}
              </TableCell>
               <TableCell align="right">{row.productID}</TableCell>
              <TableCell align="right">{row.productname}</TableCell>
              <TableCell align="right">{row.transactiontyp}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.trscdate}</TableCell>
              <TableCell align="right">{row.trsctime}</TableCell>
              <TableCell align="right">{row.refno}</TableCell>
              <TableCell align="right">{row.balstock}</TableCell>
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
          <CreateStockUpdate handleCreate={handleCreate} handleClose={handleClose} />
        ) : viewShow ? (
          <ViewStockUpdate viewData={ViewData} />
        ) : editShow ? (
          <EditStockUpdate
            editData={editData}
            handleUpdate={handleUpdate}
            handleClose={handleClose}
          />
        ) : deleteShow ? (
          <DeleteStockUpdate
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




