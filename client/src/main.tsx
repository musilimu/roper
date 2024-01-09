import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={import.meta.env.VITE_ACTIVECHAIN}
      clientId={import.meta.env.VITE_CLIENTID}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
