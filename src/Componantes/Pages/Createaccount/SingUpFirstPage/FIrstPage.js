// //step1
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import React, { useState } from 'react'
// import { useDispatch }  from "react-redux";
// import styles from './FirstPage.module.css'
// import {Link} from 'react-router-dom'
// import { userSlice } from '../../../StoreRedux/reducer';
// import TextField from "@mui/material/TextField";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import Box from "@mui/material/Box";



// const Custemize = () => {

//   const [details , setDetails] = useState(JSON.parse(localStorage.getItem('details')) || [])

//   const[name, setName] = useState("")
//   const [US, setUS] = useState('');      //UserName and setUserName
//   const[phone, setPhone] = useState("")
//   const[email, setEmail] = useState("")
//   const[dob, setDob] = useState("")
//   const[password, setPassword] = useState("")
//   const [EM, setEM] = useState('');
//   const [PW, setPW] = useState('');
//   const [Ph, setPh] = useState('');
//   const dispatch = useDispatch()
//   const[isValid , setIsVaild] = useState(false)

//  function captUserName(e){
//   setName(e.target.value);
//   const userRegEx = /\s/g;
//   if (userRegEx.test(!name) ) {
//     setUS('');
//   }  else if(userRegEx.test(name) && name !== ""){
//     setUS('UserName is not Valid');
//   }else{
//     setUS('');
//   }
  

//  }
//  function capturePhoneNumber(e){
//   setPhone(e.target.value);
//   const regphone =  /^[1-9]\d{9}$/;
//   if (regphone.test(phone)) {
//     setEM('');
//   } else if(!regphone.test(phone) && phone !== ""){
//     setEM("Email is Not Valid");
//   }

//  }
 
// function captureEmail(e){
//   setEmail(e.target.value);
//   const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//   if (regEmail.test(email)) {
//     setEM('');
//   } else if(!regEmail.test(email) && email !== ""){
//     setEM("Email is Not Valid");
//   }

// }
// function capturePassword(e){
//   setPassword(e.target.value);
//   const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
//   if (pwRegEx.test(password)) {
//     setPW('');
//   } else if(!pwRegEx.test(password) && password !== " "){
//     setPW("pw is Not Valid");
  
//   } else  {
//     setPW('');
//   }

// }

// const HandleClick = () => {
//   const OldDetails = [...details, {
//     name : name,
//     phone : phone,
//     email: email,
//     dob : dob,
//     password: password

//   }]

  
//   if(name == "" || phone == "" || email == "" || dob == "" || password == ""){
//     alert("please enter something")
//     setIsVaild(true)
//   } else if(EM === "EMAIL IS NOT VALID" || PW === "pw is Not Valid" || US === 'UserName is not Valid'){
//     alert("please enter something")
//     setIsVaild(true)

//   }else {
//     const userData= {Email :email , name : setName , password : setPassword }
//     OldDetails.push(userData)
//     setDetails([...OldDetails])
//     alert('you are successfully registered')
//     localStorage.setItem("details",JSON.stringify(OldDetails));
//     console.log(OldDetails)
//     setDetails(OldDetails);
//     setIsVaild(false)
//   }

//   function handleDate(e) {
//     const input = { ...OldDetails };
//     input.date = e.target.value;
//     setData(input);
//   }
  
//   function handleMonth(e) {
//     const input = { ...OldDetails };
//     input.month = e.target.value;
//     setData(input);
//   }
  
//   function handleYear(e) {
//     const input = { ...OldDetails };
//     input.year = e.target.value;
//     setData(input);
//   }

//   dispatch(userSlice.actions.addUser(OldDetails))
//   setName("")
//   setPhone("")
//   setEmail("")
//   setDob("")
//   setPassword("")
  
// //   name =  /^[a-zA-Z]+$/
// //   phone =   /^[1-9]\d{9}$/
// //   email =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// // password =    /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/


 

// }
// console.log(details)

