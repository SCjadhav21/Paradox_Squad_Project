import React from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";

const Page = ({ videoLink }) => {
  const router = useRouter();
  console.log(movie);

  return (
    <>
      <Head>
        <title>movie</title>
        <meta title="description" content="videoLink,react,js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box>
          <Button onClick={() => router.back()}>Go back</Button>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/T94PHkuydcw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Box>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const {
    params: { videoLink },
  } = context;

  let data = await videoLink;

  return {
    props: {
      videoLink: data,
    },
  };
}

export default Page;
