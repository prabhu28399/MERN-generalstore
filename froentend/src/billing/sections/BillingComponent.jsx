import React, { useState } from "react";

const BillingComponent = () => {
  // Seller information
  const sellerInfo = {
    name: "ABC Electronics",
    address: "123 Main Street, Cityville",
    phone: "+1 (555) 123-4567",
    gstin: "22ABCDE1234F1Z5",
  };

  // Customer information state
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Sample product data
  const productCatalog = [
    {
      id: 1,
      category: "Electronics",
      name: "Wireless Headphones",
      price: 59.99,
    },
    { id: 2, category: "Electronics", name: "Bluetooth Speaker", price: 89.99 },
    { id: 3, category: "Electronics", name: "Smart Watch", price: 199.99 },
    { id: 4, category: "Accessories", name: "Phone Case", price: 19.99 },
    { id: 5, category: "Accessories", name: "Screen Protector", price: 9.99 },
    { id: 6, category: "Computers", name: "Wireless Mouse", price: 29.99 },
    { id: 7, category: "Computers", name: "Mechanical Keyboard", price: 79.99 },
    { id: 8, category: "Home", name: "Smart Bulb", price: 24.99 },
    { id: 9, category: "Home", name: "Robot Vacuum", price: 299.99 },
    { id: 10, category: "Gaming", name: "Game Controller", price: 49.99 },
  ];

  // Billing items state
  const [billingItems, setBillingItems] = useState([
    {
      id: 1,
      category: "Electronics",
      name: "Wireless Headphones",
      qty: 2,
      price: 59.99,
    },
    {
      id: 3,
      category: "Electronics",
      name: "Smart Watch",
      qty: 1,
      price: 199.99,
    },
  ]);

  // Handle customer info change
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle adding a product to the bill
  const handleAddProduct = (product) => {
    const existingItem = billingItems.find((item) => item.id === product.id);

    if (existingItem) {
      setBillingItems(
        billingItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setBillingItems([
        ...billingItems,
        {
          id: product.id,
          category: product.category,
          name: product.name,
          qty: 1,
          price: product.price,
        },
      ]);
    }
  };

  // Handle quantity change
  const handleQtyChange = (id, newQty) => {
    if (newQty < 1) return;

    setBillingItems(
      billingItems.map((item) =>
        item.id === id ? { ...item, qty: parseInt(newQty) } : item
      )
    );
  };

  // Handle removing an item
  const handleRemoveItem = (id) => {
    setBillingItems(billingItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = billingItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Calculate tax (assuming 10% for example)
  const tax = subtotal * 0.1;

  // Calculate total
  const total = subtotal + tax;

  return (
    <div className="billing-container">
      <div className="seller-info">
        <h2>{sellerInfo.name}</h2>
        <p>{sellerInfo.address}</p>
        <p>Phone: {sellerInfo.phone}</p>
        <p>GSTIN: {sellerInfo.gstin}</p>
      </div>

      <div className="customer-info">
        <h3>Customer Information</h3>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={handleCustomerInfoChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={customerInfo.phone}
            onChange={handleCustomerInfoChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={handleCustomerInfoChange}
          />
        </div>
      </div>

      <div className="product-selection">
        <h3>Available Products</h3>
        <div className="product-grid">
          {productCatalog.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleAddProduct(product)}
            >
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price.toFixed(2)}</div>
              <div className="product-category">{product.category}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="billing-items">
        <h3>Billing Items</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Product Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {billingItems.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => handleQtyChange(item.id, e.target.value)}
                  />
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="payment-section">
        <h3>Payment Summary</h3>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="payment-method">
          <h4>Payment Method</h4>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Card
          </label>
        </div>

        <button className="print-btn">Print Invoice</button>
      </div>
    </div>
  );
};

export default BillingComponent;
