// ContactForm.js
import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending an email or saving to a database
    console.log('Form data submitted:', formData);
  };

  return (
    <div id='contact'>
      <form onSubmit={handleSubmit} className="form-container" >
      <label className="label">
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="input" placeholder='Enter your name'/>
      </label>
      <br />
      <label className="label">
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" placeholder='Enter your email'/>
      </label>
      <br />
      <label className="label">
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} className="textarea" placeholder='Type your message here'/>
      </label>
      <br />
      <button type="submit" className="button">Submit</button>
    </form>
    </div>
  );
};

export default ContactForm;
