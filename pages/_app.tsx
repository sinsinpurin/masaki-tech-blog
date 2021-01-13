import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";

//import { ThemeProvider } from "theme-ui";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../src/logic/styles";
import styled from "@emotion/styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Head>
        <title>Masaki Tech Blog</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/teacup-without-handle_1f375.png"
        />
      </Head>
      <Container>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    </MuiThemeProvider>
  );
}

export default MyApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
