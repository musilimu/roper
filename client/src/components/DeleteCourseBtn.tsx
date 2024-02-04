import { Button } from "@radix-ui/themes";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import ErrorEl from "./ErrorEl";

const DeleteCourseButton = ({ id }: { id: number | string | undefined }) => {
  const navigate = useNavigate();
  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS);
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "deleteLesson"
  );

  const deleteLesson = () => {
    mutateAsync({
      args: [id],
    }).then(() => {
      navigate("/");
    })
  }

  return (
    <>
      <ErrorEl error={error}></ErrorEl>
      <Button onClick={deleteLesson} disabled={isLoading} variant="surface" mt="2" ml="2">
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
    </>
  )
}

export default DeleteCourseButton