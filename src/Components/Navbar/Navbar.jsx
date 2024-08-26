import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="company logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "Shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("Men")}>
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>{" "}
          {menu === "Men" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("Women")}>
          <Link to="womens" style={{ textDecoration: "none" }}>
            Women
          </Link>{" "}
          {menu === "Women" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link to="kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>{" "}
          {menu === "Kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </button>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
