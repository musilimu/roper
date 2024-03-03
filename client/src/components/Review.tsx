import {
  Avatar,
  Box,
  Button,
  Flex,
  Popover,
  Text,
  TextArea,
} from "@radix-ui/themes";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Stars } from "./Stars";
import { W3Button } from "./W3Button";

const Review = () => {
  const [filled, setFilled] = useState(0);
  const [message, setMessage] = useState("");
  const { id } = useParams();

  return (
    <Popover.Root>
      <Popover.Trigger>
        <W3Button  action={() => { }}>
          Add a review
        </W3Button>
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
                <W3Button
                  
                  action={async (contract) => { contract.call("addReview", [id, message, filled]) }}
                >
                  Comment
                </W3Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default Review;
