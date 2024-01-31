import { Route, Routes } from "react-router-dom";
import { PropertiesList } from "./PropertiesList";
import { Teachers } from "./Teachers";

import { Web3Button, shortenAddress, useAddress } from "@thirdweb-dev/react";
import { Header } from "./Header";
import { Flex } from "@radix-ui/themes";
import { Register } from "./Register";
import Lesson from "./Lesson";

export const Root = () => {
  const address = useAddress();
  return (
    <>
      <Flex justify="between" align="center">
        <h3>Logo</h3>
        <Header />
        {!address && (
          <Web3Button
            contractAddress={import.meta.env.VITE_CONTRACTADDRESS}
            action={() => { }}
          >
            Connect wallet
          </Web3Button>
        )}
        {address && <h3>{shortenAddress(address)}</h3>}
      </Flex>
      <Routes>
        <Route path="/" element={<PropertiesList />} />
        <Route path="/teachers/*" element={<Teachers />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/lessons/:id" element={<Lesson />} />
      </Routes>
    </>
  );
};
