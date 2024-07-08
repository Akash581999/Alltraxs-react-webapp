import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import rst from "../images/rst1.jpg";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../App.css";

const firebaseConfig = {
  apiKey: "AIzaSyBpIKtGFO6IRkK72_bQ4fxGAppCHpuzZDE",
  authDomain: "react-otp-app-1a6df.firebaseapp.com",
  projectId: "react-otp-app-1a6df",
  storageBucket: "react-otp-app-1a6df.appspot.com",
  messagingSenderId: "434954909594",
  appId: "1:434954909594:web:0bfa09b64e4dc2e33dac23",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();

const ResetForm = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const phoneNo = `+91${phoneNumber}`;
      const appVerifier = new firebase.auth.RecaptchaVerifier("reCaptcha", {
        size: "invisible",
      });
      const confirmation = await auth.signInWithPhoneNumber(
        phoneNo,
        appVerifier
      );
      setConfirmationResult(confirmation);
      alert("OTP sent to your phone number!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(`Error sending OTP: ${error.message}`);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      await confirmationResult.confirm(otp);
      setOtpVerified(true);
      alert("OTP verified. Proceeding to reset password!");
    } catch (error) {
      alert(`Error verifying OTP: ${error.message}`);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const requestData = {
      eventID: "1005",
      addInfo: {
        Mobile: phoneNumber,
        NewPassword: newPassword,
        ConfirmPassword: confirmPassword,
      },
    };
    // if (newPassword !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }
    try {
      // await auth.currentUser.updatePassword(newPassword);
      const response = await fetch("http://localhost:5164/resetPassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response data");

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Password reset successfully!");
        setResetSuccess(true);
        setNewPassword([]);
        setConfirmPassword([]);
      } else {
        alert(data.rData.rMessage || "Failed to reset password!!");
        setNewPassword([]);
        setConfirmPassword([]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error resetting password: ${error.message}`);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  if (resetSuccess === true) {
    return <Navigate to="/LoginScreen" />;
  }

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
            {!confirmationResult ? (
              <form
                onSubmit={handleSendOTP}
                className="form-container bg-glass"
              >
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Enter your registered phone number :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Enter phone number here.."
                    aria-describedby="phoneNumberHelp"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <div id="reCaptcha"></div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <Link to="/LoginScreen" className="btn btn-primary mx-3">
                    Back
                  </Link>
                  <button type="submit" className="btn btn-success mx-3">
                    Send OTP
                  </button>
                </div>
              </form>
            ) : !otpVerified ? (
              <form
                onSubmit={handleVerifyOTP}
                className="form-container bg-glass"
              >
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">
                    Enter the OTP received on your phone number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otp"
                    placeholder="Enter OTP here"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 d-flex justify-content-end">
                  <button type="submit" className="btn btn-success mx-3">
                    Verify OTP
                  </button>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handlePasswordReset}
                className="form-container bg-glass"
              >
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    Enter new password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter new password here"
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <div className="show-pass position-relative">
                    <button
                      type="button"
                      className="show-pass-button btn btn-border-light position-absolute"
                      style={{ top: -45, right: 0 }}
                      onClick={togglePasswordVisibility}
                      aria-label="Toggle Password Visibility"
                    >
                      <i
                        className={`fa ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm new password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Confirm new password here"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <div className="show-pass position-relative">
                    <button
                      type="button"
                      className="show-pass-button btn btn-border-light position-absolute"
                      style={{ top: -45, right: 0 }}
                      onClick={togglePasswordVisibility}
                      aria-label="Toggle Password Visibility"
                    >
                      <i
                        className={`fa ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                  <button type="submit" className="btn btn-success mx-3">
                    Reset Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetForm;
