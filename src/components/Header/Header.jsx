import "../Header/Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

function Header() {
  const {user} = useContext(AuthContext);
  return (
    <div className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Order</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
          {user && <span>Welcome</span> }
        </div>
    </div>
  );
}

export default Header;
