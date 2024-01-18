import { Avatar, Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

export const Property = () => {
  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS);
  const { data: properties, isLoading } = useContractRead(
    contract,
    "getAllProperties"
  );
  const p = [
    [
      "0x5e761E330c3355DBB814Ab58b4BE989BE99a41A7",
      "ggassh",
      "0x5e761E330c3355DBB814Ab58b4BE989BE99a41A7",
      {
        type: "BigNumber",
        hex: "0x5e761e330c3355dbb814ab58b4be989be99a41a7",
      },
    ],
    [
      "0x5e761E330c3355DBB814Ab58b4BE989BE99a41A7",
      "sss",
      "bbssn",
      {
        type: "BigNumber",
        hex: "0x5e761e330c3355dbb814ab58b4be989be99a41a7",
      },
    ],
    [
      "0x5e761E330c3355DBB814Ab58b4BE989BE99a41A7",
      "0x5e761E330c3355DBB814Ab58b4BE989BE99a41A7",
      "0x5e761E330c3355DBB814Ab58b4BE989BE99a41A7",
      {
        type: "BigNumber",
        hex: "0x5e761e330c3355dbb814ab58b4be989be99a41a7",
      },
    ],
  ];
  return (
    <>
      <h1>Lessons</h1>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <Flex my="4" gap="3" wrap="wrap" width="auto">
          {(
            properties as
              | [string, string, string, { _hex: string }][]
              | undefined
          )?.map(([propertyOwner, pinCode, image], i) => (
            <Card key={i} style={{ maxWidth: "500px" }}>
              <Flex gap="3">
                <Avatar size="4" src={image} fallback="T" />
                <Box>
                  <Text mt="2" as="div" size="2" color="gray" weight="bold">
                    {pinCode}
                  </Text>
                  <Text mt="2" as="div" size="2" weight="light">
                    {propertyOwner}
                  </Text>
                  <Text mt="2" as="div" size="2" color="cyan">
                    Created by Kalisa Marry
                  </Text>
                  <Text mt="2" as="div" size="2">
                    {24} Enrolled
                  </Text>
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
