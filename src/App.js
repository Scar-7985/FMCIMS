import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/reuse/Navbar/Navbar';
import Footer from './components/reuse/Footer/Footer';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Course from './Pages/Courses/Course'
import InstRegis from './Pages/Institute/InstituteRegistration'
import InstVerify from './Pages/Institute/VerifyInstitute'
import StuVerifyCert from './Pages/Student/VerifyCertificate'
import StuVerifyMarks from './Pages/Student/VerifyMarksheet'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/Error/Error'
import StuLogin from './Pages/Student/StudentLogin'
import InstLogin from './Pages/Institute/InstituteLogin'
// import StuPanel from './Pages/Student/StudentPanel'
// import InstPanel from './Pages/Institute/InstitutePanel'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/institute_registration' element={<InstRegis />} />
          <Route path='/institute_verify' element={<InstVerify />} />
          <Route path='/student_verify_certificate' element={<StuVerifyCert />} />
          <Route path='/student_verify_marksheet' element={<StuVerifyMarks />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />

          {/* ======= LOGIN PAGES ====== */}

          <Route path='/institute_login' element={<InstLogin />} />
          <Route path='/student_login' element={<StuLogin />} />

          {/* ===== ADMIN -  PANEL ===== */}

          {/* <Route path='/student_panel' element={<StuPanel />} /> */}
          {/* <Route path='/institute_panel' element={<InstPanel />} /> */}

          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
