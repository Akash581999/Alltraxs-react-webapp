import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../App.css";
import profile from "../images/draw2.svg";
import { Link } from "react-router-dom";

function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You are welcome`);
  };
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <div className="container">
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol col="10" md="6">
                <img
                  src={profile}
                  className="img-fluid"
                  alt="profile"
                  style={{ height: 800 }}
                />
              </MDBCol>
              <MDBCol col="4" md="6" className="">
                <h2
                  style={{
                    textAlign: "center",
                    position: "relative",
                    top: "50px",
                    color: "blue",
                  }}
                >
                  Login
                </h2>
                <form className="form-container bg-glass">
                  <label className="text-dark" htmlFor="email">
                    Email:
                  </label>
                  <MDBInput
                    wrapperClass="mb-1"
                    id="email"
                    type="email"
                    size="lg"
                  />
                  <label htmlFor="pass">Password: </label>
                  <MDBInput
                    wrapperClass="mb-1"
                    id="pass"
                    type="password"
                    size="lg"
                  />
                  <div className="d-flex justify-content-between mx-4 mb-2">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <a href="!#">Forgot password?</a>
                  </div>
                  <MDBBtn
                    className="mb-3 w-100"
                    size="lg"
                    onClick={handleSubmit}
                  >
                    Sign in
                  </MDBBtn>
                  <div className="form-text">
                    <p className="">
                      Dont have an account ? <a href="!#">Register now.</a>
                    </p>
                  </div>
                  <MDBBtn className="mb-3 w-100" size="lg">
                    <Link to="/SignUpScreen" className="nav-link active">
                      <span>Register</span>
                    </Link>
                  </MDBBtn>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center text-dark fw-bold mx-3 mb-0">
                      OR
                    </p>
                  </div>
                  <MDBBtn className="mb-2 w-100 btn btn-danger" size="lg">
                    <MDBIcon fa icon="google" className="mx-2" />
                    Sign in with google
                  </MDBBtn>
                  <MDBBtn className="mb-2 w-100 btn btn-primary" size="lg">
                    <MDBIcon fa icon="facebook-f" className="mx-2" />
                    Sign in with facebook
                  </MDBBtn>
                  <MDBBtn className="mb-2 w-100 btn btn-info" size="lg">
                    <MDBIcon fa icon="twitter" className="mx-2" />
                    Sign in with X (twitter)
                  </MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
}

export default Login;
