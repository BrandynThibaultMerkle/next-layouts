import React from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      disabled = false,
      className,
      onClick,
      href,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

    const buttonVariants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary:
        'bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-500',
      outline:
        'border border-slate-300 bg-transparent hover:bg-slate-50 focus:ring-slate-500',
      ghost: 'bg-transparent hover:bg-slate-100 focus:ring-slate-500',
    }

    const buttonSizes = {
      small: 'px-3 py-1.5 text-sm rounded-md',
      medium: 'px-4 py-2 text-sm rounded-md',
      large: 'px-6 py-3 text-base rounded-lg',
    }

    const buttonClasses = cn(
      baseClasses,
      buttonVariants[variant],
      buttonSizes[size],
      className
    )

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={buttonClasses}
          {...props}>
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={buttonClasses}
        {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
