import React from "react";
import axios from "axios";
import { Button, Radio, Form, Input } from "antd";
import { getCookie } from "../../utils/Cookie";

const ValidateOtp = () => {
  const [form] = Form.useForm();

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
        console.log(response?.data);
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
          prefix: "+91",
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
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Validate OTP
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ValidateOtp;
