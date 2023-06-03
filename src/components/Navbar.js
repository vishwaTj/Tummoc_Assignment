import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

const SignupFunc=()=>{
    console.log("Signup func");
}    

const LoginFunc=()=>{
    console.log("Login func");
}
    
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand">Navbar</Link>
          <div className="d-flex" role="search">
            <button onClick={LoginFunc} className="btn btn-outline-success" type="submit">
              Login
            </button>
            <button onClick={SignupFunc} className="btn btn-outline-success" type="submit">
              SignUp
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
