import { Flex, Link as NavLink } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const LessonNav = () => {
  return (
    <Flex gap="3">
      <NavLink asChild>
        <Link to="exercises/do">exercises</Link>
      </NavLink>
      <NavLink asChild>
        <Link to="books">books</Link>
      </NavLink>
    </Flex>
  );
};

export default LessonNav;
