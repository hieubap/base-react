import { Avatar, Button, Card, Divider, Input, Upload, message } from "antd";
import fileProvider from "data-access/file-provider";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clientUtils from "utils/client-utils";

const { TextArea } = Input;

const WriteBox = (props) => {
  const [state, _setState] = useState({ content: "", imgPath: "" });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const { _createOrEdit, _getList: getListPost } = useDispatch().post;
  const { _dataEdit } = useSelector((state) => state.post);

  const handleUpload = (file) => {
    // setFileList(fileList);
    fileProvider.upload(file).then((res) => {
      if (res && res.code === 0) {
        setState({ imgPath: res.data?.filePath });
      }
    });
  };

  const handleAddPost = () => {
    const { content, imgPath } = state;
    _createOrEdit({ id: _dataEdit?.id, content, imgPath }).then((res) => {
      if (res && res.code === 0) {
        message.success(
          _dataEdit?.id ? "Sửa bài đăng thành công" : "Đăng bài viết thành công"
        );
        setState({ content: "", imgPath: "" });
        getListPost({});
      } else {
        message.error(res.message);
      }
    });
  };

  const onChange = (e) => {
    setState({ content: e.target.value });
  };

  return (
    <Card className="gx-card">
      <div className="gx-media gx-mb-2">
        <Avatar className="gx-size-50 gx-mr-3" src={props.user.image} />
        <div className="gx-media-body">
          <TextArea
            className="gx-border-0"
            id="exampleTextarea"
            value={state.content}
            multiline="true"
            rows={4}
            onChange={(event) => onChange(event)}
            placeholder="Whats in your mind?"
            margin="none"
          />
        </div>
      </div>

      {state.imgPath && (
        <div className="img-upload">
          <img src={`${clientUtils.serverApi}/files/${state.imgPath}`} />
        </div>
      )}

      {/* <div style={{ display: "none" }} className="gx-clearfix">
        <Upload
          ref={refUpload}
          action={handleUpload}
          listType="picture-card"
          fileList={fileList}

          // onPreview={handlePreview}
          // onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>

        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div> */}
      <Divider />

      <div className="ant-row-flex">
        <Upload
          action={handleUpload}
          // listType="picture-card"
          accept=".png,.jpg,.jpeg,.jfif"
          customRequest={() => {}}
          fileList={[]}
        >
          <div className="gx-pointer">
            <i className="icon icon-camera gx-mr-2 gx-fs-xl gx-d-inline-flex gx-vertical-align-middle" />
            <span className="gx-fs-sm"> Add Photos/Album </span>
          </div>
        </Upload>

        <Button
          type="primary"
          size="small"
          className="gx-ml-auto gx-mb-0"
          disabled={state.content === "" ? "disabled" : ""}
          onClick={handleAddPost}
        >
          SEND
        </Button>
      </div>
    </Card>
  );
};

export default WriteBox;
