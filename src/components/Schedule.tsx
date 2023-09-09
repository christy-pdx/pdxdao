import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'

export const Schedule = () => (
  <Flex
    id="schedule"
    direction="column"
    p={16}
    maxW="min(100vw, var(--chakra-sizes-container-xl))"
    mx="auto"
    bg="url(/assets/schedule-bg.png)"
    position="relative"
    isolation="isolate"
    sx={{ '*': { fontFamily: 'schedule !important' } }}
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
    <Grid
      templateAreas={{
        lg: `
          "pre pre forum forum forum"
          "wed thurs fri sat sun"
          "wedSlot1 thursSlot1 friSlot1 satSlot1 sunSlot1"
          "wedSlot2 thursSlot2 friSlot2 satSlot2 sunSlot2"
          "wedSlot3 thursSlot3 friSlot3 satSlot3 sunSlot3"
          "wedSlot4 thursSlot4 friSlot4 satSlot4 sunSlot4"
        `,
        sm: `
          "pre pre pre pre pre pre"
          "wed wed wed thurs thurs thurs"
          "wedSlot1 wedSlot1 wedSlot1 thursSlot1 thursSlot1 thursSlot1"
          "wedSlot2 wedSlot2 wedSlot2 thursSlot2 thursSlot2 thursSlot2"
          "wedSlot3 wedSlot3 wedSlot3 thursSlot3 thursSlot3 thursSlot3"
          "wedSlot4 wedSlot4 wedSlot4 thursSlot4 thursSlot4 thursSlot4"
          "forum forum forum forum forum forum"
          "fri fri sat sat sun sun"
          "friSlot1 friSlot1 satSlot1 satSlot1 sunSlot1 sunSlot1"
          "friSlot2 friSlot2 satSlot2 satSlot2 sunSlot2 sunSlot2"
          "friSlot3 friSlot3 satSlot3 satSlot3 sunSlot3 sunSlot3"
          "friSlot4 friSlot4 satSlot4 satSlot4 sunSlot4 sunSlot4"
        `,
        base: `
          "pre"
          "wed" "wedSlot1" "wedSlot2" "wedSlot3" "wedSlot4"
          "thurs" "thursSlot1" "thursSlot2" "thursSlot3" "thursSlot4"
          "forum"
          "fri" "friSlot1" "friSlot2" "friSlot3" "friSlot4"
          "sat" "satSlot1" "satSlot2" "satSlot3" "satSlot4"
          "sun" "sunSlot1" "sunSlot2" "sunSlot3" "sunSlot4"
        `,
      }}
      sx={{
        td: { textAlign: 'center', p: 2, borderColor: 'black' },
        '&>p, &>div': { p: 2 },
        p: { m: 0 },
      }}
    >
      {/* PRE-FORUM */}
      <Text
        gridArea="pre"
        textTransform="uppercase"
        textAlign="center"
        fontWeight="bold"
        border="2px"
        background="whiteAlpha.800"
      >
        Pre-forum - RSVP required
      </Text>
      <Text
        gridArea="wed"
        fontWeight="bold"
        textTransform="uppercase"
        borderLeft="2px"
        borderRight={{ base: '2px', sm: '1px' }}
        borderBottom="2px"
        textAlign="center"
        bg="alphaGreen"
      >
        11 Wednesday
      </Text>
      <Text
        gridArea="thurs"
        borderRight="2px"
        borderLeft={{ base: '2px', sm: 0 }}
        bg="alphaGreen"
        textAlign="center"
        fontWeight="bold"
        borderTop={{ base: '2px', sm: 0 }}
        borderBottom="2px"
      >
        12 Thursday
      </Text>
      <Text
        gridArea="wedSlot1"
        fontWeight="bold"
        bg="alphaGreenYellow"
        borderLeft="2px"
        borderRight={{ base: '2px', sm: '1px' }}
        borderBottom="1px"
        textAlign="center"
      >
        urban ecology trek
        <Text fontWeight="normal" as="span" display="block">
          Forest Park
        </Text>
      </Text>
      <Text
        gridArea="thursSlot1"
        bg="alphaGreenYellow"
        textAlign="center"
        fontWeight="bold"
        borderRight="2px"
        borderBottom="1px"
        borderLeft={{ base: '2px', sm: 0 }}
      >
        Kailash Ecovillage tour
      </Text>
      <Box
        gridArea="wedSlot2"
        bg="alphaGreen"
        textAlign="center"
        borderRight={{ base: '2px', sm: '1px' }}
        borderLeft="2px"
        borderBottom={{ base: 0, sm: '2px' }}
      >
        <Text>
          <b>Schelling Point</b> @ Green
        </Text>
        <Text>Anchors PDX</Text>
      </Box>
      <Box
        gridArea="thursSlot2"
        bg="alphaGreenYellow"
        textAlign="center"
        borderRight="2px"
        borderBottom="1px"
        borderLeft={{ base: '2px', sm: 0 }}
      >
        <Text fontWeight="bold">urban farm work party</Text>
        <Text>Tryon Life Community Farm</Text>
      </Box>
      <Text
        gridArea="thursSlot3"
        bg="alphaGreen"
        textAlign="center"
        borderBottom="2px"
        borderRight="2px"
        borderLeft="2px"
        p={2}
      >
        <b>Schelling Point</b> @ Tryon
      </Text>
      {/* FORUM */}
      <Box
        gridArea="forum"
        textTransform="uppercase"
        textAlign="center"
        fontWeight="bold"
        border="2px"
        borderLeft={{ base: '2px', lg: 0 }}
        background="whiteAlpha.800"
        mt={{ lg: 0, base: 4 }}
      >
        <Text>Forum</Text>
      </Box>
      <Text
        gridArea="fri"
        borderRight="1px"
        borderBottom="2px"
        textAlign="center"
        fontWeight="bold"
        bg="alphaOrange"
        borderLeft={{ base: '2px', lg: 0 }}
      >
        🌙 13 Friday
      </Text>
      <Text
        gridArea="sat"
        borderLeft={{ base: '2px', sm: 0 }}
        borderRight={{ base: '2px', sm: '1px' }}
        borderBottom="2px"
        textAlign="center"
        fontWeight="bold"
        bg="alphaOrange"
      >
        14 Saturday
      </Text>
      <Text
        gridArea="sun"
        textAlign="center"
        fontWeight="bold"
        bg="alphaOrange"
        borderRight="2px"
        borderBottom="2px"
        borderLeft={{ base: '2px', sm: 0 }}
      >
        15 Sunday
      </Text>
      <Box
        gridArea="friSlot1"
        bg="alphaYellow"
        borderBottom="1px"
        borderRight={{ base: '2px', sm: '1px' }}
        borderLeft={{ base: '2px', lg: 0 }}
        textAlign="center"
      >
        <Text fontWeight="bold">panel</Text>
        <Text>• Eth Localism Experiments</Text>
      </Box>
      <Box
        gridArea="satSlot1"
        bg="alphaYellow"
        textAlign="center"
        borderBottom="1px"
        borderRight={{ base: '2px', sm: '1px' }}
        borderLeft={{ base: '2px', sm: 0 }}
      >
        <Text fontWeight="bold">panels</Text>
        <Text>• Historical Localism/Commons</Text>
        <Text>• Cosmolocal Systems</Text>
      </Box>
      <Box
        gridArea="sunSlot1"
        bg="alphaYellow"
        textAlign="center"
        borderRight="2px"
        borderBottom="1px"
        borderLeft={{ base: '2px', sm: 0 }}
      >
        <Text fontWeight="bold">panels</Text>
        <Text>• Practical Eth Localism</Text>
        <Text>• TBD—Emergent</Text>
      </Box>
      <Box
        gridArea="friSlot2"
        bg="alphaYellow"
        borderBottom="1px"
        borderRight={{ base: '2px', sm: '1px' }}
        borderLeft={{ base: '2px', lg: 0 }}
        textAlign="center"
      >
        <Text fontWeight="bold">speaker sessions</Text>
        <Text>• Emaline Friedman, Ph.D., Neighbourhoods</Text>
        <Text>• Tony Lai, Mothertree Labs</Text>
      </Box>
      <Box
        gridArea="satSlot2"
        bg="alphaYellow"
        borderBottom="1px"
        borderRight={{ base: '2px', sm: '1px' }}
        borderLeft={{ base: '2px', sm: 0 }}
        textAlign="center"
      >
        <Text fontWeight="bold">speaker sessions</Text>
        <Text>• Howard Silverman, PNCA</Text>
        <Text>• Giulio Quarta, Crypto Commons Hub</Text>
        <Text>• TBA</Text>
      </Box>
      <Box
        gridArea="sunSlot2"
        bg="alphaYellow"
        textAlign="center"
        borderRight="2px"
        borderBottom="1px"
        borderLeft={{ base: '2px', sm: 0 }}
      >
        <Text fontWeight="bold">speaker sessions</Text>
        <Text>• Alex Marx, Optimism</Text>
        <Text>• TBA</Text>
        <Text>• TBA</Text>
      </Box>
      <Text
        gridArea="friSlot3"
        textAlign="center"
        bg="alphaOrange"
        borderRight={{ base: '2px', sm: '1px' }}
        borderBottom="2px"
        borderLeft={{ base: '2px', lg: 0 }}
      >
        <b>👻 Friday the 13th activities</b>
        Various locations—TBD
      </Text>
      <Text
        gridArea="satSlot3"
        textAlign="center"
        bg="alphaYellow"
        fontWeight="bold"
        borderRight={{ base: '2px', sm: '1px' }}
        borderBottom="2px"
        borderLeft={{ base: '2px', sm: 0 }}
        mb="0 !important"
      >
        unconference
      </Text>
      <Text
        gridArea="sunSlot3"
        textAlign="center"
        bg="alphaYellow"
        fontWeight="bold"
        borderRight="2px"
        borderBottom="1px"
        borderLeft={{ base: '2px', sm: 0 }}
      >
        unconference
      </Text>
      <Text
        gridArea="sunSlot4"
        border="2px"
        borderTop={0}
        bg="alphaOrange"
        textAlign="center"
      >
        <b>closing party</b> @ TBD
      </Text>
    </Grid>
  </Flex>
)
