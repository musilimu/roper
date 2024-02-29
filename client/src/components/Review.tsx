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
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";
import { Stars } from "./Stars";

const Review = () => {
  const [filled, setFilled] = useState(0);
  const [message, setMessage] = useState("");
  const { id } = useParams();

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
                  <Stars stars={5} setFilled={setFilled} filled={filled} />
                </Text>
              </Flex>

              <Popover.Close>
                <Web3Button
                  contractAddress="0xf95a0dDC6eB9259f6a41e42Bc5795aC4d875bf70"
                  action={async (contract) => { contract.call("addReview", [id, message, filled]) }}
                >
                  Comment
                </Web3Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default Review;
