import { ButtonGroup, Flex, Heading, Input, chakra } from "@chakra-ui/react";
import Link from "next/link";
import { useViewportScroll } from "framer-motion";
import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { ActionButton } from "./action-button"
import { ColorModeToggle } from "./color-mode-toggle"
import SponsorButton from "./sponse-button"
import { CONSTANTS } from "../../components/utils/constant"
import {Text} from '@chakra-ui/react'

const onOpen = () => {

}
function Navbar() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.nav
      ref={ref}
      h="16"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="6"
      bg="layout.card"
      sx={{
        "& > div": {
          flex: 1,
        },
      }}
    >
      <Flex>
        <Link href="/" passHref>
          <Flex as="a">
            <Heading fontSize="xl" fontWeight="semibold">
              SommerAI
            </Heading>
          </Flex>
        </Link>
      </Flex>

      <Flex justify="center" style={{justifyContent:'space-around'}}>
      <Link
  href={{
    pathname: '/products'}}
passHref>
  <Text>Products</Text>
</Link>
<Link
  href={{
    pathname: '/partners'}}
passHref>
  <Text>Partners</Text>
</Link>
<Link
  href={{
    pathname: '/about'}}
passHref>
  <Text>About Us</Text>
</Link>
<Link
  href={{
    pathname: '/careers'}}
passHref>
  <Text>Careers</Text>
</Link>


      </Flex>

      <Flex justify="right">
        <ButtonGroup alignItems="center">
          <ActionButton
            isLink
            href={CONSTANTS.SOMMER_LINKEDIN}
            aria-label="Sommer Linkedin"
            icon={<FaLinkedin />}
          />
          <ColorModeToggle />
          <SponsorButton />
        </ButtonGroup>
      </Flex>
    </chakra.nav>
  );
}

export default Navbar;