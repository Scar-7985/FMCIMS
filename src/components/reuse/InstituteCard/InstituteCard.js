import React from 'react'

const InstituteCard = (props) => {
  return (
    <div className="card text-center rounded-5 border-0" style={{backgroundColor: '#FFF5F3',width: "18rem"}} >
      <img src={props.image} id='image' class="img-fluid rounded-circle mx-auto p-2" alt="..." />
      <div className="card-body">
        <p className="fw-medium text-black fs-6 mt-0 mb-1">{props.company}</p>
        <p className="fw-medium my-0" style={{color: '#540180'}}>{props.person}</p>
        <p className="text-black fs-6">{props.position}</p>
        <button class="btn rounded-5 py-1"
        style={{backgroundColor: "#198754", color: "#fff"}}
        >View Website</button>
      </div>
    </div>
  )
}

export default InstituteCard
