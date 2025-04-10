import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
        <Link className="link" to="/">
            <h6>ALL</h6>
          </Link>
          <Link className="link" to="/?cat=brands">
            <h6>BRANDS</h6>
          </Link>
          <Link className="link" to="/?cat=wood">
            <h6>WOOD</h6>
          </Link>
          <Link className="link" to="/?cat=pickups">
            <h6>PICKUPS</h6>
          </Link>
          <Link className="link" to="/?cat=finish">
            <h6>FINISH</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=diy">
            <h6>DIY</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Post
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
