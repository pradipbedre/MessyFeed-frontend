import React from "react";
import { Button, Radio, Form, Input } from "antd";

const ValidateOtp = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleClick = (e) => {
    e.preventDefault();
    form
      .validateFields()
      .then((values) => {
        console.log("Values: ", values);
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
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
          <Button type="primary" htmlType="submit" onClick={handleClick}>
            Validate OTP
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ValidateOtp;
