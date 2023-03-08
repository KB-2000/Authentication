import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

const Signup = () => {
 
  const history = useHistory();
  let name, value;
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
  }

  const postData = async (e) => {
      e.preventDefault();
      const { name, email, phone,work,password,cpassword } = user;
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
          
        },
        body: JSON.stringify({
          name, email, phone, work, password, cpassword
        })

      })
      
 
      
      if( res.status === 422) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successful");
        
        history.push("/login");
      }
  }

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-400">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRradius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "0 1rem 1rem 0" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form method="POST">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                        </div>

                        <h1
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign Up
                        </h1>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="name"
                            id="form2Example171"
                            className="form-control form-control-lg  "
                            value={user.name}
                            onChange={handleInputs}
                            placeholder="Your Name"
                            autoComplete="off"
                           
                          />
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            name="email"
                            id="form2Example272"
                            className="form-control form-control-lg "
                            value={user.email}
                            onChange={handleInputs}
                            placeholder="your Email"
                            autoComplete="off"
                           
                          />
                          {/* <label className="form-label" for="form2Example27">Password</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="phone"
                            id="form2Example273"
                            className="form-control form-control-lg "
                            value={user.phone}
                            onChange={handleInputs}
                            placeholder="your Phone"
                            autoComplete="off"
                            title="Error Message"
                            pattern="[1-9]{1}[0-9]{9}"
                           
                          />
                          {/* <label className="form-label" for="form2Example27">Password</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="work"
                            id="form2Example274"
                            className="form-control form-control-lg "
                            value={user.work}
                            onChange={handleInputs}
                            placeholder="your work"
                            autoComplete="off"
                           
                          />
                          {/* <label className="form-label" for="form2Example27">Password</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            id="form2Example275"
                            className="form-control form-control-lg "
                            value={user.password}
                            onChange={handleInputs}
                            placeholder="your Password"
                            autoComplete="off"
                            
                          />
                          {/* <label className="form-label" for="form2Example27">Password</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="cpassword"
                            id="form2Example276"
                            className="form-control form-control-lg "
                            value={user.cpassword}
                            onChange={handleInputs}
                            placeholder="confirm Password"
                            autoComplete="off"
                            
                          />
                          {/* <label className="form-label" for="form2Example27">Password</label> */}
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            value="register"
                            onClick={postData}
                          >
                            Register
                          </button>
                        </div>

                        {/* <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Already have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Login
                          </a>
                        </p> */}
                        {/* <a href="#!" className="small text-muted">Terms of use.</a> */}
                        {/* <a href="#!" className="small text-muted">Privacy policy</a> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
