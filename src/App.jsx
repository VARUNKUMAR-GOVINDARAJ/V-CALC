import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from "./Home"
import { Route, Routes } from 'react-router-dom';
import BasicCalc from './Components/BasicCalc';
import AgeCalc from './Components/AgeCalc';
import BmiCalc from './Components/BmiCalc'
import EmiCalc from './Components/EmiCalc'
import GstCalc from './Components/GstCalc'

function App() {

  return (
    <>


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/basic' element={<BasicCalc/>}/>
      <Route path='/age' element={<AgeCalc/>}/>
      <Route path='/bmi' element={<BmiCalc/>}/>
      <Route path='/emi' element={<EmiCalc/>}/>
      <Route path='/gst' element={<GstCalc/>}/>
    </Routes>
{/* <AgeCalc/> */}
{/* <BasicCalc/> */}
{/* <BmiCalc/> */}
{/* <GstCalc/> */}
{/* <EmiCalc/> */}
    </>
  )
}

export default App
