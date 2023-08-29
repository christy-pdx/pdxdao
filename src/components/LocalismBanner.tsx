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
        PDX DAO is looking for speakers and attendees to join us in Portland for <strong>A General Forum on Ethereum Localism</strong>, Friday October 13th - Monday
        October 16th, 2023.
      </Text>
      <ButtonLink
        href="/localism"
        whiteSpace="nowrap"
        me={8}
        bg="transparent"
        border="2px"
        borderColor="body"
        color="body"
      >
        Learn more
      </ButtonLink>
    </Flex>
  </Flex>
)
