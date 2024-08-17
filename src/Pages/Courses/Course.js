import React from 'react'
import CourseCard from '../../components/reuse/CourseCard/CourseCard'
import Course1 from '../../components/Assets/Img/Course/course1.avif'
import Course2 from '../../components/Assets/Img/Course/CCC-Course.webp'
import Course3 from '../../components/Assets/Img/Course/adca-full-form.webp'

const Course = () => {
  return (
    <>

      {/* BreadCrumbs */}

      <div className='container-lg py-4 px-5' id='parent' >
        <div className='text-white fw-bold' style={{ fontSize: '60px' }}>About Us</div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#" className='anchor'>Home</a></li>
            <li class="breadcrumb-item"><a href="#" className='anchor'>Pages</a></li>
            <li class="breadcrumb-item text-white active" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>

      {/* BreadCrumbs */}


      {/* Course Starts */}

      <div className='container-lg text-center mt-4 py-5'>
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

      {/* Course Ends */}

    </>
  )
}

export default Course
