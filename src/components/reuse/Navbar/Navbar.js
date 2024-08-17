import React from 'react'
import './Navbar.css'
import '../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Logo from '../../Assets/Img/reuse/Logo.png'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>

            {/* Header-1 */}

            <div className="container-lg text-white" id='topNav'>
                <div className='container-sm' id='marquee'>
                    <marquee className="p-0" behavior="scroll" direction="left" scrollamount="8" onmouseover="this.stop()"
                        onmouseout="this.start()">
                        <span> New Franchisee Alert ! &nbsp; :- </span>
                        &nbsp; Contact at +91 9289608045 or Apply Online for Franchisee to Start an Institute Any Where in
                        India,
                        Also Can Visit at Our Office Location
                    </marquee>
                </div>
            </div>

            {/* Header-2 */}

            <div className="container-lg text-center" style={{ backgroundColor: "#103741" }}>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <img src={Logo} height="80" className="d-inline-block align-top" alt='...' />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-7 overflow-hidden mt-2">
                            <h3 className="text-light">COMPUTER AND IT TRAINING INSTITUTE</h3>
                            <h5 className="text-warning">An ISO 9001:2015 Certified &amp; MSME Approved By Central Government
                            </h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <ul className="t-social mt-2">
                                <button className='btn'>
                                    <Link to="/institute_registration" className="btn btn-sm" style={{ color: "white", backgroundColor: "#724955" }}>Apply Institute</Link>
                                </button>
                                <button className='btn'>
                                    <Link to="/institute_login" target="_blank" className="btn btn-sm" style={{ color: "white", backgroundColor: "#386241" }}>Institute Login</Link>
                                </button>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Navbar */}

            <nav className="container-lg navbar navbar-expand-lg bg-body-tertiary py-lg-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto" id='drpdown'>
                            <li className="nav-item px-lg-2">
                                <NavLink className="nav-link NavLink fw-medium" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item px-lg-2">
                                <NavLink className="nav-link NavLink fw-medium" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item px-lg-2">
                                <NavLink className="nav-link NavLink fw-medium" to="/course">Courses</NavLink>
                            </li>
                            <li className="nav-item px-lg-2 dropdown">
                                <a href='/' className="nav-link dropdown-toggle NavLink fw-medium" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Institute Zone
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/institute_registration" className="dropdown-item bg-light NavLink fw-medium">Institute Registration</NavLink></li>
                                    <li><NavLink to="/institute_login" className="dropdown-item bg-light NavLink fw-medium" target="_blank" >Institute Login</NavLink></li>
                                    <li><NavLink to="/institute_verify" className="dropdown-item bg-light NavLink fw-medium">Verify Institute</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item px-lg-2 dropdown">
                                <a href='/' className="nav-link dropdown-toggle NavLink fw-medium" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Student Zone
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/student_login" className="dropdown-item bg-light NavLink fw-medium" target='_blank'>Student Login</NavLink></li>
                                    <li><NavLink to="/student_verify_certificate" className="dropdown-item bg-light NavLink fw-medium">Verify Certificate</NavLink></li>
                                    <li><NavLink to="/student_verify_marksheet" className="dropdown-item bg-light NavLink fw-medium">Verify Marksheet</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item px-lg-2 text-black">
                                <NavLink to="/gallery" className="nav-link NavLink fw-medium" href="#">Gallery</NavLink>
                            </li>
                            <li className="nav-item px-lg-2 text-black">
                                <NavLink to="/contact" className="nav-link NavLink fw-medium" href="#">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
