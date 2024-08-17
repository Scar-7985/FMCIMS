import React from 'react'
import './About.css'
import AboutCard from '../../components/reuse/AboutCard/AboutCard'
import Person from '../../components/Assets/Img/About/person.jpg'
import Person2 from '../../components/Assets/Img/About/person2.jpg'
import Person3 from '../../components/Assets/Img/About/person3.jpg'


const About = () => {
    return (
        <>

        {/* BreadCrumbs - Starts */}
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

        {/* BreadCrumbs - Ends */}

        {/* About - Starts */}

            <div className='container-lg my-5'>
                <AboutCard
                    title={'About Our Company'}
                    details={'is an empower individuals with the skills and knowledge needed to thrive in the dynamic world of technology. Our Institue is at your service with a Programme of Practical Technical training in order to contribute to the development of the country and society at large. It enables the vocational Training in which all the people specially belong from poor section can drive the benefit who is beyond the heavy expenditure of vocational training by us .'}
                    image={<img className='img-fluid rounded-4' id='img' src={Person} alt='...' />}
                    />
                <AboutCard
                    title={'How To Join Our Institute'}
                    details={'Our Institue is at your service with a Programme of Practical Technical training in order to contribute to the development of the country and society at large. It enables the vocational Training in which all the people specially belong from poor section can drive the benefit who is beyond the heavy expenditure of vocational training.'}
                    image={<img className='img-fluid rounded-4' id='img' src={Person2} alt='...' style={{ height: '240px' }} />}
                    />
                <AboutCard
                    title={'What Says Our Franchisee'}
                    details={'Through this Computer literacy Programme, we ensure that our student learn more & more and become a dynamic human being. Our strong infrastructure, efficient, energetic, dedicated and capable officers urge the student to move forward. The academic rigour propels them to acquire greater professional competence. They have also been exposed to training and real world projects.'}
                    image={<img className='img-fluid rounded-4' id='img' src={Person3} alt='...' style={{ width: '340px', height: '240px' }} />}
                    />
            </div>

            {/* About - Ends */}

        </>
    )
}

export default About
