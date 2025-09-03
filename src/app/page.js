// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
// //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={180}
// //           height={38}
// //           priority
// //         />
// //         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
// //           <li className="mb-2 tracking-[-.01em]">
// //             Get started by editing{" "}
// //             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
// //               src/app/page.js
// //             </code>
// //             .
// //           </li>
// //           <li className="tracking-[-.01em]">
// //             Save and see your changes instantly.
// //           </li>
// //         </ol>

// //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// //           <a
// //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={20}
// //               height={20}
// //             />
// //             Deploy now
// //           </a>
// //           <a
// //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Read our docs
// //           </a>
// //         </div>
// //       </main>
// //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/file.svg"
// //             alt="File icon"
// //             width={16}
// //             height={16}
// //           />
// //           Learn
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/window.svg"
// //             alt="Window icon"
// //             width={16}
// //             height={16}
// //           />
// //           Examples
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/globe.svg"
// //             alt="Globe icon"
// //             width={16}
// //             height={16}
// //           />
// //           Go to nextjs.org →
// //         </a>
// //       </footer>
// //     </div>
// //   );
// // }





// 'use client'

// import { useState } from 'react'
// import { Container, Box, TextField, Button, Typography, Paper, Link, Grid, Icon } from '@mui/material'
// import { IconLock, IconMail, IconPassword, IconPasswordUser } from '@tabler/icons-react'
// import { useRouter } from 'next/navigation'


// export default function LoginPage() {
//   const router = useRouter()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Email:', email, 'Password:', password)
//     alert(`Logged in as ${email}`)
//     router.push('/Login')
//   }

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={8} sx={{ p: 4, mt: 10, borderRadius: 2 }}>
//         <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
//           Log In
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit}>
//           <TextField 
//             id="email"
//             label="Enter Email Id"
//             type="email"
//             variant="standard"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             InputProps={{
//               startAdornment: <IconMail size={20} style={{ marginRight: 8 }} />,
//             }}
//             required
//           />

//           <TextField
//             id="password"
//             label="Enter Password"
//             type="password"
//             variant='standard'
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//                 InputProps={{
//               startAdornment: <IconLock size={20} style={{ marginRight: 8 }} />,
//             }}
//             required
//           />

//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link href="#" underline="hover" variant="body2">
//                 Forgot Password!!
//               </Link>
//             </Grid>
//           </Grid>

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2, py: 1.2, borderRadius: 1, backgroundColor: '#003399', textTransform: 'none' }}
//           >
//             Log In
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   )
// }





// "use client"

// import Sidebar from "./components/sidebar"


// export default function Page() {
//   return (
//     <div className="flex">
//       {/* Sidebar on the left */}
//       <Sidebar />
  

//       {/* Main content area
//       <div className="flex-1 p-6">
//         <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
//         <p className="text-gray-600 mt-2">
//           Select a menu item from the sidebar.
//           {Menuitems.map((item, i) => (
//             <div key={i}>{item.label}</div>
//           ))}
//         </p>
//       </div> */}
//     </div>
//   )
// }

// "use client";
// // app/page.js


// import Sidebar from "./components/sidebar1";

// export default function page() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <main className="flex-1 p-6">Inventory Management System</main>
//     </div>
//   );
// }


// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';

//  function MenuListComposition() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === 'Escape') {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     // <Stack direction="row" spacing={2}>
//     //   <Paper>
//     //     <MenuList>
//     //       <MenuItem>Profile</MenuItem>
//     //       <MenuItem>My account</MenuItem>
//     //       <MenuItem>Logout</MenuItem>
//     //     </MenuList>
//     //   </Paper>
//       <div>
//         <Button
//           ref={anchorRef}
//           id="composition-button"
//           aria-controls={open ? 'composition-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           Dashboard
//         </Button>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           placement="bottom-start"
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === 'bottom-start' ? 'left top' : 'left bottom',
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList
//                     autoFocusItem={open}
//                     id="composition-menu"
//                     aria-labelledby="composition-button"
//                     onKeyDown={handleListKeyDown}
//                   >
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={handleClose}>My account</MenuItem>
//                     <MenuItem onClick={handleClose}>Logout</MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </div>
//     // </Stack>
//   );
// }


"use client";

import React from "react";
import Sidebar from "../components/sidebar1";

import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-end items-center p-4 shadow-md bg-white">
          <MenuListComposition />
        </header>
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        </main>
      </div>
    </div>
  );
}

function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab" || event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const prevOpen = React.useRef(open);                                  // main file
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        variant="contained"
        ref={anchorRef}
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        My Profile
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "right top" : "right bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}


// "use client";

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   IconButton,
//   InputAdornment,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Typography,
//   Avatar,
// } from "@mui/material";
// import { Search, Add, Visibility, Edit, Delete } from "@mui/icons-material";

// export default function DepartmentPage() {
//   const [search, setSearch] = useState("");

//   const rows = [
//     { id: 1, name: "Product Management", specialization: 3, desc: "ff", head: "Anup", status: "Active" },
//     { id: 2, name: "Inventory Management", specialization: 1, desc: "ss", head: "Punit", status: "Active" },
//     { id: 3, name: "Purchase Order Management", specialization: 2, desc: "ffcc", head: "Deepak", status: "Active" },
//     { id: 4, name: "Sales Order Management", specialization: 1, desc: "hvjhv", head: "Rahul", status: "Active" },
//   ];

//   const filteredRows = rows.filter((row) =>
//     row.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Box sx={{ p: 3 }}>
//       {/* Header Section */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//         <Typography variant="h5" fontWeight="bold">
//           Department
//         </Typography>

//         <Box display="flex" alignItems="center" gap={2}>
//           <TextField
//             placeholder="Search..."
//             size="small"
//             variant="outlined"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Search />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Button
//             variant="contained"
//             startIcon={<Add />}
//             sx={{ bgcolor: "#1A237E" }}
//           >
//             Add New Department
//           </Button>
//           <Avatar sx={{ bgcolor: "grey.400" }}>U</Avatar>
//         </Box>
//       </Box>

//       {/* Table */}
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ bgcolor: "grey.100" }}>
//             <TableRow>
//               <TableCell>Sl.No</TableCell>
//               <TableCell>Department Name</TableCell>
//               <TableCell>No. of Specialization</TableCell>
//               <TableCell>Description</TableCell>
//               <TableCell>Department Head</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredRows.map((row, index) => (
//               <TableRow key={row.id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell>{row.specialization}</TableCell>
//                 <TableCell>{row.desc}</TableCell>
//                 <TableCell>{row.head}</TableCell>
//                 <TableCell>{row.status}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary">
//                     <Visibility />
//                   </IconButton>
//                   <IconButton color="secondary">
//                     <Edit />
//                   </IconButton>
//                   <IconButton color="error">
//                     <Delete />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Footer Pagination Dummy */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
//         <Typography variant="body2">Rows per page: 10</Typography>
//         <Typography variant="body2">1–{filteredRows.length} of {rows.length}</Typography>
//       </Box>
//     </Box>
//   );
// }

// 'use client';

// import Create from "./components/WarehouseManagement/Bin&Rack Management/Create";


// function QuotationEstimationPage() {
//   return <Create />;
// }

// export default QuotationEstimationPage;


