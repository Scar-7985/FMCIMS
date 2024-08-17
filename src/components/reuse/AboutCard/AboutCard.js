import React from 'react'
import './AboutCard.css'

const AboutCard = (props) => {

  return (
    <div className='container-lg row mb-5'>
      <div className='col-lg-6'>
        <h1 className='text-black'>{props.title}</h1>
        <p className='text-black'>{props.details}</p>
        <p>
          {props.btn}
        </p>
      </div>
      <div className='col-lg-6 text-center'>
        {props.image}
      </div>
    </div>
  )
}

export default AboutCard
