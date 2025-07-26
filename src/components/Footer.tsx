import Link from 'next/link'
import Image from 'next/image'
import { SiteConfig } from '@/types'

interface FooterProps {
  variant: 'minimal' | 'default' | 'expanded'
  showSocial?: boolean
  showNewsletter?: boolean
  siteConfig: SiteConfig
}

export function Footer({
  variant,
  showSocial,
  showNewsletter,
  siteConfig,
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  if (variant === 'minimal') {
    return (
      <footer className='border-t border-border/40 py-6'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground'>
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            {showSocial && siteConfig.social && (
              <div className='flex space-x-4 mt-4 sm:mt-0'>
                {siteConfig.social.twitter && (
                  <Link
                    href={siteConfig.social.twitter}
                    className='hover:text-foreground'>
                    Twitter
                  </Link>
                )}
                {siteConfig.social.github && (
                  <Link
                    href={siteConfig.social.github}
                    className='hover:text-foreground'>
                    GitHub
                  </Link>
                )}
                {siteConfig.social.linkedin && (
                  <Link
                    href={siteConfig.social.linkedin}
                    className='hover:text-foreground'>
                    LinkedIn
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </footer>
    )
  }

  if (variant === 'expanded') {
    return (
      <footer className='border-t border-border/40 bg-muted/30'>
        <div className='container mx-auto px-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Brand */}
            <div className='col-span-1 md:col-span-2'>
              <div className='flex items-center space-x-2 mb-4'>
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={32}
                  height={32}
                  className='dark:invert'
                />
                <span className='font-semibold text-lg'>{siteConfig.name}</span>
              </div>
              <p className='text-muted-foreground max-w-md mb-6'>
                {siteConfig.description}
              </p>
              {showSocial && siteConfig.social && (
                <div className='flex space-x-4'>
                  {siteConfig.social.twitter && (
                    <Link
                      href={siteConfig.social.twitter}
                      className='text-muted-foreground hover:text-foreground transition-colors'>
                      <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'>
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
                      </svg>
                    </Link>
                  )}
                  {siteConfig.social.github && (
                    <Link
                      href={siteConfig.social.github}
                      className='text-muted-foreground hover:text-foreground transition-colors'>
                      <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                    </Link>
                  )}
                  {siteConfig.social.linkedin && (
                    <Link
                      href={siteConfig.social.linkedin}
                      className='text-muted-foreground hover:text-foreground transition-colors'>
                      <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                      </svg>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='font-semibold mb-4'>Quick Links</h3>
              <div className='space-y-2'>
                <Link
                  href='/'
                  className='block text-sm text-muted-foreground hover:text-foreground transition-colors'>
                  Home
                </Link>
                <Link
                  href='/about'
                  className='block text-sm text-muted-foreground hover:text-foreground transition-colors'>
                  About
                </Link>
                <Link
                  href='/contact'
                  className='block text-sm text-muted-foreground hover:text-foreground transition-colors'>
                  Contact
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              {showNewsletter ? (
                <>
                  <h3 className='font-semibold mb-4'>Newsletter</h3>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Subscribe to get the latest updates
                  </p>
                  <div className='flex'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='flex-1 px-3 py-2 text-sm border border-input bg-background rounded-l-md focus:outline-none focus:ring-2 focus:ring-ring'
                    />
                    <button className='px-4 py-2 text-sm bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-colors'>
                      Subscribe
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className='font-semibold mb-4'>Support</h3>
                  <div className='space-y-2'>
                    <Link
                      href='/help'
                      className='block text-sm text-muted-foreground hover:text-foreground transition-colors'>
                      Help Center
                    </Link>
                    <Link
                      href='/privacy'
                      className='block text-sm text-muted-foreground hover:text-foreground transition-colors'>
                      Privacy Policy
                    </Link>
                    <Link
                      href='/terms'
                      className='block text-sm text-muted-foreground hover:text-foreground transition-colors'>
                      Terms of Service
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className='border-t border-border/40 mt-12 pt-8'>
            <p className='text-center text-sm text-muted-foreground'>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }

  // Default variant
  return (
    <footer className='border-t border-border/40 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center space-x-2 mb-4 md:mb-0'>
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={24}
              height={24}
              className='dark:invert'
            />
            <span className='font-medium'>{siteConfig.name}</span>
          </div>

          <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8'>
            {showSocial && siteConfig.social && (
              <div className='flex space-x-4'>
                {siteConfig.social.twitter && (
                  <Link
                    href={siteConfig.social.twitter}
                    className='text-sm text-muted-foreground hover:text-foreground'>
                    Twitter
                  </Link>
                )}
                {siteConfig.social.github && (
                  <Link
                    href={siteConfig.social.github}
                    className='text-sm text-muted-foreground hover:text-foreground'>
                    GitHub
                  </Link>
                )}
                {siteConfig.social.linkedin && (
                  <Link
                    href={siteConfig.social.linkedin}
                    className='text-sm text-muted-foreground hover:text-foreground'>
                    LinkedIn
                  </Link>
                )}
              </div>
            )}
            <p className='text-sm text-muted-foreground'>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
