import React from "react";
import { Select, Button, TimePicker, Form, Input, Upload } from "antd";

const UpdateCustomer = () => {
  const [form] = Form.useForm();

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
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Address">
          <Form.Item name="street" noStyle>
            <Input
              placeholder="Street"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item name="city" noStyle>
            <Input placeholder="City" style={{ width: "45%" }} />
          </Form.Item>
          <br />
          <br />
          <Form.Item name="state" noStyle>
            <Input
              placeholder="State"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item name="pincode" noStyle>
            <Input placeholder="Pincode" style={{ width: "45%" }} />
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleClick}>
            Update Customer
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default UpdateCustomer;
