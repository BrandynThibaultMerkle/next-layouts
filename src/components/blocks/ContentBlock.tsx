interface ContentBlockProps {
  content: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  textAlign?: 'left' | 'center' | 'right'
}

export function ContentBlock({
  content,
  maxWidth = 'lg',
  textAlign = 'left',
}: ContentBlockProps) {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <section className='py-16 px-4'>
      <div
        className={`container mx-auto ${maxWidthClasses[maxWidth]} ${textAlignClasses[textAlign]}`}>
        <div
          className='prose prose-gray dark:prose-invert max-w-none'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  )
}
