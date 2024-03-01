import { Web3Button } from "@thirdweb-dev/react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCourseButton = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Web3Button
      contractAddress="0xd76E4038FFAd5Aca9E2115B1bB32E3254BB5f113"
      action={async (contract) => { contract.call("deleteLesson", [id]).then(() => navigate("/")); }}
    >
      Delete
    </Web3Button>
  )
}

export default DeleteCourseButton