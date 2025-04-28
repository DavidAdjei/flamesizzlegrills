import React from 'react';
import { useOrder } from '../context/OrderContext';
import './OrderModal.css'; // Link the CSS
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function OrderModal({ isOpen, onClose }) {
  const { orderItems, removeFromOrder, increaseQuantity, decreaseQuantity } = useOrder();
  const navigate = useNavigate();
  const totalPrice = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    onClose();
    navigate('/checkout');
  };

  if (!isOpen) return null;

  return (
    <div className="order-modal-overlay">
      <div className="order-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Your Order</h2>

        {orderItems.length === 0 ? (
          <p className="empty-text">Your order is empty.</p>
        ) : (
          <>
            <div className="order-items">
              {orderItems.map((item, index) => (
                <div key={index} className="order-item">
                  <img src={item.image} alt={item.title} className="order-item-image" />
                  <div className="order-item-details">
                    <h4>{item.title}</h4>
                    <p>GHC{item.price}</p>
                    <div className="quantity-controls">
                        <FaMinus onClick={() => decreaseQuantity(item.id)} size={12} style={{cursor: 'pointer', margin: 5, borderColor: "#555", borderWidth: 1, borderStyle: "solid", padding: 5, backgroundColor: "#555", borderRadius: 5}}/>
                        <span>{item.quantity}</span>
                        <FaPlus onClick={() => increaseQuantity(item.id)} size={12} style={{cursor: 'pointer', margin: 5, borderColor: "#555", borderWidth: 1, borderStyle: "solid", padding: 5, backgroundColor: "#555", borderRadius: 5}}/>
                    </div>
                  </div>
                  <FaTrash onClick={() => removeFromOrder(index)} color='red' size={20} style={{cursor: 'pointer', margin: 5}}/>
                  {/* <button onClick={() => removeFromOrder(index)} className="remove-button">
                    Remove
                  </button> */}
                </div>
              ))}
            </div>

            <div className="order-summary-cart">
              <h3>Total: GHC{totalPrice}</h3>
              <button onClick={handlePlaceOrder} className="place-order-button">
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderModal;
