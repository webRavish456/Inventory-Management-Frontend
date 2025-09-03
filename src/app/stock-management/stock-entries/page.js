'use client'
import Layout from "../../../component/Layout";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton,Button } from '@mui/material';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import CommonDialog from "@/component/CommonDialog";
import DeleteStockEntryout from "@/component/stock-management/stock-entries/stock-out/Delete";
import EditStockEntryout from "@/component/stock-management/stock-entries/stock-out/Edit";
import ViewStockEntryout from "@/component/stock-management/stock-entries/stock-out/View";
import CreateStockEntryout from "@/component/stock-management/stock-entries/stock-out/Create";
import DeleteStockEntryin from "@/component/stock-management/stock-entries/stock-in/Delete";
import EditStockEntryin from "@/component/stock-management/stock-entries/stock-in/Edit";
import ViewStockEntryin from "@/component/stock-management/stock-entries/stock-in/View";
import CreateStockEntryin from "@/component/stock-management/stock-entries/stock-in/Create";



export default function StockEntries() {
   const [openData, setOpenData] = useState(false);
    const [viewShow, setViewShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
     const [deleteShow, setDeleteShow] = useState(false);
  
    const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [deleteId, setDeleteId] =useState(null);

   const [edit,setEdit]= useState(false);
  const [view,setView]= useState(false);
  const [Delete,setDelete]= useState(false);


  const createData=(  stockId,
   productId,
   productName,
    supplierId,
         date,
 paymentStatus,
 status
    ) =>{
  const handleEdit = () => {
    setEditData({ stockId, productId, productName, supplierId, date,paymentStatus ,status });
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ stockId, productId, productName, supplierId, date,paymentStatus ,status });
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ stockId, productId, productName, supplierId, date,paymentStatus ,status});
    setDeleteShow(true);
  };
   

  return { 
   stockId, productId, productName, supplierId, date,paymentStatus ,status,
  action:(
    <div className='action-btn'>
      <IconButton className="view-btn"onClick={handleView}><VisibilityIcon/></IconButton>
      <IconButton className="edit-btn"onClick={handleEdit}><EditIcon/></IconButton>
      <IconButton className="delete-btn"onClick={handleDelete}><DeleteIcon/></IconButton>
    </div>
    
  )
  };
}

const rows = [
  createData(1, 13, "Clinik Plus", 2, 40,"2-4-25" ,"active"),
  createData(1, 23, "sunsilk", 5, 33,"5-4-25","inactive"),

];
const [search,setSearch]=useState("");

const filteredRows=rows.filter(
  (row)=>
     row.productName.toLowerCase().includes(search.toLowerCase())
)

