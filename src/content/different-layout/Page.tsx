import Link from 'next/link'

export default function DifferentLayoutPage() {
  return (
    <div className='relative'>
      {/* Layout Change Indicator */}
      <div className='bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-green-200 dark:border-green-800'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center gap-3 text-center justify-center'>
            <div className='text-xl'>🎯</div>
            <div>
              <span className='text-sm font-semibold text-green-800 dark:text-green-200'>
                Completely Different Layout!
              </span>
              <span className='text-green-800 dark:text-green-200 text-xs ml-2'>
                Minimal header, no hero, content-focused design
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 px-4'>
        <div className='container mx-auto max-w-4xl'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white'>
              Minimal Layout Experience
            </h1>
            <p className='text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto'>
              Notice how dramatically different this page looks while still
              maintaining the same navigation links. Perfect for content-focused
              experiences.
            </p>
          </div>

          {/* Layout Comparison */}
          <div className='bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-12'>
            <h2 className='text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
              Layout Architecture Differences
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <div className='text-center'>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-4'>
                  🏠 Landing Layout
                </h3>
                <div className='bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4'>
                  <div className='space-y-2'>
                    <div className='h-3 bg-blue-200 dark:bg-blue-800 rounded'></div>
                    <div className='h-8 bg-blue-100 dark:bg-blue-900 rounded'></div>
                    <div className='h-4 bg-slate-100 dark:bg-slate-800 rounded'></div>
                    <div className='h-4 bg-slate-100 dark:bg-slate-800 rounded'></div>
                    <div className='h-2 bg-slate-200 dark:bg-slate-700 rounded'></div>
                  </div>
                </div>
                <p className='text-sm text-slate-800 dark:text-slate-200'>
                  Large hero, features, CTA sections
                </p>
              </div>

              <div className='text-center'>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-4'>
                  📊 Default Layout
                </h3>
                <div className='bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4'>
                  <div className='space-y-2'>
                    <div className='h-3 bg-purple-200 dark:bg-purple-800 rounded'></div>
                    <div className='h-6 bg-purple-100 dark:bg-purple-900 rounded'></div>
                    <div className='h-4 bg-slate-100 dark:bg-slate-800 rounded'></div>
                    <div className='h-4 bg-slate-100 dark:bg-slate-800 rounded'></div>
                    <div className='h-3 bg-slate-200 dark:bg-slate-700 rounded'></div>
                  </div>
                </div>
                <p className='text-sm text-slate-800 dark:text-slate-200'>
                  Balanced content and navigation
                </p>
              </div>

              <div className='text-center ring-2 ring-green-500 rounded-lg p-1'>
                <h3 className='font-semibold text-green-700 dark:text-green-400 mb-4'>
                  📱 Minimal Layout (This Page)
                </h3>
                <div className='bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4'>
                  <div className='space-y-2'>
                    <div className='h-2 bg-green-200 dark:bg-green-800 rounded'></div>
                    <div className='h-4 bg-slate-100 dark:bg-slate-800 rounded'></div>
                    <div className='h-4 bg-slate-100 dark:bg-slate-800 rounded'></div>
                    <div className='h-4 bg-slate-100 dark:bg-slate-800 rounded'></div>
                    <div className='h-1 bg-slate-200 dark:bg-slate-700 rounded'></div>
                  </div>
                </div>
                <p className='text-sm text-green-700 dark:text-green-300 font-medium'>
                  Content-first, minimal distractions
                </p>
              </div>
            </div>
          </div>

          {/* What's Different */}
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
              What Makes Minimal Different
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <span className='text-lg'>📏</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-slate-900 dark:text-white mb-1'>
                      Compact Header
                    </h3>
                    <p className='text-slate-800 dark:text-slate-200 text-sm'>
                      Minimal variant with smaller padding and simpler styling
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <span className='text-lg'>🚫</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-slate-900 dark:text-white mb-1'>
                      No Hero Section
                    </h3>
                    <p className='text-slate-800 dark:text-slate-200 text-sm'>
                      Content starts immediately - no large banner or graphics
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <span className='text-lg'>🔧</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-slate-900 dark:text-white mb-1'>
                      Simplified Footer
                    </h3>
                    <p className='text-slate-800 dark:text-slate-200 text-sm'>
                      Essential links only, no newsletter or social media
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6'>
                <h3 className='font-semibold text-green-900 dark:text-green-100 mb-4'>
                  Perfect For:
                </h3>
                <ul className='space-y-3 text-green-800 dark:text-green-200'>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-500'>📖</span>
                    Documentation & Guides
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-500'>✍️</span>
                    Blog Posts & Articles
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-500'>📄</span>
                    Terms & Legal Pages
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-green-500'>🔧</span>
                    Utility & Admin Pages
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className='bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto mb-12'>
            <div className='text-green-400 mb-4'>
              {/* Minimal layout configuration */}
            </div>
            <pre className='text-slate-100'>{`// Minimal layout configuration
export const pageConfig = {
  layout: 'minimal',      // ← Different layout entirely
  header: {
    variant: 'minimal',   // ← Compact header
    navigation: demoNavigation, // ← Same navigation!
    buttons: [
      { label: 'Docs', variant: 'ghost' }
    ],
    showAuth: false
  },
  // No hero section defined
  footer: {
    variant: 'minimal',   // ← Simple footer
    showSocial: false,
    showNewsletter: false
  }
}`}</pre>
          </div>

          {/* Benefits */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-8 text-slate-900 dark:text-white'>
              Minimal Layout Benefits
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700'>
                <div className='text-3xl mb-4'>⚡</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Faster Loading
                </h3>
                <p className='text-slate-800 dark:text-slate-200 text-sm'>
                  Less DOM elements = faster rendering and better performance
                </p>
              </div>

              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700'>
                <div className='text-3xl mb-4'>🎯</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Better Focus
                </h3>
                <p className='text-slate-800 dark:text-slate-200 text-sm'>
                  Users concentrate on content without visual distractions
                </p>
              </div>

              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700'>
                <div className='text-3xl mb-4'>📱</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Mobile Optimized
                </h3>
                <p className='text-slate-800 dark:text-slate-200 text-sm'>
                  Clean design works especially well on small screens
                </p>
              </div>
            </div>
          </div>

          {/* Demo Complete */}
          <div className='text-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl'>
            <h3 className='text-2xl font-semibold mb-4 text-slate-900 dark:text-white'>
              🎉 Demo Complete!
            </h3>
            <p className='text-slate-800 dark:text-slate-200 mb-6 max-w-2xl mx-auto'>
              You&apos;ve seen how Dynamic Layouts can provide perfect
              consistency when needed, and complete flexibility when desired -
              all through simple configuration changes.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/'
                className='inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                ← Back to Home
              </Link>
              <Link
                href='/same-header'
                className='inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors'>
                Try Demo Again
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
