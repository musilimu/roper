import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="ethereum" clientId="your-client-id">
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
