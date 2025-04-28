import React, { useState } from 'react';
import './Contact.css'; 
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import Feedback from '../components/Feedback'; // reuse the feedback component

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setFeedback({ message: 'All fields are required.', type: 'error' });
      return;
    }

    if (!emailRegex.test(email)) {
      setFeedback({ message: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    // Imagine you submit here (API call)
    setFeedback({ message: 'Message sent successfully!', type: 'success' });

    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseFeedback = () => {
    setFeedback({ message: '', type: '' });
  };

  return (
    <div className="contact-page">
      <Feedback
        message={feedback.message}
        type={feedback.type}
        onClose={handleCloseFeedback}
      />

      <h2>Contact Us</h2>

      <p><strong>Location:</strong> 123 Grilling Avenue, Food City</p>

      <iframe 
        title="Flame and Sizzle Grills"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3720517091765!2d-0.30556608838560984!3d5.659209394298498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa174eb6a35d9%3A0xb2d7c7cb93d1c42!2sFlame%20and%20Sizzle%20Grills!5e0!3m2!1sen!2sgh!4v1745867807133!5m2!1sen!2sgh"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact-details">
        <p><FaPhone /> 0530505545</p>
        <p><FaMailBulk /> info@flamesizzlegrills.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          rows="5"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
