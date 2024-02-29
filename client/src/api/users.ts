import { useContract, useContractRead } from "@thirdweb-dev/react";

export function useUsers() {
    const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
    const { data, isLoading, error } = useContractRead(
        contract,
        "allUsers",
    );

    return {
        data,
        isLoading,
        error,
    };
}
