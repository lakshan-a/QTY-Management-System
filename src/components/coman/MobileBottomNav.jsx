import React from 'react';
import {
    LayoutDashboardIcon,
    ShoppingCartIcon,
    PackageIcon,
    UsersIcon,
    MenuIcon,
} from 'lucide-react';

const navItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <LayoutDashboardIcon className="w-5 h-5" />,
    },
    {
        id: 'orders',
        label: 'Orders',
        icon: <ShoppingCartIcon className="w-5 h-5" />,
    },
    {
        id: 'items',
        label: 'Items',
        icon: <PackageIcon className="w-5 h-5" />,
    },
    {
        id: 'customers',
        label: 'Customers',
        icon: <UsersIcon className="w-5 h-5" />,
    },
];

export function MobileBottomNav({ currentPage, onNavigate, onMenuClick }) {
    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 lg:hidden safe-bottom"
            role="navigation"
            aria-label="Mobile navigation"
        >
            <div className="flex items-center justify-around h-14">
                {navItems.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`
                flex flex-col items-center justify-center flex-1 h-full px-2 py-1
                transition-colors duration-200 no-select
                ${
                                isActive
                                    ? 'text-primary-500'
                                    : 'text-slate-500 dark:text-slate-400 active:text-primary-500'
                            }
              `}
                            aria-label={item.label}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {item.icon}
                            <span className="text-[10px] font-medium mt-0.5 truncate">
                {item.label}
              </span>
                        </button>
                    );
                })}

                {/* More button to open full sidebar */}
                <button
                    onClick={onMenuClick}
                    className="flex flex-col items-center justify-center flex-1 h-full px-2 py-1 text-slate-500 dark:text-slate-400 active:text-primary-500 transition-colors duration-200 no-select"
                    aria-label="Open menu"
                >
                    <MenuIcon className="w-5 h-5" />
                    <span className="text-[10px] font-medium mt-0.5">More</span>
                </button>
            </div>
        </nav>
    );
}

export default MobileBottomNav;