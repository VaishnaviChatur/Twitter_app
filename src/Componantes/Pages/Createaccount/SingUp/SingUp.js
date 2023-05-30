import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './SingUp.module.css'
import {FcGoogle} from "react-icons/fc"
import {FaApple} from "react-icons/fa"
import {GrClose} from "react-icons/gr"
import { useState,useRef, } from 'react';
import {Link} from 'react-router-dom'


const SignUp = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.close}>
                <GrClose />
                </div>
            <div className={styles.twittericon}>
        <TwitterIcon style={{color: "#00ACEE", fontSize: "2em" }}/>
        </div>
        </div>   
        
        <div className={styles.head}>
            <h1>Join Twitter today</h1>
        </div>
        <button className={styles.google}> 
        <FcGoogle /> <p>Sign up with Google</p> 
        </button>
        <button className={styles.Apple}> 
        <FaApple /> <p>Sign up with Apple</p> 
        </button>
        <div className={styles.Or}>
        <hr></hr>
        <span className={styles.Orspan}>Or</span>
        </div>
        <button className={styles.Creating}>
           <Link to= '/createaccount' className={styles.createButton}>  Create account </Link>
        </button>
        <div className={styles.terms}>
        <p>By signing up,you agree to the <Link className={styles.blue}>Terms of Service</Link></p>
        <p>and <Link className={styles.blue}>Privacy Policy</Link>, including <Link className={styles.blue}>Cookie Use.</Link></p>
        </div>
        <div className={styles.footer}>
        <p>Have an account already? <Link to= '/singin' className={styles.blue}> Login </Link></p>
        </div>
        
    </div>
  )
}

export default SignUp