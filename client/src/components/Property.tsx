import { Avatar, Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Property = () => {
  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
  const [next, setnext] = useState(0);
  const { data, isLoading } = useContractRead(contract, "lessons", [next]);
  const { data: lessonsCount, isLoading: loadingLessonsCount } =
    useContractRead(contract, "lessonsCount");
  const [lessons, setLessons] = useState<
    { creator: string; body: string; isPpublished: boolean; title: string }[]
  >([]);

  useEffect(() => {
    if (isLoading || loadingLessonsCount || !data) return;
    if (lessonsCount < next) return;
    const [creator, body, isPpublished, title] = data;
    setLessons([...lessons, { creator, body, isPpublished, title }]);
    setnext(next + 1);
  }, [isLoading, data, lessons, next, loadingLessonsCount, lessonsCount]);

  return (
    <>
      <h1>Lessons</h1>
      {isLoading || loadingLessonsCount ? (
        <h1>Loading ...</h1>
      ) : (
        <Flex my="4" gap="3" wrap="wrap" width="auto">
          {lessons.map(({ creator, body, isPpublished, title }, i) => (
            <Card key={i} style={{ maxWidth: "500px" }}>
              <Flex gap="3">
                <Avatar size="4" src={creator} fallback="T" />
                <Box>
                  <Text mt="2" as="div" size="2" color="gray" weight="bold">
                    {title}
                  </Text>
                  <Text
                    mt="2"
                    as="div"
                    size="2"
                    weight="light"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
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
