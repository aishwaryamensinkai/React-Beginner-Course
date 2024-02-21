import { useContext, useState } from "react";
import { AppContext } from "../App";

export const ChangeUserProfile = (props) => {
  const { setUsername } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />{" "}
      {/* <button
        onClick={() => {
          props.setUsername(newUserName);
        }}
      >
        Change Username
      </button> */}
      <button
        onClick={() => {
          setUsername(newUserName);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
