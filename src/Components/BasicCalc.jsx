import { useState } from "react";
import "./BasicCalc.css";

const BasicCalc = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input); // Use eval to evaluate the string as a math expression
      setOutput(result);
      setInput(result.toString())
    } catch (error) {
      console.error("Error:", error);
      setOutput("Error");
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handlePercentage = () => {
    setInput((prevInput) => prevInput + "%");
  };

  return (
    <div style={{placeContent : "center", height : '100vh'}}> 
    
    <div className="basic-calculator-container">
      <h1 className="basic-heading">Normal Calculator</h1>
      <div className="basic-screen">
        <input className="basic-input" type="text" value={input} readOnly />
      </div>
      <div className="basic-buttons">
        <button className="basic-btn" onClick={() => handleClick("1")}>1</button>
        <button className="basic-btn" onClick={() => handleClick("2")}>2</button>
        <button className="basic-btn" onClick={() => handleClick("3")}>3</button>
        <button className="basic-btn" onClick={() => handleClick("+")}>+</button>
        <button className="basic-btn" onClick={() => handleClick("4")}>4</button>
        <button className="basic-btn" onClick={() => handleClick("5")}>5</button>
        <button className="basic-btn" onClick={() => handleClick("6")}>6</button>
        <button className="basic-btn" onClick={() => handleClick("-")}>-</button>
        <button className="basic-btn" onClick={() => handleClick("7")}>7</button>
        <button className="basic-btn" onClick={() => handleClick("8")}>8</button>
        <button className="basic-btn" onClick={() => handleClick("9")}>9</button>
        <button className="basic-btn" onClick={() => handleClick("*")}>*</button>
        <button className="basic-btn" onClick={() => handleClick("0")}>0</button>
        <button className="basic-btn" onClick={() => handleClick("/")}>/</button>
        <button className="basic-btn" onClick={handlePercentage}>%</button>
        <button className="basic-btn" onClick={() => handleClick(".")}>.</button>
        <button className="basic-btn red" onClick={handleClear}>C</button>
        <button className="basic-btn red" onClick={handleDelete}>D</button>
        <button className="basic-btn green" onClick={handleCalculate} style={{ width: "210%" }}>=</button>
      </div>
    </div>

    <div className="basic-result" style={{textAlign:'center', marginTop:'-25px', fontSize:'large'}}>
          {output !== "" && <p style={{fontWeight:'bold', color: 'black'}}>Result: {output}</p>}
        </div>

    </div>

  );
};

export default BasicCalc;