//   return (
//     <>
//       <div className={styles.Logobox}>
//         <header className={styles.header}>
//           <p>
//             {" "}
//             <ArrowBackIcon className={styles.arrowLogo} />
//           </p>
//         </header>
        
//         <h1>Create your account</h1>

//         <Box
//           component="form"
//           sx={{
//             "& > :not(style)": {
//               m: 1,
//               width: "100%",
//               border: 1,
//               borderColor: "grey.500",
//             },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <p>
//             <TextField
//               id="filled-basic"
//               type="text"
//               label="name"
//               variant="filled"
//               onChange={captUserName}
//           // onChange={(e) => {
//           //   setName(e.target.value);
//           // }}
//               fullWidth
//               error={isValid}
//             />
//           </p>
//           <p>
//             {" "}
//             <TextField
//               id="filled-basic"
//               type="phone"
//               label="Phone"
//               variant="filled"
//               onChange={capturePhoneNumber}
//           // onChange={(e) => {
//           //   setPhone(e.target.value);
//           // }}
//               fullWidth
//               error={isValid}
//             />
//           </p>
//           <p>
//           <TextField
//               id="filled-basic"
//               type="email"
//               label="Email"
//               variant="filled"
//               onChange={captureEmail}
//           // onChange={(e) => {
//           //   setEmail(e.target.value);
//           // }}
//               fullWidth
//               error={isValid} />
       

// <TextField
//               id="filled-basic"
//               type="password"
//               label="password"
//               variant="filled"
//               onChange={capturePassword}
//           // onChange={(e) => {
//           //   setPassword(e.target.value);
//           // }}
//               fullWidth
//               error={isValid}
//             />
//           </p>
        
         
//         </Box>

//         <h4> Date of birth</h4>

// <p>
//   This will not be shown publicly. Confirm your own age, even if this
//   account is for a business, a pet, or something else.
// </p>
// <div className={styles.Calender}>
//             <select 
//             // onChange={(e) => handleMonth(e)}
//             >

//               <option>Month</option>
//               {Month.map((ele) => (
//                 <option>{ele}</option>
//               ))}
//             </select>

//             <select onChange={(e) => handleDate(e)}>
//               <option>Day</option>
//               {Days.map((ele) => (
//                 <option>{ele}</option>
//               ))}
//             </select>

//             <select onChange={(e) => handleYear(e)}>
//               <option>Year</option>
//               {Year.map((ele) => (
//                 <option>{ele}</option>
//               ))}
//             </select>
//           </div>
// {/* <Box
//           component="form"
//           sx={{
//             "& > :not(style)": {
//               m: 1,
//               width: "100%",
//               border: 1,
//               borderColor: "grey.500",
//             },
//           }}
//           noValidate
//           autoComplete="off"
//         >

// <p> <TextField
//               id="filled-basic"
//               type="date"
//             //   label="Phone"
//               variant="filled"
//               fullWidth
//               required
//               onChange={e => setDob(e.target.value)}
//               error={isValid}
//             />
//           </p>
          
//         </Box> */}
//         <button className={styles.NextBtn} onClick={HandleClick}> <Link to='/secondPage' className={styles.NextButton}>Next</Link></button>
//       </div>
//     </>
//   );
// };

// export default Custemize;


import React, { useState } from "react";
import { userSlice } from '../../../StoreRedux/reducer';
import { useDispatch }  from "react-redux";
import styles from "./FirstPage.module.css";
import { Box, TextField } from "@mui/material";
import { Days, Month, Year } from "./Data"
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';


