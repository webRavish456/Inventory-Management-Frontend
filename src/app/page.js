// "use client";
// import { useState } from "react";
// import {
  
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Link,
//   Paper,
//   Grid
// } from "@mui/material";

// export default function LoginPage() {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", formData.email);
//     console.log("Password:", formData.password);

    
//   };

//   return (
    
//     <Box
//     sx={{
//         minHeight: "100vh",        // full screen height
//         width: "100%",             // full screen width
//         bgcolor: "grey.200",       // grey background
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Box
//         component={Paper}
//         elevation={3}
//         sx={{
//           p: 4,
//           width: "320px",
//           borderRadius: 2,
//           textAlign: "center",
        
//         }}
//       >
        
//         <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ textAlign: "left" }}>
//           Log In
//         </Typography>

        
//         <Box component="form" onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Enter Email Id"
//             name="email"
//             type="email"
//             margin="normal"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             variant="standard"
//             InputLabelProps={{ required: false}}
//           />

//           <TextField
//             fullWidth
//             label="Enter Password"
//             name="password"
//             type="password"
//             margin="normal"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             variant="standard"
//             InputLabelProps={{ required: false}}
//           />

         
//           <Grid container alignItems="center" justifyContent="space-between" mt={1}>
//             <Grid item>
             
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2" underline="hover"
//               sx={{ color: "black", fontSize: "0.9rem"}}>
//                 Forgot Password ?
//               </Link>
//             </Grid>
//           </Grid>

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 3, bgcolor: "#0D47A1", textTransform: "none" }}
//           >
//             Log In
//           </Button>
//         </Box>
//       </Box>
//       </Box>
    
//   );
// }       


// "use client";

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import DashboardIcon from "@mui/icons-material/Dashboard";

// const userSettings = ["Profile", "Logout"];

// export default function DashboardAppBar() {
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
//   const handleCloseUserMenu = () => setAnchorElUser(null);

//   return (
//     <AppBar position="sticky" color="primary">
//       <Container maxWidth="xl">
//         <Toolbar>
          
//           <DashboardIcon sx={{ mr: 1 }} />
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: ".1rem" }}
//           >
//            INVENTORY DASHBOARD
//           </Typography>

          
//           <Tooltip title="Open settings">
//             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//               <Avatar alt="User" src="/avatar.png" />
//             </IconButton>
//           </Tooltip>
//           <Menu
//             sx={{ mt: "45px" }}
//             id="menu-appbar-user"
//             anchorEl={anchorElUser}
//             anchorOrigin={{ vertical: "top", horizontal: "right" }}
//             keepMounted
//             transformOrigin={{ vertical: "top", horizontal: "right" }}
//             open={Boolean(anchorElUser)}
//             onClose={handleCloseUserMenu}
//           >
//             {userSettings.map((setting) => (
//               <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                 {setting}
//               </MenuItem>
//             ))}
//           </Menu>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }  

// "use client";

// import Layout from "../components/Layout";

// export default function DashboardPage() {
//   return (
//     <Layout>
//       {/* <h1>Dashboard</h1>
//       <p>Welcome to the Inventory Management Dashboard</p> */}
//     </Layout>
//   );
// }    





import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Layout from "@/components/Layout"

export default function Home() {
  return(
    <>
    <Header/>
    <Sidebar/>
    <Layout/>
    
    </>
  )
}