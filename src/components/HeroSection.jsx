import React, { useState, useEffect } from 'react';
import './HeroSlideshow.css';
import ChickenJollof from '../assests/images/chicken-jollof.jpg';
import PorkJollof from '../assests/images/pork-jollof.jpg';
import Chicken from '../assests/images/chicken.jpg';
import Pork from "../assests/images/pork.jpg";
import PotatoChips from "../assests/images/potato-chips.jpg";
import LSLY from "../assests/images/lsly.jpg";

export const dishes = [
  {
    image: ChickenJollof, // replace with your actual image paths
    title: 'Jollof with Charcoal Grilled Chicken',
    price: 60
  },
  {
    image: LSLY,
    title: 'Labadi Style Loaded Yam',
    price: 80
  },
  {
    image: PotatoChips,
    title: 'Potato Chips with Grilled Pork',
    price: 70
  },
  {
    image: PorkJollof,
    title: 'Jollof with Charcoal Grilled Pork',
    price: 70
  },
  {
    image: PotatoChips,
    title: 'Yam Chips with Charcoal Grilled Chicken',
    price: 70
  },
  {
    image: PotatoChips,
    title: 'Yam Chips with Charcoal Grilled Pork',
    price: 70
  },
  {
    image: PotatoChips,
    title: 'Potato Chips with Charcoal Grilled Chicken',
    price: 70
  },
  {
    image: Pork,
    title: 'Charcoal Grilled Pork Only',
    price: 50
  },
  {
    image: Chicken,
    title: 'Charcoal Grilled Chicken Only',
    price: 70
  },
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
