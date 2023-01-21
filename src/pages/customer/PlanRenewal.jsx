import { DatePicker, Form, Input, Select, Button } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
const { Option } = Select;

const PlanRenewal = () => {
  const [plansData, setPlansData] = useState();
  const [form] = Form.useForm();

  const onFinish = () => {
    form
      .validateFields()
      .then(async (values) => {
        console.log(values);
        const reqBody = {
          email: values?.email,
          planId: values?.messPlan,
          mealsLeft: values?.mealsLeft,
          paymentMode: values?.paymentMode,
          paidAmount: values?.planCost,
          startDate: values?.startDate,
        };
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/customer/",
          reqBody,
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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

  const handleEmailChange = (value) => {
    const getCustomersData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}user/mess/customer/${value}`,
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        if (response?.data?.message?.status === "Active")
          alert("You already have an active plan");
      } catch (err) {
        console.log(err.message);
      }
    };
    getCustomersData();
  };

  const handleSelectChange = (value) => {
    const selectedPlan = plansData.find((item) => item._id === value);
    form.setFieldsValue({
      planCost: selectedPlan?.planCost,
      mealsLeft: selectedPlan?.mealCount,
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
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Pleasse enter valid email" },
          ]}
        >
          <Input.Search onSearch={handleEmailChange} />
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
