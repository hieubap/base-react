import { Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router";
import { routes_auth } from "views/routes";

const { Footer, Content } = Layout;

const AuthLayout = ({ navStyle, footerText, bodyClass = "dark-theme" }) => {
  const getContainerClass = () => "gx-container-wrap";

  return (
    <Layout className={`gx-app-layout ${bodyClass}`}>
      <Content className={`gx-layout-content ${getContainerClass(navStyle)}`}>
        <div className="gx-main-content-wrapper">
          <Switch>
            {routes_auth.map((item, index) => (
              <Route key={index} path={item.path} component={item.component} />
            ))}
          </Switch>
        </div>
        <Footer>
          <div className="gx-layout-footer-content">{footerText}</div>
        </Footer>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
