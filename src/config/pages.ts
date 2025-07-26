import { PagesConfig, PageConfig, LayoutComponent } from '@/types'
import { demoNavigation } from '@/config/navigation'

import { DefaultLayout } from '@/layouts/DefaultLayout'
import { MinimalLayout } from '@/layouts/MinimalLayout'
import { LandingLayout } from '@/layouts/LandingLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'

import { homePageConfig } from '@/content/home/config'
import { sameHeaderPageConfig } from '@/content/same-header/config'
import { modifiedHeaderPageConfig } from '@/content/modified-header/config'
import { differentLayoutPageConfig } from '@/content/different-layout/config'

// Custom layouts registry - add your custom layouts here
const customLayoutsRegistry: Record<string, LayoutComponent> = {
  // Add custom layouts here as needed
}

export const pagesConfig: PagesConfig = {
  site: {
    name: 'Dynamic Layouts',
    description: 'A Next.js demo showcasing dynamic, configurable layouts',
    url: 'https://your-domain.com',
    logo: {
      src: '/next.svg',
      alt: 'Dynamic Layouts',
    },
    social: {
      twitter: 'https://twitter.com/yourhandle',
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourprofile',
    },
    theme: {
      primaryColor: '#0070f3',
      accentColor: '#ff6b35',
    },
  },
  layouts: {
    default: {
      component: DefaultLayout,
      name: 'Default Layout',
      description:
        'Standard layout with header, hero, content blocks, and footer',
    },
    minimal: {
      component: MinimalLayout,
      name: 'Minimal Layout',
      description: 'Clean, content-focused layout with minimal UI elements',
    },
    landing: {
      component: LandingLayout,
      name: 'Landing Layout',
      description: 'Marketing-focused layout optimized for conversions',
    },
    blog: {
      component: DefaultLayout,
      name: 'Blog Layout',
      description: 'Layout optimized for blog posts and articles',
    },
    dashboard: {
      component: DashboardLayout,
      name: 'Dashboard Layout',
      description: 'App layout with sidebar navigation for admin interfaces',
    },
  },
  pages: [
    homePageConfig,
    sameHeaderPageConfig,
    modifiedHeaderPageConfig,
    differentLayoutPageConfig,
  ],
}

export function getPageConfig(slug: string): PageConfig | null {
  const normalizedSlug = slug === '' ? 'home' : slug
  return pagesConfig.pages.find((page) => page.slug === normalizedSlug) || null
}

export function getAllPageSlugs(): string[] {
  return pagesConfig.pages
    .map((page) => page.slug)
    .filter((slug) => slug !== 'home')
}

export function getLayoutComponent(layoutName: string) {
  const layout = pagesConfig.layouts[layoutName]
  if (!layout) {
    console.warn(`Layout "${layoutName}" not found, falling back to default`)
    return pagesConfig.layouts.default
  }
  return layout
}

export function getCustomLayoutComponent(
  customLayoutName: string
): LayoutComponent | null {
  const customLayout = customLayoutsRegistry[customLayoutName]
  if (!customLayout) {
    console.warn(`Custom layout "${customLayoutName}" not found in registry`)
    return null
  }
  return customLayout
}

export function registerCustomLayout(
  name: string,
  layoutComponent: LayoutComponent
) {
  if (customLayoutsRegistry[name]) {
    console.warn(`Custom layout "${name}" already exists, overwriting`)
  }
  customLayoutsRegistry[name] = layoutComponent
}

export function getAvailableLayouts() {
  const standardLayouts = Object.entries(pagesConfig.layouts).map(
    ([key, layout]) => ({
      key,
      type: 'standard' as const,
      ...layout,
    })
  )

  const customLayouts = Object.entries(customLayoutsRegistry).map(
    ([key, layout]) => ({
      key,
      type: 'custom' as const,
      ...layout,
    })
  )

  return [...standardLayouts, ...customLayouts]
}

export async function getPageComponent(
  slug: string
): Promise<React.ComponentType | null> {
  const normalizedSlug = slug === '' ? 'home' : slug
  try {
    // Dynamically import the Page.tsx component based on the slug
    // This assumes a structure like src/content/[slug]/Page.tsx
    const pageModule = await import(`@/content/${normalizedSlug}/Page`)
    return pageModule.default
  } catch {
    console.error(`Failed to load page component for slug: ${normalizedSlug}`)
    return null
  }
}

// Re-export demoNavigation for convenience
export { demoNavigation }
