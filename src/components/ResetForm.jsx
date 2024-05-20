import { useState } from "react";
import "../App.css";
import rst from "../images/rst1.jpg";

const ResetForm = (props) => {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [confirmOTP, setConfirmOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to send OTP to the provided email or phone number
    alert("OTP sent to your email or phone number!");
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Implement logic to verify OTP and proceed to reset password
    alert("OTP verified. Proceeding to next window!");
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Implement logic to reset password
    alert("Password reset successfully!");
  };

  return (
    <div className={`bg-${props.mode}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <img
              src={rst}
              className="img-fluid rounded my-5"
              alt="resetpic"
              style={{ maxHeight: "400px", width: "100%" }}
            />
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12">
            <h2 className="text-success my-5 text-center">Reset Password</h2>
            {!otp ? (
              <form onSubmit={handleSubmit} className="form-container bg-glass">
                <div className="mb-3">
                  <label htmlFor="emailOrPhoneNumber" className="form-label">
                    Enter your registered email or phone number :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailOrPhoneNumber"
                    placeholder="Enter email or number here.."
                    aria-describedby="emailOrPhoneNumberHelp"
                    name="emailOrPhoneNumber"
                    value={emailOrPhoneNumber}
                    onChange={(e) => {
                      setEmailOrPhoneNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary mx-3">
                    Get OTP
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success mx-3"
                    onClick={(e) => {
                      setConfirmOTP(e.target.value);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </form>
            ) : (
              <>
                <form
                  onSubmit={handleOTPSubmit}
                  className="form-container bg-glass"
                >
                  <div className="mb-3">
                    <label htmlFor="otp" className="form-label">
                      Enter the OTP received on your email or phone number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="otp"
                      placeholder="Enter OTP here"
                      name="otp"
                      value={otp}
                      onChange={(e) => {
                        setOTP(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3 d-flex justify-content-end">
                    <button type="submit" className="btn btn-success mx-3">
                      Verify OTP
                    </button>
                  </div>
                </form>

                <form
                  onSubmit={handlePasswordReset}
                  className="form-container bg-glass"
                >
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      Enter your new password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      placeholder="Enter new password here"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm your new password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm new password here"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3 d-flex justify-content-end">
                    <button type="submit" className="btn btn-success mx-3">
                      Reset Password
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetForm;
