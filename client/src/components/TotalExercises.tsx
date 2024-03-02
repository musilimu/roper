import { Badge } from "@radix-ui/themes";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";

export const ExercisesCount = () => {
    const { id } = useParams();
    const { data: contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
    const {
        data,
        isLoading,
    } = useContractRead(contract, "exercisesCount");
    if (!id) return
    return (
        <Badge color='mint'>
            {isLoading ? 'loading...' : data + ''} exercises
        </Badge>

    )
}