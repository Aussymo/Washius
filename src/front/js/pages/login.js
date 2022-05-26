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
      <form action="" class="form">
        <div class="top">
          <h1>Login Form</h1>
          <br />
          <a href="#" class="active">
            Login
          </a>
          <a href="#" class="unactive">
            Signup
          </a>
        </div>
        <br />
        <br />
        <br />
        <div class="data">
          <input type="text" class="inputs" placeholder="Email Address" />
          <input type="text" class="inputs" placeholder="Password" />
          <br />

          <a href="#" class="forgotpsw">
            Forgot Password?
          </a>
        </div>
        <br />
        <br />
        <div class="submitdiv">
          <input type="submit" value="Login" class="submitbtn" />
        </div>
        <br />
        <br />
        <div class="footer">
          <p>
            Not a member?{" "}
            <a href="#" class="signupbtn">
              Signup now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
