import { useState } from "react";
import "./style.css";

function Profile() {
  const [loggedin, setLoggedIn] = useState(false);
  return (
    <div className="profile-wrapper">
      <h2>Conditional Rendering In React</h2>
      <h2>Ternary operator</h2>
      {loggedin
        ? "Welcome to functional components"
        : "Welcome to components learning"}
    </div>
  );
}
export default Profile;
