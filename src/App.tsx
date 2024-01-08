import { Web3Button } from "@thirdweb-dev/react";
import "./App.css";

function App() {
  return (
    <>
      <Web3Button
        contractAddress="{{contract_address}}"
        action={async (contract) => contract.call("myFunctionName")}
      >
        Call myFunctionName from the connected wallet
      </Web3Button>
    </>
  );
}

export default App;
