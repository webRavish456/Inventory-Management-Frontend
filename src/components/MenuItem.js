
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";


const Menuitems = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <PeopleIcon />,
    label: "Staff Management",
    href: "/staff/list",
   
  },
  {
    icon: <InventoryIcon />,
    label: "Item Management",
    href: "/item/products",
    item: [
      { label: "Add/Edit Products", href: "/item/products" },
      { label: "Product Variants", href: "/item/product-variants" },
      { label: "Categories/Subcategories", href: "/item/categories" },
      { label: "Batch & Serial Tracking", href: "/item/batch-serial" },
      { label: "HSN/SAC Code Management", href: "/item/hsn-sac" },
    ],
  },
  {
    icon: <PersonIcon />,
    label: "Customer Management",
    href: "/customer/list",
    
  },
  {
    icon: <LocalShippingIcon />,
    label: "Supplier Management",
    href: "/supplier/list",
    item: [{ label: "Add/View Suppliers", href: "/supplier/list" }],
  },
  {
    icon: <WarehouseIcon />,
    label: "Warehouse Management",
    href: "/warehouse/setup",
    item: [
      { label: "Multi-Warehouse Setup", href: "/warehouse/setup" },
      { label: "Capacity Planning", href: "/warehouse/capacity" },
      { label: "Bin & Rack Management", href: "/warehouse/bin-rack" },
    ],
  },
  {
    icon: <StoreIcon />,
    label: "Stock Management",
    href: "/stock/in-out",
    item: [
      { label: "Stock In/Out", href: "/stock/in-out" },
      { label: "Opening Stock", href: "/stock/opening" },
      { label: "Real-Time Updates", href: "/stock/updates" },
      { label: "Batch Management", href: "/stock/batch" },
      { label: "Stock Transfer", href: "/stock/transfer" },
    ],
  },
  {
    icon: <ShoppingCartIcon />,
    label: "Purchase Management",
    href: "/purchase/orders",
    item: [
      { label: "Purchase Orders", href: "/purchase/orders" },
      { label: "Purchase Returns", href: "/purchase/returns" },
      { label: "Pending Orders", href: "/purchase/pending" },
      { label: "Cost Price Tracking", href: "/purchase/cost-price" },
    ],
  },
  {
    icon: <SellIcon />,
    label: "Sales & Order Management",
    href: "/sales/orders",
    item: [
      { label: "Sales Orders", href: "/sales/orders" },
      { label: "Delivery Challans", href: "/sales/challans" },
      { label: "Order Tracking", href: "/sales/tracking" },
      { label: "Sales Returns", href: "/sales/returns" },
    ],
  },
  {
    icon: <AssessmentIcon />,
    label: "Inventory Valuation & Costing",
    href: "/valuation/fifo",
    item: [
      { label: "FIFO/LIFO/Weighted Average", href: "/valuation/fifo" },
      { label: "Dead Stock Identification", href: "/valuation/dead-stock" },
    ],
  },
  {
    icon: <ReportProblemIcon />,
    label: "Damage Tracking",
    href: "/damage/writeoff",
    
  },
  {
    icon: <ReceiptIcon />,
    label: "Invoices",
    href: "/invoice/list",
    
  },
  {
    icon: <MonetizationOnIcon />,
    label: "Finance",
    href: "/finance/expense",
    item: [
      { label: "Expense", href: "/finance/expense" },
      { label: "Income", href: "/finance/income" },
    ],
  },
  {
    icon: <BarChartIcon />,
    label: "Reporting & Analytics",
    href: "/reports/stock-summary",
    item: [
      { label: "Stock Summary", href: "/reports/stock-summary" },
      { label: "Item-Wise Sales", href: "/reports/item-sales" },
      { label: "Stock Aging", href: "/reports/stock-aging" },
      { label: "Valuation Report", href: "/reports/valuation" },
    ],
  },
  {
    icon: <NotificationsIcon />,
    label: "Notifications",
    href: "/notifications/stock-alerts",
    item: [
      { label: "Stock Alerts", href: "/notifications/stock-alerts" },
      { label: "Order Alerts", href: "/notifications/order-alerts" },
      { label: "Payment Alerts", href: "/notifications/payment-alerts" },
      { label: "System Alerts", href: "/notifications/system-alerts" },
    ],
  },
  {
    icon: <SettingsIcon />,
    label: "Settings",
    href: "/settings/user",
    item: [
      { label: "User Settings", href: "/settings/user" },
      { label: "Warehouse Settings", href: "/settings/warehouse" },
      { label: "Notification Settings", href: "/settings/notifications" },
      { label: "General Settings", href: "/settings/general" },
    ],
  },
  
];

export default Menuitems;






