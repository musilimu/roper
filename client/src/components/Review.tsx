import {
  Avatar,
  Box,
  Button,
  Flex,
  Popover,
  Text,
  TextArea,
} from "@radix-ui/themes";
import {
  ChatBubbleIcon,
  StarIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";

const Review = () => {
  const [filled, setFilled] = useState(0);
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "addReview"
  );
  console.log(error);
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button ml="2" mt="2">
          <ChatBubbleIcon width="16" height="16" />
          Add a review
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <Flex gap="3">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            fallback="A"
            radius="full"
          />
          <Box grow="1">
            <TextArea
              placeholder="Write a comment…"
              style={{ height: 80 }}
              defaultValue={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Flex gap="3" mt="3" justify="between">
              <Flex align="center" gap="2" asChild>
                <Text as="label" size="2">
                  {Array(5)
                    .fill(1)
                    .map((_, i) =>
                      i < filled ? (
                        <StarFilledIcon
                          key={i}
                          onClick={() => setFilled(i + 1)}
                        />
                      ) : (
                        <StarIcon key={i} onClick={() => setFilled(i + 1)} />
                      )
                    )}
                </Text>
              </Flex>

              <Popover.Close disabled={isLoading}>
                <Button
                  size="1"
                  onClick={() => mutateAsync({ args: [id, message, filled] })}
                >
                  Comment
                </Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default Review;
