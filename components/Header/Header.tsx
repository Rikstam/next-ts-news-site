import Link from "next/Link";

import { Center } from "../Center/style";
import { Container, Logo } from "./style";

export const Header = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Link href="/">
            <a>What's next ?</a>
          </Link>
        </Logo>
      </Center>
    </Container>
  );
};
