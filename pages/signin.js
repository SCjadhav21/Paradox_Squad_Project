import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import { useState } from "react";

export default function SplitScreen() {
  const toast = useToast();
  const [data, setData] = useState({
    email: "",

    password: "",
  });

  console.log(data);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setData({ ...data, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      axios("https://vast-cow-kilt.cyclic.app/login", {
        method: "POST",
        data: data,
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (res) {
            toast({
              title: "Login Successfull",
              description: "You've Logged In your account.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });

            localStorage.setItem("token", res.data.token);
          } else {
            toast({
              title: "Wrong Credentials",
              description: "Please Check your Email or Password.",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        })
        .catch((err) => {
          let message = err.message;
          toast({
            title: "Error",
            description: { message },
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
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
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <form onSubmit={handelSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={handleChange}
                value={data.email}
                name="email"
                isRequired
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={handleChange}
                value={data.password}
                name="password"
                isRequired
              />
            </FormControl>

            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Input
                colorScheme={"blue"}
                variant={"solid"}
                type="submit"
                _hover={{
                  bg: "blue.500",
                  cursor: "pointer",
                }}
              />
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
