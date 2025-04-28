import React from 'react';
import HeroSection from '../components/HeroSection';

function Home() {
    return (
      <div className="page">
        <HeroSection/>
        <h2>Welcome to Flame Sizzle and Grills</h2>
        <h3>Where Flavor Meets Tradition</h3>
  
        <section className="section">
          <h4>Find Us</h4>
          <p>123 Grilling Avenue, Food City</p>
        </section>
  
        <section className="section">
          <h4>Newsletter Subscription</h4>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    );
  }
  
  export default Home;
  