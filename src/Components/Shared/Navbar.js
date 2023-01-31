import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.onscroll = function() {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
      }, []);
    return (
        <div className='pb-5' style={{marginBottom:'70px'}}>
            <nav className={scrolled ? "navbar navbar-expand-lg fixed-top bg-white mb-5 shadow" : "navbar navbar-expand-lg fixed-top bg-white mb-5"}>
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img src="./images/logo.png" className='pt-2 pb-2' alt="Bootstrap" width="100" height="100" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link pt-2 pb-2" aria-current="page" to="/">Home</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link ms-3 pt-2 pb-2" to="/about">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-3 pt-2 pb-2" to="/service">Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-3 pt-2 pb-2" to="/contact-us">Contact Us</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;