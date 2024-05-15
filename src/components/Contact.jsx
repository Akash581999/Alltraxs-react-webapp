import React from "react";
import "../App.css";

const Contact = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your response`);
  };
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "100px",
                  color: "green",
                }}
              >
                Visit us at:
              </h3>
              <iframe
                style={{ marginTop: 100 }}
                width="560"
                height="440"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224392.40546310737!2d76.91343667759492!3d28.50569605014158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1945afccd4bd%3A0xe8d79dc10eb572dd!2sBar%C3%A7a%20Academy%20-%20DLF%20Phase%205%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1715153939780!5m2!1sen!2sin"
                title="Barca Academy Dlf phase 5"
              ></iframe>
            </div>
            <div className="col-6">
              <div className="container">
                <h3
                  style={{
                    textAlign: "center",
                    position: "relative",
                    top: "80px",
                    color: "green",
                  }}
                >
                  Contact us at:
                </h3>
                <form
                  className="form-container bg-glass"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="fname" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name here"
                    aria-describedby="emailHelp"
                    name="name"
                  />

                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email here"
                    aria-describedby="emailHelp"
                    name="email"
                  />

                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select id="country" name="country" className="form-select">
                    <option selected defaultValue={1}>
                      Select your country
                    </option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">Japan</option>
                    <option value="4">Canada</option>
                    <option value="5">Australia</option>
                    <option value="6">UK</option>
                  </select>

                  <label htmlFor="comments" className="form-label">
                    Comments
                  </label>
                  <div class="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="comments"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">
                      Write something here...
                    </label>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary my-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
