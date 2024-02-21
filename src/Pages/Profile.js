import { useContext } from "react";
import { ChangeUserProfile } from "../Components/ChangeUserProfile";
import { AppContext } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      {/* ProfilePage and the user is {props.username}
      <br />
      <ChangeUserProfile setUsername={props.setUsername} /> */}
      ProfilePage and the user is {username}
      <br />
      <ChangeUserProfile />
    </div>
  );
};
