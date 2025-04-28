import React from 'react';
import './About.css'; // Import the styles

function About() {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>
        Flame Sizzle and Grills was established on 9th March, 2024 by Henry Baba Musah and Prosper Tetteh Wayo.
      </p>
      <p>
        We are committed to providing exceptional service and fostering a sense of community. Whether you're dining in, taking out, or catering for a special event, Flame Sizzle and Grills is here to satisfy your cravings and create lasting memories.
      </p>

      <h3>Our Services:</h3>
      <ul className="services-list">
        <li><strong>Dine-In Experience</strong> - Enjoy flavorful dishes in a warm atmosphere.</li>
        <li><strong>Takeout and Delivery</strong> - Get your favorite meals wherever you are.</li>
        <li><strong>Catering Services</strong> - Perfect for parties, weddings, and events.</li>
        <li><strong>Grilling Workshops</strong> - Learn grilling tips and tricks!</li>
        <li><strong>Special Promotions</strong> - Stay tuned for deals and discounts.</li>
      </ul>

        <h3>Why Choose Us?</h3>
        <ul className="services-list">
          <li><strong>Authentic Flavors:</strong> Traditional charcoal grilling methods.</li>
          <li><strong>Quality Ingredients:</strong> Fresh, high-quality ingredients every time.</li>
          <li><strong>Unique Combinations:</strong> Classic favorites with a twist.</li>
        </ul>


      <p className="closing">Join us for the ultimate grilled experience!</p>
    </div>
  );
}

export default About;
