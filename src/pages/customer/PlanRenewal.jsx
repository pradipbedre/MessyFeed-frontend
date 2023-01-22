import { DatePicker, Form, Input, Select, Button } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
import Title from "antd/es/typography/Title";
const { Option } = Select;

const PlanRenewal = ({
  email,
  setRenewalModal,
  setCustomerData,
  openNotificationWithIcon,
}) => {
  const [plansData, setPlansData] = useState();
  const [form] = Form.useForm();

  const onFinish = () => {
    form
      .validateFields()
      .then(async (values) => {
        const activeCustomer = await getCustomerData(values?.email);
        console.log(activeCustomer);
        if (!activeCustomer.active) {
          console.log(1, values);
          const reqBody = {
            email: values?.email,
            planId: values?.mealPlan,
            mealsLeft: values?.mealsLeft,
            paymentMode: values?.paymentMode,
            paidAmount: values?.planCost,
            startDate: values?.startDate,
            status: "Active",
          };
          console.log(reqBody, 2);
          const response = await axios.put(
            `${import.meta.env.VITE_BASE_URL}user/mess/customer/${
              activeCustomer?.id
            }`,
            reqBody,
            {
              headers: {
                Authorization: `${getCookie("jwt_token")}`,
              },
            }
          );
          console.log(3);
          console.log(response?.data);
          openNotificationWithIcon(
            "success",
            "Success!",
            "Plan Renewal successfull!"
          );
          form.resetFields();
          setRenewalModal(false);
        } else {
          console.log("You already have an active plan");
          openNotificationWithIcon(
            "error",
            "Error!",
            "You already have an active plan"
          );
          form.resetFields();
          setRenewalModal(false);
        }
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
        openNotificationWithIcon(
          "error",
          "Error!",
          "Something went wrong! Please try again."
        );
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

  const getCustomerData = async (value) => {
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
        return { active: true, id: response?.data?.message?._id };
      else return { active: false, id: response?.data?.message?._id };
    } catch (err) {
      console.log(err.message);
    }
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
      {/* <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Plan Renewal
      </Title> */}
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
        initialValues={{ remember: "true", email: email }}
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

        <Form.Item
          wrapperCol={{
            offset: 9,
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
