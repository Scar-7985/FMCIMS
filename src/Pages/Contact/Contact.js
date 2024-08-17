import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <>

      {/* BreadCrumbs - Starts */}

      <div className='container-lg py-4 px-5' id='parent' >
        <div className='text-white fw-bold' style={{ fontSize: '60px' }}>Contact Us</div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#" className='anchor'>Home</a></li>
            <li class="breadcrumb-item"><a href="#" className='anchor'>Pages</a></li>
            <li class="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
      </div>


      {/* BreadCrumbs - Ends */}


      {/* Get In touch Starts */}

      <div className='container-lg text-center mt-4 py-5 px-5'>
        <div className='container px-5'>
          <h1 className='fw-bold'>Get In Touch</h1>
          <p className='fs-6 mb-5'>You can contact us with following methods, Our Office Timing 10 AM to 6 PM from Monday to Saturday.</p>
        </div>

        <div class="container text-center">
          <div class="row row-cols-3">
            <div class="col-lg-4 col-md-6 text-center">
              <p className='btn fs-2 px-4' style={{ backgroundColor: "#FFF5F3" }}>
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#fe5d37", }} />
              </p>
              <p className='text-black fw-medium'>Block A, Karol Bagh, New Delhi, Delhi - 110005</p>
            </div>
            <div class="col-md-6 col-lg-4 text-center">
              <p className='btn fs-2 px-4' style={{ backgroundColor: "#FFF5F3" }}>
                <FontAwesomeIcon icon={faEnvelopeOpen} style={{ color: "#fe5d37", }} />
              </p>
              <p className='text-black fw-medium'>info@xyz.in, support@xyz.in</p>
            </div>
            <div class="col-md-6 col-lg-4 text-center">
              <p className='btn fs-2 px-4' style={{ backgroundColor: "#FFF5F3" }}>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#fe5d37", }} />
              </p>
              <p className='text-black fw-medium'>8585858585, 6565656565</p>
            </div>
          </div>
        </div>
      </div>

      {/* Get In touch Ends */}


      {/* ==================== */}



      {/* ========= FORM Starts =========== */}



      <div className='container rounded-4 py-5 px-5' style={{ backgroundColor: '#FFF5F3' }}>
        <p>You can drop a message if have any query</p>
        <form method="post" id="contactForm" name="contactForm" enctype="multipart/form-data">
          <div class="row g-3">
            <div class="col-sm-12">
              <div class="form-floating">
                <input type="text" class="form-control border-0" name="name" id="name" placeholder="Your Name" required="" />
                <label for="contact">Your Name</label>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-floating">
                <input type="text" class="form-control border-0" name="contact" id="contact" placeholder="Your Contact" required="" />
                <label for="contact">Your Contact</label>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-floating">
                <input type="email" class="form-control border-0" name="email" id="email" placeholder="Your Email" required="" />
                <label for="email">Your Email</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <input type="text" class="form-control border-0" name="subject" id="subject" placeholder="Subject" required="" />
                <label for="subject">Subject</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <textarea class="form-control border-0" placeholder="Leave a message here" name="message" id="message" style={{ height: "100px" }} required=""></textarea>
                <label for="message">Message</label>
              </div>
            </div>
            <div class="col-12">
              <input type="submit" id="btn" class="btn btn-primary w-100 py-3" value="Submit" /> &nbsp;&nbsp;&nbsp;&nbsp;  <div class="text-success mt-1" id="thank_you_msg" >Message Send</div>
            </div>
          </div>
        </form>
      </div>

      {/* ========= FORM Starts =========== */}

    </>
  )
}

export default Contact
