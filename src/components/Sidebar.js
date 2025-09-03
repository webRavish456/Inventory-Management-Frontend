



// "use client";
// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
// } from "@mui/material";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import PersonIcon from "@mui/icons-material/Person";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import SecurityIcon from "@mui/icons-material/Security";
// import WarehouseIcon from "@mui/icons-material/Warehouse";
// import StoreIcon from "@mui/icons-material/Store";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import SettingsIcon from "@mui/icons-material/Settings";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LockIcon from "@mui/icons-material/Lock";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";



// export default function Sidebar() {
//   const [open, setOpen] = useState({});

//   const handleToggle = (key) => {
//     setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const renderCollapse = (key, items) => (
//     <Collapse in={open[key]} timeout="auto" unmountOnExit>
//       <List component="div" disablePadding>
//         {items.map((item, i) => (
//           <ListItemButton key={i} sx={{ pl: 4 }}>
//             <ListItemText primary={item} />
//           </ListItemButton>
//         ))}
//       </List>
//     </Collapse>
//   );

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 260,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: 260,
//           boxSizing: "border-box",
//           backgroundColor: "#050505ff",
//           color: "white",
//         },
//       }}
//     >








// <div style={{ display: "flex",
//       justifyContent: "center", // centers horizontally
//       alignItems: "center",     // centers vertically (if given height)
//       width: "100%",
//       padding: "5px 0", }}>

//     <img 
//       src="Venturing digitally logo.jpeg" 
//       alt="Company Logo" 
//       style={{ width: "230px", height: "auto" ,}} 
//     />
//   </div>



//       <List>
//         {/* Module 1. Dashboard */}
//         <ListItemButton>
//           <ListItemIcon>
//             <DashboardIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItemButton>

//         {/* Module 2. Staff Management */}
//         <ListItemButton onClick={() => handleToggle("staff")}>
//           <ListItemIcon>
//             <PeopleIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Staff Management" />
//           {open.staff ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("staff", [
//           "Staff List",
//           "Manage Staff",
//           "Staff Documents",
//           "Bank Details",
//         ])}

//         {/* Module 3. Item Management */}
//         <ListItemButton onClick={() => handleToggle("items")}>
//           <ListItemIcon>
//             <InventoryIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Item Management" />
//           {open.items ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("items", [
//           "Manage Products",
//           "Product Variants",
//           "Categories/Subcategories",
//           "Batch & Serial Tracking",
//           "HSN/SAC Code Management",
//         ])}

//         {/* Module 4. Customer Management */}
//         <ListItemButton onClick={() => handleToggle("customer")}>
//           <ListItemIcon>
//             <PersonIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Customer Management" />
//           {open.customer ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("customer", ["Add/View Customers"])}

//         {/* Module 5. Supplier Management */}
//         <ListItemButton onClick={() => handleToggle("supplier")}>
//           <ListItemIcon>
//             <LocalShippingIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Supplier Management" />
//           {open.supplier ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("supplier", ["Manage Suppliers"])}

//         {/* Module 6. Roles & Permissions */}
//         <ListItemButton onClick={() => handleToggle("roles")}>
//           <ListItemIcon>
//             <SecurityIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Roles & Permissions" />
//           {open.roles ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("roles", [
//           "Role Management",
//           "Permission Assignment",
//           "User Role Mapping",
//           "Access Logs",
//         ])}

//         {/* Module 7. Warehouse Management */}
//         <ListItemButton onClick={() => handleToggle("warehouse")}>
//           <ListItemIcon>
//             <WarehouseIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Warehouse Management" />
//           {open.warehouse ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("warehouse", [
//           "Multi-Warehouse Setup",
//           "Capacity Planning",
//           "Bin & Rack Management",
//         ])}

//         {/* Module 8. Stock Management */}
//         <ListItemButton onClick={() => handleToggle("stock")}>
//           <ListItemIcon>
//             <StoreIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Stock Management" />
//           {open.stock ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("stock", [
//           "Stock In/Out",
//           "Opening Stock",
//           "Real-Time Updates",
//           "Batch Management",
//           "Stock Transfer",
//         ])}

//         {/* Module 9. Purchase Management */}
//         <ListItemButton onClick={() => handleToggle("purchase")}>
//           <ListItemIcon>
//             <ShoppingCartIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Purchase Management" />
//           {open.purchase ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("purchase", [
//           "Purchase Orders",
//           "Purchase Returns",
//           "Pending Orders",
//           "Cost Price Tracking",
//         ])}

//         {/* Module 10. Sales & Order Management */}
//         <ListItemButton onClick={() => handleToggle("sales")}>
//           <ListItemIcon>
//             <ReceiptIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Sales & Order Management" />
//           {open.sales ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("sales", [
//           "Sales Orders",
//           "Delivery Challans",
//           "Order Tracking",
//           "Sales Returns",
//         ])}

//         {/* Module 11. Inventory Valuation & Costing */}
//         <ListItemButton onClick={() => handleToggle("valuation")}>
//           <ListItemIcon>
//             <MonetizationOnIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Inventory Valuation & Costing" />
//           {open.valuation ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("valuation", [
//           "FIFO / LIFO / Weighted Avg",
//           "Dead Stock Identification",
//         ])}

