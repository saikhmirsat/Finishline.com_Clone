import React, { useState } from "react";
import "./Register.css";
import Logo from '../image/sportszone.png'
import ReCAPTCHA from "react-google-recaptcha";
import Statuslogo from "../Assets/statuslogo.svg";
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const [firstname, setFname] = useState("")
  const [lastname, setLname] = useState("")
  const [dob, setDob] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const LoginFunc = () => {
    navigate('/signin')
  }

  const handleSubmit = () => {
    const payload = {
      firstname, lastname, dob, email, password
    }
    console.log(payload)

    if (firstname === "" || lastname === "" || dob === "" || email === "" || password === "") {
      alert("please fill the form")
    } else {
      fetch("http://localhost:4500/users/register", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
      alert("Register success")
      navigate('/signin')
    }
  }

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <div
        className="logo"
        style={{
          width: "18em",
          height: "5em",
          margin: "auto",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={{ width: "270px" }} src={Logo} alt="logo" />
      </div>

      <hr style={{ color: "#ECF1F2" }}></hr>

      <div style={{ marginTop: "20px" }} className="tagline">
        <img
          style={{ width: "60px", margin: "auto" }}
          src={Statuslogo}
          alt="logo"
        />
        <p style={{ fontWeight: "bold" }}>
          ONE ACCOUNT. <br /> MORE ACCESS.
        </p>
      </div>

      <div className="cover">
        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
          CREATE A STATUS ACCOUNT
        </h2>
        <p style={{ marginTop: "20px" }}>
          <span style={{ fontWeight: "bold" }}>
            Earn 10 points for every $1 you spend.
          </span>
          <br />
          Get Points. Gain Access. Boost your STATUS.
        </p>
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          style={{ padding: "10px" }}
          placeholder="Birth Date"
          class="textbox-n"
          type="text"
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          style={{ padding: "10px" }}
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ padding: "10px" }}
          type="password"
          placeholder="Enter Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <ReCAPTCHA
          sitekey="6LfI0_8jAAAAACqjsIREK-HmcpnjXi9UD587Q2tL"
          onChange={onChange}
        />

        <button
          className="button"
          style={{
            padding: "10px",
            fontWeight: "bold",
            backgroundColor: "aqua",
            color: "black",
            border: "none",
            fontSize: "17px",
            cursor: "pointer",
          }}

          onClick={handleSubmit}
        >
          CREATE ACCOUNT
        </button>

        <p style={{ fontSize: "12px" }}>
          By creating an account, you agree to our{" "}
          <span style={{ textDecoration: "underline" }}>
            STATUS Terms & Conditions
          </span>
          ,<span style={{ textDecoration: "underline" }}> Privacy Policy</span>,
          and <span style={{ textDecoration: "underline" }}> Terms of Use</span>
          .
        </p>
      </div>

      <div className="bottombox">
        <div className="cover2">
          <h3 style={{ fontWeight: "bold" }}>Already have a STATUS account?</h3>
          <button
            className="button"
            style={{
              padding: "10px",
              fontWeight: "bold",
              backgroundColor: "aqua",
              color: "black",
              border: "none",
              fontSize: "17px",
              cursor: "pointer",
            }}
            onClick={LoginFunc}
          >
            SIGN IN
          </button>
        </div>
      </div>
    </>
  );
};


