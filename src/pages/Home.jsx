import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import './Home.css'; // Make sure to import the styles!
import Feedback from '../components/Feedback';

function Home() {
    const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || email.trim() === '') {
      setFeedback({ message: 'Please enter your email address.', type: 'error' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedback({ message: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    setFeedback({ message: 'Thank you for subscribing!', type: 'success' });
    setEmail('');
  };

  const handleCloseFeedback = () => {
    setFeedback({ message: '', type: '' });
  };
  return (
    <div className="home-page">
        <Feedback
            message={feedback.message}
            type={feedback.type}
            onClose={handleCloseFeedback}
        />
      <div className="home-content">
        <h2>Welcome to Flame Sizzle and Grills</h2>
        <h3>Where Flavor Meets Tradition</h3>
        <HeroSection />
        <section className="section">
          <h4>Find Us</h4>
          <p>123 Grilling Avenue, Food City</p>
          <div className="map-container">
          <iframe title='Flame and Sizzle Grills' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3720517091765!2d-0.30556608838560984!3d5.659209394298498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa174eb6a35d9%3A0xb2d7c7cb93d1c42!2sFlame%20and%20Sizzle%20Grills!5e0!3m2!1sen!2sgh!4v1745867807133!5m2!1sen!2sgh" 
            width="100%"
            height="400"
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
                
            </iframe>
          </div>
        </section>

        <section className="section">
          <h4>Newsletter Subscription</h4>
          <form className="newsletter" onSubmit={handleSubscribe}>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Home;
