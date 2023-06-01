import React, { useState } from 'react'
import styles from './Singin.module.css'

// import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { FcGoogle } from "react-icons/fc";
import AppleIcon from '@mui/icons-material/Apple';
import {Link} from 'react-router-dom'
const Singin = () => {
    const[name, setName] = useState([])  
    const[password , setpassword] = useState("")    
    const[isValid , setisValid] = useState(false)

   const[isError, setError] = useState(null)
   const showList = true



    const handleClick = (e) => {
      e.preventDefault();
      // const data = {name , password};

      const userData  = JSON.parse(localStorage.getItem("users")) || [];
      const existuser = userData.find(
        (user) => user.name === name && user.password === password
        );
        console.log(existuser)
      if(existuser === undefined){
        alert("invalid user")
        console.log("invalid user")
        setError("Invalid username or password");
        setisValid(false)
        return;
      }
    };
   


  return (

    <div className={styles.container}>
    <div className={styles.Logobox}>
    <div className={styles.close}>
    <CloseIcon />
  
    <TwitterIcon className={styles.twitterLogo} style={{color: "#00ACEE", fontSize: "2em" }}/>
    </div>
    <h2>Sign In to Twitter</h2>
    <button className={styles.btn}>
   <FcGoogle className={styles.Googlelogo}/>
   sign in with Google</button>
    <button className={styles.btn}>
   <AppleIcon className={styles.Googlelogo}/>
   sign in with apple
   </button>
   <div className={styles.Or}>
        <hr></hr>
        <span className={styles.Orspan}>Or</span>
        </div>
     <TextField id="filled-basic" 
     label="Username or Email" 
     variant="filled" 
     style={{width:"45%" , m:3}}
          onChange={(e) => {
            setName(e.target.value);
          }}
          
        value={name}
        error={isValid}
        />
        <TextField id="filled-basic" 
     label="Password" 
     variant="filled" 
     style={{width:"45%" , margin:15 , P:2}}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        value={password}
        error={isValid}
        />
     <button className={styles.btn} onClick={handleClick}> <Link to= '/'>Next</Link></button>
     <button className={styles.btn}>Forgot password?</button>
     <br/>
     <p className={styles.footer}>Don't have a account?<Link to= '/singup'> sing Up</Link></p>
    </div>
      
    </div>
   
  )
}

export default Singin
