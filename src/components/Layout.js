// "use client";
// import Sidebar from "./Sidebar";
// import Header from "./Header";

// export default function Layout({ children }) {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white">
//         <Sidebar />
//       </div>

//       {/* Main Content Area */}
//       <div className="flex flex-col flex-1">
//         {/* Header */}
//         <div className="h-16 bg-gray-900 text-white flex items-center px-4 shadow">
//           <Header />
//         </div>

//         {/* Page Content */}
//         <main className="flex-1 p-4 bg-gray-100 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }     

// src/components/Layout.js
// "use client";
// import Sidebar from "./Sidebar";
// import Header from "./Header";

// export default function Layout({ children }) {
//   return (
//     <div className="layout">
//       <Sidebar />
//       <div className="main">
//         <Header />
//         <main className="content">{children}</main>
//       </div>

//       <style jsx>{`
//         .layout {
//           display: flex;
//           height: 100vh;
//         }
//         .main {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }
//         .content {
//           padding: 20px;
//           background: #f4f6f9;
//           flex: 1;
//           overflow-y: auto;
//         }
//       `}</style>
//     </div>
//   );
// }





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