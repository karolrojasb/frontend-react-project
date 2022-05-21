import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/adminComponents/MenuTop";
import MenuSider from "../components/adminComponents/MenuSider";
import { GithubOutlined  } from "@ant-design/icons";
import { Button } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin_header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin_content">{children}</Content>
        <Footer className="layout-admin_footer">
        <Button type="link" onClick={() => console.log("Github")}>
          <GithubOutlined style={{ fontSize: "17px" }} /> karolrojasb
        </Button>
      </Footer>
      </Layout>
    </Layout>
  );
}
