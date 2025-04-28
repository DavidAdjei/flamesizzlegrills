import React from 'react';
import './Contact.css'; // Import the styles
import { FaPhone, FaMailBulk } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Location: 123 Grilling Avenue, Food City</p>
      <iframe title='Flame and Sizzle Grills' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3720517091765!2d-0.30556608838560984!3d5.659209394298498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa174eb6a35d9%3A0xb2d7c7cb93d1c42!2sFlame%20and%20Sizzle%20Grills!5e0!3m2!1sen!2sgh!4v1745867807133!5m2!1sen!2sgh" 
            width="100%"
            height="400"
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
                
            </iframe>
      <p> <FaPhone/> 0530505545</p>
      <p><FaMailBulk/> info@flamesizzlegrills.com</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
