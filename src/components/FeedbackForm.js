import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Ensure this file includes your new CSS

const FeedbackForm = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newErrors = {};

    // Validate required fields
    formData.forEach((value, key) => {
      if (!value && key !== "message") {
        newErrors[key] = "This field is required";
      }
    });

    // Validate email format
    const email = formData.get("email");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length === 0) {
      sendEmail(e);
    } else {
      setErrors(newErrors);
    }
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Feedback sent successfully!");
          navigate("/"); // Redirect to home page after successful submission
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send feedback.");
        }
      );
  };

  return (
    <div>
      <button className="back-button" onClick={() => navigate("/")}>
        &#x2190; Back
      </button>
      <div className="feedback-form-container">
        <h1 className="feedback-form-title">Feedback Form</h1>
        <h6 className="feedback-form-sub">Any suggestions?</h6>
        <form className="feedback-form" onSubmit={validateForm}>
          <label htmlFor="name" className="feedback-form-label required">
            Name:
          </label>
          {errors.from_name && (
            <span className="error-message">{errors.from_name}</span>
          )}
          <input
            type="text"
            id="name"
            name="from_name"
            className="feedback-form-input"
          />

          <label htmlFor="email" className="feedback-form-label required">
            Email:
          </label>
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}

          <input
            type="email"
            id="email"
            name="email"
            className="feedback-form-input"
          />

          <label htmlFor="message" className="feedback-form-label required">
            Message:
          </label>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
          <textarea
            id="message"
            name="message"
            className="feedback-form-textarea"
          ></textarea>

          <button type="submit" className="feedback-form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
