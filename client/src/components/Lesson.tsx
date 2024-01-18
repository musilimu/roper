import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Link as NavLink,
  Text,
} from "@radix-ui/themes";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { Link, useParams } from "react-router-dom";

const Lesson = () => {
  const { id } = useParams();
  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS);
  const { data: lessons, isLoading } = useContractRead(contract, "getLessons");
  const [creator, body, isPpublished, title]: any = (id && lessons?.[+id]) ?? [
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <div>
      <h1>Lesson {id}</h1>
      <Flex gap="3">
        <NavLink asChild>
          <Link to="exercises">exercises</Link>
        </NavLink>
        <NavLink asChild>
          <Link to="books">books</Link>
        </NavLink>
      </Flex>
      <>
        <h1>Lessons</h1>
        {isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          <Flex my="4" gap="3" wrap="wrap" width="auto">
            <Flex gap="3">
              <Avatar size="4" src={creator} fallback="T" />
              <Box>
                <Text mt="2" as="div" size="2" color="gray" weight="bold">
                  {title}
                </Text>
                <Text mt="2" as="div" size="2" weight="light">
                  {body}
                </Text>
                <Text mt="2" as="div" size="2" color="cyan">
                  Created by {creator}
                </Text>
              </Box>
            </Flex>
            <Flex gap="2" mt="4">
              <Badge color="orange">social</Badge>
              <Badge color="cyan">relationship</Badge>
              <Badge color="green">science</Badge>
            </Flex>
          </Flex>
        )}
      </>

      <Button variant="solid" mt="2">
        add exercise
      </Button>
      <Button variant="solid" mt="2" ml="2">
        add a review
      </Button>
      <Button variant="solid" mt="2" ml="2">
        publish
      </Button>
      {isPpublished && (
        <Text mt="2" as="div" size="2" ml="2">
          {24} Enrolled
        </Text>
      )}

      <Link to={`/lessons/${id}`}>
        <Button variant="solid" mt="2" ml="2">
          read more
        </Button>
      </Link>
      <Button variant="solid" mt="2" ml="2">
        enroll
      </Button>
    </div>
  );
};

export default Lesson;
