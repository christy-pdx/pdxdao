import { FC } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Link } from './Link'

export const Banner: FC = () => (
  <Box bg="body">
    <Flex
      bg="bg"
      color="body"
      direction="column"
      alignItems="center"
      py={8}
      px={[4, null, null, 8]}
      maxW="max"
      mx="auto"
      sx={{ p: { textAlign: 'center' } }}
    >
      <Link href="/localism">
        <Text fontSize="4xl">
          A General Forum on Ethereum Localism
        </Text>
      </Link>
    </Flex>
  </Box>
)
