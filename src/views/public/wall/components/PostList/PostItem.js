import { Avatar, Card } from "antd";
import DisplayDate from "core/components/DisplayDate";
import React, { useEffect, useState } from "react";
import clientUtils from "utils/client-utils";
import CommentBox from "./CommentBox";
import MediaList from "./MediaList";

const PostItem = (props) => {
  const [message, setMessage] = useState("");

  const [post, setPost] = useState({
    id: 0,
    text: "",
    user: {},
    date: "",
    mediaList: [],
    viewCount: 0,
    likeCount: 0,
    isLike: false,
    commentList: [],
  });

  useEffect(() => {
    setPost(props.postData);
  }, [props.postData]);

  const _handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const commentData = {
        user: props.user,
        comment: message,
        date: new Date().toString(),
        likeCount: 0,
        isLike: true,
        commentList: [],
      };

      let commentArray = post.commentList;
      commentArray.push(commentData);
      setPost({ ...post, commentList: commentArray });
      setMessage("");
    }
  };

  const updateCommentValue = (evt) => {
    setMessage(evt.target.value);
  };

  const handleLikeToggle = () => {
    setPost({
      ...post,
      isLike: !post.isLike,
      likeCount: post.isLike === true ? post.likeCount - 1 : post.likeCount + 1,
    });
  };

  const {
    author,
    avatar,
    imgPath,
    numberComment,
    numberLike,
    content,
    user,
    date,
    mediaList,
    viewCount,
    likeCount,
    isLike,
    commentList,
    text,
  } = post;
  return (
    <Card className="gx-card">
      <div className="gx-wall-content">
        <div className="gx-media gx-wall-user-info gx-flex-nowrap gx-align-items-center">
          <Avatar className="gx-mr-3 gx-mb-2 gx-size-50" src={avatar} />
          <div className="gx-media-body">
            <h5 className="gx-wall-user-title">{author}</h5>
            <DisplayDate date={date} />
          </div>
        </div>
        <p>{content}</p>
        <div className="gx-wall-medialist">
          <img src={`${clientUtils.serverApi}/files/${imgPath}`} />
          {/* {mediaList.length > 0 ? <MediaList mediaList={mediaList} /> : null} */}
        </div>
        <div className="gx-flex-row gx-mt-2 gx-mb-2 gx-mb-xl-3">
          <p className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
            <i className="icon icon-view-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle" />
            <span className="gx-d-inline-flex gx-vertical-align-middle">
              {numberLike}
              {/* {viewCount > 0 ? viewCount + " Views" : "Views"} */}
            </span>
          </p>
          <p
            className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey"
            onClick={handleLikeToggle}
          >
            {isLike === true ? (
              <i
                className="icon icon-like gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"
                style={{ color: "blue" }}
              />
            ) : (
              <i className="icon icon-like-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle" />
            )}
            <span className="gx-d-inline-flex gx-vertical-align-middle">
              {numberComment > 0 ? numberComment + " Likes" : "Likes"}
            </span>
          </p>
          <p className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
            <i className="icon icon-chat-bubble gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle" />
            <span className="gx-d-inline-flex gx-vertical-align-middle">
              {numberComment}
              {/* {commentList.length > 0
                ? commentList.length + " Comments"
                : "Comments"} */}
            </span>
          </p>
        </div>

        <div className="gx-wall-comment-box">
          {/* {commentList.map((commentData, index) => (
            <CommentBox key={index} index={index} commentData={commentData} />
          ))} */}
        </div>
        <div className="gx-wall-comment-box">
          <div className="gx-media gx-mb-2">
            <Avatar className="gx-mr-3 gx-size-36" src={avatar} />
            <div className="gx-media-body">
              <textarea
                id="required"
                className="gx-border-0 ant-input"
                onChange={(event) => updateCommentValue(event)}
                onKeyPress={(event) => _handleKeyPress(event)}
                value={message}
                placeholder="Type Comments"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostItem;
