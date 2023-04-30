import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants";
import { useProductContext } from "../../contexts/productContext";
import "./style.css";
function Header() {
  const { state } = useProductContext();

  return (
    <>
      <div className="headerWrapper">
        <ul className="headerList">
          <li className="headerListItem">
            <NavLink to={PATHS.HOME} className="headerNavLink">
              Home
            </NavLink>
          </li>
          <li className="headerListItem">
            <NavLink to={PATHS.CART} className="headerNavLink">
              Cart {state.count}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
