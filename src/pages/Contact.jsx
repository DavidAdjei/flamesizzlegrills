function Contact() {
    return (
      <div className="page">
        <h2>Contact Us</h2>
        <p>Location: 123 Grilling Avenue, Food City</p>
        <p>Phone: 0530505545</p>
        <p>Email: info@flamesizzlegrills.com</p>
  
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
  