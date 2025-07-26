import React from 'react'

interface FeaturesBlockProps {
  title?: string
  subtitle?: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  columns?: 1 | 2 | 3 | 4
}

export function FeaturesBlock({
  title,
  subtitle,
  features,
  columns = 3,
}: FeaturesBlockProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className='py-16 px-4'>
      <div className='container mx-auto max-w-6xl'>
        {(title || subtitle) && (
          <div className='text-center mb-12'>
            {subtitle && (
              <p className='text-sm font-semibold text-primary uppercase tracking-wide mb-2'>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
                {title}
              </h2>
            )}
          </div>
        )}

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className='text-center p-6 rounded-lg border border-border/50 hover:border-border transition-colors'>
              <div className='flex justify-center mb-4'>
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-foreground'>
                {feature.title}
              </h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FeatureIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    settings: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
    layout: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
        />
      </svg>
    ),
    'trending-up': (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        />
      </svg>
    ),
  }

  return (
    <div className='text-primary'>{iconMap[icon] || iconMap['settings']}</div>
  )
}
