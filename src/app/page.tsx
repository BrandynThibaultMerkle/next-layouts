import { Metadata } from 'next'
import { getPageConfig, getPageComponent } from '@/config/pages'
import { LayoutRenderer } from '@/layouts/LayoutRenderer'

export default async function HomePage() {
  // Get the home page configuration
  const pageConfig = getPageConfig('home')

  if (!pageConfig) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>Configuration Error</h1>
          <p className='text-muted-foreground'>
            Home page configuration not found.
          </p>
        </div>
      </div>
    )
  }

  // Load the custom home page component
  const pageComponent = await getPageComponent('home')

  return (
    <LayoutRenderer pageConfig={pageConfig} pageComponent={pageComponent} />
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const pageConfig = getPageConfig('home')

  if (!pageConfig) {
    return {
      title: 'Dynamic Layouts',
      description: 'A Next.js app with dynamic, configurable layouts',
    }
  }

  const { meta } = pageConfig

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords?.join(', '),
    openGraph: meta.openGraph
      ? {
          title: meta.openGraph.title || meta.title,
          description: meta.openGraph.description || meta.description,
          images: meta.openGraph.image ? [meta.openGraph.image] : undefined,
        }
      : undefined,
  }
}
