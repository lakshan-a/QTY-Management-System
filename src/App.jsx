import React, { useState } from 'react';
import { ThemeProvider } from './components/context/ThemeContext';
import { AuthProvider, useAuth } from './components/context/AuthContext';
import { LanguageProvider, useLanguage } from './components/context/LanguageContext';
import DashboardLayout from './components/coman/DashboardLayout';
import DashboardPage from './components/pages/DashboardPage/DashboardPage';
import CustomersPage from './components/pages/CustomersPage/CustomersPage';
import './index.css';
import LoginPage from "./components/pages/LoginPage/LoginPage.jsx";

const pageTitleKeys = {
    dashboard: 'nav.dashboard',
    customers: 'nav.customers',
    categories: 'nav.categories',
    items: 'nav.items',
    wholesale: 'nav.wholesale',
    couriers: 'nav.couriers',
    orders: 'nav.orders',
    'qty-management': 'nav.qty_management',
    returns: 'nav.returns',
    payments: 'nav.payments',
    damages: 'nav.damages',
    users: 'nav.users',
    reports: 'nav.reports',
    settings: 'nav.settings',
    'super-dashboard': 'nav.dashboard',
    businesses: 'nav.businesses',
    'all-users': 'nav.all_users',
    subscriptions: 'nav.subscriptions',
    'super-reports': 'nav.reports',
};

function AppContent() {
    const { isAuthenticated, user } = useAuth();
    const { t } = useLanguage();
    const [currentPage, setCurrentPage] = useState(() => {
        return user?.role === 'super_admin' ? 'super-dashboard' : 'dashboard';
    });

    if (!isAuthenticated) {
        return <LoginPage />;
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <DashboardPage />;
            case 'customers':
                return <CustomersPage />;
            default:
                return <DashboardPage />;
        }
    };

    const titleKey = pageTitleKeys[currentPage] || 'nav.dashboard';

    return (
        <DashboardLayout
            currentPage={currentPage}
            pageTitle={t(titleKey)}
            onNavigate={setCurrentPage}
        >
            {renderPage()}
        </DashboardLayout>
    );
}

export function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AuthProvider>
                    <AppContent />
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;