import React from 'react'
import { SunIcon, MoonIcon, BellIcon, MenuIcon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'

export function Header({ title, onMenuClick, showMenuButton }) {
    const { isDark, toggleTheme } = useTheme()
    const { user } = useAuth()

    return (
        <header className="h-14 lg:h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-3 lg:px-6 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-2 lg:gap-4 min-w-0">
                {showMenuButton && (
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden flex-shrink-0 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                        aria-label="Open menu"
                    >
                        <MenuIcon className="w-5 h-5" />
                    </button>
                )}
                <h1 className="text-base lg:text-xl font-semibold text-slate-900 dark:text-white truncate">
                    {title}
                </h1>
            </div>

            <div className="flex items-center gap-1 lg:gap-2 flex-shrink-0">
                <button
                    className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    aria-label="Notifications"
                >
                    <BellIcon className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    aria-label="Toggle theme"
                >
                    {isDark ? (
                        <SunIcon className="w-5 h-5" />
                    ) : (
                        <MoonIcon className="w-5 h-5" />
                    )}
                </button>

                <div className="hidden sm:flex items-center gap-2 lg:gap-3 ml-1 lg:ml-2 pl-2 lg:pl-4 border-l border-slate-200 dark:border-slate-700">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                        {user?.full_name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate max-w-[120px]">
                            {user?.full_name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                            {user?.role?.replace('_', ' ')}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header