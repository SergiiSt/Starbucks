import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter/Counter.jsx";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
  </StrictMode>
);
