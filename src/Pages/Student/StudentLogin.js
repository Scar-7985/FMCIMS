import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

const StudentLogin = () => {
  return (
    <div id="main-container" class="container-sm mt-5" style={{width: '400px', height: 'auto'}}>
        <div class="row text-center">
          <h1 class="fw-normal mb-4"><span class="fw-medium">Student</span> Panel</h1>
          <div id="auth-form" class="card border">

            <div class="card-body">

              <form class="panel-body">

                <p class="text-center">
                  Sign in to start your session</p>
                <div class="input-group">
                  <input type="text" id="login" name="login" class="form-control" placeholder="Username" />
                  <span class="input-group-text" >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>

                </div>
                <div class="input-group mt-2">
                  <input type="password" id="password" name="password" class="form-control" placeholder="Password" />
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                </div>
                <div class="text-start mt-4">
                  <button type="button" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default StudentLogin
