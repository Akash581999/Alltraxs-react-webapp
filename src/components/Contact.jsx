import React from "react";
import "../App.css";

const Contact = ({ mode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your response`);
  };

  return (
    <div className={`bg-${mode}`}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="text-center mt-5 text-success">Visit us at:</h3>
            <iframe
              title="Barca Academy Dlf phase 5"
              width="560"
              height="440"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224392.40546310737!2d76.91343667759492!3d28.50569605014158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1945afccd4bd%3A0xe8d79dc10eb572dd!2sBar%C3%A7a%20Academy%20-%20DLF%20Phase%205%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1715153939780!5m2!1sen!2sin"
              style={{ marginTop: "80px" }}
            ></iframe>
          </div>
          <div className="col-6">
            <div className="container">
              <h3 className="text-center mt-4 text-success">Contact us at:</h3>
              <form className="form-container bg-glass" onSubmit={handleSubmit}>
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
                    Comments
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Write something here..."
                    id="comments"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
