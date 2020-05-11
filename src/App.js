import React from "react";
import "./App.scss";
import ProgressBarA from "./components/ProgressBars/ProgressBarA";
import ToastNotification from "./components/ToastNotification/ToastNotification";

function App() {
  return (
    <div className="App">
      <ProgressBarA />
      <ToastNotification />
    </div>
  );
}

export default App;
