//step1
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import React, { useState } from 'react'
import styles from './FirstPage.module.css'
import {Link} from 'react-router-dom'

import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";


const Custemize = () => {

  const [details , setDetails] = useState(JSON.parse(localStorage.getItem('details')) || [])

  const[name, setName] = useState("")
  const[phone, setPhone] = useState("")
  const[email, setEmail] = useState("")
  const[dob, setDob] = useState("")
  const[password, setpassword] = useState("")
  const[isValid , setIsVaild] = useState(false)
 

const HandleClick = () => {
  const OldDetails = [...details, {
    name : name,
    phone : phone,
    email: email,
    dob : dob,
    password: password

  }]

  
  if(name == "" || phone == "" || email == "" || dob == "" || password == ""){
    setIsVaild(true)
  } else {
    localStorage.setItem("details",JSON.stringify(OldDetails));
    console.log(OldDetails)
    setDetails(OldDetails);
    setIsVaild(false)
  }



  setDetails(OldDetails);
  setName("")
  setPhone("")
  setEmail("")
  setDob("")
  setpassword("")
  


 

}
console.log(details)

  return (
    <>
      <div className={styles.Logobox}>
        <header className={styles.header}>
          <p>
            {" "}
            <ArrowBackIcon className={styles.arrowLogo} />
          </p>
          {/* <h2>Step 1 of 5</h2> */}
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
              onChange={e => setName(e.target.value)}
              fullWidth
              error={isValid}
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
              onChange={e => setPhone(e.target.value)}
              // ref={name}
              fullWidth
              error={isValid}
            //   required
            />
          </p>
          <p>
          <TextField
              id="filled-basic"
              type="email"
              label="Email"
              variant="filled"
              onChange={e => setEmail(e.target.value)}
              fullWidth
              error={isValid}
            //   required
            />

<TextField
              id="filled-basic"
              type="password"
              label="password"
              variant="filled"
              onChange={e => setpassword(e.target.value)}
              fullWidth
              error={isValid}
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
              onChange={e => setDob(e.target.value)}
              error={isValid}
            />
          </p>
          
        </Box>
        <button className={styles.NextBtn} onClick={HandleClick}> <Link to='/secondPage' className={styles.NextButton}>Next</Link></button>
      </div>
    </>
  );
};

export default Custemize;