import { Web3Button } from "@thirdweb-dev/react";
import "./App.css";

function App() {
  return (
    <>
      <Web3Button
        contractAddress="0x265482e464e0F4343075EfEe719C88b86c8e1F19"
        action={async (contract) => contract.call("myFunctionName")}
      >
        Call myFunctionName from the connected wallet
      </Web3Button>
    </>
  );
}

export default App;
