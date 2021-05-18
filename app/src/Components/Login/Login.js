import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
export default function Login() {
  const history= useHistory()
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const PostData = ()=>{
        
    fetch('/Login',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
           
        },
        body:JSON.stringify({
            username,
            password
        })    
    }).then(res=>res.json()).then(data=>{
        if(data.error){
          toast(data.error,{position: "top-right",
          autoClose: 4000,});
        }else{
            localStorage.setItem('jwt',data.token)
            localStorage.setItem('user',JSON.stringify(data.user))
            toast(data.message,{position: "top-right",
            autoClose: 4000,});
            history.push('/home')
        }
    })
}
  return (
    <Fragment>
      <Card className="login">
        <div className="login-div">
          <h2>LOGIN</h2>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button className='btn' variant="primary" size="lg" onClick={()=>PostData()}>
          Login
          </Button>{" "}
          
          <div>
            <ToastContainer position="top-right" autoClose={5000} />
          </div>
          <h5>
            <Link to="/">Don't you have an account..?!</Link>
          </h5>
        </div>
      </Card>
    </Fragment>
  );
}
