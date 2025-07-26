import Image from 'next/image'
import { Button } from '@/components/Button'
import { HeroConfig } from '@/types'

interface HeroProps {
  config: HeroConfig
}

export function Hero({ config }: HeroProps) {
  const {
    type,
    title,
    subtitle,
    description,
    backgroundImage,
    backgroundColor,
    buttons = [],
    media,
  } = config

  const heroClasses = {
    simple: 'py-16 px-4',
    split: 'py-20 px-4',
    video: 'py-24 px-4',
    carousel: 'py-20 px-4',
  }

  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : backgroundColor
    ? { backgroundColor }
    : {}

  return (
    <section
      className={`${heroClasses[type]} bg-cover bg-center`}
      style={backgroundStyle}>
      <div className='container mx-auto max-w-6xl'>
        {type === 'simple' && (
          <div className='text-center max-w-4xl mx-auto'>
            {subtitle && (
              <p className='text-lg text-slate-600 dark:text-slate-300 mb-4'>
                {subtitle}
              </p>
            )}
            <h1 className='text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white'>
              {title}
            </h1>
            {description && (
              <p className='text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto'>
                {description}
              </p>
            )}
            {buttons.length > 0 && (
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || 'primary'}
                    size='large'
                    href={button.href}>
                    {button.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}

        {type === 'split' && (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              {subtitle && (
                <p className='text-lg text-slate-600 dark:text-slate-300 mb-4'>
                  {subtitle}
                </p>
              )}
              <h1 className='text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white'>
                {title}
              </h1>
              {description && (
                <p className='text-xl text-slate-600 dark:text-slate-300 mb-8'>
                  {description}
                </p>
              )}
              {buttons.length > 0 && (
                <div className='flex flex-col sm:flex-row gap-4'>
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      variant={button.variant || 'primary'}
                      size='large'
                      href={button.href}>
                      {button.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            {media && (
              <div className='flex justify-center lg:justify-end'>
                {media.type === 'image' ? (
                  <Image
                    src={media.src}
                    alt={media.alt || ''}
                    width={500}
                    height={400}
                    className='rounded-lg shadow-lg'
                  />
                ) : (
                  <video
                    src={media.src}
                    autoPlay
                    muted
                    loop
                    className='rounded-lg shadow-lg max-w-full'
                  />
                )}
              </div>
            )}
          </div>
        )}

        {type === 'video' && (
          <div className='text-center'>
            {subtitle && (
              <p className='text-lg text-slate-600 dark:text-slate-300 mb-4'>
                {subtitle}
              </p>
            )}
            <h1 className='text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white'>
              {title}
            </h1>
            {description && (
              <p className='text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto'>
                {description}
              </p>
            )}
            {media && media.type === 'video' && (
              <div className='mb-8'>
                <video
                  src={media.src}
                  autoPlay
                  muted
                  loop
                  className='rounded-lg shadow-lg mx-auto max-w-full'
                />
              </div>
            )}
            {buttons.length > 0 && (
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || 'primary'}
                    size='large'
                    href={button.href}>
                    {button.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}

        {type === 'carousel' && (
          <div className='text-center'>
            {subtitle && (
              <p className='text-lg text-slate-600 dark:text-slate-300 mb-4'>
                {subtitle}
              </p>
            )}
            <h1 className='text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white'>
              {title}
            </h1>
            {description && (
              <p className='text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto'>
                {description}
              </p>
            )}
            {/* Carousel implementation would go here */}
            {buttons.length > 0 && (
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || 'primary'}
                    size='large'
                    href={button.href}>
                    {button.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
