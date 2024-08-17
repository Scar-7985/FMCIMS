import React from 'react'
import './InstitutePanel.css'
import { Link } from 'react-router-dom'
import logo from '../../components/Assets/Img/reuse/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons'

const InstitutePanel = () => {

  return (
    <>
      <aside className='main-sidebar'>

        {/* Sidebar -logo */}

        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <div className='brand-link border-bottom py-2'>
            <img className='img' src={logo} alt='...' id='logo' />
            <span className='brand-text ms-2'>KCTI</span>
          </div>
        </Link>

        {/* Sidebar Name */}

        <div className='sidebar py-2 px-2' style={{ overflowY: 'auto' }}>
          <p className='fs-6 text-black'>INSTITUTE PANEL</p>
        </div>

        {/* Sidebar Menu */}

        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library
            <li class="nav-item menu-open">
              <a href="dashboard.php" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="viewstu.php" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>
                  Student
                  <span class="right badge" style={{backgroundColor:"#563585",color:"white"}}>Master</span>
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="manage_admission.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-user-plus"></i>
                <p>
                  Admission
                  <span class="right badge" style={{backgroundColor:"#491423",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="manage_fees.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-rupee-sign"></i>
                <p>
                  Fees
                  <span class="right badge" style={{backgroundColor:"#410425",color:"white"}}>Master</span>
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="viewstuid.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-id-card"></i>
                <p>
                  ID Card
                  <span class="right badge" style={{backgroundColor:"#867336",color:"white"}}>Master</span>
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="manage_attendance.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-newspaper"></i>
                <p>
                  Attendance
                  <span class="right badge" style={{backgroundColor:"#949192",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-header bg-purple mt-3 mb-2">OFFLINE EXAM</li>

            <li class="nav-item">
              <a href="view_exam.php" class="nav-link">
                <i class="nav-icon fas fa-edit"></i>
                <p>
                  Offline Exam
                  <span class="right badge" style={{backgroundColor:"#614797",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="admit_card.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-address-card"></i>
                <p>
                  Admit Card
                  <span class="right badge" style={{backgroundColor:"#821862",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="results.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-address-card"></i>
                <p>
                  Offline Result
                  <span class="right badge" style={{backgroundColor:"#165966",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="certification.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-user-graduate"></i>
                <p>
                  Offline Certification
                  <span class="right badge" style={{backgroundColor:"#236045",color:"white"}}>1</span>
                </p>
              </a>
            </li>


            <li class="nav-header bg-warning mt-3 mb-2">ONLINE EXAM</li>

            <li class="nav-item">
              <a href="manage_online_exam.php" class="nav-link">
                <i class="nav-icon fas fa-edit"></i>
                <p>
                  Online Exam
                  <span class="right badge" style={{backgroundColor:"#771600",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="manage_online_question.php" class="nav-link">
                <i class="nav-icon fas fa-edit"></i>
                <p>
                  Online Question
                  <span class="right badge" style={{backgroundColor:"#437419",color:"white"}}>Master</span>
                </p>
              </a>
            </li>




            <li class="nav-header bg-primary mt-3 mb-2">COURSE MANAGEMENT</li>

            <li class="nav-item">
              <a href="manage_grade.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-percent"></i>
                <p>
                  Grade
                  <span class="right badge" style={{backgroundColor:"#951957",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="manage_batch.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-hospital-user"></i>
                <p>
                  Batch
                  <span class="right badge" style={{backgroundColor:"#420879",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="manage_subject.php" class="nav-link">
                <i class="nav-icon fas fa-book"></i>
                <p>
                  Subject
                  <span class="right badge" style={{backgroundColor:"#627633",color:"white"}}>Master</span>
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="manage_course.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-book-medical"></i>
                <p>
                  Course
                  <span class="right badge" style={{backgroundColor:"#635168",color:"white"}}>Master</span>
                </p>
              </a>
            </li>




            <li class="nav-header bg-info mt-3 mb-2">OBSERVATIONS</li>

            <li class="nav-item">
              <a href="ledger_details.php" class="nav-link">
                <i class="nav-icon fas fa-book-open"></i>
                <p>
                  Ledger
                  <span class="right badge" style={{backgroundColor:"#895858",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="contact_message.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-envelope"></i>
                <p>
                  Contact
                  <span class="right badge" style={{backgroundColor:"#709582",color:"white"}}>Message</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="manage_announcement.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-bullhorn"></i>
                <p>
                  Announcement
                  <span class="right badge" style={{backgroundColor:"#664525",color:"white"}}>Section</span>
                </p>
              </a>
            </li>

            <li class="nav-item mb-3">
              <a href="wallet_master.php" class="nav-link">
                <i class="nav-icon fas fa-wallet"></i>
                <p>
                  Wallet
                  <span class="right badge" style={{backgroundColor:"#406577",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-header bg-dark mt-3 mb-2">WEBSITE SECTION</li>

            <li class="nav-item">
              <a href="create_website.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-user-tie"></i>
                <p>
                  Create
                  <span class="right badge" style={{backgroundColor:"#311344",color:"white"}}>Website</span>
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="manage_slider.php" class="nav-link">
                <i class="nav-icon fas fa-solid fa-newspaper"></i>
                <p>
                  Slider
                  <span class="right badge" style={{backgroundColor:"#566021",color:"white"}}>Master</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="manage_team.php" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>
                  Team
                  <span class="right badge" style={{backgroundColor:"#883528",color:"white"}}>Manager</span>
                </p>
              </a>
            </li>


            <li class="nav-item mb-3">
              <a href="https://template.fmcims.shop" target="_blank" class="nav-link">
                <i class="nav-icon fas fa-solid fa-bezier-curve"></i>
                <p>
                  Designing
                  <span class="right badge" style={{backgroundColor:"#945830",color:"white"}}>Software</span>
                </p>
              </a>
            </li>



            <li class="nav-header bg-danger">SETTING</li>




            <li class="nav-item">
              <a href="institute_profile.php" class="nav-link">
                <i class="nav-icon fas fa-home"></i>
                <p>
                  Manage Institute
                  <span class="right badge" style={{backgroundColor:"#893254",color:"white"}}>Profile</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="manage_pmenthod.php" class="nav-link">
                <i class="nav-icon fas fa-address-card"></i>
                <p>
                  Payment Collect
                  <span class="right badge" style={{backgroundColor:"#147247",color:"white"}}>Method</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="idcbg.php" class="nav-link">
                <i class="nav-icon fas fa-tools"></i>
                <p>
                  Id Card
                  <span class="right badge" style={{backgroundColor:"#237954",color:"white"}}>Background</span>
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="manage_idcbg.php" class="nav-link">
                <i class="nav-icon fas fa-tools"></i>
                <p>
                  Id Card
                  <span class="right badge" style={{backgroundColor:"#407776",color:"white"}}>Setting</span>
                </p>
              </a>
            </li>


            <li class="nav-item">
              <a href="certbb.php" class="nav-link">
                <i class="nav-icon fas fa-tools"></i>
                <p>
                  Certification
                  <span class="right badge" style={{backgroundColor:"#779524",color:"white"}}>Background</span>
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="manage_certbb.php" class="nav-link">
                <i class="nav-icon fas fa-tools"></i>
                <p>
                  Off. Certification
                  <span class="right badge" style={{backgroundColor:"#347044",color:"white"}}>Setting</span>
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="manage_onlinecertbb.php" class="nav-link">
                <i class="nav-icon fas fa-tools"></i>
                <p>
                  On. Certification
                  <span class="right badge" style={{backgroundColor:"#241589",color:"white"}}>Setting</span>
                </p>
              </a>
            </li>




            <li class="nav-item">
              <a href="ins_cert.php" class="nav-link">
                <i class="nav-icon fas fa-address-card"></i>
                <p>
                  Institute
                  <span class="right badge" style={{backgroundColor:"#701371",color:"white"}}>Certification</span>
                </p>
              </a>
            </li>



            <li class="nav-header">SESSION</li>
            <li class="nav-item">
              <a href="logindetails.php" class="nav-link">
                <i class="nav-icon fas fa-lock"></i>
                <p>
                  Change Login
                  <span class="right badge" style={{backgroundColor:"#864691",color:"white"}}>Details</span>
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="logout.php" class="nav-link">
                <i class="nav-icon far fa-arrow-alt-circle-right text-danger"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>

      </aside>
    </>
  )
}

export default InstitutePanel
