import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <Features />
  </StrictMode>
);
