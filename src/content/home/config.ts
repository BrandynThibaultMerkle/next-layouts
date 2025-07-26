import { PageConfig } from '@/types'
import { demoNavigation } from '@/config/navigation'

export const homePageConfig: PageConfig = {
  slug: 'home',
  layout: 'landing',
  meta: {
    title: 'Dynamic Layouts Demo - Next.js',
    description:
      'Experience the power of configuration-driven layouts in Next.js',
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
    title: 'Dynamic Layout System',
    subtitle: 'Next.js Demo',
    description:
      'Click through the navigation to see how different layouts can share headers or completely transform the page experience.',
    buttons: [
      { label: 'Start Demo', href: '/same-header', variant: 'primary' },
      { label: 'Learn More', href: '/different-layout', variant: 'outline' },
    ],
  },
  footer: {
    variant: 'default',
    showSocial: true,
    showNewsletter: false,
  },
}
