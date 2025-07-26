import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { PageConfig } from '@/types'
import { pagesConfig } from '@/config/pages'

interface MinimalLayoutProps {
  pageConfig: PageConfig
  children?: React.ReactNode
}

export function MinimalLayout({ pageConfig, children }: MinimalLayoutProps) {
  const { header, hero, blocks, footer } = pageConfig

  const minimalHeader = header
    ? { ...header, variant: 'minimal' as const }
    : undefined
  const minimalFooter = footer
    ? { ...footer, variant: 'minimal' as const }
    : undefined

  return (
    <div className='min-h-screen bg-background'>
      {minimalHeader && <Header config={minimalHeader} />}

      {/* Main Content */}
      <main>
        {/* Hero - simplified */}
        {hero && <Hero config={hero} />}

        {/* Custom Content */}
        {children}

        {/* Blocks */}
        {blocks && <RenderBlocks blocks={blocks} />}
      </main>

      {minimalFooter && (
        <Footer
          variant={minimalFooter.variant}
          showSocial={minimalFooter.showSocial}
          showNewsletter={minimalFooter.showNewsletter}
          siteConfig={pagesConfig.site}
        />
      )}
    </div>
  )
}
