import React from "react";
import '../app.css'
import '../index.css'
import { GoogleAuthProvider , signInWithPopup, } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from '../firebase'

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => alert("User Created Succesfully"))
      .catch((error) => alert("User is Not Created"));
  }
  const SignUpWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(() => alert("Sign Up Sucessfull"))
    .catch(() => alert("Sign Up Successfull") ) 
  };
  return (
    <>
      <h1>Enter Your Email</h1>
      <input type="email" placeholder="Enter Your Email " className="auth" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
      <h1>Enter Your Password</h1>
      <input type="password" placeholder="Enter  Your Password " className="auth" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <div className="btns">
      <button className="btn" onClick={SignUpUser}>SignUp</button>
      <button className="btn-2" onClick={SignUpWithGoogle}>Sign Up with Google</button>
      </div>
    </>
  )
}
export default Register