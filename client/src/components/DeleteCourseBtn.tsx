import { Web3Button } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

const DeleteCourseButton = ({ id }: { id: number | string | undefined }) => {
  const navigate = useNavigate();

  return (
    <Web3Button
      contractAddress="0x9C7500cB625BB71585D9B013A3D4FEb40d6BeC50"
      action={async (contract) => { contract.call("deleteLesson", [id]).then(() => navigate("/")); }}
    >
      Delete
    </Web3Button>
  )
}

export default DeleteCourseButton