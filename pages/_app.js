import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "@/Comoponents/Layouts";

export default function App({ Component, pageProps }) {
  return (
   
    <ChakraProvider>
     <Layouts>
      <Component {...pageProps} />
      </Layouts>
    </ChakraProvider>

    
  );
}
