import style from "./PostTweet.module.css";
import React, { useState } from "react";
// import { Avatar, Button } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { useDispatch } from "react-redux";
import { BsTwitter } from "react-icons/bs";
import { TweetSlice } from "../../../../../StoreRedux/reducer";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll, BiSpreadsheet } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhotoIcon from '@mui/icons-material/Photo';
// import { CiLocationOn } from "react-icons/ci";
export default function PostTweet() {
  const dispatch = useDispatch();
  const [tweetdata, setTweetdata] = useState({
    id: Math.floor(Math.random() * 100000 + 1),
    content: "",
    createdAt: Date.now(),
    image: "",
    tweetedBy: {
      id: Math.floor(Math.random() * 100000 + 1),
      name: "Avatar",
    },
    likeCount: 0,

    commentCount: 0,
    reTweetsCount: 0,
    isLiked: false,
  });

  const handleChang = (e) => {
    const { value } = e.target;
    setTweetdata({
      ...tweetdata,
      content: value,
      image: `https://picsum.photos/1000/500?q=${Date.now()}`
      // image: `https://picsum.photos/1000/500?q=${Math.floor(
      //   Math.random() * 9 + 1
      // )}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(TweetSlice.actions.addTweet(tweetdata));

    setTweetdata({
      ...tweetdata,
      id: Math.floor(Math.random() * 100000 +1),
      image: "",
      content: "",
    });
  };
  return (
    <>
       <div className={style.tweetBox}>
      {/* <form onSubmit={handleSubmit}> */}
      <div className={style.tweetBox__input}>
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
      </div>

      <textarea
        placeholder="What's happening?"
        rows={2}
        style={{ marginLeft: "5rem", outline: "none", fontSize: "20px" }}
        className={style.tweetBox__imageInput}
        onChange={handleChang}
        value={tweetdata.content}
      />
      <div className={style.iconsDiv}>
        <div>
          <CiImageOn className={style.image} />
          <AiOutlineFileGif className={style.gifi} />
          <BiPoll className={style.poll} />
          <BsEmojiSmile className={style.smily} />
          <BiSpreadsheet className={style.timeTable} />
          <LocationOnIcon className={style.location} />
        </div>
        <button
          disabled={tweetdata.content.length === 0}
          type="submit"
          className={style.tweetBox__tweetButton}
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
    </div>

    </>




  )}



  
