import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Card, Button, ListGroup } from "react-bootstrap";

const UserProfile = () => {
  // let handleLogout = () => {
  //   localStorage.removeItem("user");
  //   <Link to="/LoginScreen">DashBoard</Link>;
  // };

  // let handleEditProfile = () => {
  //   <Link to="/EditProfile">DashBoard</Link>;
  // };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-2">
        <div className="row">
          <div className="col">
            <Breadcrumb className="bg-light rounded p-3 my-2">
              <Breadcrumb.Item>
                <Link to="/DashBoardScreen">DashBoard</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/UserProfile">Profile</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>User Profile</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-6">
            <Card className="my-1">
              <Card.Body className="text-center">
                <Card.Img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ maxWidth: "150px" }}
                />
                <p className="text-muted mb-1">Akash581999</p>
                <p className="text-muted mb-4">Akash Kumar</p>
                <div className="d-flex justify-content-center my-2">
                  <Button>Edit Profile Pic</Button>
                  <Button variant="outline-secondary" className="ms-1">
                    Change Password
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-12 col-md-6">
            <Card className="my-1">
              <Card.Body>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">First Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">Johnatan</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Last Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 ">
            <Card className="my-1 mb-lg-0">
              <Card.Body className="p-0">
                <ListGroup
                  variant="flush"
                  className="d-flex flex-row justify-content-evenly rounded-3"
                >
                  {/* <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <span>https://Alltraxs.com</span>
                  </ListGroup.Item> */}
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-github fa-lg"
                      style={{ color: "#333333" }}
                    ></i>
                    <span>akash591999</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-twitter fa-lg"
                      style={{ color: "#55acee" }}
                    ></i>
                    <span>@akash591999</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    ></i>
                    <span>akash591999</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    ></i>
                    <span>akash591999</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center my-2">
              <Button>Edit</Button>
              <Button variant="outline-secondary" className="ms-1">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