const Custemize = () => {
 
  const navigate = useNavigate();
 

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    month: "",
    year: "",
  });

  function handleName(e) {
    const input = { ...data };
    input.name = e.target.value;
    setData(input);
  }

  function handleEmail(e) {
    const input = { ...data };
    input.email = e.target.value;
    setData(input);
  }

  function handlePassword(e) {
    const input = { ...data };
    input.password = e.target.value;
    setData(input);
  }

  function handleDate(e) {
    const input = { ...data };
    input.date = e.target.value;
    setData(input);
  }

  function handleMonth(e) {
    const input = { ...data };
    input.month = e.target.value;
    setData(input);
  }

  function handleYear(e) {
    const input = { ...data };
    input.year = e.target.value;
    setData(input);
  }

  function getData() {
  
    const users = localStorage.getItem("users");
    if (users) {
      try {
        return JSON.parse(users);
      } catch {
        return [];
      }
    }
    return [];
  }

  function handleSubmit(e) {
    e.preventDefault();

    const ValidMonth = [
      "January",
      "March",
      "May",
      "July",
      "August",
      "October",
      "December",
    ];

    let leapYear = true;
    let year = data.year;

    if ((year % 100 === 0 && year % 400 === 0) || year % 4 === 0) {
      leapYear = true;
    } else {
      leapYear = false;
    }
    const regexpass = /^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.\W)(?!.* ).{8,16}$/
    const regexemail = /^\S+@\S+\.\S+$/;

    const users = getData();
    if (
      !data.name ||
      data.name === " " ||
      !data.email ||
      !data.password ||
      !data.date ||
      data.name === "Day" ||
      !data.month ||
      data.month === "Month" ||
      !data.year ||
      data.year === "Year"
    ) {
      alert("Please Fill All the deatails!!");
    }  else if (!regexpass.test(data.password)) {
      alert("Password should be 8-16 characters and include at least 1 capital letter,1 lowercase letter, 1 number and 1 special character!");
    }
    else if (!regexemail.test(data.email)) {
      alert("It should be a valid email address");
    } else if (
      leapYear === false &&
      data.month === "February" &&
      data.date > 28
    ) {
      alert("Enter Valid date");
    } else if (leapYear === true && data.month === "February" && data.date > 29) {
      alert("Enter Valid date");
    } else if (ValidMonth.includes(data.month) === false && data.date > 30) {
      alert("Enter Valid date");
    } else {
      alert("registeration success");
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      
      navigate("/")
    }
  }

  return (
    <div className={styles.main}>
    <div  >
    <Box sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
      <div className={styles.container} >
      <TwitterIcon sx={{ color: "rgb(25 161 242)",fontSize:45 }}/>
          <h1 className={styles.h1}>Sign Up to Twitter</h1>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.container}>
          <TextField className={styles.input} 
            id="filled-basic" 
            label="Name"
            variant="filled" 
            sx={{
              color: "white",
              
             
              borderRadius: "5px",
            
            }} 
            onChange={(e) => handleName(e)}
          />
          <TextField className={styles.input} 
            id="filled-basic" 
            type="email"
            label="Email"
            variant="filled" 
            sx={{
              color: "white",
             
              borderRadius: "5px",
            
            }} 
            onChange={(e) => handleEmail(e)}
          />
         
          <TextField className={styles.input} 
             type={"password"}
            id="filled-basic" 
            label="Password"
            variant="filled" 
            aria-label="toggle password visibility"
            // sx={{
            //   // color: "white",
            //   // borderRadius: "5px",
              
            // }}
onChange={(e) => handlePassword(e)}
          />






          <div className={styles.Calender}>
            <select onChange={(e) => handleMonth(e)}>
              <option>Month</option>
              {Month.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select onChange={(e) => handleDate(e)}>
              <option>Day</option>
              {Days.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select onChange={(e) => handleYear(e)}>
              <option>Year</option>
              {Year.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>
          </div>
          <button className={styles.btn}><Link  to="/secondpage" className={styles.btn1}>Register</Link></button>
        </form>
      

      <h3 className={styles.h3}>
        Already Have an Account? &nbsp;
        <Link  to="/">Sign In</Link>
        </h3>
      </div>
      </Box>
    </div>
    </div>
  );
};

export default Custemize;