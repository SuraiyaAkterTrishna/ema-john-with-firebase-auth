/* eslint-disable no-unused-vars */
import "../Header/Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(result => {

    })
    .catch(error => console.error(error));
  }
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
          {user && (
            <span>
              Welcome {user.email} <button onClick={handleLogout}>Log Out</button>
            </span>
          )}
      </div>
    </div>
  );
}

export default Header;
