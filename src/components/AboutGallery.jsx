import React from "react";
import DevCard from "./DevCard";
import Slider from "./Slider";
import Dev1 from "../images/userimg1.jpg";
import Dev2 from "../images/userimg2.jpg";
import Dev3 from "../images/userimg3.png";
import Dev4 from "../images/userimg4.png";

const AboutGallery = (props) => {
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
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="lead mb-4">
                  Introducing AllTraxs, your ultimate destination for all things
                  music. AllTraxs offers an unparalleled music streaming
                  experience, combining a vast library of songs from all genres
                  with personalized recommendations tailored just for you. With
                  AllTraxs, you can create custom playlists, discover new
                  artists and tracks, and explore curated playlists crafted by
                  music experts. Our seamless interface makes it easy to
                  navigate and find exactly what you're looking for, whether
                  it's the latest chart-toppers or hidden gems waiting to be
                  uncovered. One of AllTraxs's standout features is its robust
                  recommendation system, which analyzes your listening habits to
                  suggest music you're sure to love. Whether you're into indie
                  rock, hip-hop, jazz, or anything in between, AllTraxs has
                  something for everyone. Plus, with offline listening
                  capabilities, you can take your music with you wherever you
                  go, even when you're offline. And with high-quality audio
                  streaming, you'll enjoy crystal-clear sound that brings your
                  favorite songs to life like never before. Join the AllTraxs
                  community today and experience the future of music streaming.
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
                  <DevCard
                    imageSrc={Dev1}
                    title="Akash Kumar"
                    profile="Frontend Developer"
                    responsibilities="Role: UI/UX design, Frontend development"
                    location="Location: Gurgaon, India"
                  />
                  <DevCard
                    imageSrc={Dev2}
                    title="Gourav Rattan"
                    profile="Backend Developer"
                    responsibilities="Role: Backend development, Database management"
                    location="Location: Gurgaon, India"
                  />
                  <DevCard
                    imageSrc={Dev3}
                    title="Akash Saini"
                    profile="Full Stack Developer"
                    responsibilities="Role: Frontend and Backend development, Deployment"
                    location="Location: Gurgaon, India"
                  />
                  <DevCard
                    imageSrc={Dev4}
                    title="Kapil Yadav"
                    profile="UI/UX Designer"
                    responsibilities="Role: Visual design, User experience optimization"
                    location="Location: Gurgaon, India"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <Slider />
      </div>
    </div>
  );
};

export default AboutGallery;
