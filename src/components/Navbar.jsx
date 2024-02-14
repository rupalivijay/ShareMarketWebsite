import React from "react";
import { Link } from "react-router-dom";
import web from "../Images/logo.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="container-fuild nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img alt="vjstockrunner" data-no-retina=""></img>
              {<a className="navbar-brand">VJ</a>}

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <Link className="nav-link  " to="/home">
                    Home{" "}
                  </Link>

                  {/* <li className="nav-item active"
                                        activeClassName= "menu_active"
                                        exact
                                        to = "/home"
                                      > Home </li>  */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/cource">
                      Cources
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/reviews">
                      Reviews
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
