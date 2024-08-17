import React from 'react'
import './Home.css'
import Slide1 from '../../components/Assets/Img/slider1.jpg'
import Slide2 from '../../components/Assets/Img/slider2.jpg'
import Slide3 from '../../components/Assets/Img/slider3.jpg'
import Certificate1 from '../../components/Assets/Img/Home/mca.png'
import Certificate2 from '../../components/Assets/Img/Home/iso.png'
import Certificate3 from '../../components/Assets/Img/Home/nielit.png'
import Certificate4 from '../../components/Assets/Img/Home/iaf.png'
import Certificate5 from '../../components/Assets/Img/Home/skill.png'
import Certificate6 from '../../components/Assets/Img/Home/msme.png'
import AboutCard from '../../components/reuse/AboutCard/AboutCard'
import Person from '../../components/Assets/Img/About/person.jpg'
import InstituteCard from '../../components/reuse/InstituteCard/InstituteCard'
import Ins1 from '../../components/Assets/Img/reuse/Logo.png'
import Ins2 from '../../components/Assets/Img/reuse/Logo2.jpg'
import Ins3 from '../../components/Assets/Img/reuse/Logo3.png'
import Ins4 from '../../components/Assets/Img/reuse/Logo4.png'
import Ins5 from '../../components/Assets/Img/reuse/Logo5.png'
import Ins6 from '../../components/Assets/Img/reuse/Logo6.jpg'
import CourseCard from '../../components/reuse/CourseCard/CourseCard'
import Course1 from '../../components/Assets/Img/Institute/course1.avif'
import Course2 from '../../components/Assets/Img/Institute/CCC-Course.webp'
import Course3 from '../../components/Assets/Img/Institute/adca-full-form.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import Person1 from '../../components/Assets/Img/Home/Person1.jpg'
import Person2 from '../../components/Assets/Img/Home/Person3.jpg'



