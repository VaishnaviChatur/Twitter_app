import React from 'react'
import styles from './Center.module.css'
// import * as React from 'react';
import Box from '@mui/material/Box';
import { BsTwitter } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ImageIcon from '@mui/icons-material/Image';
import InputAdornment from '@mui/material/InputAdornment';
import GifIcon from '@mui/icons-material/Gif';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


const Center = () => {
  return (
    <>
    <div className={styles.contanier}>
    <div className={styles.home}>
    Home
    </div>
    <div className={styles.option}>
    <h3>For you</h3>
    <h3>following</h3>
    </div>
   

    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        placeholder='What is happening?!'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle sx={{}}/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      /> 
      </Box>
     
      <SentimentSatisfiedAltIcon/>
      <ImageIcon />
      <GifIcon />

    </div>
    </>
  )
}

export default Center



