


import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Image } from '@chakra-ui/react'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize="25px" mb={2} color="#E23D53">
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
    
      bgColor={useColorModeValue('black.50', 'black.900')}
      color={useColorModeValue('white.700', 'white.200')}>
      <Container as={Stack} maxW="100%" py={10}  bgColor={"black"} color="white" overflowX="hidden" fontWeight={"600px"} fontSize={"20px"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
          <Stack align={'flex-start'}>
            <ListHeader>Academy</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>POPULAR GOALS</ListHeader>
            <Link href={'#'}>Banking & Insurance</Link>
            <Link href={'#'}>SSC</Link>
            <Link href={'#'}>Teaching</Link>
            <Link href={'#'}>Railways</Link>
            <Link href={'#'}>Defence</Link>
            <Link href={'#'}>UPSC</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>PRODUCTS</ListHeader>
            <Link href={'#'}>Mock Tests</Link>
            <Link href={'#'}>Video Courses</Link>
            <Link href={'#'}>Video Courses</Link>
            <Link href={'#'}>Books</Link>
            <Link href={'#'}>One To One Doubt Solving</Link>
          </Stack>

          <Stack align={'flex-right'} margin="10px">
            <ListHeader>Install App</ListHeader>
            <Box boxSize='sm' >
  <Image src='https://st.adda247.com/https://adda247.com/images/google-play-store.svg' alt='Dan Abramov' />
  <Image src='https://st.adda247.com/https://adda247.com/images/apple-app-store.svg' alt='Dan Abramov' />
</Box>
           
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('black.200', 'black.700')}>
        <Container
          as={Stack}
          maxW={'4xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>Impact Classes Give You All Classes Free</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'FaYoutube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}