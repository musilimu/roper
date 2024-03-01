import { Web3Button } from "@thirdweb-dev/react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCourseButton = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Web3Button
      contractAddress="0xf10bfA953951B2394ab70D4617b97F963f66f0B2"
      action={async (contract) => { contract.call("deleteLesson", [id]).then(() => navigate("/")); }}
    >
      Delete
    </Web3Button>
  )
}

export default DeleteCourseButton