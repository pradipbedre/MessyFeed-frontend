import React, { useState } from "react";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { Button, TimePicker, Form, Input, Upload } from "antd";
import { getCookie } from "../../utils/Cookie";
import { useNavigate } from "react-router";
import AlertModal from "../../components/notifications/AlertModal";
// import { openNotificationWithIcon } from "../../components/notifications/toastAlert";

const UpdateMess = ({
  messData,
  setMessData,
  setUpdateModal,
  openNotificationWithIcon,
}) => {
  const [images, setImages] = useState([]);
  const [form] = Form.useForm();
  const [street, city, state] = messData.address.split("  ");

  const handleImageUpload = (fileData) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImages((prevList) => [...prevList, fileReader.result.toString()]);
    };
    fileReader.readAsDataURL(fileData);
    return false;
  };

  const onFinish = async (values) => {
    const addr = `${values.address.street}  ${values.address.city}  ${values.address.state}`;
    const pin = parseInt(`${values.address.pincode}`);
    const { address, ...otherValues } = values;
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}` + "user/mess/",
        { photos: images, address: addr, pincode: pin, ...otherValues },
        {
          headers: {
            Authorization: `${getCookie("jwt_token")}`,
          },
        }
      );
      if (response.status === 200) {
        setMessData(response?.data?.message);
        openNotificationWithIcon(
          "success",
          "Success!",
          "Congratulations!!! New Mess plan added successfuly"
        );
        form.resetFields();

        setUpdateModal(false);
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
      <Form
        form={form}
        autoComplete="off"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
        action=""
        initialValues={{
          remember: true,
          name: messData?.name,
          email: messData?.email,
          contactNo: messData?.contactNo,
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
          <Form.Item name={["address", "street"]} initialValue={street} noStyle>
            <Input
              placeholder="Street"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item name={["address", "city"]} initialValue={city} noStyle>
            <Input placeholder="City" style={{ width: "45%" }} />
          </Form.Item>
          <br />
          <br />
          <Form.Item name={["address", "state"]} initialValue={state} noStyle>
            <Input
              placeholder="State"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item
            name={["address", "pincode"]}
            initialValue={messData?.pincode}
            noStyle
          >
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
