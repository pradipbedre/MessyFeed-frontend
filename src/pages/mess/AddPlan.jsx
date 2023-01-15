import { DatePicker, Form, Input, Select, Button } from "antd";
import { useState } from "react";
const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddPlan = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();

  const handleSelectChange = (value) => {
    console.log(value);
    setSelectedOption(value);
    setInputValue(selectedOption);
  };

  const handleInputChange = () => {
    setInputValue(selectedOption);
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
            Add Plan
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddPlan;
