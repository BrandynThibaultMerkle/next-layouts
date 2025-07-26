import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getPageConfig,
  getAllPageSlugs,
  getPageComponent,
} from '@/config/pages'
import { LayoutRenderer } from '@/layouts/LayoutRenderer'

export async function generateStaticParams() {
  const slugs = getAllPageSlugs()

  return slugs.map((slug) => ({
    slug: slug.split('/'), // Handle nested paths
  }))
}

type Props = {
  params: Promise<{ slug?: string[] }>
}

export default async function DynamicPage({ params }: Props) {
  const { slug: slugArray } = await params

  // Convert slug array to string (handle root and nested paths)
  const slug = slugArray ? slugArray.join('/') : 'home'

  const pageConfig = getPageConfig(slug)

  if (!pageConfig) {
    notFound()
  }

  const pageComponent = await getPageComponent(slug)

  return (
    <LayoutRenderer pageConfig={pageConfig} pageComponent={pageComponent} />
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: slugArray } = await params
  const slug = slugArray ? slugArray.join('/') : 'home'

  const pageConfig = getPageConfig(slug)

  if (!pageConfig) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
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
