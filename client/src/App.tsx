import { Web3Button } from "@thirdweb-dev/react";
import "./App.css";

function App() {
  return (
    <Web3Button
      contractAddress={import.meta.env.VITE_CONTRACTADDRESS}
      action={async (contract) => contract.call("myFunctionName")}
    >
      test
    </Web3Button>
  );
}

export default App;
