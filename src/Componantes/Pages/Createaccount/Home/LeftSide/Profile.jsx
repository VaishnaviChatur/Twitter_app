import React from 'react';
import styles from './profile.module.css'
import PendingIcon from '@mui/icons-material/Pending';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import LeftSide from './LeftSide';


export default function Profile() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    // const Menues = ['Add an existing account', 'Log out @Demo1234']
    function LogOut(){
        navigate("/singin")


    }

    return (
        <div className={styles.profile}>
            <div>
                <img style={{ borderRadius: "50%" }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" width="50px"
                    height="50px" alt="" />
            </div>
            <div className={styles.info}>
            {/* <span>{localStorage.getItem.u}</span> */}
                <span>Demo</span>
                <span>@Demo1234</span>
                </div>
            <div className={styles.icons} onClick={() => setOpen(!open)}>
                <PendingIcon style={{color:'grey', marginLeft: "50px"}} size={24}  />
            </div>
            {open &&
                <div className={styles.menu}>
                    <ul>
                        {/* {Menues.map((menu) => (
                            <li className={styles.li} key={menu}>
                                {menu}
                            </li>
                        ))
                        } */}

                        <li className={styles.li}>
                            <button className={styles.btn} onClick={LogOut}>LogOut</button>
                        </li>
                    </ul>
                </div>}




        </div>
    )
}