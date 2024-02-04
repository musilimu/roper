import { useEffect, useState } from "react";
import { Property } from "../types/Property";
import { useProperty } from "../api/property";

export function useLessons() {
  const [next, setnext] = useState(0);
  const [lessons, setLessons] = useState<Property[]>([]);
  const {
    data: { lessons: data, lessonsCount },
    error,
    isLoading,
  } = useProperty(next);

  useEffect(() => {
    if (isLoading || !data) return;
    if (lessonsCount < next) return;
    const [creator, body, isPublished, isDeleted, title] = data;
    setLessons([...lessons, { creator, body, isPublished, isDeleted, title }]);
    setnext(next + 1);
  }, [isLoading, data, lessons, next, lessonsCount]);
  return { lessons, error, isLoading: next < lessonsCount };
}
