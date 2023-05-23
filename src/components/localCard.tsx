'use client'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
    title: string;
    message: string;
    icon: string;
    buttonText: string;
    redirectPage: string;
    duration: string;
    usage: string;
}


const LocalCard = ({ title, message, buttonText, redirectPage, duration, usage }: Props) => {

    let iconElement;
    

    return (
<Card align='center' textAlign='center'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {message}
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='2'>
        <Link href={redirectPage} passHref>
      <Button variant='solid' colorScheme='blue'>
        {buttonText}
      </Button>
      </Link>
      <Button variant='ghost' colorScheme='blue'>
        Learn More
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    )
}

export default LocalCard
