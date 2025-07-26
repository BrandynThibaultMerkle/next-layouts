import { PageConfig } from '@/types'
import { demoNavigation } from '@/config/navigation'

export const modifiedHeaderPageConfig: PageConfig = {
  slug: 'modified-header',
  layout: 'default',
  meta: {
    title: 'Modified Header Demo - Dynamic Layouts',
    description:
      'Same navigation links but different header styling and layout',
  },
  header: {
    variant: 'default',
    navigation: demoNavigation,
    buttons: [
      { label: 'Dashboard', href: '#', variant: 'primary' },
      { label: 'Settings', href: '#', variant: 'outline' },
    ],
    showAuth: true,
  },
  hero: {
    type: 'split',
    title: 'Modified Header Experience',
    subtitle: 'Same Links, Different Style',
    description:
      'This page uses the same navigation links but with a different header variant (default instead of expanded) and includes authentication buttons. The layout is also different.',
  },
  footer: {
    variant: 'minimal',
    showSocial: false,
    showNewsletter: false,
  },
}
