import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Radio, Form, Input, notification } from "antd";
import { getCookie } from "../../utils/Cookie";
import { useNavigate } from "react-router-dom";
import Typography from "antd/es/typography/Typography";
const { Title } = Typography;

const SendOtp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, title, message) => {
    api[type]({
      message: title,
      description: message,
    });
  };

  const onFinish = () => {
    form
      .validateFields()
      .then(async (values) => {
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/customer/sendOtp",
          values,
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        openNotificationWithIcon("success", "Success!", "OTP sent via E-Mail");
        form.resetFields();
        setTimeout(() => {
          navigate("/user/mess/customer/validateOtp", {
            state: { email: values.email },
          });
        }, 2000);

        // console.log(response?.data?.message);
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
        openNotificationWithIcon(
          "error",
          "Error!",
          "Something went wrong! Please try again."
        );
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
        Send OTP
      </Title>
      <Form
        form={form}
        autoComplete="off"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        action=""
        initialValues={{
          remember: true,
          // email: email,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Pleasse enter valid email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Send OTP
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  );
};
export default SendOtp;
