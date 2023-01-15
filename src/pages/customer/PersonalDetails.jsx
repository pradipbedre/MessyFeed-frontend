import { DatePicker, Form, Input, Select } from "antd";
import { useState } from "react";
const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="91">+91</Option>
    </Select>
  </Form.Item>
);

export const PersonalDetails = ({ form }) => {
  return (
    <>
      <Form
        form={form}
        labelCol={{
          xs: { span: 24 },
          sm: { span: 8 },
        }}
        wrapperCol={{
          xs: { span: 24 },
          sm: { span: 10 },
        }}
        layout="horizontal"
        action=""
        initialValues={{
          remember: true,
          messname: "Super",
          prefix: "+91",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="customerName"
          rules={[
            { required: true, message: "Please enter customer name here" },
          ]}
        >
          <Input placeholder="Enter the name of the Customer" />
        </Form.Item>
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
          name="phone"
          label="Contact No"
          rules={[
            {
              required: true,
              message: "Please input customer phone number",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Address">
          <Input placeholder="Building no/Area" />
          <br />
          <br />
          <Input placeholder="City" />
          <br />
          <br />
          <Input placeholder="State" /> <br />
          <br />
          <Input placeholder="Country" /> <br />
          <br />
          <Input placeholder="Pincode" />
        </Form.Item>
      </Form>
    </>
  );
};
