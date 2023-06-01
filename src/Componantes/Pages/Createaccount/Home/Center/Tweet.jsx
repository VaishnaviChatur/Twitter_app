import React, { useState } from "react";
import style from "./Tweet.module.css";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { BsUpload } from "react-icons/bs";
import { CgPoll } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useDispatch, useSelector } from "react-redux";
import { TweetSlice } from "../../../../StoreRedux/reducer";

function Tweet(props) {
  const dispatch = useDispatch();

  const { tweet } = props;

  const handleLike = () => {
    dispatch(TweetSlice.actions.addLike(tweet));
  };

  const handleRetweet = () => {
    dispatch(TweetSlice.actions.addretweet(tweet));
  };

  const handleComment = () => {
    dispatch(TweetSlice.actions.addComment(tweet));
  };

  return (
    <div className={style.post}>
      <div className={style.post_avatar}>
        <Avatar
          sx={{ marginTop: "-0.2rem" }}
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
        />
      </div>
      <div className={style.post_body}>
        <div className={style.post_header}>
          <div className={style.post_headerText}>
            <h3>
              {tweet.tweetedBy.name}
              <span className={style.badgeDiv}>
                <VerifiedIcon
                  sx={{ color: "rgb(29, 155, 240)", fontSize: "14px"}} 
                />
           
              </span>
              {/* <span className={style.name}>@ {tweet.tweetedBy.name}</span> */}
            </h3>
          </div>
          <div className={style.post_headerDescription}>
          <h3>  @{tweet.tweetedBy.name.trim()}</h3>
            <p>{tweet.content.trim()}</p>
          </div>
        </div>
        <img className={style.image} src={tweet.image} alt="" />
        <div className={style.post__footer}>
          <span className={style.icons}>
            <FaRegComment onClick={handleComment} />
            <span className={style.commentCount}>{tweet.commentCount}</span>
          </span>
          <span className={style.icons}>
            <FaRetweet onClick={handleRetweet} />
            <span className={style.commentCount}>{tweet.reTweetsCount}</span>
          </span>
          <span className={style.icons}>
            {(tweet.isLiked && <FcLike onClick={handleLike} />) || (
              <GrFavorite onClick={handleLike} />
            )}
            <span className={style.commentCount}>{tweet.likeCount}</span>
          </span>
          <span className={style.icons}>
            <CgPoll />
            <span className={style.commentCount}>1</span>
          </span>
          <span className={style.icons}>
            <BsUpload />
            <span className={style.commentCount}>1</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;