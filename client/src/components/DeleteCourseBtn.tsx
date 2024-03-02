import { Web3Button } from "@thirdweb-dev/react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCourseButton = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Web3Button
      contractAddress="0xF2F64A8932c42A2E57D100fAE1aFB60528c9b800"
      action={async (contract) => { contract.call("deleteLesson", [id]).then(() => navigate("/")); }}
    >
      Delete
    </Web3Button>
  )
}

export default DeleteCourseButton