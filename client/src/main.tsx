import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={import.meta.env.VITE_ACTIVECHAIN}
      clientId={import.meta.env.VITE_CLIENTID}
    >
      <Theme
        accentColor="crimson"
        grayColor="sand"
        radius="large"
        scaling="95%"
      >
        <App />
      </Theme>
    </ThirdwebProvider>
  </React.StrictMode>
);