/*


 item: [
      { label: "Staff List", href: "/staff/list" },
      
      { label: "Staff Documents", href: "/staff/documents" },
      { label: "Bank Details", href: "/staff/bank-details" },
    ],



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

const MenuItems = [
  { title: "Dashboard", icon: <DashboardIcon /> },

  {
    title: "Staff Management",
    icon: <PeopleIcon />,
    subItems: ["Staff List", "Manage Staff", "Staff Documents", "Bank Details"],
  },
  {
    title: "Item Management",
    icon: <InventoryIcon />,
    subItems: [
      "Manage Products",
      "Product Variants",
      "Categories",
      "Batch & Serial Tracking",
      "HSN/SAC Code Management",
    ],
  },
  {
    title: "Customer Management",
    icon: <PersonIcon />,
    subItems: ["Manage Customer"],
  },
  {
    title: "Supplier Management",
    icon: <LocalShippingIcon />,
    subItems: ["Manage Suppliers"],
  },
  {
    title: "Roles & Permissions",
    icon: <SecurityIcon />,
    subItems: [
      "Role Management",
      "Permission Assignment",
      "User Role Mapping",
      "Access Logs",
    ],
  },
  {
    title: "Warehouse Management",
    icon: <WarehouseIcon />,
    subItems: [
      "Multi-Warehouse Setup",
      "Capacity Planning",
      "Bin & Rack Management",
    ],
  },
  {
    title: "Stock Management",
    icon: <StoreIcon />,
    subItems: [
      "Stock In/Out",
      "Opening Stock",
      "Real-Time Updates",
      "Batch Management",
      "Stock Transfer",
    ],
  },
  {
    title: "Purchase Management",
    icon: <ShoppingCartIcon />,
    subItems: [
      "Purchase Orders",
      "Purchase Returns",
      "Pending Orders",
      "Cost Price Tracking",
    ],
  },
  {
    title: "Sales & Order Management",
    icon: <ReceiptIcon />,
    subItems: ["Sales Orders", "Delivery Challans", "Order Tracking", "Sales Returns"],
  },
  {
    title: "Inventory Valuation & Costing",
    icon: <MonetizationOnIcon />,
    subItems: ["FIFO / LIFO / Weighted Avg", "Dead Stock Identification"],
  },
  {
    title: "Damage Tracking",
    icon: <InventoryIcon />,
    subItems: ["Stock Write-Off", "Attach Receipts/Bills"],
  },
  {
    title: "Invoices",
    icon: <ReceiptIcon />,
    subItems: ["Invoices"],
  },
  {
    title: "Finance",
    icon: <MonetizationOnIcon />,
    subItems: ["Expense", "Income"],
  },
  {
    title: "Reporting & Analytics",
    icon: <AssessmentIcon />,
    subItems: ["Stock Summary", "Item-Wise Sales", "Stock Aging", "Valuation Report"],
  },
  {
    title: "Notifications",
    icon: <NotificationsIcon />,
    subItems: ["Stock Alerts", "Order Alerts", "Payment Alerts", "System Alerts"],
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    subItems: ["User Settings", "Warehouse Settings", "Notification Settings", "General Settings"],
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    subItems: ["View Profile", "Edit Profile", "Preferences"],
  },
  {
    title: "Authentication",
    icon: <LockIcon />,
    subItems: ["Login", "Reset Password", "Logout"],
  },
];

export default MenuItems;
"use client"
const Menuitems = [
  {
    icon: "/icons/dashboard.png",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: "/icons/users.png",
    label: "Users",
    href: "/users",
  },
  {
    icon: "/icons/customer.png",
    label: "Customer & Vendor Management",
    href: "/customer/all-customer",
    item: [
      { label: "All Customer", href: "/customer/all-customer" },
      { label: "All Vendor", href: "/customer/all-vendor" },
      { label: "Outstanding Balance", href: "/customer/outstanding-balance" },
    ],
  },
  {
    icon: "/icons/invoice.png",
    label: "Invoice & Billing",
    href: "/invoice-bill/all-invoice",
    item: [
      { label: "All Invoice", href: "/invoice-bill/all-invoice" },
      { label: "Recurring Invoices", href: "/invoice-bill/recurring-invoices" },
      { label: "Credit Note & Debit Note", href: "/invoice-bill/credit-note-debit-note" },
      { label: "Delivery Challan", href: "/invoice-bill/delivery-challan" },
      { label: "POS Billing", href: "/invoice-bill/pos-billing" },
    ],
  },
  {
    icon: "/icons/inventory.png",
    label: "Inventory Management",
    href: "/inventory/product-list",
    item: [
      { label: "Product", href: "/inventory/product-list" },
      { label: "Category", href: "/inventory/category" },
      { label: "Stock Tracking", href: "/inventory/stock-tracking" },
      { label: "Purchase Order", href: "/inventory/purchase-order" },
      { label: "Barcode Scan", href: "/inventory/barcode-scan" },
      { label: "Batch & Expiry Management", href: "/inventory/batch-expiry-management" },
    ],
  },
  {
    icon: "/icons/payment.png",
    label: "Payments",
    href: "/payment",
  },
  {
    icon: "/icons/tax.png",
    label: "Tax & Compliance",
    href: "/tax-compliance/gst-configuration",
    item: [
      { label: "GST Configuration", href: "/tax-compliance/gst-configuration" },
      { label: "HSN & SAC Code", href: "/tax-compliance/hsn-sac" },
      { label: "GSTR-1", href: "/tax-compliance/gstr-1" },
      { label: "GSTR-3B", href: "/tax-compliance/gstr-3b" },
    ],
  },
  {
    icon: "/icons/expense.png",
    label: "Expense Management",
    href: "/expense-management/expense-list",
    item: [
      { label: "Expense List", href: "/expense-management/expense-list" },
      { label: "Expense Category", href: "/expense-management/expense-category" },
      { label: "Recurring Expenses", href: "/expense-management/recurring-expense" },
    ],
  },
  {
    icon: "/icons/reports.png",
    label: "Reports & Analytics",
    href: "/reports-analytics/sales-report",
    item: [
      { label: "Sales Report", href: "/reports-analytics/sales-report" },
      { label: "Purchase Report", href: "/reports-analytics/purchase-report" },
      { label: "Profit/Loss Report", href: "/reports-analytics/profit-loss-report" },
      { label: "Expense Report", href: "/reports-analytics/expense-report" },
      { label: "Inventory Valuation", href: "/reports-analytics/inventory-valuation" },
      { label: "Tax Summary", href: "/reports-analytics/tax-summary" },
      { label: "Payment Reports", href: "/reports-analytics/payment-report" },
    ],
  },
  {
    icon: "/icons/quotation.png",
    label: "Quotation & Estimation",
    href: "/quotation-estimation",
  },
];

export default Menuitems;*/
