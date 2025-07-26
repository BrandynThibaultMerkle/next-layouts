import { PageConfig } from '@/types'
import { getLayoutComponent, getCustomLayoutComponent } from '@/config/pages'

interface LayoutRendererProps {
  pageConfig: PageConfig
  pageComponent?: React.ComponentType | null
  children?: React.ReactNode
}

export function LayoutRenderer({
  pageConfig,
  pageComponent: PageComponent,
  children,
}: LayoutRendererProps) {
  const customContent = PageComponent ? <PageComponent /> : children

  if (pageConfig.layout === 'custom' && pageConfig.customLayout) {
    const customLayoutConfig = getCustomLayoutComponent(
      pageConfig.customLayout.component
    )

    if (customLayoutConfig) {
      const CustomLayoutComponent = customLayoutConfig.component
      return (
        <CustomLayoutComponent
          pageConfig={{
            ...pageConfig,
            ...(pageConfig.customLayout.props || {}),
          }}>
          {customContent}
        </CustomLayoutComponent>
      )
    }

    console.warn(
      `Custom layout "${pageConfig.customLayout.component}" not found in registry. Using default layout.`
    )
  }

  const layoutConfig = getLayoutComponent(pageConfig.layout)
  const LayoutComponent = layoutConfig.component

  return (
    <LayoutComponent pageConfig={pageConfig}>{customContent}</LayoutComponent>
  )
}
