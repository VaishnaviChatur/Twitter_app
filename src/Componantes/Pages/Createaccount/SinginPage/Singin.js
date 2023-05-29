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
    const[isValid , setisValid] = useState(false)
    const handleClick = () => {
      if(singin == ""){
        alert("Please Fill the Phone,email or username")
        setisValid(true)
      } else {
        alert("SingIn Successfully")
        setisValid(false)
      }
      
      


      let newData = [...value,singin]
      setValue(newData)

      localStorage.setItem("userData",JSON.stringify(newData))
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
    <button>
   <FcGoogle className={styles.Googlelogo}/>
   sign in with Google</button>
    <button>
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
     <button className={styles.NextButton} onClick={handleClick}>Next</button>
     <button>Forgot password?</button>
     <br/>
     <p className={styles.footer}>Don't have a account?<Link to= '/singup'> sing Up</Link></p>
    </div>
      
    </div>
   
  )
}

export default Singin
