import React, { useMemo, useState } from 'react';
import {
    DownloadIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    DollarSignIcon,
    PackageIcon,
    ShoppingCartIcon,
    UsersIcon,
    AlertTriangleIcon,
} from 'lucide-react';

// Helper to create dates relative to today
function daysAgo(days) {
    const d = new Date();
    d.setDate(d.getDate() - days);
    d.setHours(10, 0, 0, 0);
    return d;
}

const mockOrders = [
    {
        order_id: '1',
        order_number: 'ORD-2024-001',
        customer_name: 'John Smith',
        total_amount: 185.97,
        status: 'delivered',
        payment_status: 'paid',
        payment_method: 'bank_transfer',
        delivery_type: 'pay',
        category: 'Electronics',
        items: [
            {
                name: 'Wireless Headphones',
                quantity: 2,
                revenue: 179.98,
            },
        ],
        createdAt: daysAgo(0),
    },
    {
        order_id: '2',
        order_number: 'ORD-2024-002',
        customer_name: 'Sarah Johnson',
        total_amount: 102.96,
        status: 'processing',
        payment_status: 'pending',
        payment_method: 'cod',
        delivery_type: 'pay',
        category: 'Clothing',
        items: [
            {
                name: 'Cotton T-Shirt',
                quantity: 3,
                revenue: 89.97,
            },
        ],
        createdAt: daysAgo(2),
    },
    {
        order_id: '3',
        order_number: 'ORD-2024-003',
        customer_name: 'Mike Brown',
        total_amount: 240.98,
        status: 'shipped',
        payment_status: 'paid',
        payment_method: 'bank_transfer',
        delivery_type: 'pay',
        category: 'Electronics',
        items: [
            {
                name: 'Smart Watch',
                quantity: 1,
                revenue: 249.99,
            },
        ],
        createdAt: daysAgo(5),
    },
    {
        order_id: '4',
        order_number: 'ORD-2024-004',
        customer_name: 'Emily Davis',
        total_amount: 83.97,
        status: 'pending',
        payment_status: 'pending',
        payment_method: 'cod',
        delivery_type: 'free',
        category: 'Sports',
        items: [
            {
                name: 'Yoga Mat',
                quantity: 2,
                revenue: 79.98,
            },
        ],
        createdAt: daysAgo(10),
    },
    {
        order_id: '5',
        order_number: 'ORD-2024-005',
        customer_name: 'John Smith',
        total_amount: 329.97,
        status: 'delivered',
        payment_status: 'paid',
        payment_method: 'bank_transfer',
        delivery_type: 'pay',
        category: 'Electronics',
        items: [
            {
                name: 'Smart Watch',
                quantity: 1,
                revenue: 249.99,
            },
            {
                name: 'Wireless Headphones',
                quantity: 1,
                revenue: 89.99,
            },
        ],
        createdAt: daysAgo(15),
    },
    {
        order_id: '6',
        order_number: 'ORD-2024-006',
        customer_name: 'Sarah Johnson',
        total_amount: 59.98,
        status: 'delivered',
        payment_status: 'paid',
        payment_method: 'cod',
        delivery_type: 'free',
        category: 'Clothing',
        items: [
            {
                name: 'Cotton T-Shirt',
                quantity: 2,
                revenue: 59.98,
            },
        ],
        createdAt: daysAgo(20),
    },
    {
        order_id: '7',
        order_number: 'ORD-2024-007',
        customer_name: 'Chris Wilson',
        total_amount: 79.99,
        status: 'delivered',
        payment_status: 'paid',
        payment_method: 'bank_transfer',
        delivery_type: 'pay',
        category: 'Home & Garden',
        items: [
            {
                name: 'Garden Tools Set',
                quantity: 1,
                revenue: 79.99,
            },
        ],
        createdAt: daysAgo(30),
    },
    {
        order_id: '8',
        order_number: 'ORD-2024-008',
        customer_name: 'Emily Davis',
        total_amount: 39.99,
        status: 'returned',
        payment_status: 'paid',
        payment_method: 'cod',
        delivery_type: 'pay',
        category: 'Sports',
        items: [
            {
                name: 'Yoga Mat',
                quantity: 1,
                revenue: 39.99,
            },
        ],
        createdAt: daysAgo(45),
    },
    {
        order_id: '9',
        order_number: 'ORD-2024-009',
        customer_name: 'Mike Brown',
        total_amount: 179.98,
        status: 'delivered',
        payment_status: 'paid',
        payment_method: 'bank_transfer',
        delivery_type: 'pay',
        category: 'Electronics',
        items: [
            {
                name: 'Wireless Headphones',
                quantity: 2,
                revenue: 179.98,
            },
        ],
        createdAt: daysAgo(60),
    },
    {
        order_id: '10',
        order_number: 'ORD-2024-010',
        customer_name: 'Lisa Park',
        total_amount: 119.97,
        status: 'processing',
        payment_status: 'pending',
        payment_method: 'cod',
        delivery_type: 'free',
        category: 'Sports',
        items: [
            {
                name: 'Yoga Mat',
                quantity: 3,
                revenue: 119.97,
            },
        ],
        createdAt: daysAgo(90),
    },
];

