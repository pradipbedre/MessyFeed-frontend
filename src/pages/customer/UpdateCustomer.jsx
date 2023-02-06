import React from "react";
import axios from "axios";
import { Select, Button, TimePicker, Form, Input, Upload } from "antd";
import { getCookie } from "../../utils/Cookie";

const UpdateCustomer = ({ customerData, setUpdateModal, setCustomerData }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    form
      .validateFields()
      .then(async (values) => {
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_URL}` +
            "user/mess/customer/" +
            `${customerData._id}`,
          values,
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        setCustomerData((prevState) => {
          const newCustomerData = { ...prevState };
          newCustomerData.name = response?.data?.message?.name;
          newCustomerData.email = response?.data?.message?.email;
          newCustomerData.phoneNo = response?.data?.message?.phoneNo;
          newCustomerData.gender = response?.data?.message?.gender;
          newCustomerData.address = response?.data?.message?.address;
          return newCustomerData;
        });
        form.resetFields();
        setUpdateModal(false);
      })
      .catch((errorInfo) => {
      //  console.log(errorInfo);
      });
  };
  const onFinishFailed = (errorInfo) => {
   // console.log("Failed:", errorInfo);
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
          name: customerData?.name,
          email: customerData?.email,
          phoneNo: customerData?.phoneNo,
          gender: customerData?.gender,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
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
          name="phoneNo"
          label="Contact No"
          rules={[
            {
              required: true,
              message: "Please input customer phone number",
            },
          ]}
        >
          <Input
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
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Address">
          <Form.Item
            name={["address", "street"]}
            initialValue={customerData?.address?.street}
            noStyle
          >
            <Input
              placeholder="Street"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item
            name={["address", "city"]}
            initialValue={customerData?.address?.city}
            noStyle
          >
            <Input placeholder="City" style={{ width: "45%" }} />
          </Form.Item>
          <br />
          <br />
          <Form.Item
            name={["address", "state"]}
            initialValue={customerData?.address?.state}
            noStyle
          >
            <Input
              placeholder="State"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item
            name={["address", "pincode"]}
            initialValue={customerData?.address?.pincode}
            noStyle
          >
            <Input placeholder="Pincode" style={{ width: "45%" }} />
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update Customer
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default UpdateCustomer;
