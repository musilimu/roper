import { useContract, useContractRead } from "@thirdweb-dev/react";

export function uselessonsReviewCount() {
    const { data: contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
    const { data, isLoading, error } = useContractRead(
        contract,
        "lessonsReviewCount",
    );

    return {
        data,
        isLoading,
        error,
    };
}
