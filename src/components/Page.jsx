import { useState } from "react";
import Profile from "./Profile";

function Page() {
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = email
    localStorage.setItem("myKey", value);
    setFlag(true)
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={email} type="email" />
        </div>
        <button onClick={handleSubmit}>Login</button>
        {flag && <Profile />}
      </form>
    </div>
  );
}

export default Page;
