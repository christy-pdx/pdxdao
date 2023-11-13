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
  speaker: string
  src: string
  link: string
}

const audioData: Array<AudioTrack[]> = [
  [
    {
      title: 'Introduction by PDX DAO',
      speaker: 'with haughtvalue, christypdx, vengi, Wackerow, MacksWolf, Exeunt, Josh and Hodlon',
      src: '/assets/audio/gfel-day-1-intro.m4a',
      link: '/assets/audio/slides/PDX DAO - GFEL Introduction.pdf',
    },
    {
      title: 'Panel: Experiments in Blockchain Localism',
      speaker: 'with Hodlon, Bestape, Deborah Simpier, Scott Morris and Sov',
      src: '/assets/audio/gfel-day-1-panel-experiments-in-blockchain-localism.m4a',
      link: '',
    },
    {
      title: 'Breadchain Cooperative',
      speaker: 'Giulio Quarta',
      src: '/assets/audio/gfel-day-1-giulio-quarta-breadchain-and-primer-in-rational-optimism.m4a',
      link: '/assets/audio/slides/Giulio Quarta - Breadchain Cooperative.pdf',
    },
    {
      title: 'Ecocoins and Ecoweaving',
      speaker: 'Open Tony',
      src: '/assets/audio/gfel-day-1-open-tony-ecocoins-and-ecoweaving.m4a',
      link: '/assets/audio/slides/Open Tony - Ecoweaving.pdf',
    },
  ],
  [
    {
      title: 'Civic Innovation for People and Planet',
      speaker: 'Benjamin Life',
      src: '/assets/audio/gfel-day-2-benjamin-life-civic-innovation-for-people-and-planet.m4a',
      link: '/assets/audio/slides/Benjamin Life - Civic Innovation For People and Planet.pdf',
    },
    {
      title: 'Local Chains for Social Coordination',
      speaker: 'Emaline Friedman',
      src: '/assets/audio/gfel-day-2-emaline-friedman-local-chains-for-social-coordination.m4a',
      link: '/assets/audio/slides/Emaline Friedman - Neighbourhoods.pdf',
    },
    {
      title: 'Fishbowl Panel: Regenerative Financial Systems',
      speaker: 'with Owocki, Giulio Quarta, vengi, Felix Fritsch, Jeff Emmett and more!',
      src: '/assets/audio/gfel-day-2-fishbowl-panel-regenerative-financial-systems.m4a',
      link: '',
    },
    {
      title: 'Regional Food Systems: Recollections as Provocations',
      speaker: 'Howard Silverman',
      src: '/assets/audio/gfel-day-2-howard-silverman-recollections-and-provocations.m4a',
      link: '/assets/audio/slides/Howard SIlverman - Recollections and Provocations.pdf',
    },
  ],
  [
    {
      title: 'CoFi - Collaborative Finance',
      speaker: 'Giulio Quarta',
      src: '/assets/audio/gfel-day-3-giulio-quarta.m4a',
      link: '/assets/audio/slides/Giulio Quarta - CoFi - Collaborative Finance.pdf',
    },
    {
      title:
        "Learning from Nature's Greatest Evolutionary Algorithms",
      speaker: 'Jeff Emmett',
      src: '/assets/audio/gfel-day-3-jeff-emmett-presentation.m4a',
      link: '/assets/audio/slides/Jeff Emmett - MycoFi Learning From Natures Greatest Algorithms.pdf',
    },
    {
      title: 'Fishbowl Panel: Cosmolocal Coordination',
      speaker: 'with BorrowLucid, Ken Cenna, Anna Kaic, Benjamin Life and more!',
      src: '/assets/audio/gfel-day-3-panel.m4a',
      link: '',
    },
    {
      title: 'Regenerative Finance in Practice',
      speaker: 'Sayer Tindall',
      src: '/assets/audio/gfel-day-3-sayer-tindall-regenerative-finance-in-practice.m4a',
      link: '/assets/audio/slides/Sayer Tindall - From DeFi to Real-World Impact.pdf',
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
        <Box bg="yellow" p="4" fontWeight="bold" textAlign="center">
          ⚠️ The General Forum on Ethereum Localism has concluded! You can find
          all the audio recordings of the panels and talks given here.
        </Box>
        <Box>
          <Text fontSize="xl">
            Our intention for this convening was to create a container where the
            Ethereum community could elaborate for itself, in a plurality of
            directions, what an experimentalism of the city can mean and look
            like for web3.
          </Text>
          <ButtonLink href="https://mirror.xyz/ethpdx.eth/kjpsLAAC2Si0XDmr_aFp0F5esPNH4DoPB4lOTlFbR5M">
            Read More
          </ButtonLink>
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
                {day.map(({ title, speaker, src, link }, j) => {
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
                        <br/>
                        {speaker}
                        <br/>
                        <Link
                          href={link}
                          isExternal
                        >
                          View Slides
                        </Link>
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
          <Text fontWeight="bold">Venue: BridgeSpace Commons</Text>
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
