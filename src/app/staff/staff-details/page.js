// "use client";
// import Layout from "@/components/Layout";
// import {
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Typography
// } from "@mui/material";



// const staffData = [
//     {
//         id:1,
//         name:"Seema Singh",
//         designation:"Manager",
//         status:"Active"
//         // and so on data fields
//     },
//     {
//         id:2,
//         name:"Rahul Kumar",
//         designation:"Developer",
//           status:"Active"
//     },
//     {
//         id:3,
//         name:"Anita Sharma",
//         designation:"Accountant",
//           status:"Active"
//     }
// ]


// export default function AllStaffPage(){
//     return (
//         <Layout>
//             <div style={{padding:"20px"}}>
//                 <Typography varient="h5" gutterBottom sx={{fontWeight:600}}>
//                     Staff Details
//                 </Typography>
//                <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow sx={{backgroundColor:"#1f1f1f"}}>
//                             <TableCell sx={{color:"white",fontWeight:"600"}}>ID</TableCell>
//                             <TableCell sx={{color:"white",fontWeight:"600"}}>Name</TableCell>
//                             <TableCell sx={{color:"white",fontWeight:"600"}}>Designation</TableCell>
//                             <TableCell sx={{color:"white",fontWeight:"600"}}>Status</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {staffData.map((staff)=>(
//                             <TableRow key={staff.id}>
//                                 <TableCell>{staff.id}</TableCell>
//                                 <TableCell>{staff.name}</TableCell>
//                                 <TableCell>{staff.designation}</TableCell>
//                                 <TableCell sx={{color: staff.status==="Active"? "green" : "red",
//                                 fontWeight:"600",

//                                 }}>{staff.status}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//                </TableContainer>
//             </div>
//         </Layout>
//     );
// }


"use client";
import { Button, IconButton, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import { Layout } from '/components/Layout.js';
import Layout from "@/components/Layout";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

function createData(
    no,
    id,
  name,
  designation,
  mobile,
  email,
  address,
  salary,
  joining,
  status,
) {
  return {no, id,name,designation,mobile,email,address,salary,joining,status,
    action:(
        <div className="action-buttons">
        <IconButton className="view-btn"
        // style={{color:"#072eb0", padding:"4px", transform:"scale(0.8)"}}
        
        >
            <VisibilityIcon/>
            </IconButton>
            <IconButton className="edit-btn" 
            // style={{color:"#6b6666", padding:"4px", transform:"scale(0.8)"}}
       
        >
<EditIcon/>
            </IconButton>
            <IconButton className="delete-btn"
            // style={{color:"#e6130b", padding:"4px", transform:"scale(0.8)"}}
      
        >
            <DeleteIcon/>
        </IconButton>
        </div>
    )
   };
}

const rowsData = [
  createData(1,"STF001","Seema Singh", "Manager",8709820616,"seemasinghh05@gmail.com","Jamshedpur,India",60000,"2021-05-15","Active"),
  createData(2,"STF002","Rahul Kumar","Developer",9304793338,"rahulkumar@example.com","Bihar,India",45000,"2022-01-10","Active"),
  createData(3,"STF003","Anita Kumari","Accountant",9934007045,"anitakumari@example.com","Munbai,India",25000,"2023-07-12","Inactive"),
    createData(4,"STF004","Sneha Aggarwal","HR Executive",6201395143,"snehaaggarwal@example.com","Hydrabaad,India",35000,"2021-07-12","Active"),
    createData(5,"STF005","Ved Prakash","Receptionist",9508089577,"vedprakash@example.com","Panjab,India",40000,"2022-08-21","Inactive"),
];

console.log(rowsData)
export default function AllStaffPage() {



  const [search,setSearch]=useState("");

  // filter rows
  const filteredRows= rowsData.filter(
    (row)=>
       row.id.toLowerCase().includes(search.toLowerCase())||
      row.name.toLowerCase().includes(search.toLowerCase())||
    row.designation.toLowerCase().includes(search.toLowerCase())||
     row.email.toLowerCase().includes(search.toLowerCase())||
      row.address.toLowerCase().includes(search.toLowerCase())||
       row.joining.toLowerCase().includes(search.toLowerCase())||
    row.status.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <Layout>
        <div className="staff-container"
        //  style={{padding:"20px"}}
        >
          <div className="staff-header">
            <Typography variant="h6" className="staff-title" gutterBottom sx={{fontWeight:600}}>Staff Details</Typography>
            <div className="staff-controls">
              <TextField
              size='small'
              varient="outlined"
              placeholder="Search staff..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="staff-search"
              />
              <Button varient="contained" color="primary" className="add-btn">+ Add Staff</Button>
              </div>
              </div>
    <TableContainer component={Paper} className="table-container">
      <Table stickyHeader  aria-label="staff table" className="staff-title">
        <TableHead>
          <TableRow
          
          // sx={{backgroundColor:"#1f1f1f"}}
          >
            <TableCell sx={{color:"black",fontWeight:"600"}}>Serial No.</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}> Staff ID</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Name</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Designation</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}}>Mob No.</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Email ID</TableCell>
              <TableCell sx={{color:"black",fontWeight:"600"}}>Address</TableCell>
                <TableCell sx={{color:"black",fontWeight:"600"}}>Salary</TableCell>
                <TableCell sx={{color:"black",fontWeight:"600"}}>Joining Date</TableCell>
            <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Status</TableCell>
        <TableCell sx={{color:"black",fontWeight:"600"}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {filteredRows.length>0?(
          filteredRows.map((row) => (
            <TableRow
              key={row.no}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
              // component="th" scope="row"
              >
                {row.no}
              </TableCell>
                <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
                <TableCell align="right">{row.mobile}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.salary}</TableCell>
                        <TableCell align="right">{row.joining}</TableCell>
              <TableCell sx={{color:row.status==="Active" ? "green": "red", fontWeight:"600",}} align="right">{row.status}</TableCell>
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
   
    </div>
    </Layout>
  );
}
