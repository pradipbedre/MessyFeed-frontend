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
  getItem("Mess", "sub2", <DesktopOutlined />, [
    getItem(
      <>
        <Link to="/user/mess/view" title="ViewMess">
          View Mess
        </Link>
      </>,
      "3"
    ),
    getItem(
      <>
        <Link to="/user/mess/add" title="AddMess">
          Add New Mess
        </Link>
      </>,
      "4"
    ),
    getItem(
      <>
        <Link to="/user/mess/plans" title="AddPlans">
          Add New Plan
        </Link>
      </>,
      "5"
    ),
  ]),
  getItem("Customer", "sub3", <UserOutlined />, [
    getItem(
      <>
        <Link to="/user/mess/customer/viewAll" title="ViewCustomer">
          View All Customers
        </Link>
      </>,
      "7"
    ),
    getItem(
      <>
        <Link to="/user/mess/customer/add" title="AddCustomer">
          Add New Customer
        </Link>
      </>,
      "8"
    ),
    getItem(
      <>
        <Link to="/user/mess/customer/update" title="UpdateCustomer">
          Update Customer
        </Link>
      </>,
      "9"
    ),
    getItem(
      <>
        <Link to="/user/mess/customer/delete" title="DeleteCustomer">
          Delete Customer
        </Link>
      </>,
      "10"
    ),
    getItem(
      <>
        <Link to="/user/mess/customer/sendOtp" title="sendOtp">
          Send Otp
        </Link>
      </>,
      "11"
    ),
    getItem(
      <>
        <Link to="/user/mess/customer/validateOtp" title="validateOtp">
          validate Otp
        </Link>
      </>,
      "12"
    ),
    getItem(
      <>
        <Link to="/user/mess/customer/PlanRenewal" title="planRenewal">
          Plan Renewal
        </Link>
      </>,
      "13"
    ),
  ]),
  getItem("User", "sub1", <DesktopOutlined />, [
    getItem(
      <>
        <Link to="/user/profile" title="User Profile">
          User Profile
        </Link>
      </>,
      "15"
    ),
    getItem(
      <>
        <Link to="/user/logout" title="Logout">
          Logout
        </Link>
      </>,
      "16"
    ),
  ]),
];

const UserPage = () => {
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
        style={{
          overflow: "auto",
          height: "100vh",
          //   position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
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
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
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
      </Layout>
    </Layout>
  );
};
export default UserPage;
