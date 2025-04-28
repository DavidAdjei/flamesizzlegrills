import React from 'react';
import { dishes } from '../components/HeroSection';
import './Products.css'; // We'll style it separately

function Products() {
  return (
    <div className="page products-page">
      <h2>Feel the Flavor in Every Bite</h2>
      <p className="intro">
        Our menu is built for real cravings and big appetites. Whether you're eating solo, with friends, or feeding a crowd, we've got sizzling options that hit the spot.
      </p>

      <div className="products-grid">
        {dishes.map((dish, index) => (
          <div className="product-card" key={index}>
            <img src={dish.image} alt={dish.title} />
            <div className="product-info">
              <h3>{dish.title}</h3>
              <p className="price">GHC {dish.price}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="reviews">
        <h3>Customer Reviews</h3>
        <blockquote>
          "I ordered for a party, and everything was fresh, tasty, and came in generous portions. The guests couldn't stop asking where the food was from." - <strong>Cilla</strong>
        </blockquote>
        <blockquote>
          "Food was ready fast, packed well, and every bite was full of flavor. You've got a loyal customer." - <strong>Kojo M.</strong>
        </blockquote>
      </section>

      
    </div>
  );
}

export default Products;
