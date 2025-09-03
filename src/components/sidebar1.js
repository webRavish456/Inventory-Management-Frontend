

// import React, {useState, useEffect} from 'react';
// import Link from 'next/link';   
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';
// import {ChevronDown, ChevronUp, ChevronRight} from "lucide-react";
// import Menuitems from './Menuitems';

// const Sidebar = () => {
//     const pathname = usePathname();
//     const router = useRouter();

//     const [activeIndex, setActiveIndex] = useState(null);

//     console.log(activeIndex);
//     const [activeSubItems, setActiveSubItems] = useState([null]);

//     useEffect(() => {)



//     "use client"
// import { useState } from "react"
// import "../app/globals.css";
// import {
//   LayoutDashboard,
//   Building2,
//   Network,
//   User,
//   Users,
//   UserSquare,
//   CalendarDays,
//   FlaskConical,
//   Landmark
// } from "lucide-react"



// const Sidebar = () => {
//   const [openMenu, setOpenMenu] = useState("doctor") // Default open menu
//   const [activeItem, setActiveItem] = useState("All Doctor")

//   const handleToggle = (menu) => {
//     setOpenMenu(openMenu === menu ? "" : menu)
//   }

//   return (
//     <div className="h-screen w-64 bg-[#0a0939] text-white flex flex-col p-4 space-y-2">
//       {/* Dashboard */}
//       <div
//         className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
//         onClick={() => setActiveItem("Dashboard")}
//       >
//         <LayoutDashboard size={20} />
//         <span>Dashboard</span>
//       </div>

//       {/* Branch */}
//       <div
//         className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
//         onClick={() => setActiveItem("Branch")}
//       >
//         <Building2 size={20} />
//         <span>Branch</span>
//       </div>

//       {/* Department */}
//       <div
//         className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
//         onClick={() => setActiveItem("Department")}
//       >
//         <Network size={20} />
//         <span>Product Management</span>
//       </div>

//       {/* Doctor */}
//       <div>
//         <div
//           onClick={() => handleToggle("doctor")}
//           className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
//             openMenu === "doctor" ? "bg-white/20" : "hover:bg-white/10"
//           }`}
//         >
//           <div className="flex items-center gap-3">
//             <User size={20} />
//             <span>Inventory Management</span>
//           </div>
//           <span>{openMenu === "doctor" ? "▲" : "▼"}</span>
//         </div>
//         {openMenu === "doctor" && (
//           <div className="ml-8 mt-1 space-y-1">
//             <p
//               onClick={() => setActiveItem("All Doctor")}
//               className={`cursor-pointer ${
//                 activeItem === "All Doctor"
//                   ? "font-semibold text-white"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               Stock Tracking 
//             </p>
//             <p
//               onClick={() => setActiveItem("Shift Management")}
//               className={`cursor-pointer ${
//                 activeItem === "Shift Management"
//                   ? "font-semibold text-white"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               Warehouse Transfer
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Staff */}
//       <div
//         className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
//         onClick={() => setActiveItem("Staff")}
//       >
//         <Users size={20} />
//         <span>Supplier Management</span>
//       </div>

//       {/* Patients */}
//       <div>
//         <div
//           onClick={() => handleToggle("patients")}
//           className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
//             openMenu === "patients" ? "bg-white/20" : "hover:bg-white/10"
//           }`}
//         >
//           <div className="flex items-center gap-3">
//             <UserSquare size={20} />
//             <span>Purchase Order Management</span>
//           </div>
//           <span>{openMenu === "patients" ? "▲" : "▼"}</span>
//         </div>
//         {openMenu === "patients" && (
//           <div className="ml-8 mt-1 space-y-1">
//             <p className="text-gray-300 hover:text-white cursor-pointer">
//               Create Purchase Order
//             </p>
//             <p className="text-gray-300 hover:text-white cursor-pointer">
//               Track Shipments
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Appointment */}
//       <div
//         className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
//         onClick={() => setActiveItem("Appointment")}
//       >
//         <CalendarDays size={20} />
//         <span>Sales Order Management</span>
//       </div>

