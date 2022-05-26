import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/login.css";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory("");

  const handleClick = (e) => {
    actions.login(email, password);
    e.preventDefault();
  };
  return (
    <div>
      <form action="" className="form">
        <div className="top">
          <h1>Login Form</h1>
          <br />
          <a href="#" className="active">
            Login
          </a>
          <a
            href="https://3000-aussymo-washius-swy8j9tver7.ws-us46.gitpod.io/signup"
            className="unactive"
          >
            Signup
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="data">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          {/* <a href="#" className="forgotpsw">
            Forgot Password?
          </a> */}
        </div>
        <br />
        <br />
        <div className="submitdiv">
          <input
            onClick={handleClick}
            className="submitbtn"
            placeholder="Login"
          />
        </div>
        <br />
        <br />
        <div className="footer">
          <p>
            Not a member?{" "}
            <a href="#" className="signupbtn">
              Signup now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
