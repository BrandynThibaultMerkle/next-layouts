# Dynamic Layouts for Next.js

A powerful, config-driven layout system for Next.js that allows you to create unique page experiences without writing repetitive code. Inspired by Payload CMS's dynamic approach but implemented as a lightweight, TypeScript-first solution.

## 🚀 Features

- **Config-Driven Pages**: Define page layouts, headers, heroes, and content through TypeScript configuration files
- **Individual Page Components**: Each page has its own React component and configuration file
- **Multiple Layout Templates**: Choose from minimal, default, landing page, or create custom layouts
- **Reusable Components**: Mix and match headers, heroes, content blocks, and footers
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Performance Optimized**: Static generation with dynamic capabilities
- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [...slug]/         # Dynamic catch-all route
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Shared components
│   ├── blocks/           # Content block components
│   ├── Button.tsx        # Reusable button component
│   ├── Header.tsx        # Configurable header
│   ├── Hero.tsx          # Hero section variants
│   └── Footer.tsx        # Footer variants
├── config/               # Configuration files
│   └── pages.ts          # Central page configurations (imports from individual pages)
├── layouts/              # Layout templates
│   ├── DefaultLayout.tsx
│   ├── MinimalLayout.tsx
│   ├── LandingLayout.tsx
│   └── LayoutRenderer.tsx
├── pages/                # Individual page folders
│   ├── home/
│   │   ├── Page.tsx      # Custom React component
│   │   └── config.ts     # Page configuration
│   ├── about/
│   │   ├── Page.tsx
│   │   └── config.ts
│   └── contact/
│       ├── Page.tsx
│       └── config.ts
├── types/                # TypeScript definitions
│   └── index.ts
└── utils/                # Utility functions
    └── cn.ts
```

## 🛠️ Getting Started

### Installation

1. **Clone and install dependencies:**

   ```bash
   git clone <your-repo>
   cd next-layouts
   npm install
   ```

2. **Install additional required dependencies:**

   ```bash
   npm install clsx tailwind-merge
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

### Creating Your First Dynamic Page

1. **Create a new page folder in `src/pages/`:**

   ```bash
   mkdir src/pages/my-page
   ```

2. **Create the page component (`src/pages/my-page/Page.tsx`):**

   ```typescript
   export default function MyPage() {
     return (
       <div className='py-16 px-4'>
         <div className='container mx-auto text-center max-w-4xl'>
           <h2 className='text-3xl md:text-4xl font-bold mb-6'>
             My Custom Page
           </h2>
           <p className='text-lg text-muted-foreground'>
             This content comes from the Page.tsx component!
           </p>
         </div>
       </div>
     )
   }
   ```

3. **Create the page configuration (`src/pages/my-page/config.ts`):**

   ```typescript
   import { PageConfig } from '@/types'

   export const myPageConfig: PageConfig = {
     slug: 'my-page',
     layout: 'default',
     meta: {
       title: 'My Page Title',
       description: 'Page description for SEO',
     },
     header: {
       variant: 'default',
       navigation: [
         { label: 'Home', href: '/' },
         { label: 'About', href: '/about' },
       ],
       buttons: [{ label: 'Contact', href: '/contact', variant: 'primary' }],
     },
     hero: {
       type: 'simple',
       title: 'Welcome to My Page',
       description: 'This page was created with configuration!',
     },
     footer: {
       variant: 'default',
       showSocial: true,
     },
   }
   ```

4. **Import the config in `src/config/pages.ts`:**

   ```typescript
   import { myPageConfig } from '@/pages/my-page/config'

   export const pagesConfig: PagesConfig = {
     // ... existing config
     pages: [
       homePageConfig,
       aboutPageConfig,
       contactPageConfig,
       myPageConfig, // Add your new page here
     ],
   }
   ```

5. **Access your page at `/my-page`** - it will automatically be generated!

## 📚 Configuration Guide

### Page Structure

Each page in `src/pages/` contains:

- **`Page.tsx`**: Custom React component for page-specific content
- **`config.ts`**: Configuration for layout, header, hero, blocks, and footer

### Page Configuration

Each page is defined by a `PageConfig` object with the following structure:

```typescript
interface PageConfig {
  slug: string // URL slug
  layout: 'default' | 'minimal' | 'landing' | 'blog' | 'custom'
  meta: PageMeta // SEO metadata
  header?: HeaderConfig // Header configuration
  hero?: HeroConfig // Hero section
  blocks?: BlockConfig[] // Content blocks
  footer?: FooterConfig // Footer configuration
  customLayout?: CustomLayoutConfig
}
```

### Available Layouts

1. **Default Layout**: Standard layout with header, main content, and footer
2. **Minimal Layout**: Simplified version with minimal header and footer
3. **Landing Layout**: Optimized for marketing pages with overlapping header
4. **Custom Layout**: Define your own layout component

### Content Combination

The system automatically combines:

- **Configuration-driven elements**: Header, hero, footer, and content blocks from `config.ts`
- **Custom content**: Your React component from `Page.tsx`
- **Layout wrapper**: The appropriate layout template

## 🎨 Customization

### Adding New Block Types

1. **Create the component in `src/components/blocks/`:**

   ```typescript
   // src/components/blocks/MyCustomBlock.tsx
   interface MyCustomBlockProps {
     title: string
     items: string[]
   }

   export function MyCustomBlock({ title, items }: MyCustomBlockProps) {
     return (
       <section className='py-16'>
         <h2>{title}</h2>
         <ul>
           {items.map((item) => (
             <li key={item}>{item}</li>
           ))}
         </ul>
       </section>
     )
   }
   ```

2. **Register it in `RenderBlocks.tsx`:**

   ```typescript
   case 'my-custom':
     return <MyCustomBlock key={block.id} {...block.props} />
   ```

3. **Use it in your page config:**

   ```typescript
   blocks: [
     {
       type: 'my-custom',
       id: 'custom-section',
       props: {
         title: 'My Custom Section',
         items: ['Item 1', 'Item 2', 'Item 3'],
       },
     },
   ]
   ```

### Creating Custom Layouts

1. **Create your layout component:**

   ```typescript
   // src/layouts/MyCustomLayout.tsx
   import { PageConfig } from '@/types'

   interface MyCustomLayoutProps {
     pageConfig: PageConfig
     children?: React.ReactNode
   }

   export function MyCustomLayout({
     pageConfig,
     children,
   }: MyCustomLayoutProps) {
     return (
       <div className='custom-layout'>{/* Your custom layout structure */}</div>
     )
   }
   ```

2. **Register in `LayoutRenderer.tsx`:**

   ```typescript
   case 'my-custom':
     return <MyCustomLayout pageConfig={pageConfig}>{children}</MyCustomLayout>
   ```

## 🎯 Best Practices

1. **Modular approach**: Keep page-specific code in individual page folders
2. **Separation of concerns**: Use config for layout, Page.tsx for custom content
3. **Reuse components**: Leverage the block system for consistent design
4. **Type safety**: Always use the provided TypeScript interfaces
5. **Performance**: Use static generation for better performance
6. **SEO**: Configure proper meta tags for each page

## 📦 Examples

Check out the example pages included:

- **Home** (`src/pages/home/`): Landing page layout with custom content
- **About** (`src/pages/about/`): Default layout with informational content
- **Contact** (`src/pages/contact/`): Minimal layout with custom contact form

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Payload CMS](https://payloadcms.com/) dynamic layout approach
- Built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

Made with ❤️ for the Next.js community
