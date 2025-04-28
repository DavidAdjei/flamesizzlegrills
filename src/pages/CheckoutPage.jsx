import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
import Feedback from '../components/Feedback'; // reuse the feedback component

function CheckoutPage() {
  const { orderItems, clearOrder } = useOrder();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    streetName: '',
    country: '',
    city: '',
    region: '',
    email: '',
    houseNumber: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // You can also validate fields here if needed
    if (!formData.name || !formData.phone || !formData.streetName || !formData.country || !formData.city || !formData.region || !formData.email || !formData.houseNumber) {
      setFeedback({ message: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    if (!emailRegex.test(formData.email)) {
        setFeedback({ message: 'Please enter a valid email address.', type: 'error' });
        return;
      }

    console.log('Order placed:', { orderItems, ...formData });

    setFeedback({ message: 'Order placed successfully!', type: 'success' });
    setTimeout(() => {
        clearOrder();
        navigate('/'); 
    }, 2000);
  };

  if (orderItems.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Your cart is empty!</h2>
      </div>
    );
  }

  const handleCloseFeedback = () => {
    setFeedback({ message: '', type: '' });
  };

  return (
    <div className="checkout-page">
        <Feedback
            message={feedback.message}
            type={feedback.type}
            onClose={handleCloseFeedback}
        />
      <h2 style={{textAlign: "center"}}>Checkout</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="delivery-info">
            <h3>Delivery Information</h3>
            <p>Fill in your delivery information below:</p>
            <label>
            Name*
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>

            <label>
            Phone Number*
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>

            <label>
            Email address*
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>

            <label>
            Country*
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
            </label>
            <label>
            Street Name*
            <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} />
            </label>
            <label>
            House Number*
            <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleChange} />
            </label>
            <label>
            Town/City*
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </label>
            <label>
            Region*
            <input type="text" name="region" value={formData.region} onChange={handleChange} />
            </label>
            <label>
            Notes (Optional):
            <textarea name="notes" value={formData.notes} onChange={handleChange} />
            </label>
        </div>
        <div className="order-summary">
            <h3>Order Summary</h3>
            <ul className="order-summary-list">
            {orderItems.map((item) => (
                <li key={item.id} className='order-summary-item'>
                    <div className="order-summary-item-details">
                        <img src={item.image} alt={item.title} />
                        <div className="order-summary-item-info" >
                            <h4>{item.title}</h4>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="order-summary-item-price">GHC {item.price * item.quantity}</p>
                </li>
            ))}
            </ul>
            <h3 className="total-price">Total Price: GHC {orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</h3>

            <button type="submit" className="place-order-btn">Place Order</button>
        </div>
    </form>
    </div>
  );
}

export default CheckoutPage;
