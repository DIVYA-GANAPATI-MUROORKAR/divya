import React from 'react';
const Login = () => {
  return ( 
      <body>
  
  <div class="container ">
  <div class="row">
      <div class="col-md-2 col-sm-12"></div>
  <div class="col">
      <div class="card bg-success " >
          <div class="card-body">
            <h5 class="card-title">User Login</h5>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
              </div>
              <div class="mb-3 form-check">
                <label class="form-check-label" for="exampleCheck1">Not register  <a href="register.html" >click here</a></label>
              </div>
              <div class="text-center">
              
              <a href="Login.html" class="btn btn-primary btn-lg "  role="button" >Login</a>
              
             </div>              
          </form>
          </div>
        </div>

  </div>
  <div class="col-md-2 col-sm-12"></div>
  </div>
  </div>
</body>
   );
}

export default Login;