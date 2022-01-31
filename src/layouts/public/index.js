import { Layout } from "antd";
import HorizontalDark from "layouts/components/HorizontalDark";
import React from "react";
import { Route, Switch } from "react-router";
import { routes_public } from "views/routes";

const { Header, Footer, Sider, Content } = Layout;

const PublicLayout = ({ navStyle, footerText, bodyClass ="dark-theme" }) => {
  const getContainerClass = () => "gx-container-wrap";

  return (
    <Layout className={`gx-app-layout ${bodyClass}`}>
      {/* <Sidebar /> */}
      <Layout>
        {/* {getNavStyles(navStyle)} */}
        <HorizontalDark />
        <Content className={`gx-layout-content ${getContainerClass(navStyle)}`}>
          <div className="gx-main-content-wrapper">
            <Switch>
              {routes_public.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  component={item.component}
                />
              ))}
            </Switch>
          </div>
          <Footer>
            <div className="gx-layout-footer-content">{footerText}</div>
          </Footer>
        </Content>
      </Layout>
      {/* <Customizer /> */}
    </Layout>
  );
};

export default PublicLayout;
