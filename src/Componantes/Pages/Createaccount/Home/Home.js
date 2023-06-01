// import React from 'react'
// import {Link} from 'react-router-dom'
// const Home = () => {
//   return (
//     <div>
//     this is home page
//     <Link to= '/singin'> sing In</Link>
//     </div>
//   )
// }

// export default Home

// import LeftSideBar from "../../component/Leftsidebar";
// import LiveTweet from "../../components/LiveTweet";

import React, { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//import { useRecoilValue, useSetRecoilState } from "recoil";
//import { authAtom } from "../../component/recoil/atom";

// import RightSidebar from './RightSide/RightSidebar.jsx'
import RightSidebar from './RightSide/RightSidebar'
import styles from './Home.module.css'
import LeftSide from './LeftSide/LeftSide'
// import LeftSideBar from "./RightSide/WhatHappening;


// import LiveTweet from "./LiveTweet";
function Home() {
  return (
  
    <div className={styles.homeContainer}>
      
      <div className={styles.LeftSideBar}>
        <LeftSide />
        {/* <LeftSideBar/> */}
      </div>
      <div className={styles.TweetContainer}>
        {/* <LiveTweet /> */}
        {/* <LiveTweet/> */}
      </div>

         <div>
    <RightSidebar />
  </div>
    </div>
   
  );
};

export default Home;

