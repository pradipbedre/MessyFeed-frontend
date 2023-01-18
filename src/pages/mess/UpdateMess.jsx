import React from "react";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { Button, TimePicker, Form, Input, Upload } from "antd";
import { getCookie } from "../../utils/Cookie";

const UpdateMess = ({ messData, setMessData, setUpdateModal }) => {
  const [form] = Form.useForm();
  const [street, city, state] = messData.address.split("  ");
  console.log(messData.address.split("  "), street);

  const onFinish = async (values) => {
    const addr = `${values.address.street}  ${values.address.city}  ${values.address.state}`;
    const pin = parseInt(`${values.address.pincode}`);
    const { address, ...otherValues } = values;
    try {
      const response = await axios.put(
        "http://localhost:8800/api/user/mess/",
        { address: addr, pincode: pin, ...otherValues },
        {
          headers: {
            Authorization: `${getCookie("jwt_token")}`,
          },
        }
      );
      console.log(response.status);
      if (response.status === 200) {
        setMessData(response.data);
        form.resetFields();
        setUpdateModal(false);
      }
    } catch (err) {
      form.resetFields();
      console.log(err.message);
    }
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
          name: messData?.name,
          email: messData?.email,
          contactNo: messData?.contactNo,
          "address.street": street,
          "address.city": city,
          "address.state": state,
          "address.pincode": messData?.pincode,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Mess Name"
          name="name"
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
          name="contactNo"
          label="Contact No"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        {/* <Form.Item label="Time slot">
          From &nbsp;
          <TimePicker />
          &nbsp; To &nbsp;
          <TimePicker />
        </Form.Item> */}
        <Form.Item label="Address">
          <Form.Item name={["address", "street"]} noStyle>
            <Input
              placeholder="Street"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item name={["address", "city"]} noStyle>
            <Input placeholder="City" style={{ width: "45%" }} />
          </Form.Item>
          <br />
          <br />
          <Form.Item name={["address", "state"]} noStyle>
            <Input
              placeholder="State"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item name={["address", "pincode"]} noStyle>
            <Input placeholder="Pincode" style={{ width: "45%" }} />
          </Form.Item>
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
            Update Mess
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default UpdateMess;
