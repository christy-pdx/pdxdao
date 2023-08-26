import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { Page } from '@/components'

const Localism = () => (
  <Page title="GFEL" description="A General Forum on Ethereum Localism">
    <Flex direction="column" alignItems="center" justifyContent="center" pb={28}>
      <Box backgroundImage="/assets/gfel_banner-noText.png" backgroundSize="cover" h="420px" w="100%">
        <Text as="h1" textStyle="h1" fontSize="4xl" mt={12} fontFamily="serif" color="white">
          A General Forum on Ethereum Localism
        </Text>
        <Flex p={12} color="white" justifyContent="space-between" alignItems="space-between" w="100%">
          <Text mt={3} fontSize="xl">
            Friday the 13th
          </Text>
          <Text mt={3} fontSize="xl">
            October 2023
          </Text>
          <Text mt={3} fontSize="xl">
            Portland, Ore.
          </Text>
        </Flex>
      </Box>
      <Link target="_blank" rel="noopener noreferrer" href="https://mirror.xyz/ethpdx.eth/kjpsLAAC2Si0XDmr_aFp0F5esPNH4DoPB4lOTlFbR5M">
        <Text mt={6} fontSize="2xl">
          Read the article on Mirror
        </Text>
      </Link>
    </Flex>
  </Page>
)

export default Localism
