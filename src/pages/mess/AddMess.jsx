import React from "react";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import {
  Select,
  Button,
  TimePicker,
  Form,
  Input,
  Upload,
  notification,
} from "antd";
import { Typography } from "antd";

import { useState } from "react";
import { getCookie } from "../../utils/Cookie";
import Success from "../../components/notifications/Success";
import { useNavigate } from "react-router";
const { Title } = Typography;

const AddMess = () => {
  const [form] = Form.useForm();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, title, message) => {
    api[type]({
      message: title,
      description: message,
    });
  };

  // const handleChange = (info) => {
  //   console.log(info?.file?.response);
  //   if (info?.file?.status === "done") {
  //     form.setFieldsValue({
  //       image: info?.file?.response?.data,
  //     });
  //   }
  // };

  const handleImageUpload = (fileData) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImages((prevList) => [...prevList, fileReader.result.toString()]);
    };
    fileReader.readAsDataURL(fileData);
  };

  const onFinish = async (values) => {
    const addr = `${values.address.street}  ${values.address.city}  ${values.address.state}`;
    const pin = parseInt(`${values.address.pincode}`);
    const { address, ...otherValues } = values;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}` + "user/mess/",
        { photos: images, address: addr, pincode: pin, ...otherValues },
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
          "Congratulations!!! New Mess added successfuly. You will be redirected to mess page now!"
        );
        // ;
        form.resetFields();
        setTimeout(() => {
          navigate("/user/mess/view/");
        }, 3000);
      } else {
        console.log(response?.data?.message);
        openNotificationWithIcon(
          "error",
          "Error!",
          "Something went wrong! Please try again."
        );
      }
    } catch (err) {
      form.resetFields();
      console.log(err.message);
      openNotificationWithIcon(
        "error",
        "Error!",
        "Something went wrong! Please try again."
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Add New Mess
      </Title>
      <Form
        form={form}
        title="Add New Mess"
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
          <Upload
            action=""
            listType="picture-card"
            // onChange={handleChange}
            beforeUpload={handleImageUpload}
          >
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
            offset: 12,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ colorPrimary: "#cc6200" }}
          >
            Add
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  );
};
export default AddMess;