const mockItems = [
    {
        item_id: '1',
        item_name: 'Wireless Headphones',
        category: 'Electronics',
        stock_quantity: 150,
        cost_price: 45,
        selling_price: 89.99,
        status: 'active',
    },
    {
        item_id: '2',
        item_name: 'Cotton T-Shirt',
        category: 'Clothing',
        stock_quantity: 500,
        cost_price: 12,
        selling_price: 29.99,
        status: 'active',
    },
    {
        item_id: '3',
        item_name: 'Smart Watch',
        category: 'Electronics',
        stock_quantity: 8,
        cost_price: 120,
        selling_price: 249.99,
        status: 'active',
    },
    {
        item_id: '4',
        item_name: 'Garden Tools Set',
        category: 'Home & Garden',
        stock_quantity: 0,
        cost_price: 35,
        selling_price: 79.99,
        status: 'inactive',
    },
    {
        item_id: '5',
        item_name: 'Yoga Mat',
        category: 'Sports',
        stock_quantity: 200,
        cost_price: 15,
        selling_price: 39.99,
        status: 'active',
    },
    {
        item_id: '6',
        item_name: 'Running Shoes',
        category: 'Sports',
        stock_quantity: 5,
        cost_price: 40,
        selling_price: 89.99,
        status: 'active',
    },
    {
        item_id: '7',
        item_name: 'Desk Lamp',
        category: 'Home & Garden',
        stock_quantity: 45,
        cost_price: 18,
        selling_price: 49.99,
        status: 'active',
    },
];

const mockCustomers = [
    {
        customer_id: '1',
        full_name: 'John Smith',
        email: 'john@example.com',
        city: 'New York',
        total_orders: 5,
        total_spent: 1250.5,
        createdAt: daysAgo(0),
    },
    {
        customer_id: '2',
        full_name: 'Sarah Johnson',
        email: 'sarah@example.com',
        city: 'Los Angeles',
        total_orders: 3,
        total_spent: 680.2,
        createdAt: daysAgo(15),
    },
    {
        customer_id: '3',
        full_name: 'Mike Brown',
        email: 'mike@example.com',
        city: 'Chicago',
        total_orders: 4,
        total_spent: 920.8,
        createdAt: daysAgo(30),
    },
    {
        customer_id: '4',
        full_name: 'Emily Davis',
        email: 'emily@example.com',
        city: 'New York',
        total_orders: 2,
        total_spent: 320.4,
        createdAt: daysAgo(45),
    },
    {
        customer_id: '5',
        full_name: 'Chris Wilson',
        email: 'chris@example.com',
        city: 'Chicago',
        total_orders: 1,
        total_spent: 79.99,
        createdAt: daysAgo(60),
    },
    {
        customer_id: '6',
        full_name: 'Lisa Park',
        email: 'lisa@example.com',
        city: 'Los Angeles',
        total_orders: 2,
        total_spent: 240.5,
        createdAt: daysAgo(90),
    },
];