//         {/* Module 12. Damage Tracking */}
//         <ListItemButton onClick={() => handleToggle("damage")}>
//           <ListItemIcon>
//             <InventoryIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Damage Tracking" />
//           {open.damage ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("damage", ["Stock Write-Off", "Attach Receipts/Bills"])}

//         {/* Module 13. Invoices */}
//         <ListItemButton onClick={() => handleToggle("invoice")}>
//           <ListItemIcon>
//             <ReceiptIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Invoices" />
//           {open.invoice ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("invoice", ["Invoices"])}

//         {/* Module 14. Finance */}
//         <ListItemButton onClick={() => handleToggle("finance")}>
//           <ListItemIcon>
//             <MonetizationOnIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Finance" />
//           {open.finance ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("finance", ["Expense", "Income"])}

//         {/* Module 15. Reporting & Analytics */}
//         <ListItemButton onClick={() => handleToggle("reporting")}>
//           <ListItemIcon>
//             <AssessmentIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Reporting & Analytics" />
//           {open.reporting ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("reporting", [
//           "Stock Summary",
//           "Item-Wise Sales",
//           "Stock Aging",
//           "Valuation Report",
//         ])}

//         {/* Module 16. Notifications */}
//         <ListItemButton onClick={() => handleToggle("notifications")}>
//           <ListItemIcon>
//             <NotificationsIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Notifications" />
//           {open.notifications ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("notifications", [
//           "Stock Alerts",
//           "Order Alerts",
//           "Payment Alerts",
//           "System Alerts",
//         ])}

//         {/* Module 17. Settings */}
//         <ListItemButton onClick={() => handleToggle("settings")}>
//           <ListItemIcon>
//             <SettingsIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Settings" />
//           {open.settings ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("settings", [
//           "User Settings",
//           "Warehouse Settings",
//           "Notification Settings",
//           "General Settings",
//         ])}

//         {/* Module 18. Profile */}
//         <ListItemButton onClick={() => handleToggle("profile")}>
//           <ListItemIcon>
//             <AccountCircleIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Profile" />
//           {open.profile ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("profile", [
//           "View Profile",
//           "Edit Profile",
//           "Preferences",
//         ])}

//         {/* Module 19. Authentication */}
//         <ListItemButton onClick={() => handleToggle("auth")}>
//           <ListItemIcon>
//             <LockIcon sx={{ color: "white" }} />
//           </ListItemIcon>
//           <ListItemText primary="Authentication" />
//           {open.auth ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         {renderCollapse("auth", ["Login", "Reset Password", "Logout"])}
//       </List>
//     </Drawer>
//   );
// }     




   

'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Menuitems from "./MenuItems";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(null);


  const [activeSubItem, setActiveSubItem] = useState(null);

  useEffect(() => {
    const firstPath = "/" + pathname.split("/")[1]; 

    let activeModuleIndex = null;
    let activeSubModule = null;

    Menuitems.forEach((item, index) => {
      if (item.href.startsWith(firstPath)) {
        activeModuleIndex = index;
        if (item.item) {
          const matchedSub = item.item.find(sub => sub.href === pathname);
          if (matchedSub) {
            activeSubModule = matchedSub.href;
          }
        }
      }
    });

    setActiveIndex(activeModuleIndex);
    setActiveSubItem(activeSubModule);
  }, [pathname]);

  const toggleMenu = (index, item) => {
    if (item.item) {
      setActiveIndex(activeIndex === index ? null : index);
      if (activeIndex !== index) {
        // Navigate to the main href first, then expand submenu
        router.push(item.href);
        const firstSub = item.item[0].href;
        setActiveSubItem(firstSub);
      }
    } else {
      setActiveIndex(index);
      setActiveSubItem(null);
    }
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <div className="logo">
          <img
            src="/Venturing digitally logo.jpeg" 
            alt="Company Logo" 
            width={200} 
            height={40}
            style={{ width: '200px', height: 'auto', display:'block',margin:'0 auto' }}
          />
        </div>
      </div>


      <nav className="menu-container">
        {Menuitems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="menu-item">
              {item.item ? (
                <div 
                  className={`menu-link ${isActive ? 'active' : ''}`}
                  onClick={() => toggleMenu(index, item)}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {item.icon && (
                      <Image 
                        src={item.icon} 
                        alt={item.label} 
                        width={20} 
                        height={20}
                        className="menu-icon"
                      />
                    )}
                    <span className="menu-label">{item.label}</span>
                  </div>
                  <ChevronDown className={`menu-arrow ${isActive ? 'active' : ''}`} />
                </div>
              ) : (
                <Link href={item.href} className={`menu-link ${isActive ? 'active' : ''}`}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {item.icon && (
                      <Image 
                        src={item.icon} 
                        alt={item.label} 
                        width={20} 
                        height={20}
                        className="menu-icon"
                      />
                    )}
                    <span className="menu-label">{item.label}</span>
                  </div>
                </Link>
              )}

    
              {item.item && isActive && (
                <div className="submenu">
                  {item.item.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={`submenu-link ${activeSubItem === subItem.href ? 'active' : ''}`}
                      onClick={() => setActiveSubItem(subItem.href)}
                    >
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;