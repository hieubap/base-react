import { Col, Row } from "antd";
import CustomScrollbar from "core/components/CustomScrollbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Communities from "./components/Communities";
import Friends from "./components/Friends";
import Interests from "./components/Interests";
import Photos from "./components/Photos";
import PostList from "./components/PostList";
import Profile from "./components/Profile";
import RecentActivity from "./components/RecentActivity";
// import "../social-apps.css";
import {
  communitiesList,
  friendList,
  interestList,
  photoList,
  postList,
  recentActivity,
  user,
  userInfo,
} from "./data";

const Home = () => {
  const { _getList: getListPost } = useDispatch().post;
  // const { _getList: getListPost } = useDispatch().post;

  useEffect(() => {
    getListPost({});
  }, []);

  return (
    <div className="gx-main-content">
      <Row>
        <Col
          xl={6}
          lg={8}
          md={8}
          sm={10}
          xs={24}
          className="gx-d-none gx-d-sm-block"
        >
          <CustomScrollbar className="gx-wall-scroll">
            <Profile user={user} userInfo={userInfo} />
            <Interests interestList={interestList} />
            <Friends friendList={friendList} />

            <Photos photoList={photoList} title="Photos" />
            <span className="gx-text-primary gx-fs-md gx-pointer gx-d-block gx-mb-4">
              Go to gallery{" "}
              <i
                className={`icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle`}
              />
            </span>
          </CustomScrollbar>
        </Col>
        <Col xl={12} lg={8} md={16} sm={14} xs={24}>
          <CustomScrollbar className="gx-wall-scroll">
            <div className="gx-wall-postlist">
              <PostList postList={postList} user={user} />
            </div>
          </CustomScrollbar>
        </Col>
        <Col
          xl={6}
          lg={8}
          md={6}
          sm={24}
          xs={24}
          className="gx-d-none gx-d-lg-block"
        >
          <CustomScrollbar className="gx-wall-scroll">
            <Communities communitiesList={communitiesList} />
            <span className="gx-text-primary gx-fs-md gx-pointer gx-d-block gx-mb-4">
              See All Communities{" "}
              <i
                className={`icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle`}
              />
            </span>
            <RecentActivity recentList={recentActivity} shape="square" />
          </CustomScrollbar>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
