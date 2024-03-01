import { Badge } from "@radix-ui/themes";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";

export const EnrolledUsers = () => {
    const { id } = useParams();
    const { data: contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
    const {
        data: users,
        isLoading,
    } = useContractRead(contract, "lessonEnrollments", [id]);
    if (!id) return
    return (
        <Badge color='gold'>
            {isLoading ? 'loading...' : users.length + ''} enrolled
        </Badge>

    )
}