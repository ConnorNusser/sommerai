import { TEST_ENVIRONMENT } from "@/constants/constants";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";




export default function Contact() {
  return (
    <main>
      <VStack spacing='2rem' justifyContent={'center'}>
      <Heading
        mb={6}
        fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{ base: "normal", md: "tight" }}
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
        Meet the{" "}
        <Text
          display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, green.400,purple.500)"
          fontWeight="extrabold"
        >
          Team
        </Text>{" "}
      </Heading>
      <ContactTable/>
      </VStack>
    </main>
  )
}

type TContact = {
  name: string,
  title: string,
  picture: string,
  bio: string
}
const ContactTable = () => {
  const [contactInfo, setContactInfo] = useState<TContact[]>([]);
  let host_value = TEST_ENVIRONMENT;
  useEffect(() => { 

    const getContact =  async () => {
      const requestOptions = {
        method: 'GET',
        'Access-Control-Allow-Origin': host_value,
        'Access-Control-Allow-Credentials': true,
      };
      let response = await fetch(host_value + 'contacts', requestOptions).then(response => {
          console.log(response);
          return response.json();
        });
        setContactInfo(response);
      }
    getContact();
    },[]);

  return (
    <VStack spacing={'1rem'}>
      {
        
        contactInfo.map((contact) => (
          <div key={contact.name}>
            <ContactCard name = {contact.name} title= {contact.title} photoLink={contact.picture} bio={contact.bio} />
          </div>
        ))
      }
    </VStack>
    
  )
}

const ContactCard = ({name, title, photoLink, bio} : {name:string, title: string, photoLink:string, bio: string}) => {
  return (
    <Card w='md'>
  <CardHeader>
    <Flex padding='1'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src={photoLink} />

        <Box>
          <Heading size='sm'>{name}</Heading>
          <Text>{title}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
     {bio}
    </Text>
  </CardBody>
</Card>
  )
}