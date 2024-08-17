import React from 'react'

const VerifyInstitute = () => {
  return (
    <>

    {/* BreadCrumbs */}

<div className='container-lg py-4 px-5' id='parent' >
                <div className='text-white fw-bold' style={{ fontSize: '60px' }}>Institute Verification</div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#" className='anchor'>Home</a></li>
                        <li class="breadcrumb-item"><a href="#" className='anchor'>Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Institute Verification</li>
                    </ol>
                </nav>
            </div>

            {/* BreadCrumbs */}

            {/* Form Starts */}


      <div className='container-lg text-center mt-5'>
        <h1>Verify Institute</h1>
        <form>
          <div class="form-floating container">
            <input type="text" class="form-control border border-2 rounded px-4" name="name" id="name" placeholder="Enter Institute Code" required="" />
            <label for="contact" style={{ marginLeft: "20px" }}>Enter Institute Code</label>
          </div>
          <input type="submit" id="btn" class="btn fs-5 fw-medium py-2 px-3 mt-3" value="View" style={{ backgroundColor: 'orangered', color: '#fff' }} />
        </form>
      </div>

{/* Form Ends */}

    </>
  )
}

export default VerifyInstitute
