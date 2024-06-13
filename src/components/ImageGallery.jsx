import React from "react";
import Slider from "./Slider";
import Dev1 from "../images/userimg1.jpg";
import Dev2 from "../images/userimg2.jpg";
import Dev3 from "../images/userimg3.png";
import Dev4 from "../images/userimg4.png";

const images = [
  {
    url: "https://picsum.photos/2400/800",
    title: "First Slide",
    description: "Some description for the first slide",
  },
  {
    url: "https://picsum.photos/2400/800",
    title: "Second Slide",
    description: "Some description for the second slide",
  },
  {
    url: "https://picsum.photos/2400/800",
    title: "Third Slide",
    description: "Some description for the third slide",
  },
];

const ImageGallery = (props) => {
  return (
    <div className={`bg-${props.mode}`}>
      <div className="container pt-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h1 className="my-2">About Us</h1>
              </button>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="lead mb-4">
                  SourceDotCom Pvt Ltd is a leading technology company based in
                  Gurgaon, Haryana, India. We specialize in providing innovative
                  solutions in the field of software development, web design,
                  and digital marketing. Our team consists of highly skilled
                  professionals who are dedicated to delivering high-quality
                  products and services to our clients. At SourceDotCom, we
                  strive to exceed our clients' expectations and contribute to
                  their success by leveraging the latest technologies and best
                  practices in the industry. Thank you for considering us for
                  your technology needs.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h1 className="my-2">Our Team</h1>
              </button>
            </div>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={Dev1}
                        className="card-img-top"
                        alt="Developer 1"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Akash Kumar</h5>
                        <p className="card-text">Frontend Developer</p>
                        <p className="card-text">
                          Role: UI/UX design, Frontend development
                        </p>
                        <p className="card-text">Location: Gurgaon, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={Dev2}
                        className="card-img-top"
                        alt="Developer 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Gourav Rattan</h5>
                        <p className="card-text">Backend Developer</p>
                        <p className="card-text">
                          Role: Backend development, Database management
                        </p>
                        <p className="card-text">Location: Gurgaon, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={Dev3}
                        className="card-img-top"
                        alt="Developer 3"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Akash Saini</h5>
                        <p className="card-text">Full Stack Developer</p>
                        <p className="card-text">
                          Role: Frontend and Backend development, Deployment
                        </p>
                        <p className="card-text">Location: Gurgaon, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={Dev4}
                        className="card-img-top"
                        alt="Developer 4"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Kapil Yadav</h5>
                        <p className="card-text">UI/UX Designer</p>
                        <p className="card-text">
                          Role: Visual design, User experience optimization
                        </p>
                        <p className="card-text">Location: Gurgaon, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <Slider images={images} />
      </div>
    </div>
  );
};

export default ImageGallery;
