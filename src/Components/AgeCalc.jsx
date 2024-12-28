// // import { useState } from 'react';
// import './AgeCalc.css';

// import { useState } from "react"

// // const AgeCalc = () => {
// //   const [dob, setDob] = useState('');
// //   const [age, setAge] = useState(null);
// //   const [error, setError] = useState('');

// //   const calculateAge = () => {
// //     const birthDate = new Date(dob);
// //     const currentDate = new Date();

// //     if (!dob || birthDate > currentDate) {
// //       setError('Please enter a valid date of birth.');
// //       setAge(null);
// //       return;
// //     }

// //     const ageInMilliseconds = currentDate - birthDate;
// //     const ageDate = new Date(ageInMilliseconds);
// //     const ageYears = Math.abs(ageDate.getUTCFullYear() - 1970);
// //     setAge(ageYears);
// //     setError('');
// //   };

// //   return (
// //     <div className="age-container">
// //       <h1>Age Calculator</h1>
// //       <div className="input-container">
// //         <label htmlFor="dob">Date of Birth:</label>
// //         <input
// //           type="date"
// //           id="dob"
// //           value={dob}
// //           onChange={(e) => setDob(e.target.value)}
// //         />
// //       </div>
// //       {error && <p className="error-message">{error}</p>}
// //       <button onClick={calculateAge}>Calculate Age</button>
// //       {age !== null && (
// //         <div className="result">
// //           <h2>Your Age: {age} years</h2>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AgeCalc;



// const AgeCalc = () => {

//   const[dob,setdob] = useState('');
//   const[age,setage] = useState(null);
//   const[error,seterror] = useState('');

//   const handleclick = ()=> {
//     const birthdate = new Date(dob);
//     const currentdate = new Date();

//     if ( !dob || birthdate > currentdate) {
//       seterror('Please enter the valid dob');
//       setage(null);
      
//       return;
//     }

//     const ageInMilliseconds = birthdate - currentdate;
//     const age = new Date(ageInMilliseconds);
//     const ageyears = Math.abs(age.getUTCFullYear() - 1970);
//     setage(ageyears);
//     seterror('')

//   }


//   return (

//     <div className="age-homepage">
//       <h1 className="age-head"> Age Calculator </h1>

//       <p className="age-p1"> Enter you date of birth : </p>
//       <input
//       className="age-input"
//       type="date"
//       value={dob}
//       onChange={(e)=>setdob(e.target.value)}
//       />
//       <p> {error && <p className="age-error"> {error} </p> } </p>

//       <button onClick={handleclick} className="age-btn"> Calculate </button>

//       <p className="age-result">
//         {
//           age !==null && <p> Results: Your age is {age}years </p>
//         }
         
//       </p>
//     </div>
//   )
// }

// export default AgeCalc
  


import { useState } from "react";
import './AgeCalc.css';

const AgeCalc = () => {
  const [dob, setdob] = useState('');
  const [age, setage] = useState(null);
  const [error, seterror] = useState('');

  const handleclick = () => {
    const birthdate = new Date(dob);
    const currentdate = new Date();

    // Ensure dob is provided and that the birthdate is not in the future
    if (!dob || birthdate > currentdate) {
      seterror('Please enter a valid date of birth');
      setage(null);
      return;
    }

    // Calculate age in years
    let ageYears = currentdate.getFullYear() - birthdate.getFullYear();
    let ageMonths = currentdate.getMonth() - birthdate.getMonth();
    let ageDays = currentdate.getDate() - birthdate.getDate();

    // If the current month is before the birth month, or if it's the same month but the day hasn't passed yet
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--; // Decrease age if the birthday hasn't occurred yet
      ageMonths += 12; // Adjust months
    }

    // If days are negative, adjust by subtracting from the previous month
    if (ageDays < 0) {
      const prevMonth = new Date(currentdate.getFullYear(), currentdate.getMonth() - 1, 0); // Get the last day of the previous month
      ageDays += prevMonth.getDate(); // Get the number of days in the previous month
      ageMonths--; // Decrease the month count
    }

    setage({ years: ageYears, months: ageMonths, days: ageDays });
    seterror(''); // Reset error
  };

  return (
    <div style={{placeContent : "center", height : '100vh',padding:'20px'}}> 
    
    <div className="age-homepage">
      <h1 className="age-head"> Age Calculator </h1>

      <p className="age-p1"> Enter your date of birth: </p>
      <input
        className="age-input"
        type="date"
        value={dob}
        onChange={(e) => setdob(e.target.value)}
      />
      <p>{error && <p className="age-error"> {error} </p>}</p>

      <button onClick={handleclick} className="age-btn"> Calculate </button>

      {/* <p className="age-result">
        {
          age !== null && (
            <p style={{fontWeight: 'bold'}}> 
              Results: Your age is {age.years} years, {age.months} months, and {age.days} days.
            </p>
          )
        }
      </p> */}
    </div>
    <p className="age-result">
    {
      age !== null && (
        <p style={{fontWeight: 'bold'}}> 
          Results: Your age is {age.years} years, {age.months} months, and {age.days} days old
        </p>
      )
    }
  </p>

  </div>
  )
}

export default AgeCalc;
