import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { PageConfig } from '@/types'
import { pagesConfig } from '@/config/pages'

interface DefaultLayoutProps {
  pageConfig: PageConfig
  children?: React.ReactNode
}

export function DefaultLayout({ pageConfig, children }: DefaultLayoutProps) {
  const { header, hero, blocks, footer } = pageConfig

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      {header && <Header config={header} />}

      {/* Main Content */}
      <main>
        {/* Hero */}
        {hero && <Hero config={hero} />}

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
