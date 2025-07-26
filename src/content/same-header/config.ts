import { PageConfig } from '@/types'
import { demoNavigation } from '@/config/navigation'

export const sameHeaderPageConfig: PageConfig = {
  slug: 'same-header',
  layout: 'landing',
  meta: {
    title: 'Same Header Demo - Dynamic Layouts',
    description:
      'Notice how the header stays exactly the same when using the same layout',
  },
  header: {
    variant: 'expanded',
    navigation: demoNavigation,
    buttons: [
      { label: 'View Demo', href: '/same-header', variant: 'primary' },
      {
        label: 'GitHub',
        href: 'https://github.com/BrandynThibaultMerkle/next-layouts',
        variant: 'outline',
      },
    ],
    showAuth: false,
  },
  hero: {
    type: 'simple',
    title: 'Same Header Configuration',
    subtitle: 'No Layout Shift',
    description:
      'This page uses the exact same header configuration as the home page. Notice how there is no layout shift when navigating between pages - the header stays perfectly consistent.',
  },
  footer: {
    variant: 'default',
    showSocial: true,
    showNewsletter: false,
  },
}
