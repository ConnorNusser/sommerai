import Image from 'next/image'
import { Inter } from 'next/font/google'
import LocalCard from '@/components/localCard'
import { Stack, HStack, VStack, Tag, Avatar, TagLabel, Link, Text, Card, CardBody, Heading } from '@chakra-ui/react'
import HeadingComponent from '../components/landingpage/headingComponent'
import { MotionHeroBox } from '@/components/landingpage/motionHerobox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <VStack spacing='4rem'>
          <HStack justifyContent={'space-between'} display={'flex'} spacing={'12rem'}>
            <HeadingComponent/>
            <MotionHeroBox/>
          </HStack>
      <HStack>
      <LocalCard
                    title="Solution Focused Brief Therapy"
                    message="Focused on finding solutions to current problems rather than dwelling on past issues."
                    icon="lightning"
                    buttonText="Try beta"
                    redirectPage="/sommer/solution-focused/"
                    duration=""
                    usage=""
                />
                <LocalCard
                    title="Cognitive Behavioral Therapy"
                    message="Focused on addressing negative thoughts and developing coping strategies."
                    icon="sun"
                    buttonText="Try beta"
                    redirectPage="/sommer/cognitive-behavioral/"
                    duration=""
                    usage=""
                />
                <LocalCard
                    title="Healthy Nuggets"
                    message="Therapy is only a small component of your mental health, see what else you can do."
                    icon="sun"
                    buttonText="Try beta"
                    redirectPage="/sommer/health-onboarding/"
                    duration=""
                    usage=""
                />
              </HStack>
              <div>
              <Tag size='xl' colorScheme='blue' borderRadius='full'>
  <Avatar
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGS6phL4vjNCrwdBPqmorNQW0RtmaIZ7ZsqQ&usqp=CAU'
    size='xs'
    name='Segun Adebayo'
    ml={-1}
    mr={2}
  />
  <TagLabel>For additional information read our <Link href="https://versed-space-f6b.notion.site/Mental-Health-in-Low-Earth-Orbit-372c25df04fc41d78ebf791660aebfc6">{' '}Mental Health in Low Earth Orbit</Link><Link href="https://versed-space-f6b.notion.site/AI-Therapy-vs-Human-Therapy-3d2fd47f435942ebb053a070d111ff5f">{' '}AI Therapy vs Human Therapy</Link> articles.{'  '}</TagLabel>
</Tag>
</div>
</VStack>
    </main>
  )
}
