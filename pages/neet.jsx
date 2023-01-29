import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import axios from "axios";

import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Button,
  Img,
  SimpleGrid,
  Text,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home({ data }) {
  const [data0, setData0] = useState(
    "https://media.licdn.com/dms/image/C4D12AQHwBqOyC-fVxQ/article-inline_image-shrink_400_744/0/1615895339182?e=1680134400&v=beta&t=3jJ08AWb13vRVPeZfqbvIpzTI-rTQE58F0hGugPCNnY"
  );
  console.log(data);
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
          <Box p="20px" pb="auto">
            <SimpleGrid columns={[1, 3, 4, 5]} gap={7}>
              {/* <Box display="flex" overFlow="scroll" gap={7}> */}
              {data.map((items, index) => {
                return (
                  <Box
                    p="10px"
                    h="full"
                    borderRadius="20px"
                    alignItems="center"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    key={index}
                  >
                    <Text fontSize={30} align="center" p="0px 5px">
                      Title : {items.title}
                    </Text>

                    {/* <Text fontSize={20} align="center" p="0px 5px" pb="5px">
                      <a href={items.link}>YoutubeLink : {items.link}</a>
                    </Text> */}
                    <Center p="10px">
                      {" "}
                      <Button>
                        <Link href={`/neet/${items._id}`}> Watch Video</Link>
                      </Button>
                    </Center>
                  </Box>
                );
              })}
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
              students' overall experience of a course has improved with the
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

export async function getStaticProps() {
  let responce = await fetch(`https://dull-puce-quail-veil.cyclic.app/neet`);
  let data = await responce.json();

  return {
    props: {
      data: data,
    },
  };
}
