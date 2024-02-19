import { useEffect, useState } from "react";

export const Text = () => {
  const [text, displayValue] = useState("");
  useEffect(() => {
    console.log("Mounted");
    return console.log("Unmounted");
  });
  return (
    <div>
      <input
        onChange={(event) => {
          displayValue(event.target.value);
        }}
      ></input>
      <h1>{text}</h1>
    </div>
  );
};
