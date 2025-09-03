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
