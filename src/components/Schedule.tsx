import {
  Box,
  Flex,
  Heading,
  Table,
  Td,
  Text,
  Thead,
  Tr,
} from '@chakra-ui/react'

const lightGreen = '#CFEDD1af'
const greenYellow = '#BEC26Aaf'
const lightYellow = '#FEF8B8af'
const lightOrange = '#F27200af'
const orange = '#F27200af'

export const Schedule = () => (
  <Flex
    direction="column"
    p={16}
    maxW="min(100vw, var(--chakra-sizes-container-xl))"
    mx="auto"
    bg="url(/assets/schedule-bg.png)"
    position="relative"
    isolation="isolate"
    sx={{ '*': { fontFamily: 'var(--chakra-fonts-schedule)' } }}
  >
    <Box position="absolute" inset={0} bg="whiteAlpha.700" zIndex={-1} />
    <Heading as="h2" textStyle="h2" lineHeight={1.1} letterSpacing="-0.02em">
      A General Forum on Ethereum Localism
    </Heading>
    <Text
      textStyle="h2"
      lineHeight={1.1}
      letterSpacing="-0.02em"
      mb={12}
      fontWeight="bold"
    >
      pre-forum: october 11-12 <br /> forum: october 13-15
    </Text>
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      gap={{ base: 8, lg: 0 }}
      sx={{ td: { textAlign: 'center', p: 2 }, p: { m: 0 } }}
    >
      {/* PRE-FORUM */}
      <Table flex={2}>
        <Thead background="whiteAlpha.800">
          <Td
            colSpan={2}
            textTransform="uppercase"
            textAlign="center"
            border="2px"
          >
            Pre-forum - RSVP required
          </Td>
        </Thead>
        <Tr
          fontWeight="bold"
          textTransform="uppercase"
          border="2px"
          bg={lightGreen}
          h={10}
        >
          <Td borderRight="1px" textAlign="center">
            11 Wednesday
          </Td>
          <Td>12 Thursday</Td>
        </Tr>
        <Tr fontWeight="bold" bg={greenYellow} borderInline="2px">
          <Td borderRight="1px" textAlign="center">
            urban ecology trek
            <Text fontWeight="normal">Forest Park</Text>
          </Td>
          <Td>Kailash Ecovillage tour</Td>
        </Tr>
        <Tr fontWeight="bold" borderInline="2px">
          <Td bg={lightGreen} textAlign="center" borderRight="1px">
            Schelling Point{' '}
            <Text as="span" fontWeight="normal">
              {' '}
              @ Green
            </Text>
            <Text fontWeight="normal">Anchors PDX</Text>
          </Td>
          <Td bg={greenYellow} textAlign="center">
            urban farm work party
            <Text fontWeight="normal">Tryon Life Community Farm</Text>
          </Td>
        </Tr>
        <Tr fontWeight="bold">
          <Td borderTop="2px" borderBottom={0} borderRight="2px" />
          <Td
            bg={lightGreen}
            textAlign="center"
            borderBottom="2px"
            borderRight="2px"
          >
            Schelling Point{' '}
            <Text as="span" fontWeight="normal">
              {' '}
              @ Tryon
            </Text>
          </Td>
        </Tr>
      </Table>
      {/* FORUM */}
      <Table flex={3} borderBottom={0}>
        <Thead background="whiteAlpha.800">
          <Td
            colSpan={3}
            textTransform="uppercase"
            textAlign="center"
            border="2px"
          >
            Forum
          </Td>
        </Thead>
        <Tr
          fontWeight="bold"
          textTransform="uppercase"
          border="2px"
          bg="#f27200af"
          whiteSpace="nowrap"
          h={10}
        >
          <Td borderRight="1px" textAlign="center">
            <Text as="span" mr={2}>
              🌙
            </Text>
            13 Friday
          </Td>
          <Td borderRight="1px" textAlign="center">
            14 Saturday
          </Td>
          <Td>15 Sunday</Td>
        </Tr>
        <Tr bg={lightYellow} borderInline="2px">
          <Td borderRight="1px" textAlign="center">
            <Text as="span" fontWeight="bold">
              panel
            </Text>
            <Text>• Eth Localism Experiments</Text>
          </Td>
          <Td borderRight="1px" textAlign="center">
            <Text fontWeight="bold">panels</Text>
            <Text>• Historical Localism/Commons</Text>
            <Text>• Cosmolocal Systems</Text>
          </Td>
          <Td borderRight="1px" textAlign="center">
            <Text fontWeight="bold">panels</Text>
            <Text>• Practical Eth Localism</Text>
            <Text>• TBD—Emergent</Text>
          </Td>
        </Tr>
        <Tr bg={lightYellow} borderInline="2px">
          <Td borderRight="1px" textAlign="center">
            <Text fontWeight="bold">speaker sessions</Text>
            <Text>• Emaline Friedman, Ph.D., Neighbourhoods</Text>
            <Text>• Tony Lai, Mothertree Labs</Text>
          </Td>
          <Td borderRight="1px" textAlign="center">
            <Text fontWeight="bold">speaker sessions</Text>
            <Text>• Howard Silverman, PNCA</Text>
            <Text>• Giulio Quarta, Crypto Commons Hub</Text>
            <Text>• TBA</Text>
          </Td>
          <Td borderRight="1px" textAlign="center">
            <Text fontWeight="bold">speaker sessions</Text>
            <Text>• Alex Marx, Optimism</Text>
            <Text>• TBA</Text>
            <Text>• TBA</Text>
          </Td>
        </Tr>
        <Tr borderInline="2px">
          <Td
            textAlign="center"
            bg={lightOrange}
            borderRight="1px"
            borderBottom="2px"
          >
            <Text fontWeight="bold">👻 Friday the 13th activities</Text>
            Various locations—TBD
          </Td>
          <Td
            textAlign="center"
            bg={lightYellow}
            fontWeight="bold"
            borderRight="1px"
            borderBottom="2px"
          >
            unconference
          </Td>
          <Td textAlign="center" bg={lightYellow} fontWeight="bold">
            unconference
          </Td>
        </Tr>
        <Tr border="0">
          <Td border="0" />
          <Td border="0" />
          <Td border="2px" borderTop="1px" bg={orange}>
            <Text as="span" fontWeight="bold">
              closing party
            </Text>{' '}
            @ TBD
          </Td>
        </Tr>
      </Table>
    </Flex>
  </Flex>
)
