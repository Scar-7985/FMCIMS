import React from 'react'

const CourseCard = (props) => {
  return (
    <div className="card rounded-5 border-0 px-1 py-2" style={{backgroundColor: '#FFF5F3',width: "18rem"}} >
      <img src={props.image} id='image' class="img-fluid rounded-5 mx-auto p-2" alt="..." />
      <div className="card-body text-start">
        <p className="fw-medium text-black fs-5 fw-medium mt-0 mb-3 mb-1">{props.title}</p>
        <p className="fw-medium my-0" style={{color: 'red'}}>Course Fees : {props.price}</p>
        <p className="text-black fs-6">Course Code : {props.code}</p>
        <button class="btn rounded-0 py-0 mb-2"
        style={{backgroundColor: "#198754", color: "#fff"}}
        >Details</button><br></br>
        <button class="btn rounded-0 py-0"
        style={{backgroundColor: "#198754", color: "#fff"}}
        >Enroll</button>
      </div>
    </div>
  )
}

export default CourseCard
