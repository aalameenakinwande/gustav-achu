import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    options: {
      planningEvent: false,
      bookCall: false,
       quickCall: false,
    },
  });
  const [showPopup, setShowPopup] = useState(false); // To show/hide popup
  const [popupMessage, setPopupMessage] = useState(""); // Popup message

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        options: {
          ...prevState.options,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation checks (excluding message)
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email.includes("@")
    ) {
      setPopupMessage("Please fill out all required fields and ensure the email contains '@'.");
      setShowPopup(true);
      return;
    }
  



    // Prepare the data for EmailJS
    const templateParams = {
      to_name: "Recipient Name", // Replace with actual recipient name or make it dynamic
      from_name: formData.firstName + " " + formData.lastName,
      from_email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message || "No additional message", // Default message if none provided
      planning_event: formData.options.planningEvent ? "Planning an event" : "",
      book_call: formData.options.bookCall ? "Book a call" : "",
      quick_call: formData.options.quickCall ? "Have a quick chat with Achu" : "",
    };
  
    emailjs.send('service_t55p22v', 'template_04c4p1x', templateParams, 'UqpL8JHu7-1H90Iga')
      .then((response) => {
        console.log('Success:', response);
        setPopupMessage("Message sent successfully!");
        // Reset form or handle success state
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
          options: {
            planningEvent: false,
            bookCall: false,
            quickCall: false,
          },
        });
        setShowPopup(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setPopupMessage("Failed to send message. Please try again.");
        setShowPopup(true);
      });
  
    // Hide popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };
  

  return (
    <div className="max-w-md mx-auto my-8 p-8 sm:p-0">
      {showPopup && (
        <div className="fixed top-0 left-0 w-full p-4 bg-blue-500 text-white text-center z-50">
          {popupMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="text-xs lg:text-sm">
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1">
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
            aria-required="true"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1">
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            aria-required="true"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <p className="mb-2 mt-8">
            What are you interested in? <span className="text-red-600">*</span>
          </p>
          <p className="mb-2 mt-3">Check all that apply:</p>
          <div className="flex items-center mb-2 mt-8">
            <input
              type="checkbox"
              id="planningEvent"
              name="planningEvent"
              checked={formData.options.planningEvent}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600 rounded-full mr-2"
            />
            <label htmlFor="planningEvent"> Book Gustav to speak
            </label>
          </div>
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              id="bookCall"
              name="bookCall"
              checked={formData.options.bookCall}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600 rounded-full mr-2"
            />
            <label htmlFor="bookCall">Book a call</label>
          </div>
          


            <div className="flex items-center mt-3">
            <input
              type="checkbox"
              id="quickCall"
              name="quickCall"
              checked={formData.options.quickCall}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600 rounded-full mr-2"
            />
            <label htmlFor="quickCall">Have a quick chat with Achu</label>
          </div>




        </div>
        <div className="mb-4 mt-8">
          <label htmlFor="message" className="block mb-1">
            Is there anything else you’d like to share?
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 hover:scale-105 transition-transform text-white px-4 py-2 rounded-md "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
