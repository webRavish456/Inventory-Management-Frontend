


'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Menuitems from "./MenuItem";

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
          <Image 
            src="/logonew.png" 
            alt="Company Logo" 
            width={180} 
            height={40}
            style={{ width: '200px', height: '70px' }}
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
                      <span className="menu-icon" style={{ marginRight: "8px" }}>
                        {item.icon}
                      </span>
                    )}
                    <span className="menu-label">{item.label}</span>
                  </div>
                  <ChevronDown className={`menu-arrow ${isActive ? 'active' : ''}`} />
                </div>
              ) : (
                <Link href={item.href} className={`menu-link ${isActive ? 'active' : ''}`}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    
                    {item.icon && (
                      <span className="menu-icon" style={{ marginRight: "8px" }}>
                        {item.icon}
                      </span>
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

/*'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Menuitems from "./MenuItem";

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
          <Image 
            src="/logo.jpeg" 
            alt="Company Logo" 
            width={180} 
            height={40}
            style={{ width: '260px', height: '70px' }}
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



"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import menuItems from "./MenuItem";

const drawerWidth = 260;

export default function Sidebar({ setActiveModule }) {
  const [active, setActive] = useState(null);

  const handleToggle = (key) => {
    setActive((prev) => (prev === key ? null : key));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "rgba(4, 4, 4, 0.4)",
          color: "white",
          position:"fixed"
        },
      }}
    >
      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(148, 142, 142, 0.2)",
          backgroundColor:"rgba(3, 3, 5, 0.4)",
        
        }}
      >
        <img
          src="/logo.jpeg"
          alt="Company Logo"
          style={{ width: "250px", height: "70px",backgroundColor:"rgba(2, 2, 3, 0.4)" }}
        />
        
        </Box>
      <List>
        {menuItems.map((menu, index) => (
          <React.Fragment key={index}>
            
            <ListItemButton
              onClick={() =>
                menu.subItems ? handleToggle(index) : setActiveModule(menu.title)
              }
            >
              <ListItemIcon sx={{ color: "white" }}>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
              {menu.subItems &&
                (active === index ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            
            {menu.subItems && (
              <Collapse in={active === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menu.subItems.map((sub, i) => (
                    <ListItemButton
                      key={i}
                      sx={{ pl: 4 }}
                      onClick={() => setActiveModule(sub)}
                    >
                      <ListItemText primary={sub} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      
    </Drawer>
  );
}

"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import menuItems from "./MenuItem";

export default function Sidebar() {
  const [active, setActive] = useState(null);

  const handleToggle = (key) => {
    setActive((prev) => (prev === key ? null : key));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          boxSizing: "border-box",
          backgroundColor: "#1e293b",
          color: "white",
        },
      }}
    >
      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <img
          src="/logo.jpeg" 
          alt="Company Logo"
          style={{ width: "100%", height: "100%" }}
        />
        
      </Box>

      
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.key}>
            <ListItemButton
              onClick={() => (item.sub.length ? handleToggle(item.key) : null)}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              {item.sub.length > 0 &&
                (active === item.key ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {item.sub.length > 0 && (
              <Collapse in={active === item.key} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.sub.map((subItem, idx) => (
                    <ListItemButton key={idx} sx={{ pl: 4 }}>
                      <ListItemText primary={subItem} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { blue } from "@mui/material/colors";

export default function Sidebar() {
  
  const [active, setActive] = useState(null);

  const handleToggle = (key) => {
    setActive((prev) => (prev === key ? null : key));
  };

  const renderCollapse = (key, items) => (
    <Collapse in={active === key} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item, i) => (
          <ListItemButton key={i} sx={{ pl: 4 }}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          boxSizing: "border-box",
          backgroundColor: "#1e293b",
          color: "white",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
          borderBottom: "1px solid rgba(34, 35, 105, 0.2)",
        }}
      >
        <img
          src="/logo.jpeg"   
          alt="Company Logo"
          style={{ width: "100%", height: "100%" }}
        />
        
      </Box>
      <List>
       
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

       
        <ListItemButton onClick={() => handleToggle("staff")}>
          <ListItemIcon>
            <PeopleIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Staff Management" />
          {active === "staff" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("staff", [
          "Staff List",
          "Manage Staff",
          "Staff Documents",
          "Bank Details",
        ])}

        
        <ListItemButton onClick={() => handleToggle("items")}>
          <ListItemIcon>
            <InventoryIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Item Management" />
          {active === "items" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("items", [
          "Manage Products",
          "Product Variants",
          "Categories",
          "Batch & Serial Tracking",
          "HSN/SAC Code Management",
        ])}

        <ListItemButton onClick={() => handleToggle("customer")}>
          <ListItemIcon>
            <PersonIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Customer Management" />
          {active === "customer" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("customer", ["Manage Customer"])}

        
        <ListItemButton onClick={() => handleToggle("supplier")}>
          <ListItemIcon>
            <LocalShippingIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Supplier Management" />
          {active === "supplier" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("supplier", ["Manage Suppliers"])}

        
        <ListItemButton onClick={() => handleToggle("roles")}>
          <ListItemIcon>
            <SecurityIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Roles & Permissions" />
          {active === "roles" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("roles", [
          "Role Management",
          "Permission Assignment",
          "User Role Mapping",
          "Access Logs",
        ])}

        
        <ListItemButton onClick={() => handleToggle("warehouse")}>
          <ListItemIcon>
            <WarehouseIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Warehouse Management" />
          {active === "warehouse" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("warehouse", [
          "Multi-Warehouse Setup",
          "Capacity Planning",
          "Bin & Rack Management",
        ])}

        
        <ListItemButton onClick={() => handleToggle("stock")}>
          <ListItemIcon>
            <StoreIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Stock Management" />
          {active === "stock" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("stock", [
          "Stock In/Out",
          "Opening Stock",
          "Real-Time Updates",
          "Batch Management",
          "Stock Transfer",
        ])}

        
        <ListItemButton onClick={() => handleToggle("purchase")}>
          <ListItemIcon>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Purchase Management" />
          {active === "purchase" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("purchase", [
          "Purchase Orders",
          "Purchase Returns",
          "Pending Orders",
          "Cost Price Tracking",
        ])}

        
        <ListItemButton onClick={() => handleToggle("sales")}>
          <ListItemIcon>
            <ReceiptIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Sales & Order Management" />
          {active === "sales" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("sales", [
          "Sales Orders",
          "Delivery Challans",
          "Order Tracking",
          "Sales Returns",
        ])}

        
        <ListItemButton onClick={() => handleToggle("valuation")}>
          <ListItemIcon>
            <MonetizationOnIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Inventory Valuation & Costing" />
          {active === "valuation" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("valuation", [
          "FIFO / LIFO / Weighted Avg",
          "Dead Stock Identification",
        ])}

        
        <ListItemButton onClick={() => handleToggle("damage")}>
          <ListItemIcon>
            <InventoryIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Damage Tracking" />
          {active === "damage" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("damage", ["Stock Write-Off", "Attach Receipts/Bills"])}

        
        <ListItemButton onClick={() => handleToggle("invoice")}>
          <ListItemIcon>
            <ReceiptIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
          {active === "invoice" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("invoice", ["Invoices"])}

        
        <ListItemButton onClick={() => handleToggle("finance")}>
          <ListItemIcon>
            <MonetizationOnIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Finance" />
          {active === "finance" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("finance", ["Expense", "Income"])}

        
        <ListItemButton onClick={() => handleToggle("reporting")}>
          <ListItemIcon>
            <AssessmentIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Reporting & Analytics" />
          {active === "reporting" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("reporting", [
          "Stock Summary",
          "Item-Wise Sales",
          "Stock Aging",
          "Valuation Report",
        ])}

        
        <ListItemButton onClick={() => handleToggle("notifications")}>
          <ListItemIcon>
            <NotificationsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
          {active === "notifications" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("notifications", [
          "Stock Alerts",
          "Order Alerts",
          "Payment Alerts",
          "System Alerts",
        ])}

        
        <ListItemButton onClick={() => handleToggle("settings")}>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {active === "settings" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("settings", [
          "User Settings",
          "Warehouse Settings",
          "Notification Settings",
          "General Settings",
        ])}

        
        <ListItemButton onClick={() => handleToggle("profile")}>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          {active === "profile" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("profile", [
          "View Profile",
          "Edit Profile",
          "Preferences",
        ])}

        
        <ListItemButton onClick={() => handleToggle("auth")}>
          <ListItemIcon>
            <LockIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Authentication" />
          {active === "auth" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {renderCollapse("auth", ["Login", "Reset Password", "Logout"])}
      </List>
    </Drawer>
  );
}


"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menuitems from "./MenuItem";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 shadow-lg overflow-y-auto">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        IMS Menu
      </div>

      <nav className="mt-4">
        {Menuitems.map((menu, index) => (
          <div key={index} className="px-2">
            
            <div
              className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 cursor-pointer ${
                openMenu === index ? "bg-gray-800" : ""
              }`}
              onClick={() => (menu.item ? toggleSubMenu(index) : null)}
            >
              <Link href={menu.href} className="flex items-center gap-3 w-full">
                {menu.icon && (
                  <Image src={menu.icon} alt={menu.label} width={20} height={20} />
                )}
                <span>{menu.label}</span>
              </Link>
              {menu.item && (
                <span className="text-xs">{openMenu === index ? "▲" : "▼"}</span>
              )}
            </div>

            
            {menu.item && openMenu === index && (
              <div className="ml-8 mt-1">
                {menu.item.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    href={sub.href}
                    className="block p-2 text-sm rounded hover:bg-gray-700"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Menuitems from "./MenuItem"; 

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
          const matchedSub = item.item.find((sub) => sub.href === pathname);
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
      setActiveIndex(index);
      if (item.item.length > 0) {
        const firstSub = item.item[0].href;
        setActiveSubItem(firstSub);
        router.push(firstSub);
      }
    } else {
      setActiveIndex(index);
      setActiveSubItem(null);
      router.push(item.href);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <Image
            src="/logo.jpeg"
            alt="Company Logo"
            width={180}
            height={40}
            style={{ width: "120px", height: "auto" }}
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
                  className={`menu-link ${isActive ? "active" : ""}`}
                  onClick={() => toggleMenu(index, item)}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
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
                  <ChevronDown
                    className={`menu-arrow ${isActive ? "active" : ""}`}
                  />
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`menu-link ${isActive ? "active" : ""}`}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
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
                      className={`submenu-link ${
                        activeSubItem === subItem.href ? "active" : ""
                      }`}
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

export default Sidebar;*/
