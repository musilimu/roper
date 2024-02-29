import { Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { Web3Button } from "@thirdweb-dev/react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export const Register = () => {
  const navigate = useNavigate();
  const [asset, setAsset] = useState({
    name: "",
    notes: "",
  });

const onChange = useCallback((value: string) => {
  setAsset((val) => ({ ...val, notes: value }))
}, []);

  return (
    <Flex direction="column" mt="6" gap="3" >
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
        <SimpleMDE 
        value={asset.notes} onChange={onChange}/>
      </div>
      <Web3Button
        contractAddress="0x9C7500cB625BB71585D9B013A3D4FEb40d6BeC50"
        action={async (contract) => { contract.call("createLesson", [asset.notes, asset.name]).then(() => { navigate("/"); setAsset({ name: '', notes: '' }) }); }}
      >
        save
      </Web3Button>
    </Flex>
  );
};