const createData2=(
   stockoutId,
   productId2,
   productname2,
    customerId,
   dateoutstock,
 transaction,
 paystatus,
 status2,
    ) =>{
  const handleEdit = () => {
    setEditData({ stockoutId, productId2, productname2, customerId, dateoutstock,transaction ,paystatus,status2 });
    setEditShow(true);
  };

  const handleView = () => {
    setViewData({ stockoutId, productId2, productname2, customerId, dateoutstock,transaction ,paystatus,status2 });
    setViewShow(true);
  };

  const handleDelete = () => {
    setDeleteData({ stockoutId, productId2, productname2, customerId, dateoutstock,transaction ,paystatus,status2});
    setDeleteShow(true);
  };
     

  return { 
   stockoutId, productId2, productname2, customerId, dateoutstock,transaction ,paystatus,status2,
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
const rows2 = [

 createData2( 3, 5, 'Clinic plus', 45 , "8/11/2024" ,'paid','online','Active'),
 createData2( 2, 6, 'dove', 45 , "8/11/2024" ,'paid','online','InActive'),
];
const [stock,setStock]=useState(true);

const [search1,setSearch1]=useState("");

const filteredRows2=rows2.filter(
  (row)=>
     row.productname2.toLowerCase().includes(search1.toLowerCase())
)


  return (
    <Layout>
        <h2>Stock Entries</h2>
  <div className='btn-right'>
      <Button className="add-btn" onClick={() => setStock(true)}> Stock In</Button>
      
       <Button className="add-btn" onClick={() => setStock(false)}> Stock Out</Button><br></br>
       </div>


{stock ?(
<>
 <div className='btn-side'>
          <TextField
               size='small'
               varient="outlined"
               placeholder="Search items..."
               value={search}
               onChange={(e)=>setSearch(e.target.value)}
               className="staff-search"
               />
       <Button className="add-btn" onClick={()=>setOpenData(true)}>Add Stock In</Button><br></br>
       </div><br></br>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>stockId</TableCell>
            <TableCell align="right">productID</TableCell>
            <TableCell align="right">productName</TableCell>
            <TableCell align="right">supplierId</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Transaction </TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.length>0?(
          filteredRows.map((row,index) => (
            <TableRow
              key={index}>
              <TableCell component="th" scope="row">
                {row.stockId}
              </TableCell>
              <TableCell align="right">{row.productId}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.supplierId}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.paymentStatus}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
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
      ? "View Stock In"
      : editShow
      ? "Edit Stock In"
      : deleteShow
      ? "Delete Stock In"
      : ""
  }
  dialogContent={
    openData ? (
      <CreateStockEntryin handleCreate={handleCreate} handleClose={handleClose} />
    ) : viewShow ? (
      <ViewStockEntryin viewData={ViewData} />
    ) : editShow ? (
      <EditStockEntryin
        editData={editData}
        handleUpdate={handleUpdate}
        handleClose={handleClose}
      />
    ) : deleteShow ? (
      <DeleteStockEntryin
        deleteData={deleteData}
        handleDelete={handleDelete}
        // isDeleting={isDeleting}
        handleClose={handleClose}
      />
    ) : null
 }
/>

</>)
:
(<>  
      <div className='btn-side'>
          <TextField
               size='small'
               varient="outlined"
               placeholder="Search items..."
               value={search1}
               onChange={(e)=>setSearch1(e.target.value)}
               className="staff-search"
               />
       <Button className="add-btn" onClick={()=>setOpenData(true)}>Add Stock out</Button><br></br>
       </div><br></br>
     <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell >stockoutId</TableCell>
             <TableCell align="right">productId</TableCell>
             <TableCell align="right">productName</TableCell>
             <TableCell align="right">customerId</TableCell>
             <TableCell align="right">Dateoutstock</TableCell>
              <TableCell align="right">PayStatus</TableCell>
              <TableCell align="right">Transaction</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="center">Action</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {filteredRows2.length>0?(
          filteredRows2.map((row2,index) => (
            <TableRow
              key={index}>
              <TableCell component="th" scope="row"align="right">
                {row2.stockoutId}
              </TableCell>
              <TableCell align="right">{row2.productId2}</TableCell>
              <TableCell align="right">{row2.productname2}</TableCell>
              <TableCell align="right">{row2.customerId}</TableCell>
              <TableCell align="right">{row2.dateoutstock}</TableCell>
              <TableCell align="right">{row2.transaction}</TableCell>
              <TableCell align="right">{row2.paystatus}</TableCell>
              <TableCell sx={{color:row2.status2 ==="Active" ? "green": "red", fontWeight:"600"}} 
                align="right">{row2.status2}</TableCell>            
              <TableCell align="right">{row2.action}</TableCell>
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
      ? "View Stock out"
      : editShow
      ? "Edit Stock out"
      : deleteShow
      ? "Delete Stock out"
      : ""
  }
  dialogContent={
    openData ? (
      <CreateStockEntryout handleCreate={handleCreate} handleClose={handleClose} />
    ) : viewShow ? (
      <ViewStockEntryout viewData={ViewData} />
    ) : editShow ? (
      <EditStockEntryout
        editData={editData}
        handleUpdate={handleUpdate}
        handleClose={handleClose}
      />
    ) : deleteShow ? (
      <DeleteStockEntryout
        deleteData={deleteData}
        handleDelete={handleDelete}
        // isDeleting={isDeleting}
        handleClose={handleClose}
      />
    ) : null
 }
/>
    
</>

)

}

 

    </Layout>
  );
  
}

















