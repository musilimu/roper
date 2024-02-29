import { Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [asset, setAsset] = useState({
    name: "",
    notes: "",
  });


  return (
    <Flex direction="column" mt="6" gap="3" style={{ maxWidth: 450 }}>
      <h1>Add a lesson</h1>
      <div>
        <Text>Lesson name</Text>
        <TextField.Input
          variant="surface"
          size="3"
          value={asset.name}
          onChange={(e) =>
            setAsset((val) => ({ ...val, name: e.target.value }))
          }
          placeholder="name"
        />
      </div>
      <div>
        <Text>Notes</Text>
        <TextArea
          placeholder="write notes…"
          value={asset.notes}
          onChange={(e) =>
            setAsset((val) => ({ ...val, notes: e.target.value }))
          }
        />
      </div>
      <Web3Button
        contractAddress="0xf95a0dDC6eB9259f6a41e42Bc5795aC4d875bf70"
        action={async (contract) => { contract.call("createLesson", [asset.notes, asset.name]).then(() => { navigate("/"); setAsset({ name: '', notes: '' }) }); }}
      >
        save
      </Web3Button>
    </Flex>
  );
};
