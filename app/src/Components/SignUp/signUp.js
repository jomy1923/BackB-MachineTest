import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

const Signup = () => {
  const history = useHistory();
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const PostData = () => {
    console.log("i am in");
    fetch("/Signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast(data.error,{position: "top-right",
          autoClose: 4000,});
          console.log(data.error);
        } else {
          toast(data.message);
          console.log(data.message,{position: "top-right",
          autoClose: 5000,});
          history.push("/Login");
        }
      });
  };
  return (
    <Fragment>
      <Card className="signUp">
        <div className="signUp-div">
          <h2>SIGNUP</h2>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="btn"
            variant="primary"
            size="lg"
            onClick={() => PostData()}
          >
            SignUp
          </Button>{" "}
          <div>
            <ToastContainer position="top-right" autoClose={4000} />
          </div>
          <h5>
            <Link to="/Login">Already have an Account..?!</Link>
          </h5>
        </div>
      </Card>
    </Fragment>
  );
};

export default Signup;