//       {/* Laboratory */}
//       <div>
//         <div
//           onClick={() => handleToggle("lab")}
//           className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
//             openMenu === "lab" ? "bg-white/20" : "hover:bg-white/10"
//           }`}
//         >
//           <div className="flex items-center gap-3">
//             <FlaskConical size={20} />
//             <span>Customer Management</span>
//           </div>
//           <span>{openMenu === "lab" ? "▲" : "▼"}</span>
//         </div>
//         {openMenu === "lab" && (
//           <div className="ml-8 mt-1 space-y-1">
//             <p className="text-gray-300 hover:text-white cursor-pointer">
//               Customer List
//             </p>
//             <p className="text-gray-300 hover:text-white cursor-pointer">
//               Customer Orders
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Billing & Invoices */}
//       <div>
//         <div
//           onClick={() => handleToggle("Billing & Invoices")}
//           className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
//             openMenu === "Billing & Invoices" ? "bg-white/20" : "hover:bg-white/10"
//           }`}
//         >
//           <div className="flex items-center gap-3">
//             <Landmark size={20} />
//             <span>Billing & Invoicing</span>
//           </div>
//           <span>{openMenu === "Billing & Invoices" ? "▲" : "▼"}</span>
//         </div>
//         {openMenu === "Billing & Invoices" && (
//           <div className="ml-8 mt-1 space-y-1">
//             <p className="text-gray-300 hover:text-white cursor-pointer">
//               Generate Invoices
//             </p>
//             <p className="text-gray-300 hover:text-white cursor-pointer">
//               Process Payments
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Sidebar



// "use client"
// import { useState } from "react"
// import "../app/globals.css"
// import {
//   Users,
//   Package,
//   UserSquare,
//   Building2,
//   Warehouse,
//   Boxes,
//   ClipboardList,
//   ShoppingCart,
//   ClipboardCheck,
//   Calculator,
//   AlertTriangle,
//   Landmark,
//   Wallet,
//   BarChart2,
// } from "lucide-react"

// const Sidebar = () => {
//   const [openMenu, setOpenMenu] = useState("")
//   const [activeItem, setActiveItem] = useState("")

//   const handleToggle = (menu) => {
//     setOpenMenu(openMenu === menu ? "" : menu)
//   }

//   return (

// <div className="h-screen w-72 bg-[#0a0939] text-white flex flex-col p-4 space-y-2">
//         {/* 1. Staff Management */}
//         <div>
//           <div
//             onClick={() => handleToggle("staff")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "staff" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <Users size={20} />
//               <span>Staff Management</span>
//             </div>
//             <span>{openMenu === "staff" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "staff" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p className="text-gray-300 hover:text-white cursor-pointer">Staff List</p>
//               <p className="text-gray-300 hover:text-white cursor-pointer">Add Staff</p>
//             </div>
//           )}
//         </div>

//         {/* 2. Item Management */}
//         <div>
//           <div
//             onClick={() => handleToggle("items")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "items" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <Package size={20} />
//               <span>Item Management</span>
//             </div>
//             <span>{openMenu === "items" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "items" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>Add/Edit Products</p>
//               <p>Product Variants</p>
//               <p>Categories/Subcategories</p>
//               <p>Batch & Serial Tracking</p>
//               <p>HSN/SAC Code Management</p>
//             </div>
//           )}
//         </div>

//         {/* 3. Customer Management */}
//         <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
//           <UserSquare size={20} />
//           <span>Customer Management</span>
//         </div>

//         {/* 4. Supplier Management */}
//         <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
//           <Building2 size={20} />
//           <span>Supplier Management</span>
//         </div>

//         {/* 5. Warehouse Management */}
//         <div>
//           <div
//             onClick={() => handleToggle("warehouse")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "warehouse" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <Warehouse size={20} />
//               <span>Warehouse Management</span>
//             </div>
//             <span>{openMenu === "warehouse" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "warehouse" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>Multi-Warehouse Setup</p>
//               <p>Capacity Planning</p>
//               <p>Bin & Rack Management</p>
//             </div>
//           )}
//         </div>

//         {/* 6. Stock Management */}
//         <div>
//           <div
//             onClick={() => handleToggle("stock")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "stock" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <Boxes size={20} />
//               <span>Stock Management</span>
//             </div>
//             <span>{openMenu === "stock" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "stock" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>Stock In/Out</p>
//               <p>Opening Stock</p>
//               <p>Real-Time Updates</p>
//               <p>Batch Management</p>
//               <p>Stock Transfer</p>
//             </div>
//           )}
//         </div>

//         {/* 7. Purchase Management */}
//         <div>
//           <div
//             onClick={() => handleToggle("purchase")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "purchase" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <ClipboardList size={20} />
//               <span>Purchase Management</span>
//             </div>
//             <span>{openMenu === "purchase" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "purchase" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>Purchase Orders</p>
//               <p>Purchase Returns</p>
//               <p>Pending Orders</p>
//               <p>Cost Price Tracking</p>
//             </div>
//           )}
//         </div>

