



const Menuitems = [
  {
    icon: "/icons/dashboard.png",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: "/icons/group.png",
    label: "Staff Management",
    href: "/staff/list",
    item: [
      { label: "Staff List", href: "/staff/list" },
      { label: "Add/Edit Staff", href: "/staff/add" },
      { label: "Staff Documents", href: "/staff/documents" },
      { label: "Bank Details", href: "/staff/bank-details" },
    ],
  },
  {
    icon: "/icons/inventory.png",
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
    icon: "/icons/customer.png",
    label: "Customer Management",
    href: "/customer/list",
    item: [{ label: "Add/View Customers", href: "/customer/list" }],
  },
  {
    icon: "/icons/supplier.png",
    label: "Supplier Management",
    href: "/supplier/list",
    item: [{ label: "Suppliers", href: "/supplier/list" }],
  },
  {
    icon: "/icons/roles.png",
    label: "Roles & Permissions",
    href: "/roles/role-management",
    item: [
      { label: "Role Management", href: "/roles/role-management" },
      { label: "Permission Assignment", href: "/roles/permission-assignment" },
      { label: "User Role Mapping", href: "/roles/user-role-mapping" },
      { label: "Access Logs", href: "/roles/access-logs" },
    ],
  },
  {
    icon: "/icons/warehouse.png",
    label: "Warehouse Management",
    href: "/warehouse/setup",
    item: [
      { label: "Multi-Warehouse Setup", href: "/warehouse/setup" },
      { label: "Capacity Planning", href: "/warehouse/capacity" },
      { label: "Bin & Rack Management", href: "/warehouse/bin-rack" },
    ],
  },
  {
    icon: "/icons/stock.png",
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
    icon: "/icons/purchase.png",
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
    icon: "/icons/sales.png",
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
    icon: "/icons/valuation.png",
    label: "Inventory Valuation & Costing",
    href: "/valuation/fifo",
    item: [
      { label: "FIFO/LIFO/Weighted Average", href: "/valuation/fifo" },
      { label: "Dead Stock Identification", href: "/valuation/dead-stock" },
    ],
  },
  {
    icon: "/icons/damage.png",
    label: "Damage Tracking",
    href: "/damage/writeoff",
    item: [
      { label: "Stock Write-Off", href: "/damage/writeoff" },
      { label: "Attach Receipts/Bills", href: "/damage/receipts" },
    ],
  },
  {
    icon: "/icons/invoice.png",
    label: "Invoices",
    href: "/invoice/list",
    item: [{ label: "Invoices", href: "/invoice/list" }],
  },
  {
    icon: "/icons/finance.png",
    label: "Finance",
    href: "/finance/expense",
    item: [
      { label: "Expense", href: "/finance/expense" },
      { label: "Income", href: "/finance/income" },
    ],
  },
  {
    icon: "/icons/reports.png",
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
    icon: "/icons/notifications.png",
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
    icon: "/icons/settings.png",
    label: "Settings",
    href: "/settings/user",
    item: [
      { label: "User Settings", href: "/settings/user" },
      { label: "Warehouse Settings", href: "/settings/warehouse" },
      { label: "Notification Settings", href: "/settings/notifications" },
      { label: "General Settings", href: "/settings/general" },
    ],
  },
  {
    icon: "/icons/profile.png",
    label: "Profile",
    href: "/profile/view",
    item: [
      { label: "View Profile", href: "/profile/view" },
      { label: "Edit Profile", href: "/profile/edit" },
      { label: "Profile Picture", href: "/profile/picture" },
      { label: "Preferences", href: "/profile/preferences" },
    ],
  },
  {
    icon: "/icons/auth.png",
    label: "Authentication",
    href: "/auth/login",
    item: [
      { label: "Login", href: "/auth/login" },
      { label: "Reset Password", href: "/auth/reset-password" },
      { label: "Logout", href: "/auth/logout" },
    ],
  },
];

export default Menuitems;