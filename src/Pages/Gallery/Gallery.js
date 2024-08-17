import React from 'react'

const Gallery = () => {
  return (
    <>

{/* BreadCrumbs */}

      <div className='container-lg py-4 px-5' id='parent' >
        <div className='text-white fw-bold' style={{ fontSize: '60px' }}>About Us</div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#" className='anchor'>Home</a></li>
            <li class="breadcrumb-item"><a href="#" className='anchor'>Pages</a></li>
            <li class="breadcrumb-item text-white active" aria-current="page">Gallery</li>
          </ol>
        </nav>
      </div>

{/* BreadCrumbs */}

{/* Gallery Starts */}

      <div className='container-lg text-center my-5 py-5'>
        <h1 className='fw-bold'>Our Gallery</h1>
        <p>There are Many memorial Events. Few are Captured Below...</p>
      </div>

      {/* Gallery Ends */}
    
    </>
  )
}

export default Gallery
