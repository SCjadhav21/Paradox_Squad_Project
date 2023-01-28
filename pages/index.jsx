import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import axios from "axios";

import { useEffect, useState } from "react";
import { Box, Heading, Button, Img, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home({ data }) {
  const [data0, setData0] = useState(
    "https://media.licdn.com/dms/image/C4D12AQHwBqOyC-fVxQ/article-inline_image-shrink_400_744/0/1615895339182?e=1680134400&v=beta&t=3jJ08AWb13vRVPeZfqbvIpzTI-rTQE58F0hGugPCNnY"
  );
  let datasroll = [
    "https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg",
    "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?cs=srgb&dl=pexels-pixabay-301926.jpg&fm=jpg",
    "https://www.98thpercentile.com/hubfs/Imported_Blog_Media/Why-is-education-important-Nov-17-2021-11-31-03-28-AM.jpg",
    "https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?b=1&s=170667a&w=0&k=20&c=_UfKmwUAFyylJkXm75hsnM9bPRajhoK_RT5t6VWMovo=",
    "https://npr.brightspotcdn.com/dims4/default/9e56499/2147483647/strip/true/crop/900x474+0+0/resize/880x463!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwvxu%2Ffiles%2F201608%2Fexploring_education.jpg",
    "https://media.licdn.com/dms/image/C4D12AQHwBqOyC-fVxQ/article-inline_image-shrink_400_744/0/1615895339182?e=1680134400&v=beta&t=3jJ08AWb13vRVPeZfqbvIpzTI-rTQE58F0hGugPCNnY",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhcm5pbmd8ZW58MHx8MHx8&w=1000&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr14IVPqc2Gslp04dKkZy7Up9o81TNlHj8Fg&usqp=CAU",
  ];

  // useEffect(() => {
  //   const getData = async () => {
  //     let res = await axios.get("");
  //     console.log(res);
  //     setData(res.data);
  //   };
  //   getData();
  // }, []);
  useEffect(() => {
    let a = -1;
    setInterval(() => {
      if (a === 7) {
        a = 0;
      } else {
        a = a + 1;
      }

      setData0(datasroll[a]);
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta title="description" content="data,react,js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box p="0px 7%">
          <Box
            alignItems="center"
            alignself="center"
            w="100%"
            // h="400px"
            className="banner"
          >
            <Img
              border="2px solid red"
              borderRadius="20px"
              borderBottomRadius="20%"
              // border="1px solid black"
              width="100%"
              height={["300px", "400px", "500px"]}
              src={data0}
              alt="banner"
            />
          </Box>

          <Box p="20px" pb="auto">
            <SimpleGrid columns={[1, 3, 4, 5]} gap={7}>
              {/* <Box display="flex" overFlow="scroll" gap={7}> */}
              {data.map((items, index) => {
                return (
                  <Box
                    h="full"
                    borderRadius="20px"
                    alignItems="center"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    key={index}
                    className="imgs"
                  >
                    <Img
                      w="100%"
                      h="70%"
                      pb="5px"
                      borderRadius="20px 20px 0px 0px"
                      src={items.url}
                      alt=""
                    />

                    <Text align="center" color="black" p="0px 5px">
                      {items.title}
                    </Text>
                    <Text align="center" p="0px 5px" pb="5px">
                      {items.add}
                    </Text>
                  </Box>
                );
              })}
              {/* </Box> */}
            </SimpleGrid>
          </Box>
          <Box p="20px" pb="auto">
            <SimpleGrid columns={[1, 2, 3]} gap={7}>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                className="imgs"
              >
                <Img
                  h="200px"
                  w="100%"
                  src="https://e7.pngegg.com/pngimages/551/211/png-clipart-education-logo-pre-school-others-text-logo.png"
                ></Img>
                <Text
                  align="center"
                  fontSize="27px"
                  fontWeight="500"
                  p="7px"
                  pb="12px"
                  color="#01437D"
                >
                  Deeper Insight into Student Performance
                </Text>
                <Text
                  align="center"
                  fontSize="20px"
                  lineHeight={9}
                  color="#818181"
                  p="0px 5px"
                  pb="5px"
                >
                  Ensure that you have the data you need to better personalize
                  instruction and support individual needs with tailored
                  learning content.
                </Text>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                className="imgs"
              >
                <Img
                  h="200px"
                  w="100%"
                  src="data:image/png;base64,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"
                ></Img>
                <Text
                  align="center"
                  fontSize="27px"
                  fontWeight="500"
                  p="7px"
                  pb="12px"
                  color="#01437D"
                >
                  Prepare For Your Digital Future
                </Text>
                <Text
                  align="center"
                  fontSize="20px"
                  lineHeight={9}
                  color="#818181"
                  p="0px 5px"
                  pb="5px"
                >
                  Connect students, parents, teachers, and the community in one
                  flexible online platform. Unified Classroom IMPACT Learning
                  connects learning across your entire district.
                </Text>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                className="imgs"
              >
                <Img
                  w="100%"
                  borderTopRadius="20px"
                  h="200px"
                  src="https://www.shutterstock.com/image-vector/education-tech-vector-logo-design-260nw-1782131480.jpg"
                ></Img>
                <Text
                  align="center"
                  fontSize="27px"
                  fontWeight="500"
                  pb="12px"
                  color="#01437D"
                  p="7px"
                >
                  Ability to Change and Adapt
                </Text>
                <Text
                  align="center"
                  fontSize="20px"
                  lineHeight={9}
                  color="#818181"
                  p="0px 5px"
                  pb="5px"
                >
                  Be prepared for inevitable changes and challenges with a more
                  flexible and reliable approach to teaching and learning.
                </Text>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                className="imgs"
              >
                <Img
                  w="100%"
                  borderTopRadius="20px"
                  h="200px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Global_Open_Educational_Resources_Logo.svg/800px-Global_Open_Educational_Resources_Logo.svg.png"
                ></Img>
                <Text
                  align="center"
                  fontSize="27px"
                  fontWeight="500"
                  p="7px"
                  pb="12px"
                  color="#01437D"
                >
                  Comprehensive Teaching and Learning Platform
                </Text>
                <Text
                  align="center"
                  fontSize="20px"
                  lineHeight={9}
                  color="#818181"
                  p="0px 5px"
                  pb="5px"
                >
                  Get learning management, assessment, and professional
                  development all in one platform. That means easier adoption,
                  training, and rollout for your entire organization
                </Text>
              </Box>

              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                className="imgs"
              >
                <Img
                  w="100%"
                  borderTopRadius="20px"
                  h="200px"
                  src="https://www.hbgsd.us/cms/lib/PA50000648/Centricity/Domain/300/Family-Engagement.jpg"
                ></Img>
                <Text
                  align="center"
                  fontSize="27px"
                  fontWeight="500"
                  p="7px"
                  pb="12px"
                  color="#01437D"
                >
                  Increase Parent Engagement
                </Text>
                <Text
                  align="center"
                  fontSize="20px"
                  lineHeight={9}
                  color="#818181"
                  p="0px 5px"
                  pb="5px"
                >
                  Leverage built-in communication tools, Schoology Groups for
                  parent organizations, and now Microsoft Immersive Reader to
                  support closer connections between the classroom and home.
                </Text>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                className="imgs"
              >
                <Img
                  w="100%"
                  borderTopRadius="20px"
                  h="200px"
                  src="https://assets-homepages.3plearning.net/wp-content/uploads/sites/15/Mathematics-Learning-Over-15-Years.jpg"
                ></Img>
                <Text
                  align="center"
                  fontSize="27px"
                  fontWeight="500"
                  pb="12px"
                  color="#01437D"
                  p="7px"
                >
                  District-Wide Collaboration
                </Text>
                <Text
                  align="center"
                  fontSize="20px"
                  lineHeight={9}
                  color="#818181"
                  p="0px 5px"
                  pb="5px"
                >
                  Connect every stakeholder to collaborate on professional
                  development, share instructional strategies, and access
                  high-quality content.
                </Text>
              </Box>

              {/* </Box> */}
            </SimpleGrid>
          </Box>
        </Box>
      </main>
    </>
  );
}
export async function getServerSideProps() {
  let responce = await fetch("https://reduxapi.onrender.com/moments");
  let data = await responce.json();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
