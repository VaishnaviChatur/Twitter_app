
// import './App.css';
import SingIn from './Componantes/Pages/Createaccount/SinginPage/Singin'
import { Provider } from "react-redux";
import store from './Componantes/StoreRedux/store';
import SingUp from './Componantes/Pages/Createaccount/SingUp/SingUp'
import  CreateAccount  from './Componantes/Pages/Createaccount/SingUpFirstPage/FIrstPage'
import Home from './Componantes/Pages/Createaccount/Home/Home'
import SecondPage from './Componantes/Pages/Createaccount/SingUp2ndPage/SecondPage';
import {BrowserRouter , Routes, Route } from "react-router-dom";
// import Center from "./Componantes/Pages/Createaccount/CenterPage/Center";

function App() {
  return (

    <div>
    {/* <Center /> */}
     <BrowserRouter>
     <Provider store={store}>
     <Routes>
      <Route path='/' element={<Home />} />
          <Route path="singin" element={<SingIn />} />
          

          <Route path="singup" element={<SingUp />} />
          <Route path="createaccount" element={<CreateAccount />} />
        <Route path="/secondpage" element={<SecondPage />} /> 
     </Routes>
     </Provider>
     </BrowserRouter> 


    </div>
   
  );
}

export default App;
