import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Radio, Form, Input, notification } from "antd";
import { getCookie } from "../../utils/Cookie";
import { useLocation } from "react-router";
import Title from "antd/es/typography/Title";

const ValidateOtp = () => {
  const [form] = Form.useForm();
  const location = useLocation();
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
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/customer/validateOtp",
          values,
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );

        if (response?.data?.statusCode === 200) {
          openNotificationWithIcon(
            "success",
            "Success!",
            "OTP successfully validated!"
          );
          setTimeout(() => {
            navigate("/user/mess/customer/viewAll");
          }, 3000);
          form.resetFields();
        } else {
          openNotificationWithIcon(
            "error",
            "Error!",
            "Invalid OTP. Please check your mail!"
          );
        }

        console.log(response?.data?.message);
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

  useEffect(() => {}, []);

  return (
    <>
      <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
        Validate OTP
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
          email: location?.state?.email || "",
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
          label="OTP"
          name="otp"
          rules={[{ required: true, message: "Please enter OTP here" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Meal Time"
          name="mealType"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="lunch">Lunch</Radio>
            <Radio value="dinner">Dinner</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Validate OTP
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  );
};
export default ValidateOtp;
