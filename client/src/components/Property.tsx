import { Avatar, Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

export const Property = () => {
  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS);
  const { data: lessons, isLoading } = useContractRead(contract, "getLessons");

  return (
    <>
      <h1>Lessons</h1>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <Flex my="4" gap="3" wrap="wrap" width="auto">
          {(
            lessons as [string, string, boolean, string, string][] | undefined
          )?.map(([creator, body, isPpublished, title], i) => (
            <Card key={i} style={{ maxWidth: "500px" }}>
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
                  {isPpublished && (
                    <Text mt="2" as="div" size="2">
                      {24} Enrolled
                    </Text>
                  )}

                  <Link to={`/lessons/${i}`}>
                    <Button variant="solid" mt="2">
                      read more
                    </Button>
                  </Link>
                  <Button variant="solid" mt="2" ml="2">
                    enroll
                  </Button>
                </Box>
              </Flex>
              <Flex gap="2" mt="4">
                <Badge color="orange">social</Badge>
                <Badge color="cyan">relationship</Badge>
                <Badge color="green">science</Badge>
              </Flex>
            </Card>
          ))}
        </Flex>
      )}
    </>
  );
};
