"use client"
import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = ({children}) => {
  return (
    <div className="app-container">
      <Sidebar/>
      <div className="main-content">
        <Header/>
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
};
export default Layout;
/*


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
import Sidebar from "./Sidebar";
import Header from "./Header";

const drawerWidth = 260;

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      
      <aside
        style={{
          width: drawerWidth,
          flexShrink: 0,
          height: "100vh",
          background: "#010206ff",
          color: "white",
          position: "fixed",
        }}
      >
        <Sidebar />
      </aside>

      
      <main
        style={{
          flexGrow: 1,
          marginLeft: drawerWidth,
          padding: "80px 24px 24px 24px", 
          background: "#f3f4f6",
          minHeight: "100vh",
        }}
      >
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;





"use client";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      
      <Sidebar />

      
      <div className="flex-1 ml-64 bg-gray-100 min-h-screen">
        <Header />
        <main className="pt-16 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;*/

