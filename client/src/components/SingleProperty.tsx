import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { Property } from "../types/Property";
import BadgeList from "./BadgeList";
type PropertyProps = {
  property: Property;
  index: number;
};
const SingleProperty = ({
  property: { body, creator, isPublished, title },
  index,
}: PropertyProps) => {
  return (
    <Card style={{ maxWidth: "500px" }}>
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
          >
            {body}
          </Text>
          <Text mt="2" as="div" size="2" color="cyan">
            Created by {creator.slice(0, 5)}...{creator.slice(-5)}
          </Text>
          {isPublished && (
            <Text mt="2" as="div" size="2">
              {24} Enrolled
            </Text>
          )}

          <Link to={`/lessons/${index}`}>
            <Button variant="solid" mt="2">
              read more
            </Button>
          </Link>
          <Button variant="solid" mt="2" ml="2">
            enroll
          </Button>
        </Box>
      </Flex>
      <BadgeList
        badges={[
          { badge: "social", color: "blue" },
          { badge: "education", color: "gray" },
        ]}
      />
    </Card>
  );
};

export default SingleProperty;
