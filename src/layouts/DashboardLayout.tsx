import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PageConfig } from '@/types'
import { pagesConfig } from '@/config/pages'

interface DashboardLayoutProps {
  pageConfig: PageConfig
  children?: React.ReactNode
}

export function DashboardLayout({
  pageConfig,
  children,
}: DashboardLayoutProps) {
  const { header, footer } = pageConfig

  const dashboardHeader = header
    ? {
        ...header,
        variant: 'default' as const,
        navigation: [
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Analytics', href: '/analytics' },
          { label: 'Settings', href: '/settings' },
          { label: 'Profile', href: '/profile' },
        ],
      }
    : undefined

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900'>
      {/* Dashboard Header */}
      {dashboardHeader && <Header config={dashboardHeader} />}

      {/* Dashboard Sidebar + Content Layout */}
      <div className='flex'>
        {/* Sidebar */}
        <aside className='w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 min-h-screen'>
          <div className='p-6'>
            <h2 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
              Quick Actions
            </h2>
            <nav className='space-y-2'>
              <a
                href='#'
                className='block px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md'>
                📊 View Reports
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md'>
                👥 Manage Users
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md'>
                ⚙️ System Settings
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className='flex-1 p-8'>
          {/* Page Content */}
          {children}
        </main>
      </div>

      {/* Simple Footer */}
      {footer && (
        <Footer
          variant='minimal'
          showSocial={false}
          showNewsletter={false}
          siteConfig={pagesConfig.site}
        />
      )}
    </div>
  )
}
