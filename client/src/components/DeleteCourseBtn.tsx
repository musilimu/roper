import { Web3Button } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

const DeleteCourseButton = ({ id }: { id: number | string | undefined }) => {
  const navigate = useNavigate();

  return (
    <Web3Button
      contractAddress="0xf95a0dDC6eB9259f6a41e42Bc5795aC4d875bf70"
      action={async (contract) => { contract.call("deleteLesson", [id]).then(() => navigate("/")); }}
    >
      Delete
    </Web3Button>
  )
}

export default DeleteCourseButton