import { Flex, TextField } from "@radix-ui/themes";

export const Register = () => {
  return (
    <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
      <TextField.Input variant="surface" placeholder="name" />
      <TextField.Input variant="surface" placeholder="name" />
      <TextField.Input variant="surface" placeholder="name" />
    </Flex>
  );
};
