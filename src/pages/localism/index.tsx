import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { ButtonLink, Link, Page } from '@/components'
import { AiOutlineSearch } from 'react-icons/ai'

type AudioTrack = {
  title: string
  src: string
}

const audioData: Array<AudioTrack[]> = [
  [
    {
      title: 'Introduction',
      src: '/assets/audio/gfel-day-1-intro.m4a',
    },
    {
      title: 'Panel: Experiments in Blockchain Localism',
      src: '/assets/audio/gfel-day-1-panel-experiments-in-blockchain-localism.m4a',
    },
    {
      title: 'Giulio Quarta: Breadchain Cooperative',
      src: '/assets/audio/gfel-day-1-giulio-quarta-breadchain-and-primer-in-rational-optimism.m4a',
    },
    {
      title: 'Open Tony: Ecocoins and Ecoweaving',
      src: '/assets/audio/gfel-day-1-tony-lei-ecocoins-and-ecoweaving.m4a',
    },
  ],
  [
    {
      title: 'Benjamin Life: Civic Innovation for People and Planet',
      src: '/assets/audio/gfel-day-2-benjamin-life-civic-innovation-for-people-and-planet.m4a',
    },
    {
      title: 'Emaline Friedman: Local Chains for Social Coordination',
      src: '/assets/audio/gfel-day-2-emaline-friedman-local-chains-for-social-coordination.m4a',
    },
    {
      title: 'Fishbowl Panel: Regenerative Financial Systems',
      src: '/assets/audio/gfel-day-2-fishbowl-panel-regenerative-financial-systems.m4a',
    },
    {
      title: 'Howard Silverman: Recollections and Provocations',
      src: '/assets/audio/gfel-day-2-howard-silverman-recollections-and-provocations.m4a',
    },
  ],
  [
    {
      title: 'Giulio Quarta: CoFi - Collaborative Finance',
      src: '/assets/audio/gfel-day-3-giulio-quarta.m4a',
    },
    {
      title:
        "Jeff Emmett: Learning from Nature's Greatest Evolutionary Algorithms",
      src: '/assets/audio/gfel-day-3-jeff-emmett-presentation.m4a',
    },
    {
      title: 'Panel: Cosmolocal Coordination',
      src: '/assets/audio/gfel-day-3-panel.m4a',
    },
    {
      title: 'Sayer Tindall: Regenerative Finance in Practice',
      src: '/assets/audio/gfel-day-3-sayer-tindall-regenerative-finance-in-practice.m4a',
    },
  ],
]

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
      <Flex direction="column" maxW="720px" gap={12} pt={12} px={4}>
        <Box>
          <Text fontSize="xl">
            Our intention for this convening was to create a container where the
            Ethereum community can elaborate for itself, in a plurality of
            directions, what an experimentalism of the city can mean and look
            like for web3.
          </Text>
          <ButtonLink href="https://mirror.xyz/ethpdx.eth/kjpsLAAC2Si0XDmr_aFp0F5esPNH4DoPB4lOTlFbR5M">
            Read More
          </ButtonLink>
        </Box>
        <Box bg="yellow" p="4" fontWeight="bold" textAlign="center">
          ⚠️ The General Forum on Ethereum Localism has concluded! You can find
          all the audio recordings of the talks given here.
        </Box>
        <Box>
          <Heading mb={4} id="audio">
            Recap Audio Recordings
          </Heading>
          <Flex direction="column" gap="8">
            {audioData.map((day, i) => (
              <Flex key={i} direction="column" gap="4">
                <Heading as="h3" mb={2} fontFamily="body" fontSize="2xl">
                  Day {i + 1}
                </Heading>
                {day.map(({ title, src }, j) => {
                  const BORDER = '1px'
                  const BORDER_COLOR = 'blackAlpha.300'
                  return (
                    <Flex key={j} direction="column" justify="space-between">
                      <Box w="full" position="relative">
                        <audio controls style={{ width: '100%' }}>
                          <source src={src} type="audio/mp4" />
                          Your browser does not support the audio element.
                        </audio>
                        <Box
                          position="absolute"
                          insetInline="0"
                          top="50%"
                          bottom="0"
                          borderInline={BORDER}
                          zIndex="-1"
                          borderColor={BORDER_COLOR}
                        />
                      </Box>
                      <Text
                        px="4"
                        py="2"
                        fontWeight="bold"
                        border={BORDER}
                        borderTop="none"
                        borderColor={BORDER_COLOR}
                        borderBottomRadius="xl"
                      >
                        {title}
                      </Text>
                    </Flex>
                  )
                })}
              </Flex>
            ))}
          </Flex>
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
        </Box>
        <Box>
          <Heading as="h2" textStyle="h2" mb={4}>
            2023 Schedule
          </Heading>
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
                _groupHover={{
                  opacity: 1,
                  transition: 'opacity 0.2s ease-out',
                }}
              />
            </Box>
          </Link>
        </Box>
        <Link href="/localism/safety/">Safety and Code of Conduct</Link>
      </Flex>
    </Flex>
  </Page>
)

export default Localism
