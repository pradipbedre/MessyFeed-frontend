import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Select, Button, TimePicker, Form, Input, Upload } from "antd";

const AddMess = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      {/* <Input
        style={{
          width: 10,
        }}
        initialValues="+91"
      /> */}
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Form
        autocomplete="off"
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
          messname: "Super",
          prefix: "+91",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Mess Name"
          name="messname"
          rules={[{ required: true, message: "Please enter mess name" }]}
        >
          <Input placeholder="Enter the name of the mess" />
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
              message: "Please input your phone number!",
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
        <Form.Item label="Time slot">
          From &nbsp;
          <TimePicker />
          &nbsp; To &nbsp;
          <TimePicker />
        </Form.Item>
        <Form.Item label="Address">
          {/* <TextArea rows={4} /> */}
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
        <Form.Item label="Images" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 6,
                }}
              >
                Photos
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add Mess
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddMess;
