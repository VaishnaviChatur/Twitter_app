import React, { useState, useEffect } from "react";
import Tweet from '../Tweet';
import { useDispatch, useSelector } from "react-redux";
import { TweetSlice } from "../../../../../StoreRedux/reducer";
import style from "./LiveTweet.module.css";
import FlipMove from "react-flip-move";
import PostTweet from "../PostTweet/PostTweet";
// import Avatar from "antd/es/avatar/avatar";
import Avatar from '@mui/material/Avatar';
import { BsTwitter } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
function LiveTweet() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/Tweet.json")
      .then((res) => res.json())
      .then((res) => dispatch(TweetSlice.actions.AddAllTweet(res)));
  }, []);

  const TweetData = useSelector((state) => state.Tweets);

  return (
    <div className={style.feed}>
      <div className={style.feed__header}>
       
        <BsTwitter className={style.twitterLogo} />
        <h2>Home</h2>
        <div className={style.foru}>
        <span>Foryou </span>
        <span>Following</span>
        </div>
      </div>

      <PostTweet />

      <FlipMove>
        {TweetData.map((tweet, index) => {
          return <Tweet key={index} tweet={tweet} index={index} />;
        })}
      </FlipMove>
      <footer className={style.footer}>
        <RiHome7Fill className={style.footerHome} />
        <BiSearch className={style.footerSearch} />
        <GrNotification className={style.footerNotification} />
        <MdOutlineEmail className={style.footerEmail} />
      </footer>
    </div>
  );
}

export default LiveTweet;