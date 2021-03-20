import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";


import React, { Fragment, useContext } from "react";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user} = authContext;




 
  return  (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/">
        ARNOVA App
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
            <Link class="navbar-brand" to="#">
          {user && user.name}
        </Link>
        </li>
          
           
            <li class="nav-item">
              <Link class="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/chartbar">
                ChartBar
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/piechart">
                PieChart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
