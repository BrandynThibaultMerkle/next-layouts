import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='relative'>
      {/* Demo Instructions Section */}
      <div className='py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white'>
            Interactive Layout Demo
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto'>
            Click through the navigation above to experience how different layouts can share headers or completely transform the page experience.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Link
              href='/same-header'
              className='group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                🔗
              </div>
              <h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-white'>
                Same Header
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                Uses identical layout → No header shift when navigating
              </p>
            </Link>

            <Link
              href='/modified-header'
              className='group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                🎨
              </div>
              <h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-white'>
                Modified Header
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                Same links, different layout & header styling
              </p>
            </Link>

            <Link
              href='/different-layout'
              className='group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                📱
              </div>
              <h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-white'>
                Minimal Layout
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                Completely different layout, minimal header
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className='py-16 px-4'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white'>
              How Dynamic Layouts Work
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              One configuration change transforms the entire page experience
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl font-bold mb-6 text-slate-900 dark:text-white'>
                Configuration-Driven Design
              </h3>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <span className='text-xl'>⚡</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-slate-900 dark:text-white mb-2'>
                      Same Layout = No Shift
                    </h4>
                    <p className='text-slate-600 dark:text-slate-400'>
                      Pages using the same layout share identical header behavior - no layout shift when navigating
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <span className='text-xl'>🎨</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-slate-900 dark:text-white mb-2'>
                      Flexible Styling
                    </h4>
                    <p className='text-slate-600 dark:text-slate-400'>
                      Different layouts can style headers differently while keeping the same navigation
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <span className='text-xl'>📱</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-slate-900 dark:text-white mb-2'>
                      Complete Control
                    </h4>
                    <p className='text-slate-600 dark:text-slate-400'>
                      From subtle variations to complete layout overhauls - all through configuration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto'>
              <div className='text-green-400 mb-4'>
                {/* Simple layout configuration */}
              </div>
              <pre className='text-slate-300'>{`// Same layout = consistent header
export const pageConfig = {
  layout: 'landing', // ← Same as home
  header: {
    variant: 'expanded',
    navigation: demoNavigation,
    // No layout shift!
  }
}

// Different layout = new experience  
export const pageConfig = {
  layout: 'minimal', // ← Different layout
  header: {
    variant: 'minimal', // ← Different styling
    navigation: demoNavigation, // ← Same links
  }
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
