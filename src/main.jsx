import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter  , Route , Routes} from "react-router";
import User from './components/user'
import Login from  './components/login'
import Register from "./components/register";

const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<User/>} />
     <Route  path="/login" element ={<Login/>} />
     <Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
);

