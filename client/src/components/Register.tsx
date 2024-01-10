import { Button, Flex, Text, TextField } from "@radix-ui/themes";

export const Register = () => {
  return (
    <Flex direction="column" mt="6" gap="3" style={{ maxWidth: 450 }}>
      <h1>Register an asset</h1>
      <div>
        <Text>Property owner</Text>
        <TextField.Input variant="surface" size="3" placeholder="name" />
      </div>
      <div>
        <Text>Pin code</Text>
        <TextField.Input variant="surface" size="3" placeholder="name" />
      </div>
      <div>
        <Text>Image of asset</Text>
        <TextField.Input variant="surface" size="3" placeholder="name" />
      </div>
      <div>
        <Text>Property address</Text>
        <TextField.Input variant="surface" size="3" placeholder="name" />
      </div>
      <Button>Register</Button>
    </Flex>
  );
};
