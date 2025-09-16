

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



    "use client"
import { useState } from "react"
import "../globals.css"
import {
  LayoutDashboard,
  Building2,
  Network,
  User,
  Users,
  UserSquare,
  CalendarDays,
  FlaskConical,
  Landmark
} from "lucide-react"



const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("doctor") // Default open menu
  const [activeItem, setActiveItem] = useState("All Doctor")

  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu)
  }

  return (
    <div className="h-screen w-64 bg-[#0a0939] text-white flex flex-col p-4 space-y-2">
      {/* Dashboard */}
      <div
        className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
        onClick={() => setActiveItem("Dashboard")}
      >
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </div>

      {/* Branch */}
      <div
        className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
        onClick={() => setActiveItem("Branch")}
      >
        <Building2 size={20} />
        <span>Branch</span>
      </div>

      {/* Department */}
      <div
        className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
        onClick={() => setActiveItem("Department")}
      >
        <Network size={20} />
        <span>Product Management</span>
      </div>

      {/* Doctor */}
      <div>
        <div
          onClick={() => handleToggle("doctor")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "doctor" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <User size={20} />
            <span>Inventory Management</span>
          </div>
          <span>{openMenu === "doctor" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "doctor" && (
          <div className="ml-8 mt-1 space-y-1">
            <p
              onClick={() => setActiveItem("All Doctor")}
              className={`cursor-pointer ${
                activeItem === "All Doctor"
                  ? "font-semibold text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Stock Tracking 
            </p>
            <p
              onClick={() => setActiveItem("Shift Management")}
              className={`cursor-pointer ${
                activeItem === "Shift Management"
                  ? "font-semibold text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Warehouse Transfer
            </p>
          </div>
        )}
      </div>

      {/* Staff */}
      <div
        className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
        onClick={() => setActiveItem("Staff")}
      >
        <Users size={20} />
        <span>Supplier Management</span>
      </div>

      {/* Patients */}
      <div>
        <div
          onClick={() => handleToggle("patients")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "patients" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <UserSquare size={20} />
            <span>Purchase Order Management</span>
          </div>
          <span>{openMenu === "patients" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "patients" && (
          <div className="ml-8 mt-1 space-y-1">
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Create Purchase Order
            </p>
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Track Shipments
            </p>
          </div>
        )}
      </div>

      {/* Appointment */}
      <div
        className={`flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer`}
        onClick={() => setActiveItem("Appointment")}
      >
        <CalendarDays size={20} />
        <span>Sales Order Management</span>
      </div>

      {/* Laboratory */}
      <div>
        <div
          onClick={() => handleToggle("lab")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "lab" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <FlaskConical size={20} />
            <span>Customer Management</span>
          </div>
          <span>{openMenu === "lab" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "lab" && (
          <div className="ml-8 mt-1 space-y-1">
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Customer List
            </p>
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Customer Orders
            </p>
          </div>
        )}
      </div>

      {/* Billing & Invoices */}
      <div>
        <div
          onClick={() => handleToggle("Billing & Invoices")}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            openMenu === "Billing & Invoices" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <Landmark size={20} />
            <span>Billing & Invoicing</span>
          </div>
          <span>{openMenu === "Billing & Invoices" ? "▲" : "▼"}</span>
        </div>
        {openMenu === "Billing & Invoices" && (
          <div className="ml-8 mt-1 space-y-1">
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Generate Invoices
            </p>
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Process Payments
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar



