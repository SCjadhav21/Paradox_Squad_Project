import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const [data, setData] = useState({
        name: "",
       age:"",
        password: "",
        email: ""
       
        
      });


      const handleChange = (e) => {
        let { value, name } = e.target;
    
          setData({ ...data, [name]: value });
         
      };

      const handelSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        if (
          data.name &&
          data.password &&
          data.email &&
          data.age 
         
        ) {
          if (data.password.length < 6) {
            alert("password is too stort");
          
          } else {
            axios("https://dull-puce-quail-veil.cyclic.app/register", {
              method: "POST",
              data: data,
              headers: {
                "content-type": "application/json",
              },
            })
              .then((res) => {
                if (res.data.msg === "user Registered") {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  setNavigate(true);
                } else {
                  toast({
                    title: "Acount has been Already Regestered.",
                    description: "Please Login to account or Create with new Email",
                    status: "error",
                    duration: 3000,
    
                    isClosable: true,
                  });
                }
              })
              .catch((err) => {
                let message = err.message;
                toast({
                  title: { message },
                  description: err.description,
                  status: "error",
                  duration: 3000,
    
                  isClosable: true,
                });
              });
          }
        } else {
          toast({
            title: "Some filed are Empty",
            description: "Please fill all the fields",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      };




  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>

        
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <form  onSubmit={handelSubmit} isRequired>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Uner Name</FormLabel>
                    <Input type="text"
                     name="name"
                    onChange={handleChange}
                    value={data.name}
                    isRequired
                    
                     />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Age</FormLabel>
                    <Input type="number"
                    name="age"
                    onChange={handleChange}
                    value={data.age}
                    isRequired
                   
                    
                     />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
                     name="email"
                    onChange={handleChange}
                    value={data.email}
                    isRequired



                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                     name="password"
                    onChange={handleChange}
                    value={data.password}
                    isRequired


                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Input colorScheme={'blue'} variant={'solid'} type="submit" value={"Submit"} _hover={{
                  bg: 'blue.500',
                  cursor:"pointer"
                }}/>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} href="/signin">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>

          </form>
        </Stack>


      </Flex>
    );
  }