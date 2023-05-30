
// import './App.css';
import SingIn from './Componantes/Pages/Createaccount/SinginPage/Singin'
import Setpassword from './Componantes/Pages/Createaccount/SinginPage/SIngInPassword/SetPswd'
import SingUp from './Componantes/Pages/Createaccount/SingUp/SingUp'
import  CreateAccount  from './Componantes/Pages/Createaccount/SingUpFirstPage/FIrstPage'
import Home from './Componantes/Pages/Createaccount/Home/Home'
import SecondPage from './Componantes/Pages/Createaccount/SingUp2ndPage/SecondPage';
import {BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (

    <div>
    
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
          <Route path="singin" element={<SingIn />} />
          <Route path="Password" element={<Setpassword />} />

          <Route path="singup" element={<SingUp />} />
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="secondPage" element={<SecondPage />} />
     </Routes>
  
     </BrowserRouter>
    </div>
   
  );
}

export default App;
