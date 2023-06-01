import { Link } from 'react-router-dom'

import React from 'react';
import styles from './Left.module.css';
import {
    FaHome,
    FaHashtag,
    FaRegBell,
    FaRegEnvelope,
    FaRegBookmark,
    FaClipboardList,
    FaUserAlt,
    FaMehBlank,
} from "react-icons/fa";
import TwitterIcon from '@mui/icons-material/Twitter';
import Profile from './Profile';
import PendingIcon from '@mui/icons-material/Pending';

const LeftSide = () => {
  return (
    <div className={styles.main}>
            <div className={styles.sidebar}>
                <ul>
                    <li>

                        <TwitterIcon className={styles.twitterLogo} style={{color: "#00ACEE", fontSize: "2em" }}/>
                        
                    </li>
                    <li>

                        <FaHome className={styles.icons} /> Home

                    </li>
                    <li>
                        <FaHashtag className={styles.icons} /> Explore

                    </li>
                    <li>

                        <FaRegBell className={styles.icons} /> Notifications

                    </li>
                    <li>

                        <FaRegEnvelope className={styles.icons} /> Messages

                    </li>
                    <li>

                        <FaRegBookmark className={styles.icons} /> Bookmarks

                    </li>
                    <li>

                        <FaClipboardList className={styles.icons} /> Lists

                    </li>
                    <li>

                        <FaUserAlt className={styles.icons} /> Profile

                    </li>
                    <li>

                        <PendingIcon className={styles.icons} /> More

                    </li>
                    <button className={styles.btn}>Tweet</button><br/><br/>
                    
                    </ul>   
            </div>
            {/* <div className={styles.end}> */}
            <Profile/>
            {/* </div> */}
        </div>
  )
}

export default LeftSide
