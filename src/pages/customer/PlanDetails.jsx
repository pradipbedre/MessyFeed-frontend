import { DatePicker, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
const { Option } = Select;

export const PlanDetails = ({ form, setSelectedData }) => {
  const [plansData, setPlansData] = useState();

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
        setPlansData(response?.data?.message);
      } catch (err) {
        console.log(err.message);
      }
    };
    getPlansData();
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSelectChange = (value) => {
    const selectedPlan = plansData.find((item) => item._id === value);
    form.setFieldsValue({
      planCost: selectedPlan?.planCost,
      mealsLeft: selectedPlan?.mealCount,
    });
    setSelectedData(selectedPlan?.name);
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
          <Select placeholder="select Meal Plan" onChange={handleSelectChange}>
            {plansData?.map((plan) => {
              return plan ? (
                <Option value={plan?._id}>{plan?.name}</Option>
              ) : (
                ""
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="planCost" label="Plan Cost">
          <Input />
        </Form.Item>
        <Form.Item name="mealsLeft" label="Meal Count">
          <Input />
        </Form.Item>
        <Form.Item label="Payment Mode" name="paymentMode" initialValue="Cash">
          <Input />
        </Form.Item>
        <Form.Item label="Start Date" name="startDate">
          <DatePicker
            disabledDate={(current) => current.isBefore(new Date())}
          />
        </Form.Item>
      </Form>
    </>
  );
};
