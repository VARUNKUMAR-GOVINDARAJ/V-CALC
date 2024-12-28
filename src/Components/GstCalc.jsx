import { useState } from 'react';
import './GstCalc.css';

const GstCalc = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('');
  const [gstamount, setgstamount] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);
  const [error, setError] = useState('');

  const calculateGST = () => {
    if (amount <= 0 || gstRate <= 0) {
      setError("Please enter valid values for amount and GST rate.");
      setTotalAmount(null);
      return;
    }
    const gstAmount = (amount * gstRate) / 100;
    setgstamount(gstAmount.toFixed(2));
    const total = parseFloat(amount) + gstAmount;
    setTotalAmount(total.toFixed(2));
    setError('');
  };

  return (
    <div style={{placeContent : "center", height : '100vh',padding:'20px'}}> 

    <div className="gst-calculator-container">
      <h1 className="gst-heading">GST Calculator</h1>
      <div className="gst-input-container">
        <label htmlFor="amount">Amount (₹):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="gst-input-container">
        <label htmlFor="gstRate">GST Rate (%):</label>
        <input
          type="number"
          id="gstRate"
          value={gstRate}
          onChange={(e) => setGstRate(e.target.value)}
          placeholder="Enter GST rate"
        />
      </div>
      {error && <p className="gst-error-message">{error}</p>}
      <button className="gst-calculate-btn" onClick={calculateGST}>Calculate GST</button>

    </div>

{totalAmount && (
  <div className="gst-result">
    Result: Total Amount (₹): <span style={{textDecoration:'underline'}}> {totalAmount} </span>&nbsp;,<br/> which includes of GST charges: <span style={{textDecoration:'underline'}}> {gstamount} </span>
  </div>
)}

</div>
  );
};

export default GstCalc;
