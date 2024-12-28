import { useState } from "react";
import "./BmiCalc.css";

const BmiCalc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (weight <= 0 || height <= 0) {
      setError("Please enter valid values for weight and height.");
      setBmi(null);
      setCategory("");
      return;
    }

    const heightInMeters = height / 100; // Convert cm to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }

    setError("");
  };

  return (
    <div style={{placeContent : "center", height : '100vh',padding:'20px'}}> 

    <div className="bmi-calculator-container" >
      <h1 className="bmi-heading">BMI Calculator</h1>
      <div className="bmi-input-container">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>

      <div className="bmi-input-container">
        <label htmlFor="height">Height (cm):</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>

      {error && <p className="bmi-error-message">{error}</p>}

      <button onClick={calculateBMI} className="bmi-calculate-btn">Calculate BMI</button>

    </div>

{bmi && (
  <div className="bmi-result">
    <p>Results: Your BMI value is <span style={{textDecoration : 'underline'}}> {bmi} </span> &nbsp; &  <br/>  Category is <span style={{textDecoration : 'underline'}}> {category} </span></p>
  </div>
)}

</div>
  );
};

export default BmiCalc;
