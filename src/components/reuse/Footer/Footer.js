import React from 'react'
import './Footer.css'
import Logo1 from '../../Assets/Img/reuse/Logo.png'
import Logo2 from '../../Assets/Img/reuse/Logo2.jpg'
import Logo3 from '../../Assets/Img/reuse/Logo3.png'
import Logo4 from '../../Assets/Img/reuse/Logo4.png'
import Logo5 from '../../Assets/Img/reuse/Logo5.png'
import Logo6 from '../../Assets/Img/reuse/Logo6.jpg'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (
        <div className="container-lg d-flex flex-column mt-5 pt-5 px-4" style={{ backgroundColor: '#103741' }}>

            {/* Top Footer */}

            <div className='container d-flex flex-column'>

                {/* Location */}

                <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                        <h3>Get In Touch</h3>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '16px' }} />
                            Block A, Karol Bagh, New Delhi,<br></br>
                            Delhi 110005</p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '16px' }} />
                            8585858585</p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '16px' }} />
                            info@xyz.in, support@xyz.in</p>
                    </div>

                    {/* Quick Links */}
                    <div className='col-lg-3 col-md-6'>
                        <h3>Quick Links</h3>
                        <p>
                            <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: '10px' }} />
                            <NavLink className="link" to={'/'} >About Us</NavLink>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: '10px' }} />
                            <NavLink className="link" to={'/'} >Contact Us</NavLink>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: '10px' }} />
                            <NavLink className="link" to={'/'} >Our Courses</NavLink>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: '10px' }} />
                            <NavLink className="link" to={'/'} >Privacy Policy</NavLink>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: '10px' }} />
                            <NavLink className="link" to={'/'} >Terms & Condition</NavLink>
                        </p>
                    </div>

                    {/* Institute Logo */}
                    <div className='col-lg-3 col-md-6'>
                        <h3>Institute Logo</h3>
                        <div class="row mb-4 mt-4">
                            <p class="col">
                                <img className='Image' src={Logo1} alt='...' />
                            </p>
                            <p class="col">
                                <img className='Image' src={Logo2} alt='...' />
                            </p>
                            <p class="col">
                                <img className='Image' src={Logo3} alt='...' />
                            </p>
                        </div>
                        <div class="row">
                            <p class="col">
                                <img className='Image' src={Logo4} alt='...' />
                            </p>
                            <p class="col">
                                <img className='Image' src={Logo5} alt='...' />
                            </p>
                            <p class="col">
                                <img className='Image' src={Logo6} alt='...' />
                            </p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className='col-lg-3 col-md-6'>
                        <h3>Newsletter</h3>
                        <p>Subscribe for Latest Updates</p>
                        <div class="position-relative">
                            <input class="form-control bg-transparent py-3 ps-4 pe-5" id='input' type="text" placeholder="Your email" />
                            <button type="button" class="btn py-2 position-absolute top-0 end-0 mt-2 me-2"
                                style={{ backgroundColor: "orangered", color: "#fff" }}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='border-top'></hr>

            {/* Bottom Footer */}

            <div className='row'>
                <div className='col-md-4 text-center' style={{ color: '#889BA0' }}>Copyright © 2024 COMPUTER AND IT TRAINING INSTITUTE. All Rights Reserved.</div>
                <div class="col-md-4 text-center text-md-end">
                    <NavLink class="nav-link active" id='link1' aria-current="page" href="#">Home</NavLink>
                    <NavLink class="nav-link mx-4" id='link2' href="#">Student Login</NavLink>
                    <NavLink class="nav-link " id='link3' href="#">Institute Login</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Footer;
