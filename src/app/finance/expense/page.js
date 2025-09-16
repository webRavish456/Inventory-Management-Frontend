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


// export default function ExpenseList() {
//   const [search, setSearch] = useState("");
//   const [expenses] = useState([
//     {
//       id: 1,
//       type: "Office Supplies",
//       date: "2025-08-30",
//       paidTo: "Stationery Shop",
//       amount: 2500,
//       paymentMode: "UPI",
//       referenceNo: "TXN12345",
//       status: "Paid",
//     },
//     {
//       id: 2,
//       type: "Travel",
//       date: "2025-08-28",
//       paidTo: "Uber",
//       amount: 600,
//       paymentMode: "Cash",
//       referenceNo: "TXN67890",
//       status: "Pending",
//     },
//   ]);

//   const filtered = expenses.filter((e) =>
//     e.type.toLowerCase().includes(search.toLowerCase())
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
//             + Add Expense
//           </Button>
//         </div>

//         {/* Table */}
//         <TableContainer component={Paper} sx={{ width: "100%", overflowX: "auto"}}>
//           <Table>
//             {/* Table Head in one line */}
//             <TableHead style={{ background: "#f5f5f5" }}>
//               <TableRow>
//                 <TableCell sx={{ fontWeight: "bold" }}>Expense ID</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Expense Type</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Paid To</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Payment Mode</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Reference No.</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             {/* Table Body */}
//             <TableBody>
//               {filtered.map((e) => (
//                 <TableRow key={e.id}>
//                   <TableCell>{e.id}</TableCell>
//                   <TableCell>{e.type}</TableCell>
//                   <TableCell>{e.date}</TableCell>
//                   <TableCell>{e.paidTo}</TableCell>
//                   <TableCell>₹{e.amount}</TableCell>
//                   <TableCell>{e.paymentMode}</TableCell>
//                   <TableCell>{e.referenceNo}</TableCell>
//                   <TableCell>{e.status}</TableCell>
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



// // "use client";
// // import React, { useState } from "react";
// // import Layout from "../../../components/Layout";
// // import {
// //   Table, TableBody, TableCell, TableContainer, TableHead,
// //   TableRow, Paper, IconButton, TextField, Button,
// // } from "@mui/material";
// // import EditIcon from "@mui/icons-material/Edit";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import VisibilityIcon from "@mui/icons-material/Visibility";

// // // Import dialogs (create these in components/expense/)
// // import ViewExpense from "../../../components/expense/View";
// // import EditExpense from "../../../components/expense/Edit";
// // import DeleteExpense from "../../../components/expense/Delete";
// // import CreateExpense from "../../../components/expense/Create"; 

// // export default function ExpenseList() {
// //   const [search, setSearch] = useState("");
// //   const [openView, setOpenView] = useState(false);
// //   const [openEdit, setOpenEdit] = useState(false);
// //   const [openDelete, setOpenDelete] = useState(false);
// //   const [openCreate, setOpenCreate] = useState(false);
// //   const [selectedExpense, setSelectedExpense] = useState(null);

// //   // ✅ Sample Expense Data
// //   const [expenses, setExpenses] = useState([
// //     {
// //       id: 1,
// //       expenseType: "Office Rent",
// //       date: "2025-08-01",
// //       paidTo: "ABC Properties",
// //       amount: 25000,
// //       paymentMode: "Bank Transfer",
// //       referenceNo: "TXN123456",
// //       status: "Paid",
// //     },
// //     {
// //       id: 2,
// //       expenseType: "Electricity Bill",
// //       date: "2025-08-05",
// //       paidTo: "Tata Power",
// //       amount: 4800,
// //       paymentMode: "Credit Card",
// //       referenceNo: "CC98765",
// //       status: "Pending",
// //     },
// //     {
// //       id: 3,
// //       expenseType: "Stationery Purchase",
// //       date: "2025-08-10",
// //       paidTo: "OfficeMart",
// //       amount: 1500,
// //       paymentMode: "Cash",
// //       referenceNo: "CASH2025",
// //       status: "Paid",
// //     },
// //   ]);

// //   // ✅ Filter
// //   const filteredExpenses = expenses.filter((e) =>
// //     e.expenseType.toLowerCase().includes(search.toLowerCase())
// //   );

// //   // ✅ Handlers
// //   const handleView = (e) => {
// //     setSelectedExpense(e);
// //     setOpenView(true);
// //   };

// //   const handleEdit = (e) => {
// //     setSelectedExpense(e);
// //     setOpenEdit(true);
// //   };

// //   const handleDelete = (e) => {
// //     setSelectedExpense(e);
// //     setOpenDelete(true);
// //   };

// //   const handleSave = (updatedExpense) => {
// //     setExpenses((prev) =>
// //       prev.map((e) => (e.id === updatedExpense.id ? updatedExpense : e))
// //     );
// //     setOpenEdit(false);
// //   };

// //   const handleConfirmDelete = (id) => {
// //     setExpenses((prev) => prev.filter((e) => e.id !== id));
// //     setOpenDelete(false);
// //   };

// //   const handleAddExpense = (newExpense) => {
// //     const newId = expenses.length + 1;
// //     setExpenses((prev) => [...prev, { id: newId, ...newExpense }]);
// //     setOpenCreate(false);
// //   };

