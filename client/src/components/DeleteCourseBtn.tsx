import { useNavigate, useParams } from "react-router-dom";
import { W3Button } from "./W3Button";

const DeleteCourseButton = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <W3Button action={async (contract) => { contract.call("deleteLesson", [id]).then(() => navigate("/")); }}>
      Delete
    </W3Button>
  )
}

export default DeleteCourseButton