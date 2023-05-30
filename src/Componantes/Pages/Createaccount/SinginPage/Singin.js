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
    const[value, setValue] = useState([])    // to manage/store localStorage value
    const[singin , setSingin] = useState([])  
    const[name, setName] = useState([])  
    const[email, setEmail] = useState([])
    const[phone, setPhone] = useState([])
    const[isValid , setisValid] = useState(false)

    const userName = localStorage.getItem("name") ? localStorage.getItem("name") : "demo"
    const userEmail = localStorage.getItem("email") ? localStorage.getItem("email") : "demo@gmail.com"
    const userPhone = localStorage.getItem("phone") ? localStorage.getItem("name") : "123456789"


    const handleClick = (e) => {
      e.preventDefault();
      if(name === userName){
        alert("login SUccessfull")
      } else if(email === userEmail ) {
        alert("login SUccessfull")
      } else if(phone === userPhone){
        alert("login SUccessfull")
      }
      
      


      let newData = [...value,singin]
      setValue(newData)
      setSingin("")



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
     label="Phone,email, or username" 
     variant="filled" 
     style={{width:"45%" , m:3}}
        onChange={(e) => setSingin(e.target.value)}
        value={singin}
        error={isValid}
        />
     <button className={styles.btn}> <Link to= '/Password'>Next</Link></button>
     <button className={styles.btn}>Forgot password?</button>
     <br/>
     <p className={styles.footer}>Don't have a account?<Link to= '/singup'> sing Up</Link></p>
    </div>
      
    </div>
   
  )
}

export default Singin
