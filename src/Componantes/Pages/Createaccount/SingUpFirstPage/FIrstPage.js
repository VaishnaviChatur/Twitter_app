//step1
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import React from "react";
import styles from './FirstPage.module.css'
import {Link} from 'react-router-dom'

import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";


const Custemize = () => {

  return (
    <>
      <div className={styles.Logobox}>
        <header className={styles.header}>
          <p>
            {" "}
            <ArrowBackIcon className={styles.arrowLogo} />
          </p>
          <h2>Step 1 of 5</h2>
        </header>
        
        <h1>Create your account</h1>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "100%",
              border: 1,
              borderColor: "grey.500",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <p>
            <TextField
              id="filled-basic"
              type="text"
              label="name"
              variant="filled"
              fullWidth
            //   required
            />
          </p>
          <p>
            {" "}
            <TextField
              id="filled-basic"
              type="phone"
              label="Phone"
              variant="filled"
              pattern="[0-9]"
              fullWidth
            //   required
            />
          </p>
         
        
         
        </Box>

        <h4> Date of birth</h4>

<p>
  This will not be shown publicly. Confirm your own age, even if this
  account is for a business, a pet, or something else.
</p>
<Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "100%",
              border: 1,
              borderColor: "grey.500",
            },
          }}
          noValidate
          autoComplete="off"
        >

<p> <TextField
              id="filled-basic"
              type="date"
            //   label="Phone"
              variant="filled"
              fullWidth
              required
            />
          </p>
        </Box>
        <button className={styles.NextBtn}> <Link to='/secondPage'>Next</Link></button>
      </div>
    </>
  );
};

export default Custemize;