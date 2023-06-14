import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, VStack, Text, chakra, SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from 'next/link';
import {JOBS_PAGE} from '../constants/constants';




export default function Careers() {
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
        Careers at Sommer{' '}
      </Heading>
      </VStack>
      <JobsHero/>
    </main>
  )
}




const JobsHero= () => {
    function openJobs(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    bg="gray.50"
    _dark={{
      bg: "gray.800",
    }}
  >
    <Box
      maxW="7xl"
      w={{
        md: "3xl",
        lg: "4xl",
      }}
      mx="auto"
      py={{
        base: 12,
        lg: 16,
      }}
      px={{
        base: 4,
        lg: 8,
      }}
      display={{
        lg: "flex",
      }}
      alignItems={{
        lg: "center",
      }}
      justifyContent={{
        lg: "space-between",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "3xl",
          sm: "4xl",
        }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
        <chakra.span display="block">Interested in joining Sommer?</chakra.span>
        <chakra.span
          display="block"
          color="gray.500"
          _dark={{
            color: "gray.500",
          }}

        >
          Click to the right, For new openings.
        </chakra.span>
      </chakra.h2>
      <Stack
        direction={{
          base: "column",
          sm: "row",
        }}
        mt={{
          base: 8,
          lg: 0,
        }}
        flexShrink={{
          lg: 0,
        }}
      >
          <Link href={JOBS_PAGE} passHref={true}>
          <Button size={'lg'} backgroundColor={'purple.300'}>
            View Openings
        </Button>
  </Link>

      </Stack>
    </Box>
  </Box>
</Flex>
    )
}
