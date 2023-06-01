

import React, { useEffect } from "react";
import RightSidebar from './RightSide/RightSidebar'
import styles from './Home.module.css'
import LeftSide from './LeftSide/LeftSide'
import Center from './Center/Center'
import PostTweet from "./Center/PostTweet/PostTweet";
import LiveTweet from "./Center/LiveTweet/LiveTweet";

function Home() {
  return (
  
    <div className={styles.homeContainer}>
      
      <div className={styles.LeftSideBar}>
        <LeftSide />
        {/* <LeftSideBar/> */}
      </div>
      <div className={styles.TweetContainer}>
        <LiveTweet />
        {/* <Tweet /> */}
        <PostTweet/>
        <Center />
        {/* <LiveTweet/> */}
      </div>

         <div>
    <RightSidebar />
  </div>
    </div>
   
  );
};

export default Home;

