import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
  return <div>
    <NavLink style={{ marginRight: "10px" }} to="/">
    Home
  </NavLink>
  <NavLink style={{ marginRight: "10px" }} to="/movies">
    Movies
  </NavLink>
  <NavLink style={{ marginRight: "10px" }} to="/directors">
    Directors
  </NavLink>
  <NavLink style={{ marginRight: "10px" }} to="/actors">
    Actors
  </NavLink>

    
    </div>;
}

export default NavBar;
