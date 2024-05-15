import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../App.css";
import { Link } from "react-router-dom";

function SignUp(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your account created successfully`);
  };
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <div className="container">
          <MDBContainer
            fluid
            className="p-4 background-radial-gradient overflow-hidden"
          >
            <MDBRow onSubmit={handleSubmit}>
              <MDBCol
                md="6"
                className="text-center text-md-start d-flex flex-column justify-content-center"
              >
                <h2
                  className="my-5 display-3 fw-bold ls-tight px-3"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  <span style={{ color: "#8b08ff" }}>AllTraxs</span>
                  <br />
                  The best songs to listen <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    Anytime and Anywhere
                  </span>
                </h2>

                <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
                  Follow your favorite artists, and enjoy curated playlists
                  tailored to your tastes. With features like offline listening,
                  high-quality audio streaming, and across different devices.
                  Enjoy your favorite tunes anytime, anywhere. Whether you're in
                  the mood for upbeat tracks to energize your workout or
                  soothing melodies for relaxation, our app provides the
                  ultimate soundtrack to your life.
                </p>
              </MDBCol>

              <MDBCol md="6" className="position-relative">
                <div
                  id="radius-shape-1"
                  className="position-absolute rounded-circle shadow-5-strong"
                ></div>
                <div
                  id="radius-shape-2"
                  className="position-absolute shadow-5-strong"
                ></div>
                <h2
                  style={{
                    textAlign: "center",
                    position: "relative",
                    top: "0px",
                    color: "magenta",
                  }}
                >
                  Register
                </h2>

                <MDBCard className="my-2 bg-glass">
                  <MDBCardBody className="p-5">
                    <MDBRow>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First name"
                          id="form1"
                          type="text"
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last name"
                          id="form2"
                          type="text"
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form3"
                      type="email"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form4"
                      type="password"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Confirm assword"
                      id="form4"
                      type="Confirm password"
                    />

                    <div className="d-flex justify-content-center mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Remember me?"
                      />
                    </div>
                    <p>
                      By creating an account you agree to our{" "}
                      <a href="/">Terms & Privacy</a>.
                    </p>

                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={handleSubmit}
                    >
                      Register
                    </MDBBtn>
                    <div className="text-center">
                      <p>or sign up with:</p>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fa icon="facebook" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fa icon="twitter" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fa icon="google" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fa icon="github" size="sm" />
                      </MDBBtn>
                    </div>
                    <hr />

                    <div
                      className="container signin"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <p className="" style={{ marginRight: "10px" }}>
                        Already have an account?
                      </p>
                      <Link
                        to="/LoginScreen"
                        className="nav-link active"
                        style={{ marginTop: "-16px" }}
                      >
                        <a href="/" to="/">
                          Login now!
                        </a>
                      </Link>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
}

export default SignUp;
