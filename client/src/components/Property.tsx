import { Avatar, Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";

export const Property = () => {
  return (
    <>
      <h1>Properties</h1>
      <Flex my="4" gap="3" wrap="wrap" width="auto">
        {Array(14)
          .fill(1)
          .map((_, i) => (
            <Card key={i} style={{ maxWidth: "500px" }}>
              <Flex gap="3">
                <Avatar
                  size="9"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  fallback="T"
                />
                <Box>
                  <Text mt="2" as="div" size="2" weight="bold">
                    Muslim uwi Lorem ipsum, dolor sit amet consectetur.
                  </Text>
                  <Text mt="2" as="div" size="2" color="gray">
                    Alpha building
                    <br />
                    Pin code: 55A68
                  </Text>
                  <Text mt="2" as="div" size="2" color="cyan">
                    Registered by Kalisa Marry
                  </Text>
                  <Text mt="2" as="div" size="2">
                    Located at Ngoma Kibungo, Rwanda
                  </Text>

                  <Button variant="solid" color="green">
                    Buy asset
                  </Button>
                </Box>
              </Flex>
              <Flex gap="2" mt="4">
                <Badge color="orange">on sale</Badge>
                <Badge color="green">Complete</Badge>
              </Flex>
            </Card>
          ))}
      </Flex>
    </>
  );
};
