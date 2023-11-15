import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// import "../component/Signup.css"

function Main() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("user already exist");
            history("/main");
          } else if (res.data == "not exist") {
            history("/");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <header className="showcase">
        <div className="logo">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="NETFLIX LOGO" />
        </div>

        <div className="showcase-content">
          <div className="formm">
            <form>
              <h1>Sign UP</h1>

              <div className="info">
                <input
                  className="email"
                  type="email"
                  placeholder=" First Name"
                />
                <input
                  className="email"
                  type="email"
                  placeholder="Second Name"
                />
                <input
                  className="email"
                  type="email"
                  placeholder="Email or phone number"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <input
                  className="email"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit" onClick={submit}>
                  Sign Up
                </button>
              </div>
              <div className="help">
                <div>
                  <input value="true" type="checkbox" />
                  <label>Remember me</label>
                </div>

                <NavLink to="https://www.netflix.com/dz-en/LoginHelp">
                  Need Help ?
                </NavLink>
              </div>
            </form>
          </div>

          {/* <div className="fcbk">
            <NavLink to="https://facebook.com">
              <img
                src="https://i.ibb.co/LrVMXNR/social-fb.png"
                alt="Facebook"
              />
            </NavLink>
            <p>Login with Facebook</p>
          </div> */}
          <div className="signup">
            <p>New to Netflix ?</p>
            <NavLink to="/main">Sign In now</NavLink>
          </div>
          <div className="more">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <NavLink to="#">Learn more.</NavLink>
            </p>
          </div>
        </div>

        {/* <footer>
          <div className="ftr-content">
            <div className="contact">
              <NavLink to="#">Quesions? Contact us.</NavLink>
            </div>
            <div className="ftr">
              <NavLink to="#">Gift Card Terms</NavLink>
              <NavLink to="#">Terms of Use</NavLink>
              <NavLink to="#">Privacy Statement</NavLink>
            </div>
            <div className="select">
              <select>
                <option>English</option>
                <option>العربية</option>
                <option>Français</option>
              </select>
            </div>
          </div>
        </footer> */}
      </header>
    </>
  );
}

export default Main;
