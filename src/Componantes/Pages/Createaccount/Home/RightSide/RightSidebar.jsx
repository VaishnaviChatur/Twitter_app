import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import TrendingBar from './WhatHappening/TrendingBar'
import WhoToFollow from './WhoToFollow/WhoToFollow'
import styles from './RightSideBar.module.css'
function RightSidebar() {
  return (
    <div className={styles.RightSideBar}>
<SearchBar/>
<TrendingBar/>
<WhoToFollow/>

    </div>
  )
}

export default RightSidebar