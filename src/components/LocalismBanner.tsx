import { Flex, Text } from '@chakra-ui/react'
import { ButtonLink } from '@/components'

export const LocalismBanner = () => (
  <Flex justify="center" bg="secondary" boxShadow="lg">
    <Flex
      py={4}
      alignItems="center"
      position="relative"
      direction={{ base: 'column', sm: 'row' }}
      rowGap={6}
      maxW="max"
    >
      <Text px={8} m={0} textAlign={{ base: 'center', sm: 'start' }}>
        The October 2023 <strong>General Forum on Ethereum Localism</strong> was a success!
        Audio recordings are available for those who couldn't be there.
      </Text>
      <ButtonLink
        href="/localism/"
        whiteSpace="nowrap"
        me={8}
        bg="transparent"
        border="2px"
        borderColor="body"
        color="body"
      >
        View recap
      </ButtonLink>
    </Flex>
  </Flex>
)
