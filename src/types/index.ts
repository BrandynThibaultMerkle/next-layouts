export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    image?: string
  }
}

export interface ButtonConfig {
  label: string
  href?: string
  onClick?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  icon?: string
}

export interface HeaderConfig {
  variant: 'minimal' | 'default' | 'expanded'
  logo?: {
    src: string
    alt: string
    href?: string
  }
  navigation?: {
    label: string
    href: string
  }[]
  buttons?: ButtonConfig[]
  showAuth?: boolean
}

export interface HeroConfig {
  type: 'simple' | 'split' | 'video' | 'carousel'
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  backgroundColor?: string
  buttons?: ButtonConfig[]
  media?: {
    type: 'image' | 'video'
    src: string
    alt?: string
  }
}

export interface BlockConfig {
  type: string
  id: string
  props: Record<string, unknown>
}

export interface PageConfig {
  slug: string
  layout: 'default' | 'minimal' | 'landing' | 'blog' | 'custom'
  meta: PageMeta
  header?: HeaderConfig
  hero?: HeroConfig
  blocks?: BlockConfig[]
  footer?: {
    variant: 'minimal' | 'default' | 'expanded'
    showSocial?: boolean
    showNewsletter?: boolean
  }
  customLayout?: {
    component: string
    props?: Record<string, unknown>
  }
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  logo: {
    src: string
    alt: string
    href?: string
  }
  social: {
    twitter?: string
    github?: string
    linkedin?: string
  }
  theme: {
    primaryColor: string
    accentColor: string
  }
}

export interface LayoutComponent {
  component: React.ComponentType<{
    pageConfig: PageConfig
    children?: React.ReactNode
  }>
  name: string
  description?: string
}

export interface LayoutRegistry {
  [layoutName: string]: LayoutComponent
}

export interface PagesConfig {
  site: SiteConfig
  layouts: LayoutRegistry
  pages: PageConfig[]
}
