import { useContract, useContractRead } from "@thirdweb-dev/react";

export function useReview(id: number | string | undefined, address: string) {
  const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
  const { data, isLoading, error } = useContractRead(
    contract,
    "lessonsReviews",
    [id === undefined ? 0 : +id, address]
  );

  const {
    data: reviewCount,
    isLoading: loadingreviewCount,
    error: reviewCountError,
  } = useContractRead(contract, "reviewCount");
  return {
    data,
    isLoading,
    error,
  };
}
