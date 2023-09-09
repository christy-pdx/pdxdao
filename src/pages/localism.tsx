import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { ButtonLink, Link, Page, Schedule } from '@/components'
import { AiOutlineSearch } from "react-icons/ai"

const Localism = () => (
  <Page title="GFEL" description="A General Forum on Ethereum Localism" pb={32}>
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Box
        style={{
          background:
            'url(../assets/gfel_banner-noText.png) center center no-repeat rgba(0,0,0,0.5)',
          backgroundSize: 'cover',
        }}
        backgroundBlendMode="multiply"
        minH="420px"
        w="100%"
        p={{ base: 12, md: 24 }}
        position="relative"
      >
        <Flex
          direction="column"
          border="2px"
          borderColor="secondary"
          borderRadius="25px"
          alignItems="center"
          justifyContent="center"
          zIndex={-1}
        >
          <Text
            as="h1"
            textStyle="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontFamily="serif"
            color="secondary"
            px={8}
          >
            A General Forum on <br />
            Ethereum Localism
          </Text>
          <Flex
            direction={['column', null, null, 'row']}
            gap={[0, null, null, 9]}
            color="secondary"
            justifyContent="center"
            alignItems="center"
            w="100%"
            flexWrap="wrap"
          >
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
          p={4}
          alignItems="center"
          position="relative"
          justifyContent="center"
          direction={['column', null, null, 'row']}
          gap={6}
          maxW="max"
        >
          <Heading>Applications Open</Heading>
          <Text m={0}>
            Our space is lovely but small, so capacity is limited to 100, so
            please read up on the intention below before applying.
          </Text>
          <ButtonLink href="https://forms.gle/oWP3HZ1hdV8CPWqSA">
            Apply Now
          </ButtonLink>
        </Flex>
      </Flex>
      <Flex direction="column" maxW="720px" gap={12} pt={12} px={4}>
        <Box>
          <Text fontSize="xl">
            Our intention for this convening is to create a container where the
            Ethereum community can elaborate for itself, in a plurality of
            directions, what an experimentalism of the city can mean and look
            like for web3.
          </Text>
          <ButtonLink href="https://mirror.xyz/ethpdx.eth/kjpsLAAC2Si0XDmr_aFp0F5esPNH4DoPB4lOTlFbR5M">
            Read More
          </ButtonLink>
        </Box>
        <Box>
          <Heading as="h2" textStyle="h2">
            Details and Information for Attendees
          </Heading>
        </Box>
        <Box>
          <Heading as="h3" textStyle="h2">
            Location
          </Heading>
          <Text fontWeight="bold">Venue: BridgeSpace</Text>
          <Text>133 SE Madison St, Portland, OR 97214</Text>
          <ButtonLink href="https://goo.gl/maps/E4pmDRBsjC8nRDuM6" mb={6}>
            View on Google Maps
          </ButtonLink>
          <Text fontWeight="900">Where to Stay</Text>
          <Text>
            The venue is very central, on the east side of the Willamette River.
            Airbnb is a great option and there should be plenty of
            availabilities in the neighborhoods near the venue (Central Eastside
            Industrial District (CEID), Hawthorne, Ladd&apos;s Addition, etc)
          </Text>
        </Box>
        <Box>
          <Heading as="h2" textStyle="h2" mb={4}>
            Daily Schedule
          </Heading>
          <Text>
            Planning is in progress 🔮
          </Text>
          <Link
            href="/assets/gfel-schedule.jpeg"
            isExternal
            hideArrow
            data-group
          >
            <Box as="span" position="relative" outline="1px solid blue">
              <Image src="/assets/gfel-schedule.jpeg" alt="Schedule" w="full" />
              <Icon
                opacity={0}
                position="absolute"
                as={AiOutlineSearch}
                bottom={2}
                insetInlineEnd={2}
                fontSize="xl"
                transition="opacity 0.2s ease-out"
                _groupHover={{ opacity: 1, transition: 'opacity 0.2s ease-out' }}
              />
            </Box>
          </Link>
        </Box>
        <Box>
          <Heading as="h2" textStyle="h2">
            Getting Around
          </Heading>
          <Text>
            Portland is filled with walkable neighborhoods, and is also very
            bikeable. An Uber or Lyft can get you anywhere else in a hurry.
          </Text>
          <Flex direction="column">
            <Text fontWeight="bold">Bike Rentals</Text>
            <Link href="https://www.pdxbikerentals.com/bicycle-rentals-portland#bike-rentals-portland">
              Everybody&apos;s Bike Rentals
            </Link>
            <Link href="https://biketownpdx.com/">Biketown</Link>
          </Flex>
        </Box>
        <Box>
          <Heading as="h2" textStyle="h2">
            Eats, Drinks, and Hangs
          </Heading>
          <Text>
            Portland is well-known for its food and generally artisan quality
            everything.
          </Text>
          <Text>
            For quick eats, there are many food cart pods around the city. The
            closest to the venue being{' '}
            <Link
              href="https://goo.gl/maps/55CpzWHsHUHZjBXs6"
              rel="noopener noreferrer"
            >
              the Asylum
            </Link>
          </Text>
        </Box>
        {/* <Box>
          <Heading textStyle="h2">Things to Do</Heading>
          <Text>We&apos;ll coordinate some fun hangs around the city, but feel free to check for local happenings.</Text>
          <Flex direction="column">
            <Link>Music Shows</Link>
            <Link>Art Shows</Link>
            <Link>Hikes</Link>
          </Flex>
        </Box> */}
      </Flex>
    </Flex>
    <Schedule />
  </Page>
)

export default Localism
