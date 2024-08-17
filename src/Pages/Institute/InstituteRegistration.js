import React from 'react'

const InstituteRegistration = () => {
  return (
    <>

    {/* BreadCrumbs */}

      <div className='container-lg mb-5 py-4 px-5' id='parent' >
        <div className='text-white fw-bold' style={{ fontSize: '60px' }}>Institute Registration</div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#" className='anchor'>Home</a></li>
            <li class="breadcrumb-item"><a href="#" className='anchor'>Pages</a></li>
            <li class="breadcrumb-item text-white active" aria-current="page">Institute Registration</li>
          </ol>
        </nav>
      </div>

      {/* BreadCrumbs */}

      {/* ========= FORM Starts =========== */}

      <div className='container rounded-4 mt-5 py-5 px-5' style={{ backgroundColor: '#FFF5F3' }}>
        <h1 className='fw-bold mb-4'>Institute Registration Online</h1>
        <form method="post" id="contactForm" name="contactForm" enctype="multipart/form-data">
          
        <div class="row g-3">
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-2" name="institute_name_1" id="institute_name_1" placeholder="Enter Institute Name upto 1st 15 Letter" maxlength="15" required="" />
                                                <label for="gname">Enter Institute Name upto 1st 15 Letter</label>
												
												<input type="hidden" class="form-control" name="institute_code" id="institute_code" value="IID24082134" readonly="" />
												
                                            </div>
                                        </div>
										<div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-2" name="institute_name_2" id="institute_name_2" placeholder="Enter Institute Name After 15 Letter" required="" />
                                                <label for="gname">Enter Institute Name After 15 Letter</label>
                                            </div>
                                        </div>
										<div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-2" name="institute_director_name" id="institute_director_name" placeholder="Enter Director Name" required="" />
                                                <label for="gname">Director Name</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-2" name="institute_director_qualification" id="institute_director_qualification" placeholder="Enter Institute Director Qualification" />
                                                <label for="gname">Institute Director Qualification</label>
                                            </div>
                                        </div>
                                        
										
										
										<div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="number" class="form-control border-2" name="institute_contact" id="institute_contact" placeholder="Enter Contact" required=""/>
                                                <label for="gname">Contact</label>
                                            </div>
                                        </div>
                                        
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control border-2" name="institute_email" id="institute_email" placeholder="Enter Email ID" required="" />
                                                <label for="cname">Email</label>
                                            </div>
                                        </div>
										
										<div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-2"
                                                style={{height: '80px'}} name="institute_address_1" id="institute_address_1" placeholder="Institute Address 1" required="" />
                                                <label for="gname">Institute Address 1 <br></br> (Upto 1st 30 Charactors)</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control border-2"
                                                style={{height: '80px'}} name="institute_address_2" id="institute_address_2" placeholder="Institute Address 2" required="" />
                                                <label for="gmail">Institute Address 2 <br></br> (After 1st 30 Charactors)</label>
                                            </div>
                                        </div>
										
										
										<div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="file" class="form-control border-2" name="photo" required="" />
                                                <label for="cage">Director's Photo</label>
                                            </div>
                                        </div>
										
										<div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="file" class="form-control border-2" name="logo" required="" />
                                                <label for="cage">Institute Logo (png)</label>
                                            </div>
                                        </div>
										
										
										
                                        <div class="col-12 mt-4">
                                            <input type="submit" id="btn" class="btn w-100 py-3 mt-3" value="Submit" style={{backgroundColor: 'orangered', color: '#fff'}} /> &nbsp;&nbsp;&nbsp;&nbsp;  <div class="text-success mt-1" id="thank_you_msg"></div>
                                        </div>
                                    </div>
        </form>
      </div>

      {/* ========= FORM Ends =========== */}

    </>
  )
}

export default InstituteRegistration
