import "bulmaswatch/superhero/bulmaswatch.min.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CodeCell from "./components/code-cell";

const App = () => {

  return (
    <div>
      <CodeCell />
    </div>
  );
};
const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
