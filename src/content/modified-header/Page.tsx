import Link from 'next/link'

export default function ModifiedHeaderPage() {
  return (
    <div className='relative'>
      {/* Header Change Indicator */}
      <div className='bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-800'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex items-center gap-4 text-center justify-center'>
            <div className='text-2xl'>🎨</div>
            <div>
              <h3 className='text-lg font-semibold text-amber-800 dark:text-amber-200'>
                Notice the Header Style Change!
              </h3>
              <p className='text-amber-700 dark:text-amber-300 text-sm'>
                Same navigation links, but different layout (&quot;default&quot; vs &quot;landing&quot;), variant (&quot;default&quot; vs &quot;expanded&quot;), and auth buttons enabled
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-16 px-4'>
        <div className='container mx-auto max-w-4xl'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white'>
              Flexible Header Styling
            </h1>
            <p className='text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Keep the same navigation links while completely changing the header&apos;s appearance and functionality.
            </p>
          </div>

          {/* Header Comparison */}
          <div className='bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-12'>
            <h2 className='text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
              Header Configuration Differences
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2'>
                  🏠 Home & Same Header Pages
                </h3>
                <div className='bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg space-y-2'>
                  <div><code className='text-sm'>layout: &apos;landing&apos;</code></div>
                  <div><code className='text-sm'>variant: &apos;expanded&apos;</code></div>
                  <div><code className='text-sm'>showAuth: false</code></div>
                  <div><code className='text-sm'>buttons: [&apos;View Demo&apos;, &apos;GitHub&apos;]</code></div>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2'>
                  🎨 This Page
                </h3>
                <div className='bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg space-y-2'>
                  <div><code className='text-sm'>layout: &apos;default&apos;</code></div>
                  <div><code className='text-sm'>variant: &apos;default&apos;</code></div>
                  <div><code className='text-sm'>showAuth: true</code></div>
                  <div><code className='text-sm'>buttons: [&apos;Dashboard&apos;, &apos;Settings&apos;]</code></div>
                </div>
              </div>
            </div>

            <div className='mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-center'>
              <h4 className='font-semibold text-amber-800 dark:text-amber-200 mb-2'>
                🔗 But Navigation Links Stay the Same!
              </h4>
              <p className='text-amber-700 dark:text-amber-300 text-sm'>
                Home • Same Header • Modified Header • Different Layout
              </p>
            </div>
          </div>

          {/* Visual Changes */}
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
              What Changed?
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center'>
                <div className='text-3xl mb-4'>📏</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Header Size
                </h3>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  Compact &quot;default&quot; variant vs expanded variant
                </p>
              </div>

              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center'>
                <div className='text-3xl mb-4'>🔐</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Auth Buttons
                </h3>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  Sign In / Sign Up buttons now visible
                </p>
              </div>

              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center'>
                <div className='text-3xl mb-4'>🎯</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Action Buttons
                </h3>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  Different CTAs for different contexts
                </p>
              </div>

              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center'>
                <div className='text-3xl mb-4'>🏗️</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Layout Type
                </h3>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  &quot;default&quot; layout vs &quot;landing&quot; layout structure
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
              Perfect for Different Contexts
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl'>
                <div className='text-4xl mb-4'>🏠</div>
                <h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-white'>
                  Marketing Pages
                </h3>
                <p className='text-slate-600 dark:text-slate-400'>
                  Large, prominent headers with marketing CTAs and no auth clutter
                </p>
              </div>

              <div className='p-8 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-800/20 rounded-xl'>
                <div className='text-4xl mb-4'>📊</div>
                <h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-white'>
                  App Interface
                </h3>
                <p className='text-slate-600 dark:text-slate-400'>
                  Compact headers with auth options and app-specific actions
                </p>
              </div>

              <div className='p-8 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 rounded-xl'>
                <div className='text-4xl mb-4'>⚙️</div>
                <h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-white'>
                  Admin Panels
                </h3>
                <p className='text-slate-600 dark:text-slate-400'>
                  Utilitarian headers focused on functionality over aesthetics
                </p>
              </div>
            </div>
          </div>

          {/* Configuration Example */}
          <div className='bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto mb-12'>
            <div className='text-green-400 mb-4'>
              {/* Easy header customization */}
            </div>
            <pre className='text-slate-300'>{`// Marketing header (Home/Same Header)
header: {
  variant: 'expanded',    // ← Larger, more prominent
  navigation: demoNavigation,
  buttons: [
    { label: 'View Demo', variant: 'primary' },
    { label: 'GitHub', variant: 'outline' }
  ],
  showAuth: false         // ← Clean marketing focus
}

// App interface header (This page)  
header: {
  variant: 'default',     // ← Compact, functional
  navigation: demoNavigation, // ← Same navigation!
  buttons: [
    { label: 'Dashboard', variant: 'primary' },
    { label: 'Settings', variant: 'outline' }
  ],
  showAuth: true          // ← User account features
}`}</pre>
          </div>

          {/* Next Steps */}
          <div className='text-center bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl'>
            <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
              See a Completely Different Layout
            </h3>
            <p className='text-slate-600 dark:text-slate-300 mb-6'>
              Now try the minimal layout to see how dramatically different a page can look
            </p>
            
            <Link
              href='/different-layout'
              className='inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors'>
              See Minimal Layout →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
