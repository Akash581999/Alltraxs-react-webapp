import React, { useState } from "react";
import "../App.css";

const Contact = ({ mode }) => {
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    country: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleFeedback = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1007",
      addInfo: {
        UserName: formData.userName,
        Email: formData.email,
        Country: formData.country,
        Comments: formData.comments,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Thank you for your response!");
        resetForm();
      } else {
        alert(
          data.rData.rMessage || "User data not found, Kindly register first!"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit feedback.");
    }
  };

  const resetForm = () => {
    setFormData({
      userName: "",
      email: "",
      country: "",
      comments: "",
    });
  };
  return (
    <div className={`bg-${mode}`}>
      <div className="container background-radial-gradient overflow-hidden">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="my-5">
              <h3 className="text-center text-success">Contact us at:</h3>
              <form
                className="form-container bg-glass my-5 mx-5 needs-validation"
                onSubmit={handleFeedback}
                autoComplete="on"
                spellCheck="true"
                novalidate
              >
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name here"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email here"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option defaultValue selected disabled value="">
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
                    name="comments"
                    style={{ height: "100px" }}
                    value={formData.comments}
                    onChange={handleChange}
                    required
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
