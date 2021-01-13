import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import { Theme } from "@material-ui/core";

export default function Home() {
  return (
    <Container>
      <Button>Go to the main page</Button>
      <H2>こんにちは</H2>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Container = styled.div`
  width: 100vw;
  max-width: 60rem;
  align-items: center;
`;

const H2 = styled.h2<{ theme: Theme }>`
  text-align: center;
  text-decoration: underline ${(props) => props.theme.color};
`;
