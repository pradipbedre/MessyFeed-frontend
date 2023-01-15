import React from "react";
import { Steps, Select, Button, Form, Input } from "antd";
import { useState } from "react";
import { PlanDetails } from "./PlanDetails.jsx";
import { PersonalDetails } from "./PersonalDetails.jsx";

const AddCustomer = () => {
  const [current, setCurrent] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();

  const handleNext = () => {
    current === 0 &&
      form1
        .validateFields()
        .then((values) => {
          console.log("Values: ", values);
          setFormValues({ ...formValues, ...values });
          console.log(formValues);
          setCurrent(current + 1);
        })
        .catch((errorInfo) => {
          console.log(errorInfo);
        });
    current === 1 &&
      form2
        .validateFields()
        .then((values) => {
          console.log("Values: ", values);
          setFormValues({ ...formValues, ...values });
          console.log(formValues);
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
      content: <PlanDetails form={form2} />,
    },
    {
      title: "Confirm Details",
      content: (
        <div>
          <p>Name : {formValues.mealPlan}</p>
          <p>Email : {formValues.email}</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <div>
        <Steps current={current}>
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
        </div>
      </div>
    </>
  );
};
export default AddCustomer;
