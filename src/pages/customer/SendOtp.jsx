import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Radio, Form, Input } from "antd";
import { getCookie } from "../../utils/Cookie";
import { useNavigate } from "react-router-dom";

const SendOtp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

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
        navigate("/user/mess/customer/validateOtp", {
          state: { email: values.email },
        });
        console.log(response?.data?.message);
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Send OTP
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default SendOtp;