function getDateFilter(range) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (range) {
        case 'today':
            return (d) => d >= today;
        case 'this_week': {
            const weekStart = new Date(today);
            weekStart.setDate(today.getDate() - today.getDay());
            return (d) => d >= weekStart;
        }
        case 'this_month':
            return (d) =>
                d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        case 'last_month': {
            const lm = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            const lmEnd = new Date(now.getFullYear(), now.getMonth(), 0);
            return (d) => d >= lm && d <= lmEnd;
        }
        case 'this_year':
            return (d) => d.getFullYear() === now.getFullYear();
        default:
            return () => true;
    }
}

function exportCSV(headers, rows, filename) {
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join(
        '\n',
    );
    const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}

function StatCard({
                      label,
                      value,
                      icon,
                      color,
                      trend,
                  }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                        {value}
                    </p>
                    {trend && (
                        <p
                            className={`mt-1 text-sm flex items-center gap-1 ${trend.up ? 'text-emerald-600' : 'text-red-600'}`}
                        >
                            {trend.up ? (
                                <TrendingUpIcon className="w-4 h-4" />
                            ) : (
                                <TrendingDownIcon className="w-4 h-4" />
                            )}
                            {trend.value}
                        </p>
                    )}
                </div>
                <div className={`${color} p-3 rounded-lg text-white`}>{icon}</div>
            </div>
        </div>
    );
}

