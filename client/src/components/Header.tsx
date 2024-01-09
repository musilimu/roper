import { Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex gap="3">
      <Link color="cyan" to="/">
        Assets
      </Link>
      <Link color="cyan" to="/owners">
        owners
      </Link>
      <Link color="cyan" to="/register">
        register
      </Link>
      <Link color="cyan" to="/accounts">
        accounts
      </Link>
    </Flex>
  );
};
