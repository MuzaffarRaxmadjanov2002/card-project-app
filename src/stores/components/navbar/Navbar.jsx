import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useCart } from "../../context/CartContext";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

  const {cartItems }= useCart()

  return (
    <div className="navbar-section">

      <div className="navSection">
      <Link to='/' className="custom-link">
      <div className="title">
        <h2><span>E</span>-Mart</h2>
      </div>
      </Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <p className="Fake"></p>
        <div className="user-box">
          <FaUserCircle className="signing-icons"/>
          <h6>sign in</h6>
          
        </div>
          <Link to= '/cart'>
          <div className="cart-box">
          <span>
            {cartItems.length}
          </span>
            <TiShoppingCart className="cart-icons"/>

          
          <h6>cart</h6>
          </div>
          </Link>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
