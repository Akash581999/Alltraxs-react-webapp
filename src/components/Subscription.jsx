import React from "react";
import { Link } from "react-router-dom";

const Subscription = (props) => {
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <div className="container py-3 background-bg-cover">
          <main className="">
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Free</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $0<small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-outline-primary"
                    >
                      <Link to="/LoginScreen" className="text-decoration-none">
                        Sign up for free
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Pro</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $15<small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>20 users included</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-primary"
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                  <div className="card-header py-3 text-white bg-primary border-primary">
                    <h4 className="my-0 fw-normal">Enterprise</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $29<small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-primary"
                    >
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-center mb-4 fs-1 fw-bold text-primary">
              Compare plans
            </h2>

            <div className="table-responsive rounded">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th style={{ width: "25%" }}></th>
                    <th style={{ width: "25%" }}>Free</th>
                    <th style={{ width: "25%" }}>Pro</th>
                    <th style={{ width: "25%" }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-start">
                      Public
                    </th>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Private
                    </th>
                    <td></td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row" className="text-start">
                      Permissions
                    </th>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Sharing
                    </th>
                    <td></td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Unlimited members
                    </th>
                    <td></td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">
                      Extra security
                    </th>
                    <td></td>
                    <td></td>
                    <td>
                      <i
                        className="fa fa-check text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Subscription;
