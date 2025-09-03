







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

// // Import dialogs
// import View from "../../../components/supplier/View";
// import Edit from "../../../components/supplier/Edit";
// import Delete from "../../../components/supplier/Delete";

// export default function SupplierList() {
//   const [search, setSearch] = useState("");
//   const [openView, setOpenView] = useState(false);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedSupplier, setSelectedSupplier] = useState(null);

//   const suppliers = [
//     {
//       id: 1,
//       name: "ABC Traders",
//       contactPerson: "Rajesh Kumar",
//       phone: "9876543210",
//       email: "abc@traders.com",
//       address: "123 Market Road",
//       gst: "27ABCDE1234F1Z5",
//       city: "Delhi",
//       state: "Delhi",
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "XYZ Suppliers",
//       contactPerson: "Piya Sharma",
//       phone: "9123456760",
//       email: "xyz@supply.com",
//       address: "45 Industrial Area",
//       gst: "29XYZDE656H1ZK9",
//       city: "Mumbai",
//       state: "Maharashtra",
//       status: "Inactive",
//     },
//   ];

//   const filteredSuppliers = suppliers.filter((s) =>
//     s.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleView = (s) => {
//     setSelectedSupplier(s);
//     setOpenView(true);
//   };

//   const handleEdit = (s) => {
//     setSelectedSupplier(s);
//     setOpenEdit(true);
//   };

//   const handleDelete = (s) => {
//     setSelectedSupplier(s);
//     setOpenDelete(true);
//   };

//   const handleSave = (updatedSupplier) => {
//     console.log("Save supplier:", updatedSupplier);
//     setOpenEdit(false);
//   };

//   const handleConfirmDelete = (id) => {
//     console.log("Deleted supplier with ID:", id);
//     setOpenDelete(false);
//   };

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
//             + Add Supplier
//           </Button>
//         </div>

//         {/* Table */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead style={{ background: "#f5f5f5" }}>
//               <TableRow>
//                 <TableCell sx={{ fontWeight: "bold" }}>Sl. No</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Supplier Name</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Contact Person</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>City</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>State</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredSuppliers.map((s, index) => (
//                 <TableRow key={s.id}>
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{s.name}</TableCell>
//                   <TableCell>{s.contactPerson}</TableCell>
//                   <TableCell>{s.phone}</TableCell>
//                   <TableCell>{s.email}</TableCell>
//                   <TableCell>{s.city}</TableCell>
//                   <TableCell>{s.state}</TableCell>
//                   <TableCell>{s.status}</TableCell>
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => handleView(s)}>
//                       <VisibilityIcon />
//                     </IconButton>
//                     <IconButton color="secondary" onClick={() => handleEdit(s)}>
//                       <EditIcon />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDelete(s)}>
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* Modals */}
//         <View open={openView} handleClose={() => setOpenView(false)} supplier={selectedSupplier} />
//         <Edit
//           open={openEdit}
//           handleClose={() => setOpenEdit(false)}
//           supplier={selectedSupplier}
//           handleSave={handleSave}
//         />
//         <Delete
//           open={openDelete}
//           handleClose={() => setOpenDelete(false)}
//           supplier={selectedSupplier}
//           handleDelete={handleConfirmDelete}
//         />
//       </div>
//     </Layout>
//   );
// }     




"use client";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, IconButton, TextField, Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Import dialogs
import View from "../../../components/supplier/View";
import Edit from "../../../components/supplier/Edit";
import Delete from "../../../components/supplier/Delete";
import Create from "../../../components/supplier/Create"; //  AddSupplier dialog

export default function SupplierList() {
  const [search, setSearch] = useState("");
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openCreate, setOpenCreate] = useState(false); // For create dialog
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "ABC Traders",
      contactPerson: "Rajesh Kumar",
      phone: "9876543210",
      email: "abc@traders.com",
      address: "123 Market Road",
      gst: "27ABCDE1234F1Z5",
      city: "Delhi",
      state: "Delhi",
      status: "Active",
    },
    {
      id: 2,
      name: "XYZ Suppliers",
      contactPerson: "Piya Sharma",
      phone: "9123456760",
      email: "xyz@supply.com",
      address: "45 Industrial Area",
      gst: "29XYZDE656H1ZK9",
      city: "Mumbai",
      state: "Maharashtra",
      status: "Inactive",
    },
  ]);

  const filteredSuppliers = suppliers.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (s) => {
    setSelectedSupplier(s);
    setOpenView(true);
  };

  const handleEdit = (s) => {
    setSelectedSupplier(s);
    setOpenEdit(true);
  };

  const handleDelete = (s) => {
    setSelectedSupplier(s);
    setOpenDelete(true);
  };

  const handleSave = (updatedSupplier) => {
    setSuppliers((prev) =>
      prev.map((s) => (s.id === updatedSupplier.id ? updatedSupplier : s))
    );
    setOpenEdit(false);
  };

  const handleConfirmDelete = (id) => {
    setSuppliers((prev) => prev.filter((s) => s.id !== id));
    setOpenDelete(false);
  };

  const handleAddSupplier = (newSupplier) => {
    const newId = suppliers.length + 1;
    setSuppliers((prev) => [...prev, { id: newId, ...newSupplier }]);
    setOpenCreate(false);
  };

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        {/* Top Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={() => setOpenCreate(true)}>
            + Add Supplier
          </Button>
        </div>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ background: "#f5f5f5" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Sl. No</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Supplier Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Contact Person</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>City</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>State</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSuppliers.map((s, index) => (
                <TableRow key={s.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.contactPerson}</TableCell>
                  <TableCell>{s.phone}</TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.city}</TableCell>
                  <TableCell>{s.state}</TableCell>
                  <TableCell>{s.status}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleView(s)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleEdit(s)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(s)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Modals */}
        <View open={openView} handleClose={() => setOpenView(false)} supplier={selectedSupplier} />
        <Edit
          open={openEdit}
          handleClose={() => setOpenEdit(false)}
          supplier={selectedSupplier}
          handleSave={handleSave}
        />
        <Delete
          open={openDelete}
          handleClose={() => setOpenDelete(false)}
          supplier={selectedSupplier}
          handleDelete={handleConfirmDelete}
        />
        <Create
          open={openCreate}
          handleClose={() => setOpenCreate(false)}
          handleSave={handleAddSupplier}
        />
      </div>
    </Layout>
  );
}
