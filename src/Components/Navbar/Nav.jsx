import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Nav.css";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";


function Nav() {
    const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
    setIsVisible(true);
 }, []);
  const [scroll, setScroll] = useState(false);

  const whenscroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", whenscroll);
    return () => {
      window.removeEventListener("scroll", whenscroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${scroll ? "scrolled" : ""}  ${isVisible ? "nav-slide-down" : ""}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav m-auto ">
              <li className="nav-item me-3">
                <Link
                 to= "/"
                  className="nav-link active"
                  aria-current="page"
                
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/contact" className="nav-link" >
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item me-3">
                <a  className="nav-link ">
                  <div className="nav-cart text-center">
                    <HiMiniShoppingCart />
                    <span id="count">1</span>
                  </div>
                </a>
              </li> */}
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
