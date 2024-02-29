import { useContract, useContractRead } from "@thirdweb-dev/react";

export function useProperty(id: number | string | undefined) {
   const { data: contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS, "");
  const {
    data: lessons,
    isLoading,
    error,
  } = useContractRead(contract, "lessons", [id === undefined ? 0 : +id]);
  const {
    data: lessonsCount,
    isLoading: loadingLessonsCount,
    error: lessonsCountError,
  } = useContractRead(contract, "lessonsCount");
  if (id === undefined) throw new Error("id not found");
  return {
    data: {
      lessonsCount,
      lessons,
    },
    isLoading: isLoading || loadingLessonsCount,
    error: error || lessonsCountError,
  };
}
