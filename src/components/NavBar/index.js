import React from 'react'
import "./style.css"
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


export default function NavBar() {
    const location = useLocation();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand>Doug Johnson</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link>
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                    </Nav.Link>

                    {/* <Nav.Link>
                        <Link to="/history" className={location.pathname === "/history" ? "nav-link active" : "nav-link"}>
                            History
                        </Link>
                    </Nav.Link> */}

                    <Nav.Link>
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>

            {/* Socials */}
            <Navbar.Collapse className="justify-content-end">

                <div class="box-wrap">
                    <div class="box">
                        <Navbar.Brand href="https://github.com/DougJohnson22">
                            <img
                                src="https://i.postimg.cc/QMg6qPnr/iconfinder-142-Github-logo-logos-4373152.png"
                                width="30"
                                height="30"
                                id="socialIcon"
                                className="d-inline-block align-top"
                                alt="GitHub Link"
                            />
                        </Navbar.Brand>
                    </div>
                    <div class="box">
                        <Navbar.Brand href="https://www.linkedin.com/in/douglas-johnson-942ba2200/">
                            <img
                                src="https://i.postimg.cc/tgD3JHM7/iconfinder-Rounded-Linkedin2-svg-5282542.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                id="socialIcon"
                                alt="LinkedIn Link"
                            />
                        </Navbar.Brand>
                    </div>
                    <div class="box">
                        <Navbar.Brand href="https://www.instagram.com/conjurationwizard/">
                            <img
                                src="https://i.postimg.cc/6Q1hzXLg/iconfinder-38-instagram-1161953.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                id="socialIcon"
                                alt="Instagram Link"
                            />
                        </Navbar.Brand>
                    </div>
                </div>
                
            </Navbar.Collapse>


        </Navbar>
    )
}



