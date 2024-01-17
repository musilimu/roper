import { Route, Routes } from "react-router-dom";
import { Property } from "./Property";
import { PropertyOwners } from "./PropertyOwners";

import { Web3Button } from "@thirdweb-dev/react";
import { Header } from "./Header";
import { Flex } from "@radix-ui/themes";
import { Register } from "./Register";

export const Root = () => {
  return (
    <>
      <Flex justify="between" align="center">
        <Header />
        <Web3Button
          contractAddress={import.meta.env.VITE_CONTRACTADDRESS}
          action={async (contract) => contract.call("owner")}
        >
          Register
        </Web3Button>
      </Flex>
      <Routes>
        <Route path="/" element={<Property />} />
        <Route path="/owners/*" element={<PropertyOwners />} />
        <Route path="/register/*" element={<Register />} />
      </Routes>
    </>
  );
};
