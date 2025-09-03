'use client';

import React, { useState } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title"> INVENTORY MANAGEMENT</h1>
      </div>

      <div className="header-right">
        <div
          className="avatar"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <AccountCircleRoundedIcon />

          {isProfileOpen && (
            <div className="avatar-dropdown">
              <a href="#" className="dropdown-item">
                Edit Profile
              </a>
              <div>
              <a href="#" className="dropdown-item">
                Reset Password
              </a></div>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item danger">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;




/*"use client"
import { useState } from "react"
import{User} from 'lucide-react'
const Header = () => {
  const [isProfileOpen,setIsProfileOpen]=useState(false);

  return (
    <header className="header">
      <div className="header-left">
      <h1 className="page-title">Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="avatar" onClick={()=>
          setIsProfileOpen(!isProfileOpen)}>
            <User/>
            {isProfileOpen &&(
              <div className="avatar-dropdown">
                <a href="#" className="dropdown-item">My Profile</a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item danger">Logout</a>
                </div>
            )}
          </div>
      </div>
    </header>
  );
};
export default Header;


"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
const drawerWidth = 260;

export default function Header({ title }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "#010305ff",
        color: "white",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <DashboardIcon/>
        <Typography className= "moduleTitle" variant="h6" noWrap component="div">
          Dashboard
        </Typography>

        
        <IconButton size="large" edge="end" color="inherit">
          <AccountCircle  />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

"use client";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [activeModule, setActiveModule] = useState("Dashboard"); 
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar setActiveModule={setActiveModule} />

      <div style={{ flex: 1, marginLeft: 260, background: "#f8fafc", minHeight: "100vh" }}>
        
        <Header title={activeModule} />
        <main style={{ padding: "80px 20px 20px" }}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

const drawerWidth = 260; 

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "#0a1f44", 
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6" noWrap component="div">
           Dashboard
        </Typography>

        
        <IconButton size="large" edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}



"use client";
import { useState } from "react";
import { User } from "lucide-react";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="header flex justify-between items-center px-4 py-2 shadow-md">
      
      <div className="header-left">
        <h1 className="page-title text-xl font-bold">INVENTORY DASHBOARD</h1>
      </div>

      
      <div className="header-right relative">
        <div
          className="avatar cursor-pointer"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <User className="w-6 h-6" />
        </div>

       
        {isProfileOpen && (
          <div className="avatar-dropdown absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
            <a href="#" className="dropdown-item block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
            <div className="dropdown-divider border-t my-1"></div>
            <a
              href="#"
              className="dropdown-item danger block px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
"use client";
import { useState } from "react";
import { User } from "lucide-react";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-2 shadow-md bg-white fixed top-0 left-64 right-0 z-10">
      
      <div>
        <h1 className="text-xl font-bold">INVENTORY DASHBOARD</h1>
      </div>

      
      <div className="relative">
        <div
          className="cursor-pointer"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <User className="w-6 h-6" />
        </div>

        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
            <div className="border-t my-1"></div>
            <a
              href="#"
              className="block px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
/*"use client";
import { useState } from "react";
import { User } from "lucide-react";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-2 shadow-md bg-white fixed top-0 left-64 right-0 z-10">
      
      <div>
        <h1 className="text-xl font-bold">INVENTORY DASHBOARD</h1>
      </div>

      
      <div className="relative">
        <div
          className="cursor-pointer"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <User className="w-6 h-6" />
        </div>

        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
            <div className="border-t my-1"></div>
            <a
              href="#"
              className="block px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;*/

