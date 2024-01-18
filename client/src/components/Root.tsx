import { Route, Routes } from "react-router-dom";
import { Property } from "./Property";
import { Teachers } from "./Teachers";

import { Web3Button } from "@thirdweb-dev/react";
import { Header } from "./Header";
import { Flex } from "@radix-ui/themes";
import { Register } from "./Register";
import Lesson from "./Lesson";

export const Root = () => {
  return (
    <>
      <Flex justify="between" align="center">
        <Header />
        <Web3Button
          contractAddress={import.meta.env.VITE_CONTRACTADDRESS}
          action={() => {
            console.log("hi");
          }}
        >
          Connect wallet
        </Web3Button>
      </Flex>
      <Routes>
        <Route path="/" element={<Property />} />
        <Route path="/teachers/*" element={<Teachers />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/lessons/:id" element={<Lesson />} />
      </Routes>
    </>
  );
};
