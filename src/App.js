import React, { useState } from "react";
import "./styles.css";

var flagsDb = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag"
};

export default function App() {
  const [flag, setFlag] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function inputChangeHandler(event) {
    var flagInput = event.target.value;
    setFlag(flagInput);

    if (flagInput in flagsDb) {
      setMeaning(flagsDb[flagInput]);
    } else {
      setMeaning("failure to recognise this flag");
    }
  }
  function flagClickHandler(flagInput) {
    setMeaning(flagsDb[flagInput]);
  }
  var flags = Object.keys(flagsDb);

  return (
    <div className="App">
      <h1>inside flag!</h1>
      <input
        value={flag}
        onChange={inputChangeHandler}
        placeholder={"Search your flag"}
      />
      <h2> {flag} </h2>
      <h3> {meaning} </h3>
      {flags.map((flag) => (
        <span
          key={flag}
          onClick={() => flagClickHandler(flag)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {flag}
          {""}
        </span>
      ))}
    </div>
  );
}
