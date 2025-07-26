import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { PageConfig } from '@/types'
import { pagesConfig } from '@/config/pages'

interface LandingLayoutProps {
  pageConfig: PageConfig
  children?: React.ReactNode
}

export function LandingLayout({ pageConfig, children }: LandingLayoutProps) {
  const { header, hero, blocks, footer } = pageConfig

  return (
    <div className='min-h-screen bg-background'>
      {/* Header - may overlap hero */}
      {header && <Header config={header} />}

      {/* Main Content - landing page specific styling */}
      <main className='relative'>
        {/* Hero with potential header overlap */}
        {hero && (
          <div className='relative -mt-20 pt-20'>
            <Hero config={hero} />
          </div>
        )}

        {/* Custom Content */}
        {children}

        {/* Blocks */}
        {blocks && <RenderBlocks blocks={blocks} />}
      </main>

      {/* Footer */}
      {footer && (
        <Footer
          variant={footer.variant}
          showSocial={footer.showSocial}
          showNewsletter={footer.showNewsletter}
          siteConfig={pagesConfig.site}
        />
      )}
    </div>
  )
}
