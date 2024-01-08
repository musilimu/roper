import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="0004f9a23752cc7f7fc3207283ecad1b"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
