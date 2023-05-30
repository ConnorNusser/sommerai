import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";




export default function Partners() {
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
        <Text>
        Partners
        </Text>
      </Heading>
      </VStack>
    </main>
  )
}

