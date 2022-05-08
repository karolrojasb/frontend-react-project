import React from "react";
import { Layout } from "antd";
import MenuTop from "../components/adminComponents/MenuTop"
import "./LayoutAdmin.scss"

export default function LayoutAdmin(props){
  const { children } = props

  const { Header, Content, Footer } = Layout
  return (
    <Layout>
      <Layout className="layout-admin">
        <Header classNAme="layout-admin_header">
          <MenuTop></MenuTop>
        </Header>
        <Content className="layout-admin_content">{children}</Content>
        <Footer className="layout-admin_footer">React Project 2022</Footer>
      </Layout>
    </Layout>
  )
}
