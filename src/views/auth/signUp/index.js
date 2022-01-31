import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import { useDispatch } from "react-redux";
import IntlMessages from "core/components/IntlMessages";
import { Link } from "react-router-dom";
import CircularProgress from "core/components/CircularProgress";

const FormItem = Form.Item;

const SignUp = () => {
  const { isLoading, error, register, loginWithSocial } = useDispatch().auth;

  useEffect(() => {
    if (error) {
      message.error(error.toString()).then((r) => r);
    }
  }, [error]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    const { fullName, username, email, password, password2 } = values;
    if (password !== password2) {
      message.error("Mật khẩu không đúng vui lòng nhập lại");
      return;
    }
    register({ fullName, username, email, password });
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
                <IntlMessages id="app.userAuth.signUp" />
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
              <FormItem
                rules={[
                  { required: true, message: "Please input your Fullname!" },
                ]}
                name="fullName"
              >
                <Input placeholder="Fullname" />
              </FormItem>
              <FormItem
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
                name="username"
              >
                <Input placeholder="Username" />
              </FormItem>
              <FormItem
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </FormItem>
              <FormItem
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input type="password" placeholder="Password" />
              </FormItem>
              <FormItem
                name="password2"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input type="password" placeholder="Password" />
              </FormItem>
              <FormItem valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                <Link
                  className="gx-login-form-forgot"
                  href="/custom-views/user-auth/forgot-password"
                >
                  <a>Forgot password</a>
                </Link>
              </FormItem>
              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp" />
                </Button>
                <span>
                  <IntlMessages id="app.userAuth.or" />{" "}
                </span>
                <Link href="/signin">
                  <a>
                    <IntlMessages id="app.userAuth.signIn" />
                  </a>
                </Link>
              </FormItem>
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

export default SignUp;
