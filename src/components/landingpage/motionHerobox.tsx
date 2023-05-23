import { useTransform, useViewportScroll } from 'framer-motion';
import { useBreakpointValue, Image, useColorModeValue } from '@chakra-ui/react';

import MotionBox from "./motionbox"

export const MotionHeroBox = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { scrollYProgress } = useViewportScroll();

  const widths = [340, 320, 288, 256];

  const cardAnimationVariants = {
    initial: {
      opacity: 1,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div style={{display:'flex'}}>
    <MotionBox
    display={'flex'}
      style={{ translateY: isMobile ? 0 : 1}}
      w={{ base: '100%', md: 400, lg: 400, xl: 400, sm: 400 }}
      h={300}
      mb={20}
      position={'relative'}
      opacity={1}
      rounded={'xl'}
      transition={{ staggerChildren: 0.10 }}>
      {[0, 1, 2, 3].map((i) => (
        <MotionBox
          key={i}
          opacity={1}
          position={'absolute'}
          bottom={0}
          mb={2 - i * 20}
          variants={cardAnimationVariants}
          flex={1}
          p={8}
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'xl'}
          boxShadow={'lg'}
          w={{ base: `${100 - i * 10}%`, sm: widths[i] }}
          zIndex={4 - i}>
          <Image
            alt={'Component Placeholder'}
            src={`/${i + 1}.svg`}
          />
        </MotionBox>
      ))}
    </MotionBox>
    </div>
  );
};