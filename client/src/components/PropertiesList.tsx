import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import ErrorEl from "./ErrorEl";
import { Property } from "../types/Property";
import SingleProperty from "./SingleProperty";
import { useProperty } from "../api/property";

export const PropertiesList = () => {
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
    const [creator, body, isPpublished, title] = data;
    setLessons([...lessons, { creator, body, isPpublished, title }]);
    setnext(next + 1);
  }, [isLoading, data, lessons, next, lessonsCount]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorEl error={error} />;

  return (
    <>
      <h1>Lessons</h1>
      {
        <Flex my="4" gap="3" wrap="wrap" width="auto">
          {lessons.map((property, i) => (
            <SingleProperty index={i} property={property} />
          ))}
        </Flex>
      }
    </>
  );
};
