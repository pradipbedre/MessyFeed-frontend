import React from "react";
import axios from "axios";
import { Steps, DatePicker, Button, Form, Input } from "antd";
import { useState, useEffect } from "react";
import { PlanDetails } from "./PlanDetails.jsx";
import { PersonalDetails } from "./PersonalDetails.jsx";
import { ConfirmData } from "./ConfirmData.jsx";
import { getCookie } from "../../utils/Cookie.js";

const AddCustomer = () => {
  const [current, setCurrent] = useState(0);
  const [selectedData, setSelectedData] = useState();
  const [formValues, setFormValues] = useState({});
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const dataBody = {
        name: formValues?.name,
        email: formValues?.email,
        gender: formValues?.gender,
        phoneNo: formValues?.phoneNo,
        address: formValues?.address,
        paymentMode: formValues?.paymentMode,
        paidAmount: formValues?.planCost,
        mealsLeft: formValues?.mealsLeft,
        planStartDate: formValues?.startDate,
        planEndDate: new Date(
          formValues?.startDate + formValues?.mealsLeft * 24 * 60 * 60 * 1000
        ),
        // new Date().setDate(
        //   formValues?.startDate.getDate() + mealsLeft
        // ),
        status: "Active",
        planId: formValues?.mealPlan,
      };
      console.log(dataBody);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}` + "user/mess/customer",
        dataBody,
        {
          headers: {
            Authorization: `${getCookie("jwt_token")}`,
          },
        }
      );
      if (response?.data?.statusCode === 200) {
        console.log(response?.data?.statusCode);
      } else {
        console.log(response?.data?.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleNext = () => {
    current === 0 &&
      form1
        .validateFields()
        .then((values) => {
          setFormValues({ ...formValues, ...values });
          setCurrent(current + 1);
        })
        .catch((errorInfo) => {
          console.log(errorInfo);
        });
    current === 1 &&
      form2
        .validateFields()
        .then((values) => {
          setFormValues({ ...formValues, ...values });
          setCurrent(current + 1);
        })
        .catch((errorInfo) => {
          console.log(errorInfo);
        });
  };

  const handlePrev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Personal Details",
      content: <PersonalDetails form={form1} />,
    },
    {
      title: "Plan Details",
      content: <PlanDetails form={form2} setSelectedData={setSelectedData} />,
    },
    {
      title: "Confirm Details",
      content: (
        <ConfirmData formData={formValues} selectedData={selectedData} />
      ),
    },
  ];

  return (
    <>
      <div>
        <Steps size="small" current={current}>
          {steps.map((item) => (
            <Steps.Item key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current > 0 && current < steps.length && (
            <Button type="primary" onClick={handlePrev}>
              Prev
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handleSubmit}>
              Confirm
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default AddCustomer;
