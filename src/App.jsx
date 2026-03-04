import React, { useState } from 'react'
import { ThemeProvider } from './components/context/ThemeContext'
import { AuthProvider, useAuth } from './components/context/AuthContext'
import { DashboardLayout } from './components/coman/DashboardLayout'
import { DashboardPage } from './components/pages/DashboardPage/DashboardPage'
import { CustomersPage } from './components/pages/CustomersPage/CustomersPage'


const pageTitles = {
    dashboard: 'Dashboard',
    customers: 'Customers',
    categories: 'Categories',
    items: 'Items',
    wholesale: 'Wholesale',
    couriers: 'Couriers',
    orders: 'Orders',
    'qty-management': 'Quantity Management',
    returns: 'Returns',
    payments: 'Payments',
    damages: 'Damages',
    users: 'User Management',
    reports: 'Reports',
    settings: 'Business Settings',
    'super-dashboard': 'Super Admin Dashboard',
    businesses: 'Businesses',
    'all-users': 'All Users',
    subscriptions: 'Subscriptions',
    'super-reports': 'Reports',
}

function AppContent() {
    const { isAuthenticated, user } = useAuth()
    const [currentPage, setCurrentPage] = useState(() => {
        return user?.role === 'super_admin' ? 'super-dashboard' : 'dashboard'
    })

    if (!isAuthenticated) {
        // return <LoginPage />
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <DashboardPage />
            case 'customers':
                return <CustomersPage />
            default:
                return <DashboardPage />
        }
    }

    return (
        <DashboardLayout
            currentPage={currentPage}
            pageTitle={pageTitles[currentPage] || 'Dashboard'}
            onNavigate={setCurrentPage}
        >
            {renderPage()}
        </DashboardLayout>
    )
}

export function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App