import React, { useState, useEffect } from 'react';
import './HeroSlideshow.css';
import ChickenJollof from '../assests/images/chicken-jollof.jpg';
import PorkJollof from '../assests/images/pork-jollof.jpg';
import Chicken from '../assests/images/chicken.jpg';
import Pork from "../assests/images/pork.jpg";
import PotatoChips from "../assests/images/potato-chips.jpg";
import LSLY from "../assests/images/lsly.jpg";
import Coke from "../assests/images/coke500ml.jpg";
import Water from "../assests/images/69154a.jpg"
import { Link } from 'react-router-dom';

export const dishes = [
  // Main Dishes
  {
    id: 1,
    image: ChickenJollof,
    title: 'Jollof with Charcoal Grilled Chicken',
    price: 60,
    category: 'Main Dishes'
  },
  {
    id: 2,
    image: PotatoChips,
    title: 'Potato Chips with Grilled Pork',
    price: 70,
    category: 'Main Dishes'
  },
  {
    id: 3,
    image: PorkJollof,
    title: 'Jollof with Charcoal Grilled Pork',
    price: 70,
    category: 'Main Dishes'
  },
  {
    id: 4,
    image: PotatoChips,
    title: 'Yam Chips with Charcoal Grilled Chicken',
    price: 70,
    category: 'Main Dishes'
  },
  {
    id: 5,
    image: LSLY,
    title: 'Labadi Style Loaded Yam',
    price: 80,
    category: 'Main Dishes'
  },
  {
    id: 6,
    image: PotatoChips,
    title: 'Yam Chips with Charcoal Grilled Pork',
    price: 70,
    category: 'Main Dishes'
  },
  {
    id: 8,
    image: PotatoChips,
    title: 'Potato Chips with Charcoal Grilled Chicken',
    price: 70,
    category: 'Main Dishes'
  },
  // Protein Only
  {
    id: 7,
    image: Pork,
    title: 'Charcoal Grilled Pork Only',
    price: 50,
    category: 'Protein Only'
  },
  {
    id: 9,
    image: Chicken,
    title: 'Charcoal Grilled Chicken Only',
    price: 70,
    category: 'Protein Only'
  },

  // Drinks
  {
    id: 10,
    image: Water, // you'll replace Water with your actual import
    title: 'Bottled Water',
    price: 5,
    category: 'Drinks'
  },
  {
    id: 11,
    image: Coke, // you'll replace Coke with your actual import
    title: 'Coca-Cola',
    price: 10,
    category: 'Drinks'
  }
];


const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000); // 5 seconds
      return () => clearInterval(timer);
    }, [currentSlide]);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % dishes.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + dishes.length) % dishes.length);
    };
  
    return (
      <div className="hero-slideshow">
        {dishes.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
                <h1>{slide.title}</h1>
                <Link to="/products" className="view-more-button">View More</Link>
            </div>
          </div>
        ))}
  
        <button className="nav-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    );
  };

export default HeroSection;
