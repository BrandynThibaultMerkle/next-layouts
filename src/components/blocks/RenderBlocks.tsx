import { BlockConfig } from '@/types'
import { FeaturesBlock } from './FeaturesBlock'
import { ContentBlock } from './ContentBlock'
import { ContactFormBlock } from './ContactFormBlock'

interface RenderBlocksProps {
  blocks?: BlockConfig[]
}

export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className='space-y-16'>
      {blocks.map((block) => {
        switch (block.type) {
          case 'features':
            return (
              <FeaturesBlock
                key={block.id}
                {...(block.props as unknown as React.ComponentProps<
                  typeof FeaturesBlock
                >)}
              />
            )
          case 'content':
            return (
              <ContentBlock
                key={block.id}
                {...(block.props as unknown as React.ComponentProps<
                  typeof ContentBlock
                >)}
              />
            )
          case 'contact-form':
            return (
              <ContactFormBlock
                key={block.id}
                {...(block.props as unknown as React.ComponentProps<
                  typeof ContactFormBlock
                >)}
              />
            )
          default:
            console.warn(`Unknown block type: ${block.type}`)
            return null
        }
      })}
    </div>
  )
}