//         {/* 8. Sales & Order Management */}
//         <div>
//           <div
//             onClick={() => handleToggle("sales")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "sales" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <ShoppingCart size={20} />
//               <span>Sales & Order Management</span>
//             </div>
//             <span>{openMenu === "sales" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "sales" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>Sales Orders</p>
//               <p>Delivery Challans</p>
//               <p>Order Tracking</p>
//               <p>Sales Returns</p>
//             </div>
//           )}
//         </div>

//         {/* 9. Inventory Valuation & Costing */}
//         <div>
//           <div
//             onClick={() => handleToggle("valuation")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "valuation" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <Calculator size={20} />
//               <span>Inventory Valuation & Costing</span>
//             </div>
//             <span>{openMenu === "valuation" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "valuation" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>FIFO/LIFO/Weighted Average</p>
//               <p>Dead Stock Identification</p>
//             </div>
//           )}
//         </div>

//         {/* 10. Damage Tracking */}
//         <div>
//           <div
//             onClick={() => handleToggle("damage")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "damage" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <AlertTriangle size={20} />
//               <span>Damage Tracking</span>
//             </div>
//             <span>{openMenu === "damage" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "damage" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>Stock Write-Off</p>
//               <p>Attach Receipts/Bills</p>
//             </div>
//           )}
//         </div>

//         {/* 11. Invoices */}
//         <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
//           <Landmark size={20} />
//           <span>Invoices</span>
//         </div>

//         {/* 12. Finance */}
//         <div>
//           <div
//             onClick={() => handleToggle("finance")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "finance" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <Wallet size={20} />
//               <span>Finance</span>
//             </div>
//             <span>{openMenu === "finance" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "finance" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>Expense</p>
//               <p>Income</p>
//             </div>
//           )}
//         </div>

//         {/* 13. Reporting & Analytics */}
//         <div>
//           <div
//             onClick={() => handleToggle("reports")}
//             className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${openMenu === "reports" ? "bg-white/20" : "hover:bg-white/10"}`}
//           >
//             <div className="flex items-center gap-3">
//               <BarChart2 size={20} />
//               <span>Reporting & Analytics</span>
//             </div>
//             <span>{openMenu === "reports" ? "▲" : "▼"}</span>
//           </div>
//           {openMenu === "reports" && (
//             <div className="ml-8 mt-1 space-y-1">
//               <p>Stock Summary</p>
//               <p>Item-Wise Sales</p>
//               <p>Stock Aging</p>
//               <p>Valuation Report</p>
//             </div>
//           )}
//         </div>
//       </div>
//   )
// }

// export default Sidebar



