import React from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

import { Box, Heading, Image, Text, Button, Center } from "@chakra-ui/react";

const video = ({ video }) => {
  const router = useRouter();
  console.log(video, video.src);

  return (
    <>
      <Head>
        <title>movie</title>
        <meta title="description" content="video,react,js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box>
          <Button onClick={() => router.back()}>Go back</Button>
          <div>
            <Center>
              <iframe
                width={["60%", "70%", "80%", "90%"]}
                height="500px"
                src={video.src}
                title="YouTube video player"
                alt={video.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </Center>
          </div>
        </Box>
      </main>
    </>
  );
};
export async function getStaticPaths() {
  let responce = await fetch("https://dull-puce-quail-veil.cyclic.app/iit");
  let data = await responce.json();
  return {
    paths: data.map((el) => ({
      params: { id: el._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  let responce = await fetch(
    `https://dull-puce-quail-veil.cyclic.app/iit/${id}`
  );
  let data = await responce.json();

  return {
    props: {
      video: data[0],
    },
  };
}

// export async function getStaticProps(context) {
//   const {
//     params: { videoLink },
//   } = context;

//   let data = await videoLink;

// }

export default video;
