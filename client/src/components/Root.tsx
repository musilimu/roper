import { Route, Routes } from "react-router-dom";
import { PropertiesList } from "./PropertiesList";
import { Teachers } from "./Teachers";
import { Header } from "./Header";
import { Flex } from "@radix-ui/themes";
import { Register } from "./Register";
import Lesson from "./Lesson";
import UserAvatar from "./UserAvatar";
import { useAddress } from "@thirdweb-dev/react";
import { EditLesson } from "./EditLessson";
import { Exercises } from "./Exercises";
import { DoExercises } from "./DoExercises";

export const Root = () => {
  const address = useAddress();
  return (
    <>
      <Flex justify="between" align="center" mt='4'>
        <Header />
        {address && <UserAvatar />}
      </Flex>
      <Routes>
        <Route path="/" element={<PropertiesList />} />
        <Route path="/teachers/*" element={<Teachers />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/lessons/:id" >
          <Route index element={<Lesson />} />
          <Route path="edit" element={<EditLesson />} />
          <Route path="exercises"  >
            <Route index element={<Exercises />} />
            <Route path="do" element={<DoExercises />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
