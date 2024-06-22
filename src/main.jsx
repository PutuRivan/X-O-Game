import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex flex-col items-center justify-center h-screen">
      <Game />
    </div>
  </React.StrictMode>
);
