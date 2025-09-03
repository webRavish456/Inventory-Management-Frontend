// 'use client';

// import REact, { useState } from 'react';
// import Sidebar from './sidebar';

// const Layout = ({ children }) => {
//     return (
//         <div className="app-container">
//             <Sidebar />
//             <div className="main-content">
//                 <Header />
//                 <main className="content-area">
//                     {children}
//                 </main>
//             </div>
//         </div>
//     )
// }

// export default Layout;


// import "../globals.css"
// import Sidebar from "./sidebar1"

// export const metadata = {
//   title: "Clinic Dashboard",
//   description: "Sidebar Layout Example",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="flex">
//         {/* Sidebar stays here always */}
//         <Sidebar />

//         {/* Main content area */}
//         <div className="flex-1 p-6 text-black bg-gray-50">
//           {children}
//         </div>
//       </body>
//     </html>
//   )
// }




"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import { Search, Add, Visibility, Edit, Delete } from "@mui/icons-material";

export default function DepartmentPage() {
  const [search, setSearch] = useState("");

  const rows = [
    { id: 1, name: "Product Management", specialization: 3, desc: "ff", head: "Anup", status: "Active" },
    { id: 2, name: "Inventory Management", specialization: 1, desc: "ss", head: "Punit", status: "Active" },
    { id: 3, name: "Purchase Order Management", specialization: 2, desc: "ffcc", head: "Deepak", status: "Active" },
    { id: 4, name: "Sales Order Management", specialization: 1, desc: "hvjhv", head: "Rahul", status: "Active" },
  ];

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Department
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <TextField
            placeholder="Search..."
            size="small"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{ bgcolor: "#1A237E" }}
          >
            Add New Department
          </Button>
          <Avatar sx={{ bgcolor: "grey.400" }}>U</Avatar>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "grey.100" }}>
            <TableRow>
              <TableCell>Sl.No</TableCell>
              <TableCell>Department Name</TableCell>
              <TableCell>No. of Specialization</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Department Head</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.specialization}</TableCell>
                <TableCell>{row.desc}</TableCell>
                <TableCell>{row.head}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Visibility />
                  </IconButton>
                  <IconButton color="secondary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer Pagination Dummy */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Typography variant="body2">Rows per page: 10</Typography>
        <Typography variant="body2">1–{filteredRows.length} of {rows.length}</Typography>
      </Box>
    </Box>
  );
}

