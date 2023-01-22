import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Grid, Tag, Spin } from "antd";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
import axios from "axios";

const { useBreakpoint } = Grid;

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
        <Link to="/user/changePassword" title="Change Password">
          Change Password
        </Link>
      </>,
      "17"
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
  const screens = useBreakpoint();
  const [isXs, setIsXS] = useState();
  const [messData, setMessData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsXS(
      Object.entries(screens)
        .filter((screen) => !!screen[1])
        ?.find((s) => s[0] === "xs")
    );
  }, [screens]);

  useEffect(() => {
    const getMessData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/",
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        if (response?.data?.statusCode === 200) {
          setMessData(response?.data?.message);
          console.log("Mess Data = ", response?.data?.message);
        } else {
          console.log(response?.data?.message);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMessData();
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (isLoading) return <Spin />;
  if (
    !isLoading &&
    !messData &&
    window?.location?.pathname != "/user/mess/add"
  ) {
    navigate("/user/mess/add");
    console.log(window.location, window);
  }
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      {!isXs ? (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            transition: "all 500ms linear 0s",
          }}
        >
          <div
            style={{
              padding: "10px",
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
            style={{ transition: "all 500ms linear 0s" }}
          />
        </Sider>
      ) : (
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <h1 style={{ color: "white" }}>MessyFeed</h1>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            // items={new Array(3).fill(null).map((_, index) => ({
            //   key: String(index + 1),
            //   label: `nav ${index + 1}`,
            // }))}
            items={items}
          />
        </Header>
      )}
      <Layout className="site-layout">
        <Content
          style={{
            margin: collapsed ? "0 100px" : "0 0 0 200px",
            transition: "all 500ms linear 0s",
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
