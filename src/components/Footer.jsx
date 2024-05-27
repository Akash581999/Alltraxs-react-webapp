import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-100">
        <footer className="text-center text-light bg-dark">
          <div className="container">
            <section className="mx-1">
              <div className="row text-center pt-4 d-flex flex-row justify-content-center ">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/" className="text-light text-decoration-none">
                      AllTraxs
                    </a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/" className="nav-link active">
                      <span>Home</span>
                    </Link>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/AboutScreen" className="nav-link active">
                      <span>About</span>
                    </Link>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/ContactScreen" className="nav-link active">
                      <span>Contacts</span>
                    </Link>
                  </h6>
                </div>
              </div>
            </section>
            <hr className="my-3" />
            <section className="mb-3">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p className="text-light">
                    "Imagine a digital music platform where you can access
                    millions of songs, albums, and playlists from various
                    artists and genres, all at your fingertips. Our online song
                    playing app, much like Spotify, offers a seamless and
                    personalized music streaming experience. Discover new
                    releases, create and share playlists, follow your favorite
                    artists, and enjoy curated playlists tailored to your
                    tastes. With features like offline listening, high-quality
                    audio streaming, and cross-device synchronization, you can
                    enjoy your favorite tunes anytime, anywhere. Whether you're
                    in the mood for upbeat tracks to energize your workout or
                    soothing melodies for relaxation, our app provides the
                    ultimate soundtrack to your life."
                  </p>
                </div>
              </div>
            </section>
            <section className="text-center mb-1">
              <Link
                to="https://facebook.com/Akashkumar"
                className="text-light me-4"
                target="_blank"
              >
                <i className="fa fa-facebook"></i>
              </Link>
              <Link
                to="https://twitter.com/58Akash1999"
                className="text-light me-4"
                target="_blank"
              >
                <i className="fa fa-twitter"></i>
              </Link>
              <Link
                to="https://mail.google.com/"
                className="text-light me-4"
                target="_blank"
              >
                <i className="fa fa-google"></i>
              </Link>
              <Link
                to="https://www.youtube.com/channel/UCv39Htmah0SkcwDZUzzTcKg"
                className="text-light me-4"
                target="_blank"
              >
                <i className="fa fa-youtube"></i>
              </Link>
              <Link
                to="https://instagram.com/ganga_nagar_united"
                className="text-light me-4"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/akash-kumar-a40b98126/"
                className="text-light me-4"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link
                to="https://github.com/Akash581999"
                className="text-light me-4"
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </Link>
            </section>
            <span>
              <i className="fa fa-phone"> Call us at: +91 9634708314</i>
            </span>
            &nbsp;&nbsp;
            <span>
              <i className="fa fa-envelope">
                &nbsp; Mail us at: akash581999@gmail.com
              </i>
            </span>
          </div>

          <div className="text-center py-3 text-light">
            © 2024 Copyright:
            <Link
              className="text-light mx-1"
              to="https://AllTraxs-music.com"
              target="_blank"
              rel="noreferrer"
            >
              AllTraxs.com
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
