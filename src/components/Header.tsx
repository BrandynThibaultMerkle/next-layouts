'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { HeaderConfig } from '@/types'

interface HeaderProps {
  config: HeaderConfig
}

export function Header({ config }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const {
    variant = 'default',
    logo,
    navigation = [],
    buttons = [],
    showAuth = false,
  } = config

  const headerClasses = {
    minimal: 'py-3 px-4',
    default: 'py-4 px-4', 
    expanded: 'py-6 px-4',
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 ${headerClasses[variant]}`}>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          {logo ? (
            <Link href={logo.href || '/'}>
              <Image src={logo.src} alt={logo.alt} width={32} height={32} />
            </Link>
          ) : (
            <Link
              href='/'
              className='text-xl font-bold text-slate-900 dark:text-white'>
              Dynamic Layouts
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        {variant !== 'minimal' && (
          <nav className='hidden md:flex items-center gap-6'>
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium'>
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Action Buttons */}
        <div className='flex items-center gap-3'>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant || 'outline'}
              size={variant === 'minimal' ? 'small' : 'medium'}
              href={button.href}>
              {button.label}
            </Button>
          ))}

          {/* Auth Buttons */}
          {showAuth && (
            <>
              <Button variant='ghost' size='medium'>
                Sign In
              </Button>
              <Button variant='primary' size='medium'>
                Sign Up
              </Button>
            </>
          )}

          {/* Mobile Menu Button */}
          {variant !== 'minimal' && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && variant !== 'minimal' && (
        <div className='md:hidden border-t border-slate-200 dark:border-slate-700 mt-4 pt-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md'>
          <nav className='flex flex-col gap-3 px-4 pb-4'>
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2'>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
