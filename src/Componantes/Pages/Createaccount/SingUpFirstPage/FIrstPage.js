

import React, { useState } from "react";

import styles from "./FirstPage.module.css";
import { Box, Button, TextField,InputAdornment,IconButton } from "@mui/material";
import { Days, Month, Year } from "./Data"
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const SignUp = () => {
 
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
    const regexpass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
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
      
      navigate("/secondpage")
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
            // sx={{
            //   color: "white",
             
            //   borderRadius: "5px",
            //   border: "1px solid white",
            //   "& label": { color: "white" },
            //   "& input": { color: "white" },
            // }} 
            onChange={(e) => handleName(e)}
          />
          <TextField className={styles.input} 
            id="filled-basic" 
            type="email"
            label="Email"
            variant="filled" 
            // sx={{
            //   color: "white",
             
            //   borderRadius: "5px",
            //   border: "1px solid white",
            //   "& label": { color: "white" },
            //   "& input": { color: "white" },
            // }} 
            onChange={(e) => handleEmail(e)}
          />
          <TextField className={styles.input} 
             type={showPassword ? "text" : "password"}
            id="filled-basic" 
            label="Password"
            variant="filled" 
            aria-label="toggle password visibility"
            sx={{
              color: "white",
              borderRadius: "5px",
              
            }} 
            onChange={(e) => handlePassword(e)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{  }}
                    onClick={handleToggleShowPassword}
                  >
                    {showPassword ? (
                      <RemoveRedEyeIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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

          <button className={styles.btn}  variant="contained" type="submit" >  Register 
            
          </button>
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

export default SignUp;
