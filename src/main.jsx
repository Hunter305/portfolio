import { createRoot } from "react-dom/client";
import App from "./App";

let rootElement = document.getElementById("root");
let root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
