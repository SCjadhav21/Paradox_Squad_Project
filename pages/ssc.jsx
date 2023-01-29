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
                        <Link href={`/ssc/${items._id}`}> Watch Video</Link>
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

export async function getServerSideProps() {
  let responce = await fetch(`https://vast-cow-kilt.cyclic.app/ssc`);
  let data = await responce.json();

  return {
    props: {
      data: data,
    },
  };
}
