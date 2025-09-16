// "use client";
// import React, { useState } from "react";
// import Layout from "../../../components/Layout";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead,
//   TableRow, Paper, IconButton, TextField, Button,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// // (You can create dialogs later for View, Edit, Delete, AddIncome)
// export default function IncomeList() {
//   const [search, setSearch] = useState("");
//   const [incomes] = useState([
//     {
//       id: 1,
//       type: "Product Sale",
//       date: "2025-08-25",
//       receivedFrom: "Customer A",
//       amount: 5000,
//       paymentMode: "Bank Transfer",
//       referenceNo: "RCV12345",
//       status: "Received",
//     },
//     {
//       id: 2,
//       type: "Consulting",
//       date: "2025-08-27",
//       receivedFrom: "Client B",
//       amount: 3000,
//       paymentMode: "UPI",
//       referenceNo: "RCV67890",
//       status: "Pending",
//     },
//   ]);

//   const filtered = incomes.filter((i) =>
//     i.type.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Layout>
//       <div style={{ padding: "20px" }}>
//         {/* Top Bar */}
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
//           <TextField
//             variant="outlined"
//             size="small"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <Button variant="contained" color="primary">
//             + Add Income
//           </Button>
//         </div>

//         {/* Table */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead style={{ background: "#f5f5f5" }}>
//               <TableRow>
//                 <TableCell sx={{ fontWeight: "bold" }}>Income ID</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Income Type</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Received From</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Payment Mode</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Reference No.</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filtered.map((i) => (
//                 <TableRow key={i.id}>
//                   <TableCell>{i.id}</TableCell>
//                   <TableCell>{i.type}</TableCell>
//                   <TableCell>{i.date}</TableCell>
//                   <TableCell>{i.receivedFrom}</TableCell>
//                   <TableCell>₹{i.amount}</TableCell>
//                   <TableCell>{i.paymentMode}</TableCell>
//                   <TableCell>{i.referenceNo}</TableCell>
//                   <TableCell>{i.status}</TableCell>
//                   <TableCell>
//                     <IconButton color="primary">
//                       <VisibilityIcon />
//                     </IconButton>
//                     <IconButton color="secondary">
//                       <EditIcon />
//                     </IconButton>
//                     <IconButton color="error">
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </Layout>
//   );
// }   


"use client";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Button, TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

import CreateIncome from "../../../components/finance/income/Create";
import EditIncome from "../../../components/finance/income/Edit";
import ViewIncome from "../../../components/finance/income/View";
import DeleteIncome from "../../../components/finance/income/Delete";

export default function IncomePage() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedIncome, setSelectedIncome] = useState(null);

  const [incomes, setIncomes] = useState([
    {
      id: 1,
      incomeType: "Consultation Fee",
      date: "2025-08-30",
      receivedFrom: "Patient",
      amount: "5000",
      paymentMode: "Cash",
      referenceNo: "TXN12345",
      status: "Received",
    },
  ]);

  // ✅ Handlers
  const handleAdd = (data) => {
    setIncomes([...incomes, { id: incomes.length + 1, ...data }]);
  };

  const handleUpdate = (updatedData) => {
    setIncomes(
      incomes.map((item) => (item.id === updatedData.id ? updatedData : item))
    );
  };

  const openDeleteDialog = (row) => {
    setSelectedIncome(row);
    setOpenDelete(true);
  };

  const confirmDelete = (id) => {
    setIncomes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Layout>


    <div>
      {/* ✅ Header with Add + Search */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Income</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenCreate(true)}
          >
            + Add Income
          </Button>
          <TextField label="Search" variant="outlined" size="small" />
        </div>
      </div>

      {/* ✅ Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Income ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Income Type</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Received From</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Payment Mode</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Reference No.</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomes.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.incomeType}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.receivedFrom}</TableCell>
                <TableCell>₹{row.amount}</TableCell>
                <TableCell>{row.paymentMode}</TableCell>
                <TableCell>{row.referenceNo}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      setSelectedIncome(row);
                      setOpenView(true);
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      setSelectedIncome(row);
                      setOpenEdit(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => openDeleteDialog(row)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ✅ Dialogs */}
      <CreateIncome
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onSave={handleAdd}
      />
      <EditIncome
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        income={selectedIncome}
        onUpdate={handleUpdate}
      />
      <ViewIncome
        open={openView}
        onClose={() => setOpenView(false)}
        income={selectedIncome}
      />
      <DeleteIncome
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        income={selectedIncome}
        onConfirm={confirmDelete}
      />
    </div>
    </Layout>
  );
}




