import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import '../app.css'
import '../index.css'
import app from '../firebase'
import { signInWithPopup,  GoogleAuthProvider } from "firebase/auth";
import {  GithubAuthProvider  , signInWithRedirect} from "firebase/auth";

const provider = new GoogleAuthProvider();
const GitHubprovider = new GithubAuthProvider();

const auth = getAuth(app);

const Login = () => {
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Sign In Sucess"))
      .catch((error) => alert("User Not Found"))
  }
  const SignInGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => alert("Google SignIn Successful"))
      .catch((error) => alert("Googele SignIn Not Successful"))
  }
  const SignInGithub = () => {
    signInWithRedirect(auth, GitHubprovider)
    .then(() => alert("Github SignIn Successful"))
    .catch((error) => alert("Github SignIn Not Succesfull"))
  }
  return (
    <>
      <h1>Enter Your Email</h1>
      <input type="email" placeholder="Enter Your Email " className="auth" onChange={(e) => useEmail(e.target.value)} value={email} ></input>
      <h1>Set Your Password</h1>
      <input type="password" placeholder="Set  Your Password " className="auth" value={password} onChange={(e) => usePassword(e.target.value)}></input>
      <div className="btns">
        <button className="btn" onClick={SignInUser}>SignIn</button>
        <button className="btn-2" onClick={SignInGoogle}>Sign In With Google</button>
        <button className="btn-2" onClick={SignInGithub}>Sign In With Github</button>
      </div>
    </>
  )
}

export default Login