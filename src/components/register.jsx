import React from "react";
import '../app.css'
import '../index.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from '../firebase'
const auth = getAuth(app) ;

const Register = () => {
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const SignUpUser = () => {
  createUserWithEmailAndPassword(auth , email , password)
  .then((value) => alert("User Created Succesfully"))
  .catch((error) => alert("User is Not Created"));
}
return (
    <>
    <h1>Enter Your Email</h1>
    <input type="email" placeholder="Enter Your Email " className="auth" value={email}  onChange={(e) => setEmail(e.target.value)} ></input>
    <h1>Enter Your Password</h1>
    <input type="password" placeholder="Enter  Your Password " className="auth"  value={password}  onChange={(e) =>setPassword(e.target.value)}></input>
    <button className="btn" onClick={SignUpUser}>SignUp</button>
    </>
  )
}
export default Register