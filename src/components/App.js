import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [visi, setvisi] = useState({ display: "none" });
  const para = () => {
    setvisi({ display: "block" });
  };
  return (
    <div id="main">
      <button id="click" onClick={para}>
        Show
      </button>
      <paragraph id="para" style={visi}>
        {" "}
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </paragraph>
    </div>
  );
}
