import {
  Divider,
  Flex,
  Heading,
  Icon,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'
import { Link, Page, Section } from '@/components'

const Back: React.FC = () => (
  <Flex py={4}>
    <Link href="/localism/" m={0} display="flex" alignItems="center" gap={2}>
      <Icon as={MdArrowBack} />
      Back to Localism event
    </Link>
  </Flex>
)

const CodeOfConduct: React.FC = () => (
  <Page
    title="GFEL - Safety and Code of Conduct"
    description="Safety and Code of Conduct at the Forum"
    pb={32}
    sx={{ li: { mb: 4 } }}
  >
    <Section>
      <Back />
      <Heading as="h1" textStyle="h1" mb={8} mt={{ base: 12, md: 16 }}>
        Safety and Code of Conduct
      </Heading>
      <Divider mb={16} boxShadow="base" />
    </Section>
    <Section>
      <Heading as="h2" textStyle="h2" mb={6} id="safety-best-practices">
        Safety Best Practices
      </Heading>
      <Text>
        Attendee safety and wellbeing is our top priority. The
        Forum on Ethereum Localism aims to cultivate a space where all feel safe
        to be themselves and lend their unique perspective. In this spirit, we
        ask that all participants keep the following guidelines in mind:
      </Text>
    </Section>

    <Section>
      <Heading as="h3" textStyle="h3" mb={4} id="lost-or-stolen-items">
        Personal Belongings
      </Heading>
      <UnorderedList>
        <ListItem>
          Always be mindful of your personal belongings and aware of your surroundings.
        </ListItem>
        <ListItem>
          PDX DAO assumes no responsibility for lost, stolen, or damaged
          items. We encourage you to treat all personal and shared items
          with care. The venue will only be accessible
          during scheduled event hours, so please plan accordingly.
        </ListItem>
      </UnorderedList>
    </Section>
    <Section>
      <Heading as="h3" textStyle="h3" mb={4} id="personal-safety">
        Personal Safety
      </Heading>
      <UnorderedList>
        <ListItem>
          While the surrounding neighborhood is generally safe, it's always a
          good idea to walk in groups of two or more. Event volunteers are
          always happy to walk with you to your transportation or the next
          event--just let us know.
          <br />
          If you feel unsafe at any time you may return to the warehouse during event hours, or move
          east towards Martin Luther King Jr. Blvd. (the nearest busy street, three blocks from Bridgespace).
        </ListItem>
        <ListItem>
          Being familiar with general de-escalation techniques and
          trauma-informed responses is encouraged (speaking slowly and calmly to an agitated
          person, reflecting their language to demonstrate understanding of
          their point of view, and avoiding physically aggressive body
          postures).
          <br />
          We believe that in most cases, we can all fill our shared needs for
          safety without involvement of the police, and it is also important to
          note that police response times can be delayed. For many
          reasons, it is best to deal with most situations by deescalating if
          possible and moving to a safe place.
        </ListItem>
      </UnorderedList>
    </Section>
    <Section>
      <Heading as="h3" textStyle="h3" mb={4} id="venue">
        Venue
      </Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://opencollective.com/bridgespacecommonspdx">
            Bridgespace Commons
          </Link>{' '}
          is an industrial warehouse and community space in inner eastside
          Portland. Its operations are split between two parties: Bridgespace
          LLC, an affiliate of Seller Engine which owns the property and runs
          business out of the basement, and Bridgespace Commons, a collectively
          run community org which manages events and equitable use of the
          upstairs area.
        </ListItem>
        <ListItem>
          Note: The basement of the warehouse is a daily operational business. While
          our event and associated activity and noise is expected, we still ask that you please be mindful of
          those working downstairs during daytime hours.{' '}
          <em>
            Under no circumstances should attendees go downstairs without
            first speaking to an organizer.
          </em>
        </ListItem>
      </UnorderedList>
    </Section>
    <Section>
      <Heading as="h3" textStyle="h3" mb={4} id="event-contacts">
        Event Contacts
      </Heading>
      <UnorderedList>
        {/* <ListItem>
            In case of any situation where you feel the need to contact the
            organizers, you can reach Christy via Telegram at @christypdx or by phone at 1-714-788-8602, James via Telegram at @exeuntdoteth, and Ven via Telegram at
            @vengist.
          </ListItem> */}
        <ListItem>
          The best way to stay connected generally is through the Telegram group chat, so be sure to{' '}
          <Link href="https://t.me/+3XVnc4PfzRsxMDEx">join the Telegram</Link>
        </ListItem>
      </UnorderedList>
    </Section>
    <Section>
      <Heading as="h3" textStyle="h3" mb={4} id="covid-19-precautions">
        COVID-19 Precautions
      </Heading>
      <UnorderedList>
        <ListItem>
          We're following Federal guidelines for COVID, which are currently
          'business as usual,' so please take the precautions that best suit
          your personal risk level.
        </ListItem>
        <ListItem>
          We'll keep airflow as open as possible to help keep conditions
          safe, and will let folks know if weather or other conditions mean open
          airflow is less accessible.
        </ListItem>
        <ListItem>
          Use of masks inside is not required.
        </ListItem>
        <ListItem>
          Being up-to-date on your Covid-19 vaccine and boosters is encouraged
          but not required.
        </ListItem>
      </UnorderedList>
    </Section>

    <Section>
      <Heading as="h2" textStyle="h2" mb={6} id="code-of-conduct">
        Code of Conduct
      </Heading>
      <Text>
        We value the participation of each member of the community and want all
        attendees to have an enjoyable and fulfilling experience. Accordingly,
        all attendees are expected to show respect and courtesy to one another
        throughout the event.
      </Text>
      <Text>
        To make clear what is expected, all attendees and speakers at GFEL 2023
        are required to abide by this Code of Conduct.{' '}
        <em>
          The Code of Conduct will be enforced throughout the event without
          exception.
        </em>
      </Text>
      <OrderedList sx={{ li: { mb: 4 } }}>
        <ListItem>
          GFEL is a community gathering intended for collaboration and exchange
          of ideas. All attendees will abide by a code of active and continual
          consent in all affairs.
        </ListItem>
        <ListItem>
          Attendees will refrain from harassment of any kind. Harassment
          includes but is not limited to offensive verbal comments, or other
          offensive activity, in person or online in the context of the
          conference related to gender, sexual orientation, physical or mental
          ability, age, socioeconomic status, ethnicity, physical appearance,
          race, religion, sexual images, deliberate intimidation, stalking,
          inappropriate physical contact, and unwelcome sexual attention.
        </ListItem>
        <ListItem>
          Participants asked to stop any harassing behavior are expected to
          comply immediately. If participants fail to comply they will be asked
          to leave the event.
        </ListItem>
        <ListItem>
          Be careful and mindful of the words that you choose. Please be aware
          that sexist, racist, and other exclusionary comments can be offensive
          to those around you and will not be tolerated at GFEL.
        </ListItem>
        <ListItem>
          If a participant engages in behavior that violates this Code of
          Conduct, the Organizers may take any action they deem appropriate,
          including expulsion from current or future PDX DAO activities.
        </ListItem>
      </OrderedList>
      <Back />
    </Section>
  </Page>
)

export default CodeOfConduct
