import { useState } from 'react';
import './EmiCalc.css';

const EmiCalc = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emi, setEmi] = useState(null);
  const [error, setError] = useState('');

  const calculateEMI = () => {
    if (loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
      setError('Please enter valid values for all fields.');
      setEmi(null);
      return;
    }

    const rateOfInterest = interestRate / 12 / 100;
    const emiValue = (
      (loanAmount * rateOfInterest * Math.pow(1 + rateOfInterest, loanTerm)) /
      (Math.pow(1 + rateOfInterest, loanTerm) - 1)
    ).toFixed(2);

    setEmi(emiValue);
    setError('');
  };

  return (
    <div style={{placeContent : "center",padding:'20px'}}> 

    <div className="emi-calculator-container">
      <h1 className="emi-heading">EMI Calculator</h1>
      <div className="emi-input-container">
        <label htmlFor="loanAmount">Loan Amount (₹):</label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>
      <div className="emi-input-container">
        <label htmlFor="interestRate">Interest Rate (%):</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>
      <div className="emi-input-container">
        <label htmlFor="loanTerm">Loan Term (Months):</label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder="Enter loan term"
        />
      </div>
      {error && <p className="emi-error-message">{error}</p>}
      <button className="emi-calculate-btn" onClick={calculateEMI}>Calculate EMI</button>
    </div>
    {emi && (
        <div className="emi-result">
          Result: EMI Amount (₹): <span style={{textDecoration:'underline'}}> {emi} </span>
        </div>
      )}
    </div>
  );
};

export default EmiCalc;
