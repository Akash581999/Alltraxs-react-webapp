import React from "react";
import Slider from "./Slider";
import Dev1 from "../images/userimg1.jpg";
import Dev2 from "../images/userimg2.jpg";
import Dev3 from "../images/userimg3.png";
import Dev4 from "../images/userimg4.png";


const images = [
  {
    url: "https://picsum.photos/2400/800",
    // url: "../covers/bgcover.jpg",
    title: "First Slide",
    description: "Some description for the first slide",
  },
  {
    url: "https://picsum.photos/2400/800",
    // url: "../covers/bgcover1.jpg",
    title: "Second Slide",
    description: "Some description for the second slide",
  },
  {
    url: "https://picsum.photos/2400/800",
    // url: "../covers/bgcover2.jpg",
    title: "Third Slide",
    description: "Some description for the third slide",
  },
];

const ImageGallery = (props) => {
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <Slider images={images} />
        <div className="container mt-5">
          <h1 className="mb-4">About Us</h1>
          <p className="lead mb-4">SourceDotCom Pvt Ltd is a leading technology company based in Gurgaon, Haryana, India. We specialize in providing innovative solutions in the field of software development, web design, and digital marketing. Our team consists of highly skilled professionals who are dedicated to delivering high-quality products and services to our clients. At SourceDotCom, we strive to exceed our clients' expectations and contribute to their success by leveraging the latest technologies and best practices in the industry. Thank you for considering us for your technology needs.</p>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src={Dev1} className="card-img-top" alt="Developer 1" />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Frontend Developer</p>
                  <p className="card-text">Role: UI/UX design, Frontend development</p>
                  <p className="card-text">Location: Gurgaon, India</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src={Dev2} className="card-img-top" alt="Developer 2" />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Backend Developer</p>
                  <p className="card-text">Role: Backend development, Database management</p>
                  <p className="card-text">Location: Gurgaon, India</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src={Dev3} className="card-img-top" alt="Developer 3" />
                <div className="card-body">
                  <h5 className="card-title">David Johnson</h5>
                  <p className="card-text">Full Stack Developer</p>
                  <p className="card-text">Role: Frontend and Backend development, Deployment</p>
                  <p className="card-text">Location: Gurgaon, India</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src={Dev4} className="card-img-top" alt="Developer 4" />
                <div className="card-body">
                  <h5 className="card-title">Emily Brown</h5>
                  <p className="card-text">UI/UX Designer</p>
                  <p className="card-text">Role: Visual design, User experience optimization</p>
                  <p className="card-text">Location: Gurgaon, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
