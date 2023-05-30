//step2
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import React from "react";
import styles from './SecondPage.module.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';


const SecondPage = () => {

  return (
    <>
      <div className={styles.Logobox}>
  
        <header className={styles.header}>
      <p>  <ArrowBackIcon  className={styles.arrowLogo}/></p>
            {/* <h2>Step 2 of 5</h2> */}
            </header>
        <h1>Customize your experience</h1>
        <h2>Track where you see Twitter content across the web</h2>

        <div className={styles.flexbox}>
        <p> Twitter uses this data to personalize your experience. This web
          browsing history will never be stored with your name, email, or phone
          number.</p>
         <p><CheckBoxOutlineBlankIcon  style={{color: "#00ACEE", fontSize: "2em" }}/></p> 
        </div>
        <br />

        <p>
          By signing up, you agree to our<a  className={styles.alink} href='https://twitter.com/en/tos#new'>Terms</a>, <a  className='alink' href='https://twitter.com/en/privacy'>Privacy Policy</a>,
          and <a className={styles.alink} href='https://help.twitter.com/en/rules-and-policies/twitter-cookies'>Cookie Use</a>. Twitter may use your contact information,
          including your email address and phone number for purposes outlined in
          our Privacy Policy.
          <a className={styles.alink} href='https://twitter.com/en/privacy'>Learn more</a>
        </p>
        <br />
        <br />
        <div className={styles.pwd}>
        {/* <TextField id="filled-basic" 
     label="Password" 
     variant="filled" 
   
        fullWidth
        />
         <Link>Forgot password?</Link> */}
         </div>
    
        <button className={styles.NextBtn}><Link to = '/' className={styles.subbtn}>Submit</Link></button>
      </div>
    </>
  );
};

export default SecondPage;