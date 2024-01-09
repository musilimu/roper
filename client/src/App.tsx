import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "@radix-ui/themes";
import "./App.css";
import { Root } from "./components/Root";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
