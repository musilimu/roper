import { Avatar, Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { Property } from "../types/Property";
type PropertyProps = {
  property: Property;
  index: number;
};
const SingleProperty = ({
  property: { body, creator, isPpublished, title },
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
      <Flex gap="2" mt="4">
        <Badge color="orange">social</Badge>
        <Badge color="cyan">relationship</Badge>
        <Badge color="green">science</Badge>
      </Flex>
    </Card>
  );
};

export default SingleProperty;
