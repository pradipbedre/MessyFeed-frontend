import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Radio, Form, Input } from "antd";
import { getCookie } from "../../utils/Cookie";

const ValidateOtp = ({ email }) => {
  const [validateOtpModal, setValidateOtpModal] = useState(false);
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
        console.log(response?.data?.message);
        form.resetFields();
        setValidateOtpModal(false);
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showValidateOtpModal = () => {
    setValidateOtpModal(true);
  };

  const handleCancel = () => {
    setValidateOtpModal(false);
  };

  return (
    <>
      <Button onClick={showValidateOtpModal}>Validate OTP</Button>
      <Modal
        destroyOnClose={true}
        title="Validate OTP"
        okText="Validate OTP"
        open={validateOtpModal}
        onCancel={handleCancel}
        centered={true}
        footer={null}
      >
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
            email: email,
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
      </Modal>
    </>
  );
};
export default ValidateOtp;
