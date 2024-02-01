import { useAddress } from "@thirdweb-dev/react";
import { useReview } from "../api/review";
import { useEffect, useState } from "react";

export function useReviews(id: number | string | undefined) {
  const [reviews, setReviews] = useState([]);
  const address = useAddress();
  const users = [address];
  const [next, setnext] = useState(0);
  const { data, error, isLoading } = useReview(id, users[next] || "");

  useEffect(() => {
    if (isLoading || !data) return;
    // if (lessonsCount < next) return;
    // const [creator, body, isPpublished, title] = data;
    // setReviews([...reviews, { creator, body, isPpublished, title }]);
    setnext(next + 1);
  }, [isLoading, data, next]);

  return {
    reviews,
    isLoading,
    error,
  };
}
