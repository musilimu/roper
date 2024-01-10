import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS);
  const navigate = useNavigate();

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "createProperty"
  );

  const [asset, setAsset] = useState({
    propertyOwner: "",
    pinCode: "",
    image: "",
    propertyAddress: "",
  });

  const saveAsset = () => {
    const { propertyOwner, pinCode, image, propertyAddress } = asset;
    mutateAsync({
      args: [propertyOwner, pinCode, image, propertyAddress],
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Flex direction="column" mt="6" gap="3" style={{ maxWidth: 450 }}>
      <h1>Register an asset</h1>
      <div>
        <Text>Property owner</Text>
        <TextField.Input
          variant="surface"
          size="3"
          value={asset.propertyOwner}
          onChange={(e) =>
            setAsset((val) => ({ ...val, propertyOwner: e.target.value }))
          }
          placeholder="name"
        />
      </div>
      <div>
        <Text>Pin code</Text>
        <TextField.Input
          variant="surface"
          size="3"
          placeholder="name"
          value={asset.pinCode}
          onChange={(e) =>
            setAsset((val) => ({ ...val, pinCode: e.target.value }))
          }
        />
      </div>
      <div>
        <Text>Image of asset</Text>
        <TextField.Input
          variant="surface"
          size="3"
          placeholder="name"
          value={asset.image}
          onChange={(e) =>
            setAsset((val) => ({ ...val, image: e.target.value }))
          }
        />
      </div>
      <div>
        <Text>Property address</Text>
        <TextField.Input
          variant="surface"
          size="3"
          placeholder="name"
          value={asset.propertyAddress}
          onChange={(e) =>
            setAsset((val) => ({ ...val, propertyAddress: e.target.value }))
          }
        />
      </div>
      <Button onClick={saveAsset}>Register {isLoading && "loading..."}</Button>
    </Flex>
  );
};
