import { useContract, useContractRead } from "@thirdweb-dev/react";

export function useReview(id: number | string | undefined, address: number) {
   const { data: contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
  const { data, isLoading, error } = useContractRead(contract, "lessonsReviews", [id, address]);

  return { data, error, isLoading }
}
