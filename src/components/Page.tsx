import { FC } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { PageMetadata } from '@/components'

interface PageProps extends BoxProps {
  title: string
  description: string
  image?: string
}
export const Page: FC<PageProps> = ({
  title,
  description,
  image,
  children,
  ...boxProps
}) => (
  <main>
    <PageMetadata title={title} description={description} image={image} />
    <Box mx="auto" pb={12} id="main-content" {...boxProps}>
      {children}
    </Box>
  </main>
)
