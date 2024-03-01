import { Avatar, Box, Button, Flex, Text } from "@radix-ui/themes";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useProperty } from "../api/property";
import Loading from "./Loading";
import ErrorEl from "./ErrorEl";
import BadgeList from "./BadgeList";
import LessonNav from "./LessonNav";
import Review from "./Review";
import DeleteCourseButton from "./DeleteCourseBtn";
import { Reviews } from "./Reviews";
import { EnrollButton } from "./EnrollButton";
import { PublishLesson } from "./PublishLesson";

const Lesson = () => {
  const { id } = useParams();
  const {
    error,
    isLoading,
    data: { lessons },
  } = useProperty(id);


  if (isLoading) return <Loading />;
  if (error) return <ErrorEl error={error} />;
  const [creator, body, isPublished, title] = lessons;

  return (
    <Flex mt='8'>
      <div>
        <LessonNav />
        <Flex gap="3">
          <Avatar size="4" src={creator} fallback="T" />
          <Box>
            <Text mt="2" as="div" size="2" color="gray" weight="bold">
              {title}
            </Text>
            <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
            <Text mt="2" as="div" size="2" color="cyan">
              Created by {creator}
            </Text>
          </Box>
        </Flex>
        <Reviews />
        <BadgeList
          badges={[
            { badge: "social", color: "blue" },
            { badge: "education", color: "gray" },
          ]}
        />
        <Flex gap='2' align='center'>
          <Link to="edit">
            <Button variant="solid">
              Edit
            </Button>
          </Link>
          <Button variant="solid">
            add exercise
          </Button>
          <Review />
          <PublishLesson isPublished={isPublished} />
          <DeleteCourseButton />
          <EnrollButton />
        </Flex>
      </div>
    </Flex>
  );
};

export default Lesson;
