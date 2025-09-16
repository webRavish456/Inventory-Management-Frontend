"use client";
import { useState } from "react";
import {
  
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
  Grid
} from "@mui/material";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);

    
  };

  return (
    
    <Box
    sx={{
        minHeight: "100vh",        // full screen height
        width: "100%",             // full screen width
        bgcolor: "grey.200",       // grey background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component={Paper}
        elevation={3}
        sx={{
          p: 4,
          width: "320px",
          borderRadius: 2,
          textAlign: "center",
        
        }}
      >
        
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ textAlign: "left" }}>
          Log In
        </Typography>

        
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Enter Email Id"
            name="email"
            type="email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            variant="standard"
            InputLabelProps={{ required: false}}
          />

          <TextField
            fullWidth
            label="Enter Password"
            name="password"
            type="password"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            variant="standard"
            InputLabelProps={{ required: false}}
          />

         
          <Grid container alignItems="center" justifyContent="space-between" mt={1}>
            <Grid item>
             
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" underline="hover"
              sx={{ color: "black", fontSize: "0.9rem"}}>
                Forgot Password ?
              </Link>
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, bgcolor: "#0D47A1", textTransform: "none" }}
          >
            Log In
          </Button>
        </Box>
      </Box>
      </Box>
    
  );
}