import { Avatar, Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export const Property = () => {
  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS);
  const { data: properties, isLoading } = useContractRead(
    contract,
    "getAllProperties"
  );
  console.log(properties);
  return (
    <>
      <h1>Properties</h1>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <Flex my="4" gap="3" wrap="wrap" width="auto">
          {(
            properties as
              | [string, string, string, { _hex: string }][]
              | undefined
          )?.map(([propertyOwner, pinCode, image, propertyAddress], i) => (
            <Card key={i} style={{ maxWidth: "500px" }}>
              <Flex gap="3">
                <Avatar size="9" src={image} fallback="T" />
                <Box>
                  <Text mt="2" as="div" size="2" weight="bold">
                    {propertyOwner}
                  </Text>
                  <Text mt="2" as="div" size="2" color="gray">
                    Alpha building
                    <br />
                    Pin code: {pinCode}
                  </Text>
                  <Text mt="2" as="div" size="2" color="cyan">
                    Registered by Kalisa Marry
                  </Text>
                  <Text mt="2" as="div" size="2">
                    Located at {propertyAddress._hex}
                  </Text>

                  <Button variant="solid" mt="2">
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
      )}
    </>
  );
};
