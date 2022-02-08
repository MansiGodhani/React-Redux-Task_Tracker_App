import { useState } from "react";
const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter a name");
      return;
    }
    if (!password) {
      alert("Please enter a password");
      return;
    }
    if (name === "admin" && password === "123") {
      onLogin();
    } else {
      alert("Please Enter Valid User name and password");
    }
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <h2>Log In</h2>
      <div className="form-control">
        <label>User Name</label>
        <input
          type="text"
          placeholder="Enter User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <input type="submit" value="Login" className="btn btn-login " />
    </form>
  );
};

export default Login;