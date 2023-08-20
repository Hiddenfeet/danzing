import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";

import Head from "next/head";
import { metamaskWallet, walletConnect,  coinbaseWallet, } from "@thirdweb-dev/react";
import { Cronos } from "@thirdweb-dev/chains";

const backgroundImageUrl = "https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZJfSFFhhW976mSbeZcwH%2Fuploads%2FktzIUIk8OL3EISSe8yoN%2F484.png?alt=media&token=5e50345e-fb66-4272-81bd-1f2642fff1e1"; // Replace with the actual background image URL

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: `url(${backgroundImageUrl}) no-repeat fixed center center`, // Set the background image URL here
        backgroundSize: "cover",
      },
    },
  },
});


const activeChain = "Cronos";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        walletConnect(),
        metamaskWallet(),
        coinbaseWallet(), 
      ]}
      activeChain={Cronos}
      clientId={process.env.TW_CLIENT_ID}
    >
      <ChakraProvider theme={theme}>
        <Head>
          {/* Add your custom text here */}
          <title>Tipsy Babes NFT Staking</title>
        </Head>
        {/* Wrap the background image with the Box component */}
        <Box
          w="100%"
          h="100vh"
          _hover={{
            background: "hsl(243, 4.9%, 18.8%)",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;