// //   return (
// //     <Layout>
// //       <div style={{ padding: "20px" }}>
// //         {/* Top Bar */}
// //         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
// //           <TextField
// //             variant="outlined"
// //             size="small"
// //             placeholder="Search by Expense Type..."
// //             value={search}
// //             onChange={(e) => setSearch(e.target.value)}
// //           />
// //           <Button variant="contained" color="primary" onClick={() => setOpenCreate(true)}>
// //             + Add Expense
// //           </Button>
// //         </div>

// //         {/* Table */}
// //         <TableContainer component={Paper}>
// //           <Table>
// //             <TableHead style={{ background: "#f5f5f5" }}>
// //               <TableRow>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Sl. No</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Expense ID</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Expense Type</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Paid To</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Payment Mode</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Reference No.</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
// //                 <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {filteredExpenses.map((e, index) => (
// //                 <TableRow key={e.id}>
// //                   <TableCell>{index + 1}</TableCell>
// //                   <TableCell>{e.id}</TableCell>
// //                   <TableCell>{e.expenseType}</TableCell>
// //                   <TableCell>{e.date}</TableCell>
// //                   <TableCell>{e.paidTo}</TableCell>
// //                   <TableCell>₹{e.amount}</TableCell>
// //                   <TableCell>{e.paymentMode}</TableCell>
// //                   <TableCell>{e.referenceNo}</TableCell>
// //                   <TableCell>{e.status}</TableCell>
// //                   <TableCell>
// //                     <IconButton color="primary" onClick={() => handleView(e)}>
// //                       <VisibilityIcon />
// //                     </IconButton>
// //                     <IconButton color="secondary" onClick={() => handleEdit(e)}>
// //                       <EditIcon />
// //                     </IconButton>
// //                     <IconButton color="error" onClick={() => handleDelete(e)}>
// //                       <DeleteIcon />
// //                     </IconButton>
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>

// //         {/* Modals */}
// //         <ViewExpense open={openView} handleClose={() => setOpenView(false)} expense={selectedExpense} />
// //         <EditExpense
// //           open={openEdit}
// //           handleClose={() => setOpenEdit(false)}
// //           expense={selectedExpense}
// //           handleSave={handleSave}
// //         />
// //         <DeleteExpense
// //           open={openDelete}
// //           handleClose={() => setOpenDelete(false)}
// //           expense={selectedExpense}
// //           handleDelete={handleConfirmDelete}
// //         />
// //         <CreateExpense
// //           open={openCreate}
// //           handleClose={() => setOpenCreate(false)}
// //           handleSave={handleAddExpense}
// //         />
// //       </div>
// //     </Layout>
// //   );
// // }  

"use client";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, IconButton, Button, TextField, Box
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";

import CreateExpense from "../../../components/finance/expense/Create";
import EditExpense from "../../../components/finance/expense/Edit";
import ViewExpense from "../../../components/finance/expense/View";
import DeleteExpense from "../../../components/finance/expense/Delete";

export default function ExpensePage() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      expenseType: "Office Supplies",
      date: "2025-08-30",
      paidTo: "Stationery Shop",
      amount: "₹2500",
      paymentMode: "UPI",
      referenceNo: "TXN12345",
      status: "Paid",
    },
    {
      id: 2,
      expenseType: "Travel",
      date: "2025-08-28",
      paidTo: "Uber",
      amount: "₹600",
      paymentMode: "Cash",
      referenceNo: "TXN67890",
      status: "Pending",
    },
  ]);

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleCreate = () => setOpenCreate(true);
  const handleEdit = (exp) => { setSelectedExpense(exp); setOpenEdit(true); };
  const handleView = (exp) => { setSelectedExpense(exp); setOpenView(true); };
  const handleDelete = (exp) => { setSelectedExpense(exp); setOpenDelete(true); };

  return (
    <Layout>
      {/* 🔹 Top Bar with Search + Add Expense */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        {/* Search bar (left) */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          sx={{ width: 250 }}
        />

        {/* Add button (right) */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleCreate}
        >
          Add Expense
        </Button>
      </Box>

      {/* 🔹 Expense Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: "#f0f0f0" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Expense ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Expense Type</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Paid To</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Payment Mode</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Reference No.</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((exp) => (
              <TableRow key={exp.id}>
                <TableCell>{exp.id}</TableCell>
                <TableCell>{exp.expenseType}</TableCell>
                <TableCell>{exp.date}</TableCell>
                <TableCell>{exp.paidTo}</TableCell>
                <TableCell>{exp.amount}</TableCell>
                <TableCell>{exp.paymentMode}</TableCell>
                <TableCell>{exp.referenceNo}</TableCell>
                <TableCell>{exp.status}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleView(exp)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleEdit(exp)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(exp)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 🔹 Dialogs */}
      <CreateExpense open={openCreate} onClose={() => setOpenCreate(false)} />
      <EditExpense open={openEdit} onClose={() => setOpenEdit(false)} expense={selectedExpense} />
      <ViewExpense open={openView} onClose={() => setOpenView(false)} expense={selectedExpense} />
      <DeleteExpense open={openDelete} onClose={() => setOpenDelete(false)} expense={selectedExpense} />
    </Layout>
  );
}