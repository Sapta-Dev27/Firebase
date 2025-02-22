import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import '../app.css'
import '../index.css'
import app from '../firebase'
const auth = getAuth(app);
const Login = () => {
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Sign In Sucess"))
      .catch((error) => alert("User Not Found"))
}
return (
    <>
      <h1>Enter Your Email</h1>
      <input type="email" placeholder="Enter Your Email " className="auth" onChange={(e) => useEmail(e.target.value)} value={email} ></input>
      <h1>Set Your Password</h1>
      <input type="email" placeholder="Set  Your Password " className="auth" value={password} onChange={(e) => usePassword(e.target.value)}></input>
      <button className="btn" onClick={SignInUser}>SignIn</button>
    </>
  )
}

export default Login