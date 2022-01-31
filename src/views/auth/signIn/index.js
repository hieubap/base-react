import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import { Button, Checkbox, Form, Input, message } from "antd";
import CircularProgress from "core/components/CircularProgress";
import IntlMessages from "core/components/IntlMessages";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { isLoading, error, login, loginWithSocial } = useDispatch().auth;

  useEffect(() => {
    if (error) {
      message.error(error.toString()).then((r) => r);
    }
  }, [error]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    const { username, password } = values;
    login({ username, password });
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src="https://via.placeholder.com/272x395" alt="Neature" />
            </div>
            <div className="gx-app-logo-wid">
              <h1>
                <IntlMessages id="app.userAuth.signIn" />
              </h1>
              <p>
                <IntlMessages id="app.userAuth.bySigning" />
              </p>
              <p>
                <IntlMessages id="app.userAuth.getAccount" />
              </p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={"/images/logo.png"} />
            </div>
          </div>
          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0"
            >
              <Form.Item
                rules={[{ required: true, message: "Vui lòng nhập username!" }]}
                name="username"
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Vui lòng nhập Password!" }]}
                name="password"
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Checkbox>
                  <IntlMessages id="appModule.iAccept" />
                </Checkbox>
                <span className="gx-signup-form-forgot gx-link">
                  <IntlMessages id="appModule.termAndCondition" />
                </span>
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signIn" />
                </Button>
                <span>
                  <IntlMessages id="app.userAuth.or" />
                </span>{" "}
                <Link to="/auth/signup">
                  <a>
                    {" "}
                    <IntlMessages id="app.userAuth.signUp" />
                  </a>
                </Link>
              </Form.Item>
              <div className="gx-flex-row gx-justify-content-between">
                <span>or connect with</span>
                <ul className="gx-social-link">
                  <li>
                    <GoogleOutlined onClick={() => loginWithSocial()} />
                  </li>
                  <li>
                    <FacebookOutlined
                      onClick={() => loginWithSocial("facebook")}
                    />
                  </li>
                  <li>
                    <GithubOutlined onClick={() => loginWithSocial("github")} />
                  </li>
                  <li>
                    <TwitterOutlined
                      onClick={() => loginWithSocial("twitter")}
                    />
                  </li>
                </ul>
              </div>
              <span className="gx-text-light gx-fs-sm">
                {" "}
                demo user email: 'demo@example.com' and password: 'demo#123'
              </span>
            </Form>
          </div>

          {isLoading && (
            <div className="gx-loader-view">
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
