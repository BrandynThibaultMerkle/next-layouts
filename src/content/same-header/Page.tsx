import Link from 'next/link'

export default function SameHeaderPage() {
  return (
    <div className='relative'>
      {/* Header Consistency Indicator */}
      <div className='bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-green-200 dark:border-green-800'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex items-center gap-4 text-center justify-center'>
            <div className='text-2xl'>✅</div>
            <div>
              <h3 className='text-lg font-semibold text-green-800 dark:text-green-200'>
                Perfect! No Header Layout Shift
              </h3>
              <p className='text-green-800 dark:text-green-200 text-sm'>
                This page uses the same &quot;landing&quot; layout as the home
                page - notice the header stayed exactly the same
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-16 px-4'>
        <div className='container mx-auto max-w-4xl'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white'>
              Layout Consistency in Action
            </h1>
            <p className='text-xl text-slate-700 dark:text-slate-200 max-w-2xl mx-auto'>
              When pages share the same layout configuration, users get a
              seamless, consistent experience with no unexpected layout shifts.
            </p>
          </div>

          {/* Visual Demonstration */}
          <div className='bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-12'>
            <h2 className='text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
              What Just Happened?
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                  🏠 Home Page
                </h3>
                <div className='bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg'>
                  <code className='text-sm text-slate-800 dark:text-slate-200'>
                    layout: &apos;landing&apos;
                  </code>
                  <br />
                  <code className='text-sm text-slate-800 dark:text-slate-200'>
                    variant: &apos;expanded&apos;
                  </code>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                  📖 This Page
                </h3>
                <div className='bg-green-50 dark:bg-green-900/20 p-4 rounded-lg'>
                  <code className='text-sm text-slate-800 dark:text-slate-200'>
                    layout: &apos;landing&apos;
                  </code>
                  <br />
                  <code className='text-sm text-slate-800 dark:text-slate-200'>
                    variant: &apos;expanded&apos;
                  </code>
                </div>
              </div>
            </div>

            <div className='mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg text-center'>
              <h4 className='font-semibold text-green-800 dark:text-green-200 mb-2'>
                Result: Zero Layout Shift!
              </h4>
              <p className='text-green-800 dark:text-green-200 text-sm'>
                Same layout configuration = identical header behavior and
                positioning
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-8 text-slate-900 dark:text-white'>
              Why This Matters
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700'>
                <div className='text-3xl mb-4'>🎯</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Better UX
                </h3>
                <p className='text-slate-800 dark:text-slate-200 text-sm'>
                  No jarring layout shifts that confuse users or break their
                  flow
                </p>
              </div>

              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700'>
                <div className='text-3xl mb-4'>⚡</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Performance
                </h3>
                <p className='text-slate-800 dark:text-slate-200 text-sm'>
                  Browser can optimize rendering when layout structure is
                  consistent
                </p>
              </div>

              <div className='p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700'>
                <div className='text-3xl mb-4'>🛡️</div>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Predictable
                </h3>
                <p className='text-slate-800 dark:text-slate-200 text-sm'>
                  Users know exactly where navigation elements will be
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className='text-center bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl'>
            <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
              Now Try Something Different
            </h3>
            <p className='text-slate-800 dark:text-slate-200 mb-6'>
              Click the next demo to see how headers can be styled differently
              while keeping the same navigation
            </p>

            <Link
              href='/modified-header'
              className='inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
              See Modified Header →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
