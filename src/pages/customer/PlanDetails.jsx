import { DatePicker, Form, Input, Select } from "antd";
import { useState } from "react";
const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const PlanDetails = ({ form }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelectChange = (value) => {
    console.log(value);
    setSelectedOption(value);
    setInputValue(selectedOption);
  };

  const handleInputChange = () => {
    setInputValue(selectedOption);
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        action=""
        initialValues={{ remember: "true" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="mealPlan"
          label="Meal Plan"
          rules={[
            {
              required: true,
              message: "Please select Meal Plan",
            },
          ]}
        >
          <Select
            placeholder="select Meal Plan"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <Option value="plan1">One Meal - 1000</Option>
            <Option value="plan2">Two Meal - 2000</Option>
          </Select>
        </Form.Item>
        <Form.Item name="planAmount" label="Plan Amount">
          <Input value={inputValue} onChange={handleInputChange} />
        </Form.Item>
        <Form.Item label="Payment Mode" name="paymentMode" initialValue="Cash">
          <Input />
        </Form.Item>
        <Form.Item label="Start Date" name="startDate">
          <DatePicker />
        </Form.Item>
      </Form>
    </>
  );
};
