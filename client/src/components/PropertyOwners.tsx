import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

export const PropertyOwners = () => {
  return (
    <>
      <h1>Property / Assets owners</h1>
      <Flex my="4" gap="3" wrap="wrap" width="auto">
        {Array(14)
          .fill(1)
          .map((_, i) => (
            <Card key={i} style={{ maxWidth: 340 }}>
              <Flex gap="3" align="center">
                <Avatar
                  size="3"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                />
                <Box>
                  <Text as="div" size="2" weight="bold">
                    Muslim uwi
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Alpha building
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
      </Flex>
    </>
  );
};
