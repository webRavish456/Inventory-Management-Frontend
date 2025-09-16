"use client";

import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";

export default function Home() {
  const [form, setForm] = React.useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${form.email}\nPassword: ${form.password}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#00b3ffff", 
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Log In
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            fullWidth
            margin="normal"
            label="Enter Email id *"
            name="email"
            value={form.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            required
          />

          <TextField
            variant="standard"
            fullWidth
            margin="normal"
            type="password"
            label="Enter Password *"
            name="password"
            value={form.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            required
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <Link href="#" underline="hover">
              <u>Forget Password</u>
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            LOG IN
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
