import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Center.module.css'
// import Avatar from "antd/es/avatar/avatar";


export default function MainPage(){

     const [data, setData] = useState([])

    function getData(){
        fetch('tweet.json')
        .then((res)=>{
            return res.json()
        })
        .then((myjson)=>{
       console.log(data)
           setData(myjson)
        })
    }

    useEffect(()=>{
       getData()
    }, [])

  return (
    <div>
        {
            data && data.length > 0 && data.map((val,id)=>{
          return(
            <div className={styles.container} key={val.id}>
            {/* <p>{val.id}</p> */}
            <p>{val.content}</p>
            <p>{val.createdAt}</p>
            <img src={val.image} className={styles.img}/>
            {/* <p>{val.tweetedBy.id}</p> */}
            <p className={styles.p}>{val.tweetedBy.name}</p>
          
            <p className={styles.like}>{val.likeCount}</p>
            <p className={styles.comment}>{val.commentCount}</p>
            <p className={styles.tweetCount}>{val.reTweetsCount}</p>
            <p className={styles.Liked}>{val.isLiked}</p>

            </div>
            
          )
        })
        }
    </div>
  )
}