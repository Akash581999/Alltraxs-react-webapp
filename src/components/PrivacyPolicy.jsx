import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PrivacyPolicy = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Terms And Conditions Of Our Services
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Privacy Policy</h4>
        <p>
          Welcome to AllTraxs! We are committed to protecting your privacy and
          providing a safe online experience for all our users. This Privacy
          Policy outlines how we collect, use, and disclose your information
          when you use our website and services.
        </p>
        <ol>
          <li>
            <strong>Information We Collect</strong>
            <ul>
              <li>
                <strong>Personal Information:</strong> When you register for an
                account, we may collect your name, email address, and other
                contact details.
              </li>
              <li>
                <strong>Usage Information:</strong> We gather information about
                how you interact with our website, such as your browsing
                history, search queries, and song preferences.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information
                about the device you use to access our services, including IP
                address, browser type, and operating system.
              </li>
            </ul>
          </li>
          <li>
            <strong>How We Use Your Information</strong>
            <ul>
              <li>
                <strong>To Provide Services:</strong> We use your information to
                operate our website, personalize your experience, and deliver
                the services you request.
              </li>
              <li>
                <strong>Communication:</strong> We may send you service-related
                communications, such as account notifications and updates.
              </li>
              <li>
                <strong>Analytics:</strong> We analyze user trends and
                preferences to improve our website and services.
              </li>
            </ul>
          </li>
          <li>
            <strong>Sharing of Your Information</strong>
            <ul>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share
                your information with third-party service providers who help us
                operate our website and provide services.
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose your
                information when required by law or to protect our rights.
              </li>
            </ul>
          </li>
          <li>
            <strong>Your Choices</strong>
            <ul>
              <li>
                <strong>Account Settings:</strong> You can update your account
                information and communication preferences through your account
                settings.
              </li>
              <li>
                <strong>Cookies:</strong> You can manage cookies through your
                browser settings.
              </li>
            </ul>
          </li>
          <li>
            <strong>Security</strong>
            <ul>
              <li>
                We implement security measures to protect your information from
                unauthorized access and misuse.
              </li>
            </ul>
          </li>
          <li>
            <strong>Children’s Privacy</strong>
            <ul>
              <li>
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children.
              </li>
            </ul>
          </li>
          <li>
            <strong>Changes to This Privacy Policy</strong>
            <ul>
              <li>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on our
                website.
              </li>
            </ul>
          </li>
          <li>
            <strong>Contact Us</strong>
            <ul>
              <li>
                If you have any questions or concerns about this Privacy Policy
                or our privacy practices, please contact us at Contact Page.
              </li>
            </ul>
          </li>
        </ol>
        <h4>Terms of Service</h4>
        <p>
          Welcome to AllTraxs! These Terms of Service govern your use of our
          website and services.
        </p>
        <ol>
          <li>
            <strong>Acceptance of Terms</strong>
            <ul>
              <li>
                By accessing or using our website, you agree to these Terms of
                Service and our Privacy Policy.
              </li>
            </ul>
          </li>
          <li>
            <strong>Use of Services</strong>
            <ul>
              <li>
                You may use our website and services for personal,
                non-commercial purposes.
              </li>
              <li>
                You agree not to engage in any activity that disrupts or
                interferes with our website or services.
              </li>
            </ul>
          </li>
          <li>
            <strong>User Accounts</strong>
            <ul>
              <li>
                You must create an account to access certain features of our
                website.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account.
              </li>
            </ul>
          </li>
          <li>
            <strong>Content</strong>
            <ul>
              <li>
                You retain ownership of any content you upload or share on our
                website.
              </li>
              <li>
                By uploading content, you grant us a non-exclusive, worldwide
                license to use, reproduce, and distribute the content.
              </li>
            </ul>
          </li>
          <li>
            <strong>Prohibited Activities</strong>
            <ul>
              <li>
                You agree not to engage in any unlawful or prohibited activities
                while using our website.
              </li>
              <li>
                You agree not to upload or share any content that infringes on
                the rights of others.
              </li>
            </ul>
          </li>
          <li>
            <strong>Limitation of Liability</strong>
            <ul>
              <li>
                We are not liable for any damages arising out of or in
                connection with your use of our website.
              </li>
            </ul>
          </li>
          <li>
            <strong>Changes to Terms</strong>
            <ul>
              <li>
                We may update these Terms of Service from time to time. We will
                notify you of any changes by posting the updated terms on our
                website.
              </li>
            </ul>
          </li>
          <li>
            <strong>Governing Law</strong>
            <ul>
              <li>
                These Terms of Service are governed by the laws of AllTraxs
                guidelines.
              </li>
            </ul>
          </li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Understood
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PrivacyPolicy;
