import { Popconfirm, Form, Input, Select, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const handleConfirm = (e) => {
  {
    console.log(e);
  }
  <UpdateForm />;
};

const UpdateForm = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const handleUpdate = () => {
    setIsUpdateModalOpen(false);
  };

  const handleUpdateCancel = () => {
    setIsUpdateModalOpen(false);
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
        initialValues={{ remember: "true" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Plan Name"
          name="name"
          rules={[
            { required: true, message: "Please enter name of the meal plan" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Plan Cost"
          name="cost"
          rules={[{ required: true, message: "Please enter the plan cost" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Meal count"
          name="meals"
          rules={[
            { required: true, message: "Please enter no of meals per plan" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleClick}>
            Update Plan
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export const UpdatePlan = () => {
  return (
    <Popconfirm
      title="Update the Plan"
      description="Are you sure to update this plan?"
      okText="Yes"
      cancelText="No"
      onConfirm={handleConfirm}
    >
      <a href="#">
        <EditOutlined style={{ color: "blue" }} />
      </a>
    </Popconfirm>
  );
};

export default UpdatePlan;
