import React from "react";
import "../App.css";

const Contact = ({ mode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your response`);
  };

  return (
    <div className={`bg-${mode}`}>
      <div className="container background-radial-gradient overflow-hidden">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="my-5">
              <h3 className="text-center text-success">Contact us at:</h3>
              <form
                className="form-container bg-glass my-5 mx-5"
                onSubmit={handleSubmit}
                autoComplete="on"
                spellCheck="true"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name here"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email here"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select id="country" name="country" className="form-select">
                    <option value="" disabled defaultValue>
                      Select your country
                    </option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="comments" className="form-label">
                    Country
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Write something here..."
                    id="comments"
                    name="comments"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3 className="text-center mx-3 text-success">Visit us at:</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3506241600626!2d77.06736677549596!3d28.499096875737827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19ce831a0c89%3A0x5cf4858306f7b28!2sSourceDOTcom%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718118994879!5m2!1sen!2sin"
              title="SourceDotCom Pvt Ltd"
              width="100%"
              height="500"
              style={{ marginTop: "80px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
