import React from "react";
import emailjs from "emailjs-com";
import "./App.css"; // Ensure this file includes your new CSS

const FeedbackForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send feedback.");
        }
      );
  };

  return (
    <div className="feedback-form-container">
      <h1 className="feedback-form-title">Feedback Form</h1>
      <h6 className="feedback-form-sub">Any suggestions?</h6>
      <form className="feedback-form" onSubmit={sendEmail}>
        <label htmlFor="name" className="feedback-form-label required">
          Name:
          <span className="tooltipForm">This field is required</span>
        </label>
        <input
          type="text"
          id="name"
          name="from_name"
          className="feedback-form-input"
          required
        />

        <label htmlFor="email" className="feedback-form-label required">
          Email:
          <span className="tooltipForm">This field is required</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="feedback-form-input"
          required
        />

        <label htmlFor="message" className="feedback-form-label required">
          Message:
          <span className="tooltipForm">This field is required</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="feedback-form-textarea"
          required
        ></textarea>

        <button type="submit" className="feedback-form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
