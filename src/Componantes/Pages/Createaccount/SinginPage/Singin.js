import React, { useState } from 'react'
import styles from './Singin.module.css'

// import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { FcGoogle } from "react-icons/fc";
import AppleIcon from '@mui/icons-material/Apple';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../../StoreRedux/reducer';
const Singin = () => {
  const dispatch = useDispatch();
    const[name, setName] = useState([])  
    const[password , setpassword] = useState("")    
    const[isValid , setisValid] = useState(false)
   
   const[isError, setError] = useState(null)
   const navigate = useNavigate()
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
        return
       
      } else {
        navigate('/home')
      }
    }
    
    const handleLogin = () => {
        const token = 'your-authentication-token'; // Replace with your actual authentication token
        dispatch(login(token));
        
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
        <form onSubmit={handleClick}>
     <TextField id="filled-basic" 
     label="Username or Email" 
     variant="filled" 
     style={{width:"20vw" , margin:15}}
          onChange={(e) => {
            setName(e.target.value);
          }}
          fullWidth
        value={name}
        error={isValid}
        />
        <br />
        <TextField id="filled-basic" 
     label="Password" 
     variant="filled" 
     style={{width:"20vw" , margin:15 }}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        value={password}
        error={isValid}
        />
     <button className={styles.btn} onClick={handleLogin}> Login</button>
     <button className={styles.btn}>Forgot password?</button>
     </form>
     <br/>
     <p className={styles.footer}>Don't have a account?<Link to= '/singup'> sing Up</Link></p>
    </div>
      
    </div>
    
  )
}

export default Singin
