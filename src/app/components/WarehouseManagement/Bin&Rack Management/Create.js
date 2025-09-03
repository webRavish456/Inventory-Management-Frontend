// "use client";
// import React, { useState } from "react";

// export default function Create() {
//   const [form, setForm] = useState({
//     itemName: "",
//     supplier: "",
//     costPrice: "",
//     date: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New Cost Price Entry:", form);
//     alert("Cost Price Entry Captured!");
//     setForm({ itemName: "", supplier: "", costPrice: "", date: "" });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-2xl shadow-md w-96"
//       >
//         <h2 className="text-xl font-bold mb-4">Add Cost Price</h2>

//         <input
//           type="text"
//           name="itemName"
//           value={form.itemName}
//           onChange={handleChange}
//           placeholder="Item Name"
//           className="w-full p-2 border rounded mb-3"
//           required
//         />

//         <input
//           type="text"
//           name="supplier"
//           value={form.supplier}
//           onChange={handleChange}
//           placeholder="Supplier Name"
//           className="w-full p-2 border rounded mb-3"
//           required
//         />

//         <input
//           type="number"
//           name="costPrice"
//           value={form.costPrice}
//           onChange={handleChange}
//           placeholder="Cost Price"
//           className="w-full p-2 border rounded mb-3"
//           required
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }




"use client"

import Layout from '../../components/Layout';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Visibility } from '@mui/icons-material';
import { useState } from 'react';
import { IconButton } from '@mui/material';




export default function QuotationEstimationPage() {

  const [view, setView]=useState(false);

  const handleView = () => {
    console.log("view");
  }


  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein, action:(
      <>
      <IconButton onClick={handleView}>
        <Visibility  />
      </IconButton>
      </>
    ) };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Layout>
  


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    </Layout>
  );
}