"use client"
import { useState } from "react"
import "../app/globals.css"
import {
  LayoutDashboard,
  Users,
  Package,
  UserSquare,
  Building2,
  Warehouse,
  Boxes,
  ClipboardList,
  ShoppingCart,
  Calculator,
  AlertTriangle,
  Landmark,
  Wallet,
  BarChart2,
} from "lucide-react"

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("")
  const [activeItem, setActiveItem] = useState("")

  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu)
  }

  const handleClick = (item) => {
    setActiveItem(item)
    console.log("Clicked:", item) // replace with router.push("/path")
  }

  return (
    <div className="h-screen w-72 bg-[#0a0939] text-white flex flex-col p-4 space-y-2">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center mb-4 border-b border-white/20">
        <span className="text-2xl font-bold">IMS Logo</span>
      </div>

      {/* Dashboard */}
      <div
        onClick={() => handleClick("Dashboard")}
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
          activeItem === "Dashboard"
            ? "bg-white/20 font-semibold"
            : "hover:bg-white/10"
        }`}
      >
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </div>

      {/* 1. Staff Management */}
      <div>
        <div
          onClick={() => handleToggle("staff")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "staff" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Users size={20} />
            <span>Staff Management</span>
          </div>
          <span>{openMenu === "staff" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "staff" && (
          <div className="ml-8 mt-1 space-y-1">
            {["Staff List", "Add Staff"].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 2. Item Management */}
      <div>
        <div
          onClick={() => handleToggle("items")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "items" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Package size={20} />
            <span>Item Management</span>
          </div>
          <span>{openMenu === "items" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "items" && (
          <div className="ml-8 mt-1 space-y-1">
            {[
              "Add/Edit Products",
              "Product Variants",
              "Categories/Subcategories",
              "Batch & Serial Tracking",
              "HSN/SAC Code Management",
            ].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 3. Customer Management */}
      <div
        onClick={() => handleClick("Customer Management")}
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
          activeItem === "Customer Management"
            ? "bg-white/20 font-semibold"
            : "hover:bg-white/10"
        }`}
      >
        <UserSquare size={20} />
        <span>Customer Management</span>
      </div>

      {/* 4. Supplier Management */}
      <div
        onClick={() => handleClick("Supplier Management")}
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
          activeItem === "Supplier Management"
            ? "bg-white/20 font-semibold"
            : "hover:bg-white/10"
        }`}
      >
        <Building2 size={20} />
        <span>Supplier Management</span>
      </div>

      {/* 5. Warehouse Management */}
      <div>
        <div
          onClick={() => handleToggle("warehouse")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "warehouse" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Warehouse size={20} />
            <span>Warehouse Management</span>
          </div>
          <span>{openMenu === "warehouse" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "warehouse" && (
          <div className="ml-8 mt-1 space-y-1">
            {[
              "Multi-Warehouse Setup",
              "Capacity Planning",
              "Bin & Rack Management",
            ].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 6. Stock Management */}
      <div>
        <div
          onClick={() => handleToggle("stock")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "stock" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Boxes size={20} />
            <span>Stock Management</span>
          </div>
          <span>{openMenu === "stock" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "stock" && (
          <div className="ml-8 mt-1 space-y-1">
            {[
              "Stock In/Out",
              "Opening Stock",
              "Real-Time Updates",
              "Batch Management",
              "Stock Transfer",
            ].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 7. Purchase Management */}
      <div>
        <div
          onClick={() => handleToggle("purchase")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "purchase" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <ClipboardList size={20} />
            <span>Purchase Management</span>
          </div>
          <span>{openMenu === "purchase" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "purchase" && (
          <div className="ml-8 mt-1 space-y-1">
            {[
              "Purchase Orders",
              "Purchase Returns",
              "Pending Orders",
              "Cost Price Tracking",
            ].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 8. Sales & Order Management */}
      <div>
        <div
          onClick={() => handleToggle("sales")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "sales" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <ShoppingCart size={20} />
            <span>Sales & Order Management</span>
          </div>
          <span>{openMenu === "sales" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "sales" && (
          <div className="ml-8 mt-1 space-y-1">
            {[
              "Sales Orders",
              "Delivery Challans",
              "Order Tracking",
              "Sales Returns",
            ].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 9. Inventory Valuation & Costing */}
      <div>
        <div
          onClick={() => handleToggle("valuation")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "valuation" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Calculator size={20} />
            <span>Inventory Valuation & Costing</span>
          </div>
          <span>{openMenu === "valuation" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "valuation" && (
          <div className="ml-8 mt-1 space-y-1">
            {["FIFO/LIFO/Weighted Average", "Dead Stock Identification"].map(
              (sub) => (
                <p
                  key={sub}
                  onClick={() => handleClick(sub)}
                  className={`cursor-pointer ${
                    activeItem === sub
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {sub}
                </p>
              )
            )}
          </div>
        )}
      </div>

      {/* 10. Damage Tracking */}
      <div>
        <div
          onClick={() => handleToggle("damage")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "damage" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle size={20} />
            <span>Damage Tracking</span>
          </div>
          <span>{openMenu === "damage" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "damage" && (
          <div className="ml-8 mt-1 space-y-1">
            {["Stock Write-Off", "Attach Receipts/Bills"].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 11. Invoices */}
      <div
        onClick={() => handleClick("Invoices")}
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
          activeItem === "Invoices"
            ? "bg-white/20 font-semibold"
            : "hover:bg-white/10"
        }`}
      >
        <Landmark size={20} />
        <span>Invoices</span>
      </div>

      {/* 12. Finance */}
      <div>
        <div
          onClick={() => handleToggle("finance")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "finance" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Wallet size={20} />
            <span>Finance</span>
          </div>
          <span>{openMenu === "finance" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "finance" && (
          <div className="ml-8 mt-1 space-y-1">
            {["Expense", "Income"].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 13. Reporting & Analytics */}
      <div>
        <div
          onClick={() => handleToggle("reports")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "reports" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <BarChart2 size={20} />
            <span>Reporting & Analytics</span>
          </div>
          <span>{openMenu === "reports" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "reports" && (
          <div className="ml-8 mt-1 space-y-1">
            {[
              "Stock Summary",
              "Item-Wise Sales",
              "Stock Aging",
              "Valuation Report",
            ].map((sub) => (
              <p
                key={sub}
                onClick={() => handleClick(sub)}
                className={`cursor-pointer ${
                  activeItem === sub
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
