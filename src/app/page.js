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
/*"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DashboardIcon from "@mui/icons-material/Dashboard";

const userSettings = ["Profile", "Logout"];

export default function DashboardAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          
          <DashboardIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: ".1rem" }}
          >
           INVENTORY DASHBOARD
          </Typography>

          
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User" src="/avatar.png" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar-user"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {userSettings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}



"use client"
import { Box, Card, CardContent, Typography, TextField, Button, Link } from "@mui/material";

import { IconMail, IconEye } from "@tabler/icons-react";

export default function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#f0f4f8",
      }}
    >
      <Card sx={{ width: 400, p: 2, boxShadow: 5, backgroundColor: "#dce6ed" }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Log In
          </Typography>

          <TextField
            label="Email"
            placeholder="Enter Email Id"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            InputProps={{
              endAdornment: <IconMail size={20} style={{ marginLeft: 8 }} />,
            }}
          />

          <TextField
            label="Password"
            placeholder="Enter Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            InputProps={{
              endAdornment: <IconEye size={20} style={{ marginLeft: 8 }} />,
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Link href="#" underline="hover">
              Forgot Password
            </Link>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#001f4d", "&:hover": { backgroundColor: "#001030" } }}
          >
            LOG IN
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Link,
  Box,
} from "@mui/material";
import { IconEye, IconMail } from "@tabler/icons-react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("saveData")) || [];
    setSaveData(allData);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      alert("Please fill all fields!");
      return;
    }

    console.log("Login Successful:", user);

    const updatedData = [...saveData, user];
    setSaveData(updatedData);
    localStorage.setItem("saveData", JSON.stringify(updatedData));

    setUser({ email: "", password: "" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Card sx={{ width: 400, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom textAlign={"center"}>
            Log In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
            label="Email"
              placeholder="Enter Email Id"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: <IconMail size={20} style={{marginRight:8}}/>
              }}
            />
            <br></br>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <TextField
              label="Password"
              placeholder="Enter Password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                variant="outlined"
                InputProps={{
                startAdornment: <IconEye size={20} style={{marginRight:8}}/>
              }}
              />
              
            </Box>
            <br></br>
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <a href="/forgot-password" style={{ color: "blue", fontSize: "14px" }}>
              Forgot Password
            </a>
            </div>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                bgcolor: "#051c3fff",
                "&:hover": { bgcolor: "hsla(216, 86%, 23%, 1.00)" },
              }}
            >
              Log In
            </Button>
          </form>
          
        </CardContent>
      </Card>
    </Box>
  );
}*/


