import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/menu">Menu</Link> &nbsp;
      <Link to="/profile">Profile</Link> &nbsp;
      <Link to="/contact">Contact</Link>
    </div>
  );
};