const Home = () => {
  return (

    <div className='container-lg px-0'>

      {/* AutoPlaying Carousel */}

      <div id="carouselExampleRide" className="carousel slide container-lg px-0" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slide3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/*  Herobanner  */}


      <div className="container-lg bg-secondary text-white" id='topNav'>
        <div className='container-sm' id='marquee'>
          <marquee className="p-0" behavior="scroll" direction="left" scrollamount="8">
            <span className='bg-success'> New Franchisee Alert ! &nbsp; :- </span>
            &nbsp;  Contact at +91 9289608045 or Discount offer, Also Can Visit at Our Office Location
            <span className='bg-success'> Addmission Alert ! &nbsp; :- </span>
            &nbsp;   Dear Students Latest Courses has been Created by Our Institutes, now you can join with Our Franchisee...
          </marquee>
        </div>
      </div>

      {/* Certifications */}


      <div className='container-lg mt-4 py-5'>
        <div className='col text-center' >
          <div className='row'><h1><b>We Are Authorized From</b></h1></div>
          <div className='row mt-3'>
            <p><b>COMPUTER AND IT TRAINING INSTITUTE</b> is Highly Reputed Company Registered Under Central Government at National Level. Our Affiliations are Listed Below...</p>
          </div>
          <div className='container text-center mt-4'>
            <div class="row">

              <p class="col">
                <img className='img-fluid' src={Certificate1} alt='...' />
              </p>
              <p class="col">
                <img className='img-fluid' src={Certificate2} alt='...' />
              </p>
              <p class="col">
                <img className='img-fluid' src={Certificate3} alt='...' />
              </p>
              <p class="col">
                <img className='img-fluid' src={Certificate4} alt='...' />
              </p>
              <p class="col">
                <img className='img-fluid' src={Certificate5} alt='...' />
              </p>
              <p class="col">
                <img className='img-fluid' src={Certificate6} alt='...' />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}


      <div className='container-lg mt-4 py-5'>
        <div className='col text-center' >
          <div className='row'><h1><b>Why Institute Join Us ?</b></h1></div>
          <div className='row mt-3'>
            <p><b>COMPUTER AND IT TRAINING INSTITUTE</b>is a best Computer Institute Software Marketplace Platform where we care and fulfill your all types of requirement which is needed to Conduct a Computer Institue in best way in India. we have many special things...</p>
          </div>
        </div>

        <ul className='row mt-4'>
          <li className='col-lg-6 col-sm-6 ps-4' id='black'>
            <div>
              <h4 className='orng'>User Friendly Software</h4>
              <p><li>Friendly Software, easy to manage everything.</li></p>
            </div>
            <div>
              <h4 className='grey'>Institute Management Software</h4>
              <p><li>Institute Management Software to Manage everything</li></p>
            </div>
            <div>
              <h4 className='orng'>Institute Own Website</h4>
              <p><li>Separate Own website for Every Institute</li></p>
            </div>
            <div>
              <h4 className='grey'>Student Management Panel</h4>
              <p><li>Student panel by which they also can manage all</li></p>
            </div>
            <div>
              <h4 className='orng'>Advertising Tools</h4>
              <p><li>By Advertising Tools you can Easily Adverise your Services</li></p>
            </div>
            <div>
              <h4 className='grey'>Generate Certificate Automatic</h4>
              <p><li>Just Upload Marks & Get Certificate Automatic in 1 Second</li></p>
            </div>
          </li>

          {/* =================== */}

          <li className='col-lg-6 col-sm-6 ps-4' id='black'>
            <div>
              <h4 className='orng'>Generate MarkSheet Automatic</h4>
              <p><li>Just Upload Marks & Get Marksheet Automatic in 1 Second</li></p>
            </div>
            <div>
              <h4 className='grey'>Generate Automatic ID Card</h4>
              <p><li>After Admission, Get Student ID Crad within Second</li></p>
            </div>
            <div>
              <h4 className='orng'>Generate Automatic Admit Card</h4>
              <p><li>Just Create Exam & Get Admit Card Automatic within Second</li></p>
            </div>
            <div>
              <h4 className='grey'>Certificate For Institute as a Business Proof</h4>
              <p><li>Authorization Certificate For Legal Business Proof</li></p>
            </div>
            <div>
              <h4 className='orng'>Agreement with Institute for Legal Act</h4>
              <p><li>Agreement with Institute for Security, Surity & Legal Purpose</li></p>
            </div>
            <div>
              <h4 className='grey'>Institute Team Management</h4>
              <p><li>By This Features you can manage your Institute's Staff Online</li></p>
            </div>
          </li>


        </ul>


      </div>


      {/* About Company */}


      <AboutCard
        title={"About Our Company"}
        details={"is an empower individuals with the skills and knowledge needed to thrive in the dynamic world of technology. Our Institue is at your service with a Programme of Practical Technical training in order to contribute to the development of the country and society at large. It enables the vocational Training in which all the people specially belong from poor section can drive the benefit who is beyond the heavy expenditure of vocational training by us."}
        btn={<button className='btn rounded-5 fw-medium' id='Btn'>Know More</button>}
        image={<img className='img-fluid rounded-4' id='img' src={Person} alt='...' />}
      />


      {/* Our Institute */}

      <div className='container-lg text-center mt-4 py-5'>
        <div className='col text-center' >
          <div className='row'><h1><b>Our Institutes</b></h1></div>
          <div className='row mt-3'>
            <p>We have Best Institution Team in India.</p>
          </div>
          <div className='container text-center mt-4'>
            <div class="row text-center">

              <p class="col">
                <InstituteCard
                  image={Ins1}
                  company={"KALPESH COMPUTER TRAINING INSTITUTE"}
                  person={"Sandeep Singh"}
                  position={"Institute Director"}
                />
              </p>
              <p class="col">
                <InstituteCard
                  image={Ins2}
                  company={"KALPESH COMPUTER TRAINING INSTITUTE"}
                  person={"Sandeep Singh"}
                  position={"Institute Director"}
                />
              </p>
              <p class="col">
                <InstituteCard
                  image={Ins3}
                  company={"KALPESH COMPUTER TRAINING INSTITUTE"}
                  person={"Sandeep Singh"}
                  position={"Institute Director"}
                />
              </p>
              <p class="col">
                <InstituteCard
                  image={Ins4}
                  company={"KALPESH COMPUTER TRAINING INSTITUTE"}
                  person={"Sandeep Singh"}
                  position={"Institute Director"}
                />
              </p>
              <p class="col">
                <InstituteCard
                  image={Ins5}
                  company={"KALPESH COMPUTER TRAINING INSTITUTE"}
                  person={"Sandeep Singh"}
                  position={"Institute Director"}
                />
              </p>
              <p class="col">
                <InstituteCard
                  image={Ins6}
                  company={"KALPESH COMPUTER TRAINING INSTITUTE"}
                  person={"Sandeep Singh"}
                  position={"Institute Director"}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses */}



      <div className='container-lg text-center'>
        <h1>Institute's Courses</h1>
        <p className='mb-5'>We have Many Courses Offered for You. Few are Listed Below...</p>

        <div class="row text-center">
          <p class="col">
            <CourseCard
              image={Course2}
              title={"BASIC COMPUTER COURSE"}
              price={"6520"}
              code={"CC977552"}
            />
          </p>
          <p class="col">
            <CourseCard
              image={Course1}
              title={"CCC"}
              price={"2500"}
              code={"CC735369"}
            />
          </p>
          <p class="col">
            <CourseCard
              image={Course3}
              title={"ADCA"}
              price={"8000"}
              code={"ADCA12426"}
            />
          </p>

        </div>

      </div>

      {/* AutoPlaying Carousel */}

      <div className="container-xxl mt-5">
        <div className='container'>
          <div className='text-center'>
            <h1 className='text-black mb-3'>Our Institute's Student Says!</h1>
            <p className='text-black'>We Always Try to Provide Best Services to Our Valuable Students. We & Our Team Also Do Hard Work to Teach & On Easy Learn to Our Students. According to Our Best Coaching Facility Our Dear Students Feedback...</p>
          </div>

          <div id='carouselExample' className='carousel slide container' >

            <button class="carousel-control-prev" id='btnPrev' type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span class="visually-hidden">Previous</span>
            </button>


            <div className='carousel-inner rounded-4 py-3 px-4' style={{ backgroundColor: "#FFF5F3" }}>

              {/* ===== */}

              <div className='carousel-item active text-center px-5 py-5'>

                {/* ============ */}

                <div className='d-flex flex-row justify-content-between align-items-center bg-white'>


                  <div className='d-flex flex-row justify-content-between'>

                    <div className='d-flex flex-row justify-content-between align-items-center'>

                      <div><img src={Person1} className='border rounded-3 mb-0' alt='Hello 1'
                        style={{ width: "120px" }} /></div>
                      <div><b>Suresh Rastogi</b><br></br>
                        Basic Computer Course</div>
                    </div>

                  </div>

                  <div className='d-flex flex-row justify-content-between align-items-center'>
                    <FontAwesomeIcon icon={faQuoteRight} style={{ fontSize: "70px", color: "#fe5d37" }} />
                  </div>


                </div>

              </div>

              <div className='carousel-item text-center px-5 py-5'>

                {/* ============ */}

                <div className='d-flex flex-row justify-content-between align-items-center bg-white'>


                  <div className='d-flex flex-row justify-content-between'>

                    <div className='d-flex flex-row justify-content-between align-items-center'>

                      <div><img src={Person2} className='border rounded-3 mb-0' alt='Hello 1'
                        style={{ width: "120px" }} /></div>
                      <div><b>Suresh Rastogi</b><br></br>
                        Basic Computer Course</div>
                    </div>

                  </div>

                  <div className='d-flex flex-row justify-content-between align-items-center'>
                    <FontAwesomeIcon icon={faQuoteRight} style={{ fontSize: "70px", color: "#fe5d37" }} />
                  </div>


                </div>

              </div>

                {/* ============ */}

            </div>

            {/* ===== */}

            <button class="carousel-control-next" id='btnNext' type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <FontAwesomeIcon icon={faArrowRight} />
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Home
