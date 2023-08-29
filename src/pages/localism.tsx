import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { Page, ButtonLink } from '@/components'

const Localism = () => (
  <Page title="GFEL" description="A General Forum on Ethereum Localism" minH="100vh" pb={32}>
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Box style={{ background: "url(../assets/gfel_banner-noText.png) center center no-repeat rgba(0,0,0,0.5)", backgroundSize: "cover"}} backgroundBlendMode="multiply" minH="420px" w="100%" p={24} position="relative">
        <Flex direction="column" border="2px" borderColor="#05FF00" borderRadius="25px" alignItems="center" justifyContent="center" zIndex={-1}>
          <Text as="h1" textStyle="h1" fontSize="6xl" fontFamily="serif" color="#05FF00">
            A General Forum on <br />Ethereum Localism
          </Text>
          <Flex direction={['column', null, null, 'row']} gap={[0, null, null, 9]} color="#05FF00" justifyContent="center" alignItems="center" w="100%" flexWrap="wrap">
            <Text fontSize="2xl" fontWeight="900">
              Friday the 13th
            </Text>
            <Text fontSize="2xl" fontWeight="900">
              October 2023
            </Text>
            <Text fontSize="2xl" fontWeight="900">
              Portland, Ore.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Flex justify="center" bg="secondary" boxShadow="lg" w="100vw">
        <Flex
          py={4}
          alignItems="center"
          position="relative"
          direction={[ 'column', null, null, 'row' ]}
          rowGap={6}
          maxW="max"
        >
          <Heading>Applications Open</Heading>
          <Text>Read up on the goals and format of the Forum, as well as how to apply.</Text>
          <ButtonLink rel="noopener noreferrer" href="https://mirror.xyz/ethpdx.eth/kjpsLAAC2Si0XDmr_aFp0F5esPNH4DoPB4lOTlFbR5M">
              Read the article on Mirror
          </ButtonLink>
        </Flex>
      </Flex>
      <Flex direction="column" maxW="720px" gap={12}>
        <Box>
          <Heading textStyle="h1">Details and Information for Attendees</Heading>
          <Heading textStyle="h2">Location</Heading>
          <Text><strong>Venue: BridgeSpace</strong></Text>
          <Text>133 SE Madison St, Portland, OR 97214</Text>
          <ButtonLink href="https://goo.gl/maps/E4pmDRBsjC8nRDuM6">View on Google Maps</ButtonLink>
          <Text fontWeight="900">Where to Stay</Text>
          <Text>The venue is very central, on the east side of the Willamette River. Airbnb is a great option and there should be plenty of availabilities in the neighborhoods near the venue (Central Eastside Industrial District (CEID), Hawthorne, Ladd&apos;s Addition, etc)</Text>
        </Box>
        <Box>
          <Heading textStyle="h2">Getting Around</Heading>
          <Text>Portland is filled with walkable neighborhoods, and is also very bikeable. An Uber or Lyft can get you anywhere else in a hurry.</Text>
          <Link href="https://www.pdxbikerentals.com/bicycle-rentals-portland#bike-rentals-portland" target="_blank" rel="noopener noreferrer">Everybody's Bike Rentals</Link>
          <Link href="https://biketownpdx.com/" target="_blank" rel="noopener noreferrer">Biketown</Link>
        </Box>
        <Box>
          <Heading textStyle="h2">Eats, Drinks, and Hangs</Heading>
          <Text>Portland is well-known for its food and generally artisan quality everything.</Text>
          <Text>For quick eats, there are many food cart pods around the city. The closest to the venue being <Link href="https://goo.gl/maps/55CpzWHsHUHZjBXs6" target="_blank" rel="noopener noreferrer">the Asylum</Link></Text>
        </Box>
      </Flex>
    </Flex>
  </Page>
)

export default Localism
