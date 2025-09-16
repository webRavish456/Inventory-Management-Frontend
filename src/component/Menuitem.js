const MenuItems=[
    {
        icon:'/icons/dashboard.png',
        label:"Dashboard",
        href:"/dashboard"
    },
    {
        icon:'/icons/staff.png',
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
        icon:'/icons/item.png',
        label:"Items",
        href:"/items/addEdit-products",
        item:[
            {
                label:"Add/Edit Products",
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
            },{
            label:"Serial No. Tracking",
            href:"/items/serial-tracking"
            }
        ]
            },{
                label:"HSN/SAC Code Management",
                href:"/items/hsn-code"
            }
        ]
    },
    {
        icon:'/icons/customer2.png',
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
        icon:'/icons/supplier.png',
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
        icon:'/icons/role.png',
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
        icon:'/icons/warehouse.png',
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
        icon:'/icons/stock-management.png',
        label:"Stock Management",
        href:"/stock-management/stock-entries",
        item:[
            {
                label:"Stock in/out Entries",
                href:"/stock-management/stock-entries"
            },
            {
                label:"Opening Stock",
                href:"/stock-management/opening-stock"
            },{
                label:"Real-time Stock Updates",
                href:"/stock-management/stock-updates"
            },
            {
                label:"Batch Management",
                href:"/stock-management/batch-management"
            },
            {
                label:"Stock Transfer",
                href:"/stock-management/stock-transfer"
            }
        ]
    },
    {
        icon:'/icons/purchase-management.png',
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
        icon:'/icons/order.png',
        label:"Sales & Order Management",
        href:"/sales/sales-orders",
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
            },
        ]
    },
    {
        icon:'/icons/inventory-cost.png',
        label:"Inventory Valuation & Costing",
        href:"/inventory-costing",
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
        icon:'/icons/damage.png',
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
        icon:'/icons/invoice.png',
        label:"Invoices",
        href:"/invoices"
    },
    {
        icon:'/icons/finance.png',
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
        icon:'/icons/report.png',
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
        icon:'/icons/notification.png',
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
        icon:'/icons/settings.png',
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
        icon:'/icons/profile.png',
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
        icon:'/icons/authentication.png',
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