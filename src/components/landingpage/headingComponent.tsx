import { Button, Heading, Input, Text } from "@chakra-ui/react"

const HeadingComponent = () => {

    

    return (
<div style={{ display:'inline-block'}}>
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
        Welcome to{" "}
        <Text
          display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, green.400,purple.500)"
          fontWeight="extrabold"
        >
          SommerAI
        </Text>{" "}
      </Heading>
      <Text fontSize='xl'>
      Your{' '}
      <Text
          display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, purple.400, blue.500)"
          fontWeight="extrabold"
          fontSize='xl'
        >
          Ai Assistant
      </Text>
      <Text fontSize='xl'>{' '} for everything healthcare.</Text>
      </Text>
      <Input placeholder="Whats your email?"/>
      <Button alignContent='center'>See Sommer</Button>
            </div>
    )
}

export default HeadingComponent;