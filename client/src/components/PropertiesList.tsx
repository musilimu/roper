import { Flex } from "@radix-ui/themes";
import Loading from "./Loading";
import ErrorEl from "./ErrorEl";
import SingleProperty from "./SingleProperty";
import { useLessons } from "../hooks/lesson";

export const PropertiesList = () => {
  const { error, isLoading, lessons } = useLessons();
  if (isLoading) return <Loading />;
  if (error) return <ErrorEl error={error} />;
  
  const activeLessons = lessons.filter((lesson) => !lesson.isDeleted);
  return (
    <>
      <h1>Lessons</h1>
      {
        <Flex my="4" gap="3" wrap="wrap" width="auto">
          {activeLessons.map((property, i) => (
            <SingleProperty index={i} property={property} key={property.body} />
          ))}
        </Flex>
      }
    </>
  );
};
