import { DatePicker, Form, Input, Select, Button } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PlanRenewal = () => {
  const [plansData, setPlansData] = useState();
  const [form] = Form.useForm();

  useEffect(() => {
    const getPlansData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/plans",

          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        setPlansData(response?.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getPlansData();
  }, []);

  const handleSelectChange = (value) => {
    const selectedPlan = plansData.find((item) => item._id === value);
    form.setFieldsValue({
      planCost: selectedPlan?.planCost,
      mealsLeft: selectedPlan?.mealCount,
    });
    setSelectedData(selectedPlan?.name);
  };

  const handleInputChange = () => {
    setInputValue(selectedOption);
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

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Renew Plan
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PlanRenewal;