const ReportsPage = () => {
    const [dateRange, setDateRange] = useState('this_year');
    const [reportType, setReportType] = useState('sales');

    const dateFilter = useMemo(() => getDateFilter(dateRange), [dateRange]);

    const filteredOrders = useMemo(
        () => mockOrders.filter((o) => dateFilter(o.createdAt)),
        [dateFilter],
    );

    const filteredCustomers = useMemo(
        () => mockCustomers.filter((c) => dateFilter(c.createdAt)),
        [dateFilter],
    );

    const handleExport = () => {
        if (reportType === 'sales') {
            exportCSV(
                ['Order #', 'Customer', 'Amount', 'Status', 'Payment', 'Date'],
                filteredOrders.map((o) => [
                    o.order_number,
                    o.customer_name,
                    o.total_amount.toFixed(2),
                    o.status,
                    o.payment_status,
                    o.createdAt.toLocaleDateString(),
                ]),
                'sales-report',
            );
        } else if (reportType === 'inventory') {
            exportCSV(
                ['Item', 'Category', 'Stock', 'Cost', 'Price', 'Status'],
                mockItems.map((i) => [
                    i.item_name,
                    i.category,
                    i.stock_quantity.toString(),
                    i.cost_price.toFixed(2),
                    i.selling_price.toFixed(2),
                    i.status,
                ]),
                'inventory-report',
            );
        } else if (reportType === 'customers') {
            exportCSV(
                ['Name', 'Email', 'City', 'Orders', 'Total Spent'],
                filteredCustomers.map((c) => [
                    c.full_name,
                    c.email,
                    c.city,
                    c.total_orders.toString(),
                    c.total_spent.toFixed(2),
                ]),
                'customers-report',
            );
        } else {
            exportCSV(
                [
                    'Order #',
                    'Customer',
                    'Amount',
                    'Status',
                    'Payment',
                    'Delivery',
                    'Date',
                ],
                filteredOrders.map((o) => [
                    o.order_number,
                    o.customer_name,
                    o.total_amount.toFixed(2),
                    o.status,
                    o.payment_status,
                    o.delivery_type,
                    o.createdAt.toLocaleDateString(),
                ]),
                'orders-report',
            );
        }
    };

    // Sales calculations
    const totalRevenue = filteredOrders.reduce((s, o) => s + o.total_amount, 0);
    const totalOrders = filteredOrders.length;
    const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    const productsSold = filteredOrders.reduce(
        (s, o) => s + o.items.reduce((si, i) => si + i.quantity, 0),
        0,
    );

    // Product aggregation
    const productMap = new Map();
    filteredOrders.forEach((o) =>
        o.items.forEach((i) => {
            const existing = productMap.get(i.name) || {
                sales: 0,
                revenue: 0,
            };
            productMap.set(i.name, {
                sales: existing.sales + i.quantity,
                revenue: existing.revenue + i.revenue,
            });
        }),
    );

    const topProducts = Array.from(productMap.entries())
        .map(([name, data]) => ({
            name,
            ...data,
        }))
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 5);

    // Category aggregation
    const categoryMap = new Map();
    filteredOrders.forEach((o) => {
        const existing = categoryMap.get(o.category) || {
            orders: 0,
            revenue: 0,
        };
        categoryMap.set(o.category, {
            orders: existing.orders + 1,
            revenue: existing.revenue + o.total_amount,
        });
    });

    const categoryData = Array.from(categoryMap.entries())
        .map(([name, data]) => ({
            name,
            ...data,
        }))
        .sort((a, b) => b.revenue - a.revenue);

    // Monthly sales
    const monthlyMap = new Map();
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    filteredOrders.forEach((o) => {
        const key = months[o.createdAt.getMonth()];
        monthlyMap.set(key, (monthlyMap.get(key) || 0) + o.total_amount);
    });

    const monthlySales = months
        .filter((m) => monthlyMap.has(m))
        .map((m) => ({
            month: m,
            sales: monthlyMap.get(m) || 0,
        }));

    // Inventory calculations
    const totalItems = mockItems.length;
    const lowStockItems = mockItems.filter(
        (i) => i.stock_quantity > 0 && i.stock_quantity < 10,
    );
    const outOfStock = mockItems.filter((i) => i.stock_quantity === 0);
    const totalInventoryValue = mockItems.reduce(
        (s, i) => s + i.cost_price * i.stock_quantity,
        0,
    );

    // Customer calculations
    const totalCustomers = filteredCustomers.length;
    const now = new Date();
    const newThisMonth = filteredCustomers.filter(
        (c) =>
            c.createdAt.getMonth() === now.getMonth() &&
            c.createdAt.getFullYear() === now.getFullYear(),
    ).length;

    const cityMap = new Map();
    filteredCustomers.forEach((c) =>
        cityMap.set(c.city, (cityMap.get(c.city) || 0) + 1),
    );

    const topCity =
        Array.from(cityMap.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    const customerAvgSpent =
        totalCustomers > 0
            ? filteredCustomers.reduce((s, c) => s + c.total_spent, 0) /
            totalCustomers
            : 0;

    // Order status breakdown
    const statusBreakdown = new Map();
    filteredOrders.forEach((o) =>
        statusBreakdown.set(o.status, (statusBreakdown.get(o.status) || 0) + 1),
    );

    const codCount = filteredOrders.filter(
        (o) => o.payment_method === 'cod',
    ).length;
    const bankCount = filteredOrders.filter(
        (o) => o.payment_method === 'bank_transfer',
    ).length;

    const statusColors = {
        pending:
            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        processing:
            'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        shipped: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
        delivered:
            'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        returned: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <select
                            value={reportType}
                            onChange={(e) => setReportType(e.target.value)}
                            className="w-full sm:w-48 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="sales">Sales Report</option>
                            <option value="inventory">Inventory Report</option>
                            <option value="customers">Customer Report</option>
                            <option value="orders">Orders Report</option>
                        </select>
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="w-full sm:w-48 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="today">Today</option>
                            <option value="this_week">This Week</option>
                            <option value="this_month">This Month</option>
                            <option value="last_month">Last Month</option>
                            <option value="this_year">This Year</option>
                        </select>
                    </div>
                    <button
                        onClick={handleExport}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* SALES REPORT */}
            {reportType === 'sales' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard
                            label="Total Revenue"
                            value={`$${totalRevenue.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                            })}`}
                            icon={<DollarSignIcon className="w-6 h-6" />}
                            color="bg-emerald-500"
                            trend={{
                                value: '12.5% vs last period',
                                up: true,
                            }}
                        />
                        <StatCard
                            label="Total Orders"
                            value={totalOrders.toLocaleString()}
                            icon={<ShoppingCartIcon className="w-6 h-6" />}
                            color="bg-blue-500"
                            trend={{
                                value: '8.2% vs last period',
                                up: true,
                            }}
                        />
                        <StatCard
                            label="Avg Order Value"
                            value={`$${avgOrderValue.toFixed(2)}`}
                            icon={<TrendingUpIcon className="w-6 h-6" />}
                            color="bg-purple-500"
                            trend={{
                                value: '3.1% vs last period',
                                up: true,
                            }}
                        />
                        <StatCard
                            label="Products Sold"
                            value={productsSold.toLocaleString()}
                            icon={<PackageIcon className="w-6 h-6" />}
                            color="bg-cyan-500"
                            trend={{
                                value: '5.4% vs last period',
                                up: true,
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Monthly Sales Chart */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Monthly Sales
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                                Revenue trend
                            </p>
                            {monthlySales.length > 0 ? (
                                <div className="h-64 flex items-end justify-between gap-2 pt-6">
                                    {monthlySales.map((data) => {
                                        const maxSales = Math.max(
                                            ...monthlySales.map((d) => d.sales),
                                        );
                                        const height =
                                            maxSales > 0 ? (data.sales / maxSales) * 100 : 0;
                                        return (
                                            <div
                                                key={data.month}
                                                className="flex-1 flex flex-col items-center gap-2"
                                            >
                        <span className="text-xs text-slate-500 font-medium">
                          ${Math.round(data.sales)}
                        </span>
                                                <div
                                                    className="w-full bg-blue-500 rounded-t-lg transition-all duration-500 min-h-[4px]"
                                                    style={{
                                                        height: `${height}%`,
                                                    }}
                                                />
                                                <span className="text-xs text-slate-500">
                          {data.month}
                        </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="h-64 flex items-center justify-center text-slate-400">
                                    No data for selected period
                                </div>
                            )}
                        </div>

                        {/* Top Products */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Top Products
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                                Best selling products
                            </p>
                            <div className="space-y-4 pt-4">
                                {topProducts.length === 0 ? (
                                    <p className="text-center text-slate-400 py-8">
                                        No data for selected period
                                    </p>
                                ) : (
                                    topProducts.map((product, index) => (
                                        <div
                                            key={product.name}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3">
                        <span
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${index === 0 ? 'bg-amber-100 text-amber-600' : index === 1 ? 'bg-slate-100 text-slate-600' : index === 2 ? 'bg-orange-100 text-orange-600' : 'bg-slate-50 text-slate-500'}`}
                        >
                          {index + 1}
                        </span>
                                                <div>
                                                    <p className="font-medium text-slate-900 dark:text-white">
                                                        {product.name}
                                                    </p>
                                                    <p className="text-sm text-slate-500">
                                                        {product.sales} units sold
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="font-semibold text-slate-900 dark:text-white">
                                                $
                                                {product.revenue.toLocaleString(undefined, {
                                                    minimumFractionDigits: 2,
                                                })}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Category Breakdown */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Sales by Category
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Category
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Orders
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Revenue
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                                        % of Total
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                {categoryData.map((cat) => (
                                    <tr
                                        key={cat.name}
                                        className="hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                    >
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                            {cat.name}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            {cat.orders}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            $
                                            {cat.revenue.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                            })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-blue-500 rounded-full"
                                                        style={{
                                                            width: `${totalRevenue > 0 ? (cat.revenue / totalRevenue) * 100 : 0}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm text-slate-600 dark:text-slate-300 w-12 text-right">
                            {totalRevenue > 0
                                ? ((cat.revenue / totalRevenue) * 100).toFixed(1)
                                : 0}
                                                    %
                          </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* INVENTORY REPORT */}
            {reportType === 'inventory' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard
                            label="Total Items"
                            value={totalItems.toString()}
                            icon={<PackageIcon className="w-6 h-6" />}
                            color="bg-blue-500"
                        />
                        <StatCard
                            label="Low Stock"
                            value={lowStockItems.length.toString()}
                            icon={<AlertTriangleIcon className="w-6 h-6" />}
                            color="bg-amber-500"
                        />
                        <StatCard
                            label="Out of Stock"
                            value={outOfStock.length.toString()}
                            icon={<AlertTriangleIcon className="w-6 h-6" />}
                            color="bg-red-500"
                        />
                        <StatCard
                            label="Inventory Value"
                            value={`$${totalInventoryValue.toLocaleString()}`}
                            icon={<DollarSignIcon className="w-6 h-6" />}
                            color="bg-emerald-500"
                        />
                    </div>

                    {lowStockItems.length > 0 && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-3">
                                ⚠️ Low Stock Alerts
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {lowStockItems.map((item) => (
                                    <div
                                        key={item.item_id}
                                        className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-200 dark:border-amber-800"
                                    >
                                        <p className="font-medium text-slate-900 dark:text-white">
                                            {item.item_name}
                                        </p>
                                        <p className="text-sm text-red-600 font-medium">
                                            Only {item.stock_quantity} left
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                All Items
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Item
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Category
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Stock
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Cost
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Price
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Status
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                {mockItems.map((item) => (
                                    <tr
                                        key={item.item_id}
                                        className="hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                    >
                                        <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                                            {item.item_name}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                                            {item.category}
                                        </td>
                                        <td
                                            className={`px-4 py-3 text-sm font-medium ${item.stock_quantity === 0 ? 'text-red-500' : item.stock_quantity < 10 ? 'text-amber-500' : 'text-slate-600 dark:text-slate-300'}`}
                                        >
                                            {item.stock_quantity}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                                            ${item.cost_price.toFixed(2)}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                                            ${item.selling_price.toFixed(2)}
                                        </td>
                                        <td className="px-4 py-3">
                        <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${item.status === 'active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}
                        >
                          {item.status}
                        </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* CUSTOMER REPORT */}
            {reportType === 'customers' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard
                            label="Total Customers"
                            value={totalCustomers.toString()}
                            icon={<UsersIcon className="w-6 h-6" />}
                            color="bg-blue-500"
                        />
                        <StatCard
                            label="New This Month"
                            value={newThisMonth.toString()}
                            icon={<UsersIcon className="w-6 h-6" />}
                            color="bg-emerald-500"
                        />
                        <StatCard
                            label="Top City"
                            value={topCity}
                            icon={<TrendingUpIcon className="w-6 h-6" />}
                            color="bg-purple-500"
                        />
                        <StatCard
                            label="Avg Spend"
                            value={`$${customerAvgSpent.toFixed(2)}`}
                            icon={<DollarSignIcon className="w-6 h-6" />}
                            color="bg-cyan-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Top Customers
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="border-b border-slate-200 dark:border-slate-700">
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                            Name
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                            Orders
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                            Spent
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    {[...filteredCustomers]
                                        .sort((a, b) => b.total_spent - a.total_spent)
                                        .map((c) => (
                                            <tr
                                                key={c.customer_id}
                                                className="hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                            >
                                                <td className="px-4 py-3">
                                                    <p className="font-medium text-slate-900 dark:text-white">
                                                        {c.full_name}
                                                    </p>
                                                    <p className="text-xs text-slate-500">{c.email}</p>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                                                    {c.total_orders}
                                                </td>
                                                <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">
                                                    ${c.total_spent.toFixed(2)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                Customers by City
                            </h3>
                            <div className="space-y-4">
                                {Array.from(cityMap.entries())
                                    .sort((a, b) => b[1] - a[1])
                                    .map(([city, count]) => (
                                        <div key={city}>
                                            <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {city}
                        </span>
                                                <span className="text-sm text-slate-500">
                          {count} customers
                        </span>
                                            </div>
                                            <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-500 rounded-full transition-all"
                                                    style={{
                                                        width: `${totalCustomers > 0 ? (count / totalCustomers) * 100 : 0}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* ORDERS REPORT */}
            {reportType === 'orders' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard
                            label="Total Orders"
                            value={totalOrders.toString()}
                            icon={<ShoppingCartIcon className="w-6 h-6" />}
                            color="bg-blue-500"
                        />
                        <StatCard
                            label="Pending"
                            value={(statusBreakdown.get('pending') || 0).toString()}
                            icon={<PackageIcon className="w-6 h-6" />}
                            color="bg-amber-500"
                        />
                        <StatCard
                            label="Delivered"
                            value={(statusBreakdown.get('delivered') || 0).toString()}
                            icon={<PackageIcon className="w-6 h-6" />}
                            color="bg-emerald-500"
                        />
                        <StatCard
                            label="Returned"
                            value={(statusBreakdown.get('returned') || 0).toString()}
                            icon={<AlertTriangleIcon className="w-6 h-6" />}
                            color="bg-red-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                Orders by Status
                            </h3>
                            <div className="space-y-3">
                                {Array.from(statusBreakdown.entries()).map(
                                    ([status, count]) => (
                                        <div
                                            key={status}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3">
                        <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[status] || 'bg-slate-100 text-slate-700'}`}
                        >
                          {status}
                        </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-32 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-blue-500 rounded-full"
                                                        style={{
                                                            width: `${totalOrders > 0 ? (count / totalOrders) * 100 : 0}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 w-8 text-right">
                          {count}
                        </span>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                Payment Methods
                            </h3>
                            <div className="space-y-6 pt-2">
                                <div>
                                    <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Cash on Delivery
                    </span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {codCount} orders
                    </span>
                                    </div>
                                    <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-emerald-500 rounded-full transition-all"
                                            style={{
                                                width: `${totalOrders > 0 ? (codCount / totalOrders) * 100 : 0}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Bank Transfer
                    </span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {bankCount} orders
                    </span>
                                    </div>
                                    <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-500 rounded-full transition-all"
                                            style={{
                                                width: `${totalOrders > 0 ? (bankCount / totalOrders) * 100 : 0}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Recent Orders
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Order #
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Customer
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Amount
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Payment
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                                        Date
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                {filteredOrders.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="px-4 py-8 text-center text-slate-500"
                                        >
                                            No orders for selected period
                                        </td>
                                    </tr>
                                ) : (
                                    [...filteredOrders]
                                        .sort(
                                            (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
                                        )
                                        .map((o) => (
                                            <tr
                                                key={o.order_id}
                                                className="hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                            >
                                                <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">
                                                    {o.order_number}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                                                    {o.customer_name}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                                                    ${o.total_amount.toFixed(2)}
                                                </td>
                                                <td className="px-4 py-3">
                            <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${o.payment_status === 'paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}
                            >
                              {o.payment_status}
                            </span>
                                                </td>
                                                <td className="px-4 py-3">
                            <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[o.status] || ''}`}
                            >
                              {o.status}
                            </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                                                    {o.createdAt.toLocaleDateString()}
                                                </td>
                                            </tr>
                                        ))
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ReportsPage;