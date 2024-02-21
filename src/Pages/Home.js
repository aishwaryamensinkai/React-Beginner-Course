import { AppContext } from "../App";
import { useContext } from "react";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      {/* <h1>HomePage</h1> and the user is {props.username} */}
      <h1>HomePage</h1> and the user is {username}
    </div>
  );
};
