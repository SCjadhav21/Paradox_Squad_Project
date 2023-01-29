import React from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";

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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/73CoPPm9hjk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </Box>
      </main>
    </>
  );
};
// export async function getStaticPaths() {
//   let responce = await fetch("http://localhost:4500/banking");
//   let data = await responce.json();
//   return {
//     paths: data.map((el) => ({
//       params: { id: el._id.toString() },
//     })),
//     fallback: false,
//   };
// }

export async function getStaticProps(context) {
  const {
    // params: { id },
  } = context;
  let responce = await fetch(
    `http://localhost:4500/banking/63d510bbf70ede2003627729`
  );
  let data = await responce.json();

  return {
    props: {
      video: data,
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
