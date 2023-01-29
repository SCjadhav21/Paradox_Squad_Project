import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import axios from "axios";

import { useEffect, useState } from "react";
import { Box, Heading, Button, Img, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const [change, setChange] = useState(false);
  const [data0, setData0] = useState(
    "https://media.licdn.com/dms/image/C4D12AQHwBqOyC-fVxQ/article-inline_image-shrink_400_744/0/1615895339182?e=1680134400&v=beta&t=3jJ08AWb13vRVPeZfqbvIpzTI-rTQE58F0hGugPCNnY"
  );

  const data = [
    {
      id: 1,
      url: "https://cdn.pixabay.com/photo/2020/09/25/10/10/education-5600987__340.png",
      title: "Online Education with Videos",
    },
    {
      id: 2,
      url: "https://th.bing.com/th/id/OIP.2m-qrJeAkke0BrwMvU95eQHaFw?pid=ImgDet&rs=1",
      title: "with lots of categores",
    },
    {
      id: 3,
      url: "https://www.ecampusnews.com/files/2020/10/online-education.jpg",
      title: "Full of joy",
    },
    {
      id: 4,
      url: "https://assets-global.website-files.com/61a05ff14c09ecacc06eec05/61f5868b789816331ac6af01_5_Benefits_of_Online_Education.png",
      title: "Friendly Environoment",
    },
    {
      id: 5,
      url: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg",
      title: "well educated staff",
    },
  ];
  let datasroll = [
    "https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg",
    "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?cs=srgb&dl=pexels-pixabay-301926.jpg&fm=jpg",
    "https://www.98thpercentile.com/hubfs/Imported_Blog_Media/Why-is-education-important-Nov-17-2021-11-31-03-28-AM.jpg",
    "https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?b=1&s=170667a&w=0&k=20&c=_UfKmwUAFyylJkXm75hsnM9bPRajhoK_RT5t6VWMovo=",
    "https://npr.brightspotcdn.com/dims4/default/9e56499/2147483647/strip/true/crop/900x474+0+0/resize/880x463!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwvxu%2Ffiles%2F201608%2Fexploring_education.jpg",
    "https://media.licdn.com/dms/image/C4D12AQHwBqOyC-fVxQ/article-inline_image-shrink_400_744/0/1615895339182?e=1680134400&v=beta&t=3jJ08AWb13vRVPeZfqbvIpzTI-rTQE58F0hGugPCNnY",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhcm5pbmd8ZW58MHx8MHx8&w=1000&q=80",
    "https://th.bing.com/th/id/R.f08d1853e545ebe248d445f2ad870c48?rik=5cMegG1utA2%2fDw&riu=http%3a%2f%2fwww.quotemaster.org%2fimages%2fac%2faca89ddc63eff6c53c19c2a951d8abe6.jpg&ehk=Jj02OuXINN%2fVTrEvSrKVKCSbddtSF6kOIYntcmNl%2fm8%3d&risl=&pid=ImgRaw&r=0",
  ];
  let a = -1;
  let id = setInterval(() => {
    if (a === 7) {
      a = 0;
    } else {
      a = a + 1;
    }

    setData0(datasroll[a]);
  }, 3000);
  // useEffect(() => {
  //   clearInterval(id)
  //   setInterval();
  // }, [change]);
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
                  </Box>
                );
              })}
              {/* </Box> */}
            </SimpleGrid>
          </Box>
          <Box p="20px" pb="auto">
            <SimpleGrid columns={[1, 1, 2]} gap={7}>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                display="flex"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                // boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                <Box>
                  {" "}
                  <Img
                    h="100px"
                    w="100px"
                    p="8px"
                    src="data:image/png;base64,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"
                  ></Img>
                </Box>
                <Box>
                  <Text
                    align="center"
                    fontSize="24px"
                    fontWeight="500"
                    // p="7px"
                    pb="8px"
                    color="#373A3C"
                  >
                    Shareable Knowledge
                  </Text>
                  <Text
                    align="center"
                    fontSize="16px"
                    // lineHeight={9}
                    color="#818181"
                    // p="0px 5px"
                    pb="5px"
                  >
                    Earn a Knowledge basis on lectures
                  </Text>
                </Box>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                display="flex"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <Box>
                  {" "}
                  <Img
                    p="8px"
                    h="100px"
                    w="100px"
                    src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png"
                  ></Img>
                </Box>
                <Box>
                  <Text
                    align="center"
                    fontSize="24px"
                    fontWeight="500"
                    // p="7px"
                    pb="8px"
                    color="#373A3C"
                  >
                    100% online lectures{" "}
                  </Text>
                  <Text
                    align="center"
                    fontSize="16px"
                    // lineHeight={9}
                    color="#818181"
                    // p="0px 5px"
                    pb="5px"
                  >
                    Start instantly and learn at your own schedule.{" "}
                  </Text>
                </Box>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                display="flex"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <Box>
                  {" "}
                  <Img
                    p="8px"
                    h="100px"
                    w="100px"
                    src="https://www.pngfind.com/pngs/m/202-2022004_flexible-schedule-icon-v1-flexible-schedule-icon-hd.png"
                  ></Img>
                </Box>

                <Box>
                  <Text
                    align="center"
                    fontSize="24px"
                    fontWeight="500"
                    // p="7px"
                    pb="8px"
                    color="#373A3C"
                  >
                    Flexible Schedule
                  </Text>
                  <Text
                    align="center"
                    fontSize="16px"
                    // lineHeight={9}
                    color="#818181"
                    // p="0px 5px"
                    pb="5px"
                  >
                    Set and maintain flexible deadlines.
                  </Text>
                </Box>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                display="flex"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <Box>
                  {" "}
                  <Img
                    p="8px"
                    h="100px"
                    w="100px"
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/beginners-3255164-2729517.png"
                  ></Img>
                </Box>

                <Box>
                  <Text
                    align="center"
                    fontSize="24px"
                    fontWeight="500"
                    // p="7px"
                    pb="8px"
                    color="#373A3C"
                  >
                    Beginner Level
                  </Text>
                  <Text
                    align="center"
                    fontSize="16px"
                    // lineHeight={9}
                    color="#818181"
                    // p="0px 5px"
                    pb="5px"
                  >
                    It is very easy to use and learn
                  </Text>
                </Box>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                display="flex"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <Box>
                  {" "}
                  <Img
                    p="8px"
                    h="100px"
                    w="100px"
                    src="https://e7.pngegg.com/pngimages/685/234/png-clipart-english-grammar-language-proficiency-english-miscellaneous-blue-thumbnail.png"
                  ></Img>
                </Box>

                <Box>
                  <Text
                    align="center"
                    fontSize="24px"
                    fontWeight="500"
                    // p="7px"
                    pb="8px"
                    color="#373A3C"
                  >
                    English
                  </Text>
                  <Text
                    align="center"
                    fontSize="16px"
                    // lineHeight={9}
                    color="#818181"
                    // p="0px 5px"
                    pb="5px"
                  >
                    Subtitles: English, Arabic, French, (European)
                  </Text>
                </Box>
              </Box>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                display="flex"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <Box>
                  {" "}
                  <Img
                    p="8px"
                    h="100px"
                    w="100px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdUWGsJV28h1Ubl_o18ayhQf2zp422tTt1Q&usqp=CAU"
                  ></Img>
                </Box>

                <Box>
                  <Text
                    align="center"
                    fontSize="24px"
                    fontWeight="500"
                    // p="7px"
                    pb="8px"
                    color="#373A3C"
                  >
                    100% free Education
                  </Text>
                  <Text
                    align="center"
                    fontSize="16px"
                    // lineHeight={9}
                    color="#818181"
                    // p="0px 5px"
                    pb="5px"
                  >
                    No cost education totaly free.
                  </Text>
                </Box>
              </Box>

              {/* </Box> */}
            </SimpleGrid>
          </Box>
          <Box p="20px" pb="auto">
            <SimpleGrid columns={[1, 2, 2, 3]} gap={7}>
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
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
          <Box p="20px">
            <Text fontSize={30}>About Lectures:</Text>
            <Text fontSize={20} lineHeight={7} color="#818181">
              There are certain advantages to online lecturing. Students may
              access online lectures posted on their designated websites
              anywhere in the world, at any time they wish, as long as they have
              an internet connection. They can also be repeated for the sake of
              note taking. Studies have shown that students improve
              significantly in courses with online archived lectures,[1]
              especially international students.[2] Studies have also noted that
              students overall experience of a course has improved with the
              addition of online lectures.[1] Online lecture may also one of the
              solutions in equalizing education for students. There are also
              disadvantages to online lecturing, namely the lack of face-to-face
              interaction, and the fact that students cannot easily contact
              their instructors unless a communications link is created.
              Additionally, attendance for in-class lectures may drop due to
              recorded lectures.
            </Text>
          </Box>
          <Box p="20px">
            <Text fontSize={30}>About Lectures Categories:</Text>
            <Text fontSize={20} lineHeight={7} color="#818181">
              • Formal lecture. The lecturer delivers a well-organized, tightly
              constructed, and highly polished presentation. This type of
              lecture works well for teaching large groups of students and has
              been popularized by outlets such as TED Talks (Donovan, 2013) and,
              more recently, massive open online courses (MOOCs), such as those
              offered through Coursera or EdX. In the formal lecture, students
              hold questions until the conclusion of the lecture. • Socratic
              lecture. This type of lecture, which typically follows a reading
              assignment to give students a baseline of knowledge, is structured
              around a series of carefully sequenced questions. The instructor
              asks a single student a question sequence. The questions require
              the student to use logic and inference skills. • Semi-formal
              lecture. This is the most common type of lecture. Somewhat similar
              to the formal lecture, the semiformal lecture is less elaborate in
              form and production. Occasionally, the lecturer entertains student
              questions during the presentation of material. •
              Lecture-discussion. This type of lecture encourages greater
              student participation. The instructor presents the talk, but he or
              she stops frequently to ask students questions or to request that
              students read their prepared materials. The direction of
              interaction can occur in one of three ways: (1) instructor to
              class, (2) instructor to individual student, or (3) individual
              student to instructor. • Interactive lecture. In this version of
              lecturing, the instructor uses mini-lectures about 20 minutes
              long, and involves students in a range of brief content-related
              activities in between. Interaction may occur between instructor
              and students or between and among students.
            </Text>
          </Box>
        </Box>
      </main>
    </>
  );
}
