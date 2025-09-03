"use client";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Bell, User } from "lucide-react";

export default function Header() {
  return (
    <AppBar position="static" className="header">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Inventory Management System</Typography>
        <div>
          <IconButton color="inherit">
            <Bell />
          </IconButton>
          <IconButton color="inherit">
            <User />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
