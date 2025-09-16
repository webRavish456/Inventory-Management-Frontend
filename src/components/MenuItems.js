// const { icons } = require("@tabler/icons-react");
const MenuItems=[
    {
        icon:'/dashboard2.png',
        label:"Dashboard",
        href:"/dashboard"
    },
    {
        icon:"/staff2.png",
        label:"Staff",
        href:"/staff/staff-details",
        item:[
            {
                label:"Staff Details",
                href:"/staff/staff-details"
            },
            {
                label:"Add/Edit Staff",
                href:"/staff/addEdit-staff"
            },
            {
                label:"Staff Documents",
                href:"/staff/staff-documents"
            },
            {
                label:"Bank Details",
                href:"/staff/bank-details"
            }
            ]
    },
    {
        icon:"/item.png",
        label:"Items",
        href:"/items/addEdit-products",
        item:[
            {
                label:"Products Details",
                href:"/items/addEdit-products"
            },
            {
                label:"Products Varients",
                href:"/items/products-varients"
            },
            {
                label:"Products Categories",
                href:"/items/products-categories"
            },
            {
                label:"Batch & Serial No.Tracking",
                href:"/items/batch-tracking",
                item:[
                    {
                label:"Batch Tracking",
                href:"/items/batch-tracking",
            }
            
        ]
            },{
                label:"HSN/SAC Code Management",
                href:"/items/hsn-code"
            }
        ]
    },
    {
        icon:'/customer2.png',
        label:"Customer",
        href:"/customer",
        item:[
            {
                label:"Customer Details",
                href:"/customer/customer-details"
            }
        ]
    },
    {
        icon:'/supplier5.png',
        label:"Supplier",
        href:"/supplier",
        item:[
            {
                label:"Supplier Details",
                href:"/supplier/supplier-details"
            }
        ]
    },
    {
        icon:'/roles3.png',
        label:"Roles & Permissions",
        href:"/roles",
        item:[
            {
                label:"Roles Management",
                href:"/roles/roles-management"
            },
            {
                label:"Permission Assignment",
                href:"/roles/permission-assignment"
            },
            {
                label:"User Role Mapping",
                href:"/roles/userRole-mapping"
            },
            {
                label:"Access Logs",
                href:"/roles/access-logs"
            }
        ]
    },
    {
        icon:'/warehouse8.png',
        label:"Warehouse",
        href:"/warehouse",
        item:[
            {
                label:"Multi-Warehouse Setup",
                href:"/warehouse/multiWarehouse-setup"
            },
            {
                label:"Capacity Planning",
                href:"/warehouse/capacity-planning"
            },
            {
                label:"Bin & Rack Management",
                href:"/warehouse/binRack-management"
            }
        ]
    },
    {
        icon:'/stock2.png',
        label:"Stock Management",
        href:"/stock",
        item:[
            {
                label:"Stock in/out Entries",
                href:"/stock/stock-entries"
            },
            {
                label:"Opening Stock",
                href:"/stock/opening-stock"
            },{
                label:"Real-time Stock Updates",
                href:"/stock/stock-updates"
            },
            {
                label:"Batch Management",
                href:"/stock/batch-management"
            },
            {
                label:"Stock Transfer",
                href:"/stock/stock-transfer"
            }
        ]
    },
    {
        icon:'/purchase2.png',
        label:"Purchase Management",
        href:"/purchase",
        item:[
            {
                label:"Purchase Orders",
                href:"/purchase/purchase-orders"
            },
            {
                label:"Purchase Returns",
                href:"/purchase/purchase-returns"
            },
            {
                label:"Pending Orders",
                href:"/purchase/pending-orders"
            },{
                label:"Cost Price Tracking",
                href:"/purchase/costPrice-tracking"
            }
        ]
    },
    {
        icon:'/sales2.png',
        label:"Sales & Order Management",
        href:"/sales",
        item:[
            {
                label:"Sales Orders",
                href:"/sales/sales-orders"
            },
            {
                label:"Delivery Challans",
                href:"/sales/delivery-challans"
            },
            {
                label:"Order Tracking",
                href:"/sales/order-tracking"
            },
            {
                label:"Sales Returns",
                href:"/sales/sales-returns"
            }
        ]
    },
    {
        icon:'/inventory-costing3.png',
        label:"Inventory Valuation & Costing",
        href:"/inventory-costing/weighted-methods",
        item:[
            {
                label:"FIFO/LIFO Weighted Avg Methods",
                href:"/inventory-costing/weighted-methods"
            },
            {
                label:"Dead Stock Identification",
                href:"/inventory-costing/dead-stock"
            }
        ]
    },
    {
        icon:'/damage3.png',
        label:"Damage Tracking",
        href:"/damage",
        item:[
            {
                label:"Stock Write-off",
                href:"/damage/stock-write"
            },
            {
                label:"Attach Receipt/Bills",
                href:"/damage/receipt"
            }
        ]
    },
    {
        icon:'/invoice3.png',
        label:"Invoices",
        href:"/invoices"
    },
    {
        icon:'/finance2.png',
        label:"Finance",
        href:"/finance",
        item:[
            {
                label:"Expense",
                href:"/finance/expense"
            },
            {
                label:"Income",
                href:"/finance/income"
            }
        ]
    },
    {
        icon:'/reporting2.png',
        label:"Reporting & Analytics",
        href:"/reporting",
        item:[
            {
                label:"Stock Summary",
                href:"/reporting/stock-summary"
            },
            {
                label:"Item-wise Sales",
                href:"/reporting/item-sales"
            },
            {
                label:"Stock Aging",
                href:"/reporting/stock-aging"
            },
            {
                label:"Valuation Report",
                href:"/reporting/valuation-report"
            }
        ]
    },
    {
        icon:'/notifications2.png',
        label:"Notifications",
        href:"/notifications",
        item:[
            {
                label:"Stock Alerts",
                href:"/notifications/stock-alerts"
            },
            {
                label:"Order Alerts",
                href:"/notifications/order-alerts"
            },
            {
                label:"Payment Alerts",
                href:"/notifications/payment-alerts"
            },
            {
                label:"System Alerts",
                href:"/notifications/system-alerts"
            }
            
                ]
            
        
    },
    {
        icon:'/setting2.png',
        label:"Settings",
        href:"/settings",
        item:[
            {
                label:"User Setting",
                href:"/settings/user-setting"
            },
            {
                label:"Warehouse Setting",
                href:"/settings/warehouse-setting"
            },
            {
                label:"Notifications Setting",
                href:"/settings/notifications-setting"
            },
            {
                label:"General Setting",
                href:"/settings/general-setting"
            }
        ]
    },
    {
        icon:'/profile2.png',
        label:"Profile",
        href:"/profile",
        item:[
            {
                label:"View Profile",
                href:"/profile/view-profile"
            },
            {
                label:"Edit Profile",
                href:"/profile/edit-profile"
            },
            {
                label:"Profile Picture",
                href:"/profile/profile-picture"
            }
        ]
    },
    {
        icon:'/authentication2.png',
        label:"Authentication",
        href:"/authentication",
        item:[
            {
                label:"Login",
                href:"/authentication/login"
            },
            {
                label:"Reset Password",
                href:"/authentication/reset-pass"
            },
            {
                label:"Logout",
                href:"/authentication/logout"
            }
        ]
    }
];

export default MenuItems;