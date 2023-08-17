import React, { useState } from "react";
import '../Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.email && inputs.name && inputs.phoneNumber) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Let's get in touch</h1>
        {submitted ? (
          <p className="contact-message">Thank you for your interest. I will contact you shortly.</p>
        ) : (
          <>
            <input
              className="contact-input"
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={handleInputChange}
            />
            <input
              className="contact-input"
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
            />
            <input
              className="contact-input"
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={inputs.phoneNumber}
              onChange={handleInputChange}
            />
            <button className="contact-button" type="submit">
              Send
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Contact;



