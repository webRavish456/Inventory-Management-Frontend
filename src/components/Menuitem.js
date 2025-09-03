const Menuitems = [
  {
    icon: "/icons/dashboard.png",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: "/icons/staff.png",
    label: "Staff Management",
    href: "/staff/list",
    item: [
      { label: "Staff List", href: "/staff/list" },
      { label: "Add Staff", href: "/staff/add" },
    ],
  },
  {
    icon: "/icons/item.png",
    label: "Item Management",
    href: "/item/add-edit",
    item: [
      { label: "Add/Edit Products", href: "/item/add-edit" },
      { label: "Product Variants", href: "/item/variants" },
      { label: "Categories & Subcategories", href: "/item/categories" },
      { label: "Batch & Serial Tracking", href: "/item/batch-serial" },
      { label: "HSN/SAC Code Management", href: "/item/hsn-sac" },
    ],
  },
  {
    icon: "/icons/customer.png",
    label: "Customer Management",
    href: "/customer/add-view",
    item: [
      { label: "Add/View Customers", href: "/customer/add-view" },
    ],
  },
  {
    icon: "/icons/supplier.png",
    label: "Supplier Management",
    href: "/supplier/add-view",
    item: [
      { label: "Add/View Suppliers", href: "/supplier/add-view" },
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
      { label: "Real-Time Updates", href: "/stock/real-time" },
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
      { label: "Cost Price Tracking", href: "/purchase/cost-tracking" },
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
      { label: "FIFO/LIFO/Weighted Average", href: "/valuation/fifo-lifo-weighted" },
      { label: "Dead Stock Identification", href: "/valuation/dead-stock" },
    ],
  },
  {
    icon: "/icons/damage.png",
    label: "Damage Tracking",
    href: "/damage/write-off",
    item: [
      { label: "Stock Write-Off", href: "/damage/write-off" },
      { label: "Attach Receipts/Bills", href: "/damage/receipts" },
    ],
  },
  {
    icon: "/icons/invoice.png",
    label: "Invoices",
    href: "/invoices/all",
    item: [
      { label: "Invoices", href: "/invoices/all" },
    ],
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
    href: "/reports/summary",
    item: [
      { label: "Stock Summary", href: "/reports/summary" },
      { label: "Item-Wise Sales", href: "/reports/item-sales" },
      { label: "Stock Aging", href: "/reports/stock-aging" },
      { label: "Valuation Report", href: "/reports/valuation" },
    ],
  },
];

export default Menuitems;
