import React, { useState } from "react";

const InvoiceComponent = () => {
  // Seller information state
  const [sellerInfo, setSellerInfo] = useState({
    name: "Prabhu Kiranam",
    address: "123 Business St, City, State 12345",
    phone: "(555) 123-4567",
    email: "contact@yourbusiness.com",
  });

  // Customer information state
  const [customerInfo, setCustomerInfo] = useState({
    name: "Customer's Business Name",
    address: "456 Customer Ave, Town, State 67890",
    phone: "(555) 987-6543",
    email: "contact@customer.com",
  });

  // Invoice details
  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: "INV-2023-001",
    date: new Date().toLocaleDateString(),
    dueDate: new Date(
      Date.now() + 30 * 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    terms: "Net 30",
  });

  // Payment methods
  const paymentMethods = ["Bank Transfer", "Credit Card", "PayPal", "Check"];

  // Sample line items
  const [lineItems, setLineItems] = useState([
    {
      id: 1,
      name: "Web Design Services",
      description: "Homepage redesign",
      qty: 1,
      price: 1200.0,
    },
    {
      id: 2,
      name: "Hosting Services",
      description: "Monthly hosting",
      qty: 3,
      price: 50.0,
    },
    {
      id: 3,
      name: "SEO Package",
      description: "Basic SEO optimization",
      qty: 1,
      price: 500.0,
    },
  ]);

  // Calculate amounts
  const subtotal = lineItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );
  const taxRate = 0.1; // 10%
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Handle line item changes
  const handleLineItemChange = (id, field, value) => {
    setLineItems(
      lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Add new line item
  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      {
        id: lineItems.length + 1,
        name: "",
        description: "",
        qty: 1,
        price: 0.0,
      },
    ]);
  };

  // Remove line item
  const removeLineItem = (id) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  return (
    <div
      className="invoice-container ml-60 pt-30"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Seller Information */}
      <div
        className="flex seller-info border-2"
        style={{ marginBottom: "30px" }}
      >
        <h1 style={{ marginBottom: "5px" }}>{sellerInfo.name}</h1>
        <p style={{ margin: "2px 0" }}>{sellerInfo.address}</p>
        <p style={{ margin: "2px 0" }}>{sellerInfo.phone}</p>
        <p style={{ margin: "2px 0" }}>{sellerInfo.email}</p>
      </div>

      <hr style={{ border: "1px solid #eee", margin: "20px 0" }} />

      {/* Customer Information and Invoice Details */}
      <div
        className="invoice-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div className="customer-info border-2" style={{ width: "60%" }}>
          <h3 style={{ marginBottom: "10px" }}>Bill to:</h3>
          <p style={{ margin: "5px 0" }}>{customerInfo.name}</p>
          <p style={{ margin: "5px 0" }}>{customerInfo.address}</p>
          <p style={{ margin: "5px 0" }}>{customerInfo.phone}</p>
          <p style={{ margin: "5px 0" }}>{customerInfo.email}</p>
        </div>

        <div className="invoice-details border-2" style={{ width: "35%" }}>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold", padding: "5px 0" }}>
                  Invoice #
                </td>
                <td style={{ padding: "5px 0" }}>
                  {invoiceDetails.invoiceNumber}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", padding: "5px 0" }}>Date</td>
                <td style={{ padding: "5px 0" }}>{invoiceDetails.date}</td>
              </tr>

              <tr>
                <td style={{ fontWeight: "bold", padding: "5px 0" }}>
                  Amount Due
                </td>
                <td style={{ padding: "5px 0" }}>${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Line Items Table */}
      <div className="line-items border-2" style={{ marginBottom: "30px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ textAlign: "left", padding: "10px" }}>Item</th>
              <th style={{ textAlign: "right", padding: "10px" }}>Quantity</th>
              <th style={{ textAlign: "right", padding: "10px" }}>Price</th>
              <th style={{ textAlign: "right", padding: "10px" }}>Amount</th>
              <th style={{ width: "50px" }}></th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px" }}>
                  <div style={{ fontWeight: "bold" }}>{item.name}</div>
                  <div style={{ fontSize: "0.9em", color: "#666" }}>
                    {item.description}
                  </div>
                </td>
                <td style={{ textAlign: "right", padding: "10px" }}>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) =>
                      handleLineItemChange(
                        item.id,
                        "qty",
                        parseInt(e.target.value) || 0
                      )
                    }
                    style={{ width: "60px", textAlign: "right" }}
                  />
                </td>
                <td style={{ textAlign: "right", padding: "10px" }}>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.price}
                    onChange={(e) =>
                      handleLineItemChange(
                        item.id,
                        "price",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    style={{ width: "80px", textAlign: "right" }}
                  />
                </td>
                <td style={{ textAlign: "right", padding: "10px" }}>
                  ${(item.qty * item.price).toFixed(2)}
                </td>
                <td style={{ textAlign: "center" }}>
                  <button
                    onClick={() => removeLineItem(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addLineItem}
          style={{
            marginTop: "10px",
            padding: "5px 10px",
            background: "#f0f0f0",
            border: "1px solid #ddd",
            cursor: "pointer",
          }}
        >
          + Add Item
        </button>
      </div>

      {/* Totals */}
      <div className="totals border-2" style={{ marginBottom: "30px" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "70%" }}></td>
              <td style={{ textAlign: "right", padding: "5px 10px" }}>
                Subtotal:
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "5px 10px",
                  width: "100px",
                }}
              >
                ${subtotal.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td></td>
              <td style={{ textAlign: "right", padding: "5px 10px" }}>
                Tax ({taxRate * 100}%):
              </td>
              <td style={{ textAlign: "right", padding: "5px 10px" }}>
                ${tax.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                style={{
                  textAlign: "right",
                  padding: "5px 10px",
                  fontWeight: "bold",
                }}
              >
                Total Due:
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "5px 10px",
                  fontWeight: "bold",
                }}
              >
                ${total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={{ border: "1px solid #eee", margin: "20px 0" }} />

      {/* Payment Methods */}
      <div
        className="payment-methods border-2"
        style={{ marginBottom: "30px" }}
      >
        <h3 style={{ marginBottom: "10px" }}>Payment Methods Accepted:</h3>
        <ul style={{ margin: "0", paddingLeft: "20px" }}>
          {paymentMethods.map((method, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              {method}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          Please include invoice number when making payment.
        </p>
      </div>

      {/* Print Button */}
      <div className="actions" style={{ textAlign: "center" }}>
        <button
          onClick={() => window.print()}
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceComponent;
