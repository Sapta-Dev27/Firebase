import React from "react";
import '../index.css'
import '../app.css'
import app from '../firebase'
import { getDatabase , ref , set } from "firebase/database";

const user = () => {
   function createUser( id ,  name , email ) {
    const db = getDatabase(app);
    set(ref(db, `/users/${id}`) , {
      userId : id ,
      userName : name ,
      userEmail : email ,
    })
    .then(()=> alert("User Created Succesfully"))
    .catch((error) => alert("Error"));
  }
  return (
    <>
    <h1>Welcome Users </h1>
    <h2>Create Your Own Profile in DataBase</h2>
    <button onClick={ () => createUser( 12345 , "saptadev27" , "saptadev27gmail.com")} className="btn">Create User</button>
    <a href="/login"><button className="btn">Login</button></a>
    <a href="/register"><button className="btn">Register</button></a>
    </>
  )
}
export default user