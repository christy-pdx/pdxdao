import { FC } from 'react'
import { Box, Divider, Flex, Icon, Text } from '@chakra-ui/react'
import { ButtonLink, Link, LocalismBanner, Page, Section, TextCardWithIcon } from '@/components'
import { SITE_NAME } from '../../constants'
import { FaMeetup } from 'react-icons/fa'
import { FaRegGrinBeam, FaGlobe } from 'react-icons/fa'
import { GiFlexibleStar } from 'react-icons/gi'

const Home: FC = () => (
  <Page title={SITE_NAME} description="An IRL DAO based in Portland, Oregon">
    <LocalismBanner />
    <Text as="h1" textStyle="h1" mb={16} mt={12}>
      {SITE_NAME}
    </Text>
    <Section maxW="70ch">
      <Text>
        <strong>{SITE_NAME}</strong> is a Portland, Oregon-based coalition of DAOs
        organizing for the advancement of decentralized technologies and protocols
        as a means of creating a more regenerative, peaceful city 🕊️
      </Text>
    </Section>
    <Section
      position="relative"
      mx={0}
      maxW="unset"
      w="100%"
      _before={{
        content: "''",
        position: 'absolute',
        insetInline: 0,
        insetBlock: 0,
        bg: 'gray.100',
        zIndex: -1,
      }}
      py={12}
      mt={24}
      mb={28}
    >
      <Section
        display="flex"
        mb={0}
        flexDirection="column"
        alignItems="center"
        gap={6}
      >
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="2xl">
            The best way to learn more about PDX DAO is to attend EthPDX meetups
            and events
          </Text>{' '}
          <Text>
            There, you'll be able to ask questions and get a sense of the{' '}
            <Text
              as="span"
              fontFamily="cursive"
              fontSize="1.25em"
              _before={{ content: '"✨"' }}
              _after={{ content: '"✨"' }}
            >
              vibe
            </Text>{' '}
            of our community—we'd be glad to meet you!
          </Text>
        </Box>
        <ButtonLink href="https://www.meetup.com/ethpdx/" hideArrow>
          <Icon as={FaMeetup} me={2} fontSize="xl" />
          <Text m={0} as="span">
            Check us out on Meetup
          </Text>
        </ButtonLink>
      </Section>
    </Section>
    <Flex direction="column" gap={16} my={32} sx={{ section: { mb: 0 } }}>
      <Section maxW="max">
        <TextCardWithIcon
          title="How does PDX DAO work?"
          fadeColor="secondary"
          icon={GiFlexibleStar}
        >
          <Text>
          PDX DAO functions as a permissionless coalition of DAOs.
          Anyone can create a DAO in the PDX DAO ecosystem and any DAO can join the ecosystem.
        
          
          Membership eligibility is a social
          construct emergent from the relationships of participating orgs. As we grow as a
          coalition, we will be building out a decentralized governance model with an eye
          toward an on-chain democratic confederation.
          </Text> 
          <Text>
          <Link href="https://twitter.com/EthForestDAO">Ethereal Forest</Link> is currently
          engaging in research and community outreach to work toward this participatory
          cityDAO infrastructure.        
          </Text>
        </TextCardWithIcon>
      </Section>
      <Divider borderColor="body" w={64} mx="auto" />
      <Section maxW="max">
        <TextCardWithIcon
          title="Who joins PDX DAO?"
          fadeColor="primary"
          icon={FaRegGrinBeam}
        >
          <Text>
          Individuals and organizations interested in decentralized governance, community
          organizing, and doing cool shit with web3 technology: DAOs in the Portland Area,
          organizations interested in becoming DAOs, and individuals looking to join DAOs. 
          </Text>
        </TextCardWithIcon>
      </Section>
      <Divider borderColor="body" w={64} mx="auto" />
      <Section maxW="max">
        <TextCardWithIcon
          title="What's a DAO?"
          fadeColor="tertiary"
          icon={FaGlobe}
        >
          <Text>
            A decentralized autonomous organization, or DAO, describes a new way
            for humans to work together toward a shared vision without the need
            for centralized power. A DAO is typically defined by its smart
            contract—the blockchain-based protocol in place for shared
            management of the community treasury—and by the purpose, governance
            structure, and vibe of the community.
          </Text>
          <Text>
            <Link href="https://ethereum.org/dao/">Learn more about DAOs</Link>
          </Text>
        </TextCardWithIcon>
      </Section>
    </Flex>
  </Page>
)

export default Home
