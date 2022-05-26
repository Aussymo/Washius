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
          <img
            className="logo"
            src="https://media.discordapp.net/attachments/617586904866619402/977376727657508904/Add_a_heading_2.png"
          />
          <br />
          <a href="#" className="active">
            Login
          </a>
          <a href="#" className="unactive">
            Signup
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="data">
          <input type="text" className="inputs" placeholder="Email Address" />
          <input type="text" className="inputs" placeholder="Password" />
          <br />

          <a href="#" className="forgotpsw">
            Forgot Password?
          </a>
        </div>
        <br />
        <br />
        <div className="submitdiv">
          <input type="submit" value="Login" className="submitbtn" />
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
