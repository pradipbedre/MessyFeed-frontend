import React from "react";
import { Link, Outlet } from "react-router-dom";

/* Ant design layout component */

import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Mess", "sub1", <DesktopOutlined />, [
    getItem(
      <>
        <Link to="view" title="ViewMess">
          View Mess
        </Link>
      </>,
      "3"
    ),
    getItem(
      <>
        <Link to="add" title="AddMess">
          Add New Mess
        </Link>
      </>,
      "4"
    ),
    // getItem(
    //   <>
    //     <Link to="update" title="UpdateMess">
    //       Update Mess
    //     </Link>
    //   </>,
    //   "5"
    // ),
    // getItem(
    //   <>
    //     <Link to="delete" title="DeleteMess">
    //       Delete Mess
    //     </Link>
    //   </>,
    //   "6"
    // ),
  ]),
  getItem("Customer", "sub2", <UserOutlined />, [
    getItem(
      <>
        <Link to="customer/view" title="ViewCustomer">
          View All Customers
        </Link>
      </>,
      "7"
    ),
    getItem(
      <>
        <Link to="customer/add" title="AddCustomer">
          Add New Customer
        </Link>
      </>,
      "8"
    ),
    getItem(
      <>
        <Link to="customer/update" title="UpdateCustomer">
          Update Customer
        </Link>
      </>,
      "9"
    ),
    getItem(
      <>
        <Link to="customer/delete" title="DeleteCustomer">
          Delete Customer
        </Link>
      </>,
      "10"
    ),
    getItem(
      <>
        <Link to="customer/sendOtp" title="sendOtp">
          Send Otp
        </Link>
      </>,
      "11"
    ),
    getItem(
      <>
        <Link to="customer/validateOtp" title="validateOtp">
          validate Otp
        </Link>
      </>,
      "12"
    ),
    getItem(
      <>
        <Link to="customer/PlanRenewal" title="planRenewal">
          Plan Renewal
        </Link>
      </>,
      "13"
    ),
  ]),
  ,
];

const MessPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "white" }}>MessyFeed</h1>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> */}
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
              //   border: "1px solid transparent",
              //   background: colorBgContainer,
            }}
          >
            <Breadcrumb.Item>Mess</Breadcrumb.Item>
            <Breadcrumb.Item>Customer</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default MessPage;
