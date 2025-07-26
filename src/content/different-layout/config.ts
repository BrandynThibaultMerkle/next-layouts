import { PageConfig } from '@/types'
import { demoNavigation } from '@/config/navigation'

export const differentLayoutPageConfig: PageConfig = {
  slug: 'different-layout',
  layout: 'minimal',
  meta: {
    title: 'Minimal Layout Demo - Dynamic Layouts',
    description:
      'Dramatically different layout design while maintaining navigation consistency',
  },
  header: {
    variant: 'minimal',
    navigation: demoNavigation,
    buttons: [{ label: 'Docs', href: '#', variant: 'ghost' }],
    showAuth: false,
  },

  footer: {
    variant: 'minimal',
    showSocial: false,
    showNewsletter: false,
  },
}
