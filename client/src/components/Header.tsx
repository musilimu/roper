import { Flex, Link as NavLink } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex gap="3">
      <NavLink asChild>
        <Link to="/">Lessons</Link>
      </NavLink>
      <NavLink asChild>
        <Link to="/teachers">teachers</Link>
      </NavLink>
      <NavLink asChild>
        <Link to="/register">register</Link>
      </NavLink>
      <NavLink asChild>
        <Link to="/accounts">accounts</Link>
      </NavLink>
    </Flex>
  );
};
