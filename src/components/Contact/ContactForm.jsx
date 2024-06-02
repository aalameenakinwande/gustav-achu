import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    callDate: "",
    callTime: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here, for example:
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-8 sm:p-0">
      <div className="flex mb-4 text-xs">
        <button className="flex-1 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 mr-2">
          Plan an Event
        </button>
        <button className="flex-1 bg-[#181349] text-white hover:bg-blue-600 px-4 py-2">
          Book a Call
        </button>
      </div>
      <form onSubmit={handleSubmit} className="text-xs">
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
        <div className="mb-4 flex flex-col sm:flex-row">
          <div className="mb-4 sm:mb-0 sm:mr-2 w-full sm:w-1/2">
            <label htmlFor="callDate" className="block mb-1">
              Call Date
            </label>
            <input
              type="date"
              id="callDate"
              name="callDate"
              placeholder="Select call date"
              value={formData.callDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="callTime" className="block mb-1">
              Call Time
            </label>
            <input
              type="time"
              id="callTime"
              name="callTime"
              placeholder="Select call time"
              value={formData.callTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2 mt-8">What are you interested in? (required)</p>
          <p className="mb-2 mt-3">Check all that apply:</p>
          <div className="flex items-center mb-2 mt-8">
            <input
              type="checkbox"
              id="option1"
              name="option1"
              className="form-checkbox h-4 w-4 text-blue-600 rounded-full mr-2"
            />
            <label htmlFor="option1">Interdum lorem dolor euismod et</label>
          </div>
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              id="option2"
              name="option2"
              className="form-checkbox h-4 w-4 text-blue-600 rounded-full mr-2"
            />
            <label htmlFor="option2">
              Interdum lorem dolor euismod et sed ipsum massa arcu et Non felis.
            </label>
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
          className="w-full bg-blue-500  hover:scale-105 transition-transform  text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
